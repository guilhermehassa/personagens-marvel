import md5 from 'crypto-js/md5';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { useFavorite } from '../context/FavoriteContext';
import SearchForm from '../components/SearchForm';
import MagazineCard from '../components/MagazineCard';

const publicKey = 'b635b482fcbc1102595a929dde3a4566';
const privateKey = '49b2b45c433e63d310fd99b440f48c6fc5430154';

const fetchCharacter = async (id) => {
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data.results[0]; // Retorna o personagem
};

const fetchComics = async (characterId) => {
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com:443/v1/public/comics?characters=${characterId}&orderBy=onsaleDate&limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data.results; // Retorna a lista de quadrinhos
};

export default function Personagem() {
  const { id } = useParams();
  const { favoriteHeroes, setFavoriteHeroes } = useFavorite();
  
  const { data: character, isLoading: isLoadingCharacter, error: errorCharacter } = useQuery(
    ['character', id],
    () => fetchCharacter(id),
    {
      staleTime: 1000 * 60 * 60 * 12, // 12 Horas
    }
  );
  
  const { data: comics, isLoading: isLoadingComics, error: errorComics } = useQuery(
    ['comics', id],
    () => fetchComics(id),
    {
      enabled: !!character, // Só ativa a query se o personagem estiver carregado
    }
  );

  const handleFavoriteToggle = () => {
    if (favoriteHeroes.includes(id)) {
      setFavoriteHeroes(favoriteHeroes.filter(heroId => heroId !== id));
    } else {
      if (favoriteHeroes.length < 5) {
        setFavoriteHeroes([...favoriteHeroes, id]);
      } else {
        alert("Você só pode favoritar até 5 heróis.");
      }
    }
  };

  if (isLoadingCharacter || isLoadingComics) return <div>Carregando...</div>;
  if (errorCharacter || errorComics) return <div>Erro ao carregar dados</div>;

  return (
    <>
      <header className='headerPersonagem'>
        <div className='container'>
          <Link to='/'>
            <img src="../assets/img/logo.png" alt='Marvel Search Heros'/>
          </Link>
          <SearchForm />
        </div>
      </header>
      <section className='personagem'>
        <div className='container'>
          <div className='personagem_conteudo'>
            <div className='personagem_conteudo__titulo'>
              <h1>{character.name}</h1>
              <button onClick={handleFavoriteToggle}>
                <img
                  src={favoriteHeroes.includes(id) ? "/assets/img/icones/heart_checked.png" : "/assets/img/icones/heart_unchecked.png"}
                  alt={favoriteHeroes.includes(id) ? "Herói Favoritado" : "Favoritar Personagem"}
                />
              </button>
            </div>
            <div className='personagem_conteudo__descricao'>
              <p>
                {character.description || "Descrição não disponível."}
              </p>
            </div>
            <div className='personagem_conteudo__detalhes'>
              <div>
                <p>Quadrinhos</p>
                <img src='/assets/img/icones/livro.png' alt='Quadrinhos' />
                {character.comics.available || "Não disponível"}
              </div>
              <div>
                <p>Filmes</p>
                <img src='/assets/img/icones/video.png' alt='Filmes' />
                {character.movies || "Não disponível"}
              </div>
              <div className='rating'>
                <p>Rating:</p>
                <img src='/assets/img/icones/review_checked.png' alt='Review Rate' />
              </div>
              <div className='rating'>
                <p>Último Quadrinho: <span>{character.lastComicDate || "Não disponível"}</span></p>
              </div>
            </div>
          </div>
          <div className='personagem_imagem'>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/> 
          </div>
        </div>
      </section>
      <section className='footerPersonagem'>
        <div className='container'>
          <h2>Últimos Lançamentos</h2>
          <ul>
            {comics.map((comic) => (
              <MagazineCard
                key={comic.id}
                id={comic.id}
                name={comic.title}
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

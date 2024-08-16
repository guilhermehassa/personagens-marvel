import md5 from 'crypto-js/md5';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import MagazineCard from '../components/MagazineCard';

const fetchCharacter = async (id) => {
  const publicKey = 'b635b482fcbc1102595a929dde3a4566';
  const privateKey = '49b2b45c433e63d310fd99b440f48c6fc5430154';
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey).toString();
  console.log(id.queryKey[1])
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id.queryKey[1]}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.data.results;
};

export default function Personagem(){
  const {id} = useParams();
  const { data, isLoading, error } = useQuery(['character',id], fetchCharacter, {
    staleTime: 1000 * 60 * 60 * 2, // 2 Horas
  });

  if (isLoading) return <div>Pesquisando...</div>;
  if (error) return <div>Erro ao pesquisar personagem</div>;

  console.log(data);

  return(
    <>
      <header className='headerPersonagem'>
        <div className='container'>
          <Link to='/' >
            <img src="../assets/img/logo.png" alt='Marvel Search Heros'/>
          </Link>
          <SearchForm />
        </div>
      </header>
      <section className='personagem'>
        <div className='container'>
          <div className='personagem_conteudo'>
            <div className='personagem_conteudo__titulo'>
              <h1>
                {data.name}
              </h1>
              <button>
                <img src="/assets/img/icones/heart_unchecked.png" alt='Favoritar Personagem'/> 
              </button>
            </div>
            <div className='personagem_conteudo__descricao'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className='personagem_conteudo__detalhes'>
              <div>
                <p>Quadrinhos</p>
                <img src='/assets/img/icones/livro.png' alt='Quadrinhos' />
                300
              </div>
              <div>
                <p>Filmes</p>
                <img src='/assets/img/icones/video.png' alt='Filmes' />
                40
              </div>
              <div className='rating'>
                <p>Rating:</p>

                <img src='/assets/img/icones/review_checked.png' alt='Review Rate' />
                <img src='/assets/img/icones/review_checked.png' alt='Review Rate' />
                <img src='/assets/img/icones/review_checked.png' alt='Review Rate' />
                <img src='/assets/img/icones/review_checked.png' alt='Review Rate' />
                <img src='/assets/img/icones/review_checked.png' alt='Review Rate' />
              </div>
              <div className='rating'>
                <p>Último Quadrinho: <span>13 fev 2020</span></p>
              </div>
            </div>
          </div>
          <div className='personagem_imagem'>
          <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name}/> 
          </div>
        </div>
      </section>
      <section className='footerPersonagem'>
        <div className='container'>
          <h2>Últimos Lançamentos</h2>
          <ul>
            {/*data.comics.items.map((comic) => (
              <MagazineCard
                key={comic.id} 
                id={comic.id}
                name={comic.name}
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              />

            ))*/};

            <MagazineCard
              key={'1'} 
              id={'2'}
              name={'teste'}
              image={`http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`}
            />
            <MagazineCard
              key={'1'} 
              id={'2'}
              name={'teste'}
              image={`http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`}
            />
            <MagazineCard
              key={'1'} 
              id={'2'}
              name={'Lorem Ipsum Dolor Sit.'}
              image={`http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`}
            />
            <MagazineCard
              key={'1'} 
              id={'2'}
              name={'Lorem Ipsum Dolor Sit.'}
              image={`http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`}
            />
            <MagazineCard
              key={'1'} 
              id={'2'}
              name={'Lorem Ipsum Dolor Sit.'}
              image={`http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`}
            />
            <MagazineCard
              key={'1'} 
              id={'2'}
              name={'Lorem Ipsum Dolor Sit.'}
              image={`http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`}
            />
            <MagazineCard
              key={'1'} 
              id={'2'}
              name={'Lorem Ipsum Dolor Sit.'}
              image={`http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`}
            />
          </ul>
        </div>
      </section>
    </>
  )
}
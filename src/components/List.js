import md5 from 'crypto-js/md5';
import { useQuery } from 'react-query';
import Card from "./Card";

export default function List({ searchTerm, sortOrder, showFavoritesOnly, favoriteHeroes, setFavoriteHeroes }) {

  const publicKey = 'b635b482fcbc1102595a929dde3a4566';
  const privateKey = '49b2b45c433e63d310fd99b440f48c6fc5430154';
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey).toString();

  const fetchCharacters = async (name, sortOrder) => {
    let nameURI = '';
    if (name) {
      nameURI = `&nameStartsWith=${name}`;
    }

    const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=${sortOrder}&limit=10${nameURI}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  };

  const fetchFavoriteCharacters = async (favoriteIds) => {
    const promises = favoriteIds.map(async (id) => {
      const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.data.results[0]; // Retorna o personagem
    });

    return Promise.all(promises); // Espera por todas as requisições
  };

  const { data: characterData, isLoading, error } = useQuery(
    ['marvelCharacters', searchTerm, sortOrder],
    () => fetchCharacters(searchTerm, sortOrder),
    {
      staleTime: 1000 * 60 * 60 * 12, // 12 Horas
      enabled: !showFavoritesOnly, // Só ativa essa query se o filtro de favoritos estiver desativado
    }
  );

  const { data: favoriteData, isLoading: isLoadingFavorites, error: errorFavorites } = useQuery(
    ['favoriteCharacters', favoriteHeroes],
    () => fetchFavoriteCharacters(favoriteHeroes),
    {
      enabled: showFavoritesOnly && favoriteHeroes.length > 0, // Só ativa essa query se o filtro de favoritos estiver ativado
    }
  );

  if (isLoading || isLoadingFavorites) return <div>Pesquisando...</div>;
  if (error || errorFavorites) return <div>Erro ao pesquisar personagens</div>;

  const filteredData = showFavoritesOnly ? favoriteData : characterData;

  return (
    <section className="listSection">
      <div className="container">
        <ul className="list">
          {filteredData?.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              favoriteHeroes={favoriteHeroes}
              setFavoriteHeroes={setFavoriteHeroes}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

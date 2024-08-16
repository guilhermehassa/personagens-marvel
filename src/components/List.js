import md5 from 'crypto-js/md5';
import { useQuery } from 'react-query';

import Card from "./Card";
import { useEffect, useState } from 'react';

export default function List({searchTerm}) {
  const fetchCharacters = async (name) => {
    const publicKey = 'b635b482fcbc1102595a929dde3a4566';
    const privateKey = '49b2b45c433e63d310fd99b440f48c6fc5430154';
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey).toString();

    let nameURI = ''
    if(name){
      nameURI=`&nameStartsWith=${name}`
    }

    const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10${nameURI}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    console.log(nameURI)
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  };

  const { data, isLoading, error } = useQuery(
    ['marvelCharacters', searchTerm],
    () => fetchCharacters(searchTerm),
    {
      // staleTime: 1000 * 60 * 60 * 2, // 2 Horas
    }
  );

  if (isLoading) return <div>Pesquisando...</div>;
  if (error) return <div>Erro ao pesquisar personagens</div>;

  return (
    <section className="listSection">
      <div className="container">
        <ul className="list">
          {data.map((character) => (
            <Card
              key={character.id} 
              id={character.id}
              name={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

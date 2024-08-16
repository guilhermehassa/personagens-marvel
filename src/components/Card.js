import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, favoriteHeroes, setFavoriteHeroes }) {
  const [isFavorited, setIsFavorited] = useState(favoriteHeroes.includes(String(id)));

  useEffect(() => {
    setIsFavorited(favoriteHeroes.includes(String(id)));
  }, [favoriteHeroes, id]);

  const favoriteHero = () => {
    const stringId = String(id); // Converte o ID para string
    if (isFavorited) {
      // Remove o herói dos favoritos
      setFavoriteHeroes(favoriteHeroes.filter(heroId => heroId !== stringId));
    } else {
      // Adiciona o herói aos favoritos se houver espaço (limite de 5)
      if (favoriteHeroes.length < 5) {
        setFavoriteHeroes([...favoriteHeroes, stringId]);
      } else {
        alert("Você só pode favoritar até 5 heróis.");
      }
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card_content">
        <Link to={`/personagem/${id}`}>
          {name}
        </Link>
        <button title="Favoritar Herói" onClick={favoriteHero}>
          <img
            src={isFavorited ? "/assets/img/icones/heart_checked.png" : "/assets/img/icones/heart_unchecked.png"}
            alt={isFavorited ? "Herói Favoritado" : "Favorite este Herói"}
          />
        </button>
      </div>
    </div>
  );
}

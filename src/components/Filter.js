import { useState } from 'react';

export default function Filter({onSortOrderChange, onToggleFavorites }){
  const [isAscending, setIsAscending] = useState(true);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleSortToggle = () => {
    const newOrder = isAscending ? "-name" : "name";
    setIsAscending(!isAscending);
    onSortOrderChange(newOrder);
  };

  const handleFavoriteToggle = () => {
    const newFavoriteStatus = !showFavoritesOnly;
    setShowFavoritesOnly(newFavoriteStatus);
    onToggleFavorites(newFavoriteStatus); // Chama a função passada para alternar o filtro
  };
  return(
    <section className="filter">
      <div className="container">
        <p>
          Itens Encontrados
        </p>

        <div>
          <img src="/assets/img/icones/heroi.png" alt='Ícone Herói'/>
          <span>
            Ordenar por nome - A/Z
          </span>
          <button onClick={handleSortToggle}>
            {isAscending ?
              <img src="/assets/img/icones/toggle_unchecked.png" alt='Ordenar Heróis' /> :
              <img src="/assets/img/icones/toggle_checked.png" alt='Ordenar Heróis' />
            }
            
          </button>
        </div>

        <div id="favorite">
          <button onClick={handleFavoriteToggle}>
            <img
              src={
                showFavoritesOnly
                  ? "/assets/img/icones/heart_checked.png"
                  : "/assets/img/icones/heart_unchecked.png"
              }
              alt='Exibir Herois Favoritos'
            />
          </button>
          <span>
            Somente Favoritos
          </span>
        </div>
      </div>
    </section>
  )
}
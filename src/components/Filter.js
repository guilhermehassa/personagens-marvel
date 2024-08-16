import { useState } from 'react';

export default function Filter({onSortOrderChange}){
  const [isAscending, setIsAscending] = useState(true);

  const handleSortToggle = () => {
    const newOrder = isAscending ? "-name" : "name";
    setIsAscending(!isAscending);
    onSortOrderChange(newOrder);
  };
  return(
    <section className="filter">
      <div className="container">
        <p>
          Itens Encontrados
        </p>

        <div>
          <img src="/assets/img/icones/heroi.png"/>
          <span>
            Ordenar por nome - A/Z
          </span>
          <button onClick={handleSortToggle}>
            {isAscending ?
              <img src="/assets/img/icones/toggle_unchecked.png" /> :
              <img src="/assets/img/icones/toggle_checked.png" />
            }
            
          </button>
        </div>

        <div id="favorite">
          <button>
            <img src="/assets/img/icones/heart_unchecked.png" />
          </button>
          <span>
            Somente Favoritos
          </span>
        </div>
      </div>
    </section>
  )
}
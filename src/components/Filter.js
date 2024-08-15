export default function Filter(){
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
          <button>
            <img src="/assets/img/icones/toggle_unchecked.png" />
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
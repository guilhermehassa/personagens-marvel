export default function Filter(){
  return(
    <section className="filter">
      <div className="container">
        <p>
          Itens Encontrados
        </p>

        <div>
          <img src="/assets/img/icones/heroi/noun_Superhero_2227044.png"/>
          <span>
            Ordenar por nome - A/Z
          </span>
          <button>
            <img src="/assets/img/toggle/group 6.png" />
          </button>
        </div>

        <div id="favorite">
          <button>
            <img src="/assets/img/icones/heart/Path Copy 2.png" />
          </button>
          <span>
            Somente Favoritos
          </span>
        </div>
      </div>
    </section>
  )
}
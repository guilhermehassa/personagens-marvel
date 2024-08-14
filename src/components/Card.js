export default function Card(){
  return(
    <div className="card">
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" />

      <div className="card_content">
        <p>
          3-D Man
        </p>
        <button title="Favoritar Herói">
          <img src="/assets/img/icones/heart/Path.png" />
        </button>
      </div>
    </div>
  )
}
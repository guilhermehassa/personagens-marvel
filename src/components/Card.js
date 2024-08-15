export default function Card({id,  name, image }){
  return(
    <a href={`/personagem/${id}`} className="card" id={id}>
      <img src={image} alt={name} />

      <div className="card_content">
        <p>
          {name}
        </p>
        <button title="Favoritar Herói">
          <img src="/assets/img/icones/heart/Path.png" alt="Favorite este Herói" />
        </button>
      </div>
    </a>
  )
}
import { Link } from "react-router-dom";
export default function Card({id,  name, image }){
  return(
    <Link to={`/personagem/${id}`} className="card" id={id}>
      <img src={image} alt={name} />

      <div className="card_content">
        <p>
          {name}
        </p>
        <button title="Favoritar Herói">
          <img src="/assets/img/icones/heart_unchecked.png" alt="Favorite este Herói" />
        </button>
      </div>
    </Link>
  )
}
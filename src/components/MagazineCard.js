export default function MagazineCard({id,  name, image }){
  return(
    <li id={id}>
      <img src={image} alt={name} />

      <div className="card_content">
        <p>
          {name}
        </p>
      </div>
    </li>
  )
}
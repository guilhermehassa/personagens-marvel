import SearchForm from "./SearchForm";

export default function Hero({ onSearch }){
  return(
    <section className="hero">
      <div className="container">
        <h1>
          EXPLORE O UNIVERSO
        </h1>
        <p>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
        </p>
        <SearchForm  onSearch={onSearch} />
      </div>
    </section>
  )
}
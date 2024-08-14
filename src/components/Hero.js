export default function Hero(){
  return(
    <section className="hero">
      <div className="container">
        <h1>
          EXPLORE O UNIVERSO
        </h1>
        <p>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
        </p>
        <form >
          <button type="submit" className="header__input-submit">
            <img src="/assets/img/busca/lupa/Shape.png" aria-hidden="true" />
          </button>
          <input type="text" placeholder="Procure por heróis" className="" />

        </form>
      </div>
    </section>
  )
}
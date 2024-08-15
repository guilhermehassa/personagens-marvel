export default function SearchForm(){

  return(
    <form className="searchForm" >
      <button type="submit" className="">
        <img src="/assets/img/icones/pesquisa.png" aria-hidden="true" />
      </button>
      <input type="text" placeholder="Procure por heróis" className="" />
      
    </form>
  )
}
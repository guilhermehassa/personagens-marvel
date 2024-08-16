import { useState } from 'react';

export default function SearchForm({onSearch}){
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Passa o termo para o componente pai
  };
  return(
    <form onSubmit={handleSubmit} className="searchForm" >
      <button type="submit">
        <img src="/assets/img/icones/pesquisa.png" aria-hidden="true" />
      </button>
      <input type="text" placeholder="Procure por heróis" className="" value={searchTerm} onChange={handleInputChange} />
      
    </form>
  )
}
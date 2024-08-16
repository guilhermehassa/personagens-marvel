import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function HeaderPersonagem(){
  <header className='headerPersonagem'>
    <div className='container'>
      <Link to='/'>
        <img src="../assets/img/logo.png" alt='Marvel Search Heros'/>
      </Link>
      <SearchForm />
    </div>
  </header>
}
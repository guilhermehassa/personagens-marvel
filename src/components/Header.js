import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header className="header">
      <Link to="/">
        <img src="/assets/img/logo.png" alt="Marvel Search Heros" />
      </Link>
    </header>
  )
}
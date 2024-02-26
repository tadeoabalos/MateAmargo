import mataglogo from "../../assets/matag_logo.png"
import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import { CartWidget, Dropdown } from "../index"
import wclogo from "../Dropdown/logo.json"
import league_logo from "../Dropdown/logo_leagues.json"

export const NavBar = () => {  
  const [filter, setFilter] = useState(undefined);
  const [isOpen, setisOpen] = useState(false);
 
  return (
    <>
      <nav className="navbar">
        <Link to="/"><img src={mataglogo} alt="matag-logo" className="icon"></img>  </Link>      
        <ul className="listaNavBar">
          <li>
            <Link to="/category/national" onClick={() => { setisOpen(false) } }>Selécciones</Link>
          </li>
          <li>
            <Link to="/category/club" onClick={() => { setisOpen(false) } }>Clubes</Link>
          </li>          
          <li>
            <Link onClick={ 
              () => {
                setisOpen((prev) => !prev)
                setFilter(wclogo)}
            }>Mundiales</Link>
          </li>
          <li>
            <Link to="/category/club/AR" onClick={() => { setisOpen(false) } }>Clubes Argentinos</Link>
          </li>
          <li>
            <Link onClick={ 
                () => {
                  setisOpen((prev) => !prev)
                  setFilter(league_logo)}
              }>Clubes Europeos</Link>
          </li>
        </ul>       
        <CartWidget className="cart"/>
      </nav>
      {isOpen && (
        <Dropdown filter={filter} />
      )}      
    </>    
  )
}

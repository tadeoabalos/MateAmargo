import mataglogo from "../../assets/matag_logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CartWidget, Dropdown } from "../index"
import wclogo from "../Dropdown/logo.json"
import league_logo from "../Dropdown/logo_leagues.json"
import { MateWidget } from "../../assets/MateWidget"

export const NavBar = () => {  
  const [filter, setFilter] = useState(undefined);
  const [isOpen, setisOpen] = useState(false);
 
  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={() => { setisOpen(false) }} ><img src={mataglogo} alt="matag-logo" className="icon"></img>  </Link>      
        <ul className="listaNavBar">
          <li>
            <Link to="/category/national" onClick={() => { setisOpen(false) } }>Selecciones</Link>
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
        {/*
        <div>
          <input type="text" placeholder="Buscar..." className="bg-white h-8 w-80 rounded p-2 text-black"></input>   
          <input type="submit" value={<FaSearch />} className="bg-none text-white ml-5 h-8 w-8 hover:cursor-pointer"/>                      
        </div>       
        */}
        <div className="flex items-center w-40 justify-center">
          <MateWidget />
          <CartWidget className="cart"/>          
        </div>            
      </nav>
      {isOpen && (
        <Dropdown filter={filter} />
      )}      
    </>    
  )
}

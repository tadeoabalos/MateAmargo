import { CartWidget } from "./car-widget/CartWidget"
import mataglogo from "../assets/matag_logo.png"

export const NavBar = () => {
  return (
    <nav className="navbar">
        <img src={mataglogo} alt="matag-logo" className="icon"></img>        
        <ul className="listaNavBar">
          <li><a href="#">Camisetas</a></li>
          <li><a href="#">Accesorios</a></li>
          <li><a href="#">Merchandising</a></li>          
        </ul>       
        <CartWidget className="cart"/>
    </nav>
  )
}

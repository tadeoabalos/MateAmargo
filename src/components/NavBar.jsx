import { CartWidget } from "./car-widget/CartWidget"
import mataglogo from "../assets/matag_logo.png"
import "./NavBar.css"
export const NavBar = () => {
  return (
    <nav className="navbar">
        <img src={mataglogo} alt="matag-logo" className="icon"></img>
        <h4>Mate Amargo Camisetas</h4>
        <div>
            <button className="category-btn">Indumentaria</button>
            <button className="category-btn">Accesorios</button>
            <button className="category-btn">Merch</button>            
        </div>        
        <CartWidget className="cart"/>
    </nav>
  )
}

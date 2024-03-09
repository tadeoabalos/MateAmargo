import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCart } from "../../ItemCart/ItemCart"
import { Link } from "react-router-dom"
export const Cart = () => {

  const { cart, removeItem, clearCart, plusItem, subtractItem } = useContext(CartContext)
   console.log(cart) 
  return (
    <div className="flex justify-center">
      <div className="w-3/5 m-2 p-2 rounded bg-white">        
        { cart.length !== 0 ? cart.map((item)=> (
        <div key={item.id} className="flex place-content-center">          
          <ItemCart name={item.name} price={item.subTotal} stock={item.stock} quantity={item.quantity} itemId={item.id} removeItem={removeItem} img={item.img} 
          plusItem={plusItem} subtractItem={subtractItem} sub></ItemCart>
        </div>
        )) : 
        <div className="h-full grid place-content-center items-center">
            <span className="text-green-700 text-3xl">Tu carrito esta vacío, tu camiseta soñada sigue esperando... </span>
            <Link to="/" className="w-44"><button className="bg-green-700 text-white place-content-center w-44 ml-1 my-4 h-12 hover:bg-green-800">Descubrir productos</button></Link>
        </div>}
        </div>
      <article className="bg-white w-1/4 h-64 rounded m-2 p-4">
        <div className="h-1/6 text-white flex items-center text-xl border-b bg-green-700 p-2 ">Resumen de compra: </div>
        <div className="grid justify-items-start">
          <p className="text-black m-4 text-xl">Productos: </p>
          <p className="text-black m-4 text-3xl">Total: </p>
          <div className="flex w-full place-content-around">
            <button className="bg-green-700 w-2/4 h-10 justify-self-center hover:bg-green-800" >Finalizar Compra</button>
            <button className="border border-red-700 text-red-700 w-1/3 h-10 justify-self-center hover:border-2" 
            onClick={clearCart}>Vaciar Carrito</button>
          </div>          
        </div>        
      </article>    
    </div>
    
  )
}


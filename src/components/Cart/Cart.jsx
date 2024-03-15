import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCart } from "../../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import { FaRegFaceSadTear } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";

export const Cart = () => {
  
  const { cart, removeItem, clearCart, plusItem, subtractItem, totalItems, total } = useContext(CartContext)
  const handleOnClearCart = () => {
    Swal.fire({
      title: "¿Estas seguro de querer vaciar el carrito?",
      text: "¡Se van a perder tus productos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero el vaciar el carrito"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire({
          title: "Se vació tu carrito!",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="flex justify-center">
      <div className="w-3/5 m-2 p-2 rounded bg-white">        
        { cart.length !== 0 ? cart.map((item)=> (   
        <div key={item.id} className="flex place-content-center">          
          <ItemCart name={item.name} price={item.subTotal} stock={item.stock} quantity={item.quantity} itemId={item.id} removeItem={removeItem} img={item.img} 
          plusItem={plusItem} subtractItem={subtractItem} sub></ItemCart>                  
        </div>        
        )) 
        : 
        <div className="h-full grid place-content-center items-center">
            <span className="text-green-700 text-3xl">Tu camiseta soñada sigue esperando... </span>
            <Link to="/" className="w-44"><button className="bg-green-700 text-white place-content-center w-48 ml-1 my-4 h-12 hover:bg-green-800 flex justify-center items-center">Descubrir productos<div className="ml-2"><FaSearch /></div></button></Link>
        </div>}
        </div>
      { total ? 
      <article className="bg-white w-1/4 h-64 rounded m-2 p-4">
        <div className="h-1/6 text-white flex items-center text-xl border-b bg-green-700 p-2 ">Resumen de compra: </div>
        <div className="grid justify-items-start">
          <p className="text-black m-4 text-xl">Productos: ({totalItems})</p>
          <p className="text-black m-4 text-3xl">Total: ${total}</p>
          <div className="flex w-full place-content-around">
            <Link to="/checkout"><button className="bg-green-700 w-40 h-10 justify-self-center hover:bg-green-800" >Finalizar Compra</button></Link> 
            <button className="border border-red-700 text-red-700 w-1/3 h-10 justify-self-center hover:border-2" onClick={handleOnClearCart}>Vaciar Carrito</button>             
          </div>          
        </div>        
      </article>  
      : <article className="bg-gray-100 w-1/4 h-64 rounded m-2 p-4 text-green-700 flex justify-center items-center text-xl"><p className="mr-2">Carrito vacío</p> <FaRegFaceSadTear /></article>}      
    </div>    
  )
}


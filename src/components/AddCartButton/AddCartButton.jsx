import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { LuShoppingCart } from "react-icons/lu";
import Swal from 'sweetalert2';


export const AddCartButton = ({ id, price, name, stock, img, size }) => {

    const { addItem2 } = useContext(CartContext);

    const handleOnAdd = () => {
        const item = {id, price, name, stock, img, size};
        const flag = addItem2(item, 1);
        flag ? 
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se agregó tu producto al carrito",
            showConfirmButton: false,
            timer: 1000
          }) : Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay mas stock!",
          });
    }
  return (
    <button onClick={handleOnAdd} className='ml-1 w-14 h-10 bg-white text-green-800 border border-green-800 flex justify-center items-center hover:bg-green-900 hover:text-white transition-all'><LuShoppingCart /></button>
  )
}

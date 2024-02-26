import React from 'react'
import { useState } from 'react';
import { ShoppingCart } from '../car-widget/assets/ShoppingCart';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(quantity);
    }

    const decrement = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
    }
      
    return (
    <div className='counter'>
        <div className='controlers flex place-content-center'>            
            <button className='bg-green-700 text-white w-12 h-10 place-content-center ' onClick={decrement}>-</button>
            <div className='bg-white border-2 w-24 ml-2 mr-2 flex justify-center items-center border-green-700'>
                <p className='text-green-700'>{quantity}</p>
            </div>            
            <button className='bg-green-700 text-white w-12 h-10 place-content-center ' onClick={increment}>+</button>
        </div>
        <div className='flex place-content-center'>
            <button className='bg-green-700 h-10 w-52 mt-1 flex items-center pl-2 place-content-center hover:cursor-pointer hover:bg-green-800 hover:rounded transition-all duration-300' 
            onClick={() => onAdd(quantity)} disabled = {!stock}>                                
                <p>Agregar al carrito</p>
                <ShoppingCart />
            </button>
        </div>
    </div>
  )
}

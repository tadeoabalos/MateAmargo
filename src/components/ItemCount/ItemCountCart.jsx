import React from 'react'
import { useState } from 'react';

export const ItemCountCart = ({initial, stock, onAdd, onSub}) => {
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
            <button className='bg-green-700 text-white w-12 h-8 place-content-center '  onClick={() => { decrement(); onSub(quantity)}}>-</button>
            <div className='bg-white border-2 w-20 flex justify-center items-center border-green-700'>
                <p className='text-green-700'>{quantity}</p>
            </div>            
            <button className='bg-green-700 text-white w-12 h-8 place-content-center ' onClick={() => { increment(); onAdd(quantity)}}>+</button>            
        </div>        
    </div>
  )  
}

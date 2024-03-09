import React, { useContext } from 'react'
import { ItemCountCart } from '../components/ItemCount/ItemCountCart'
import { CartContext } from '../context/CartContext'

const getStockMessage = (stock) => {
    if(stock >= 5) {
        return <p>{stock} unidades disponibles</p>
    }
    if(stock < 5 && stock > 1){
        return <p>Solo quedan {stock} unidades disponibles!</p>
    }
    else {
        return <p>Ultima disponible!</p>
    }
}

export const ItemCart = ( {name, stock, price, quantity, itemId, removeItem, img, plusItem, subtractItem} ) => {            
    
    const handleOnAdd = (quantity) => {
        plusItem(itemId, quantity, stock)
    } 
    const handleOnSub = (quantity) => {
        subtractItem(itemId, quantity)
    }

  return (    
        <article className='bg-white w-full h-32 border flex flex-row items-center'>
            <div className='flex w-28 justify-center'>
                <img className="max-h-28" src={img}></img>
            </div>            
            <div className='px-8 w-2/5'>
                <p className='font-bold text-black text-xl truncate'>{name}</p>
                <ul>
                    <li className='py-4'><button onClick={()=>removeItem(itemId)} className='text-green-700'>Eliminar</button></li>
                </ul>  
            </div>
            <div className='text-gray-500 item-center w-80'>
                <ItemCountCart initial={quantity} stock={stock} onAdd={handleOnAdd} onSub={handleOnSub}></ItemCountCart>  
                {getStockMessage(stock)}
            </div>
            <div className='item-center w-40'>
                <p className='text-black text-2xl italic'>$ {price}</p>   
            </div>               
        </article>    
  )
}

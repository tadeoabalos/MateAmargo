import React from 'react'

export const WishItem = ({ id, name, price, img }) => {
  return (
    <article className='h-1/3 w-64 bg-gray-800 flex flex-col border rounded'>
        <div>{name}</div>
        <img src={img}/>
        <div className='flex'>
            <p className='mr-3'>${price}</p>
            <button className='bg-green-700 h-8'>AGREGAR AL CARRITO</button>
        </div>
    </article>
  )
}

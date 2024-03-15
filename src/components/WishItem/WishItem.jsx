import React from 'react'

export const WishItem = ({ id, name, price, img }) => {
  return (
    <article className='bg-white w-full h-32 border flex flex-row items-center'>
            <div className='flex w-28 justify-center'>
                <img className="max-h-28" src={img}></img>
            </div>            
            <div className='px-8 w-2/5'>
                <p className='font-bold text-black text-xl truncate'>{name}</p>
                <ul>
                    <li className='py-4'><button className='text-green-700'>Eliminar</button></li>
                </ul>  
            </div>            
            <div className='item-center w-40'>
                <p className='text-black text-2xl italic'>$ {price}</p>   
            </div>               
        </article>    
  )
}

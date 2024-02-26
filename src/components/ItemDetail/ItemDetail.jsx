import React from 'react'
import { Flag } from '../Item/Assets/Flag'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemPath, ItemCount } from '../index'

export const ItemDetail = ({name, price, description, country, category, continent, img, year, stock, size}) => {

  const [quantityOnAdd, setQuantityOnAdd ] = useState(0)

  const handleOnAdd = ( quantity ) => { setQuantityOnAdd(quantity) }
  return (
    <div className='h-full flex flex-col place-items-center justify-center'>
      <div className='flex place-content-start'>
        <ItemPath category={category} continent={continent} country={country} />
      </div>            
      <article className='bg-white h-3/4 w-3/4 shadow-2xl rounded p-10 flex items-start'>        
        <section className='h-2/3 w-2/5 flex justify-center'>          
          <img className='rounded min-h-96 max-h-96' src={img} alt={name}></img>            
        </section>                            
        <section className='flex h-full w-3/5	flex-col place-content-start items-center'>
          <h4 className='text-3xl font-bold text-white mb-2 bg-green-700 p-2'>{name}</h4>          
          <div className='w-5/6 flex flex-col text-start text-black text-lg border-2 border-green-600 bg-slate-10 p-2 my-5'>                          
            <p className='pb-2 text-green-700'>Descripción: <span className='text-black'>{description}</span></p>
            <hr/>                        
            <p className='py-2 text-green-700'>Año: <span className='text-black'>{year}</span></p>
            <hr/>                                                                            
            <p className='py-2 text-green-700'>Talle: <span className='text-black'>{size}</span></p>                                                                            
            <hr/>                                                                            
            <div className='py-2 text-green-700'><Flag country={country} size={24}/></div>                                                                       
            <hr/>                                                                            
            <p className='py-2 text-green-700'>Precio: <span className='text-black font-bold'>${price}</span></p>                                                                            
          </div>
          {
            quantityOnAdd > 0 ? ( <Link to="/cart" className='bg-green-700 h-10 w-52 mt-1 flex items-center pl-2 place-content-center hover:cursor-pointer hover:bg-green-800 hover:rounded transition-all duration-300' ><button>Terminar Compra</button></Link>) :
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
          }                    
        </section>
    </article>
    </div>    
  )
}


export const ItemCartCheckOut = ( {name, size, img, quantity} ) => {            

  return (    
        <article className='bg-white w-full h-24 flex flex-row items-center justify-start'>
            <div className='w-28'>
                <img className="max-h-20" src={img}></img>
            </div>            
            <div className="flex justify-start items-start">
                <p className='text-gray-500 text-base truncate'>Nombre: {name}, Talle: {size}, Cantidad: {quantity}</p>
            </div>           
        </article>    
  )
}
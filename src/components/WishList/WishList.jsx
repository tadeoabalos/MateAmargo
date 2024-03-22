import React from 'react'
import { useContext } from 'react'
import { WishListContext } from '../../context/WishListContext'
import { WishItem } from '../WishItem/WishItem'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const WishList = () => {

    const { wishList, totalItems } = useContext(WishListContext)

    return (
        <>   
        <div className='mx-auto m-10 w-2/3 h-2/3 flex flex-col items-start '>
            <div className='flex flex-col items-start'>
                <h1 className='text-3xl font-bold text-green-900'>LISTA DE DESESOS</h1>           
                <p className='text-xl text-green-900 mb-5'>Cantidad de articulos: {totalItems} </p>     
            </div>      
                {wishList.length !== 0 ? 
                <div className='flex no-wrap max-w-full justify-start items-center overflow-x-auto overflow-y-hidden bg-white rounded'>
                    {wishList.map((item) => (
                        <div className='scale-90' key={item.id}>          
                            <WishItem id={item.id} name={item.name} price={item.price} img={item.img} country={item.country} />                  
                        </div>
                    ))}
                </div>
             : (
                <div className='flex justify-start items-start flex-col'>
                    <p className='text-2xl text-green-900 mb-5'>
                        TODAVIA NO TENÉS PRODUCTOS FAVORITOS 
                    </p>
                    <Link to="/"><button className='bg-green-700 hover:bg-green-800 w-48 h-10'>Ir a inicio</button></Link>
                </div>
            )}
        </div>
        </>                     
    )
}

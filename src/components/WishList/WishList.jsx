import React from 'react'
import { useContext } from 'react'
import { WishListContext } from '../../context/WishListContext'
import { WishItem } from '../WishItem/WishItem'
export const WishList = () => {

    const { wishList } = useContext(WishListContext)

    return (
        <>
        <p className='text-4xl text-green-700 self-start w-full'>TUS PRODUCTOS FAVORITOS</p>
        <div className='m-auto w-2/3 h-screen flex flex-wrap flex-center'>
            { wishList.length !== 0 ? wishList.map((item)=> (   
                <div key={item.id}>          
                    <WishItem id={item.id} name={item.name} price={item.price} img={item.img} />                  
                </div>        
                )) : <h4>LISTA DE DESEADOS VACIA</h4> }    
        </div> 
        </>                     
    )
}

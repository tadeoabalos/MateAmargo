import React from 'react'
import { useContext } from 'react'
import { WishListContext } from '../../context/WishListContext'
import { WishItem } from '../WishItem/WishItem'
export const WishList = () => {

    const { wishList } = useContext(WishListContext)

    return (
    <div>
        
            { wishList.length !== 0 ? wishList.map((item)=> (   
                <div key={item.id} className="flex place-content-center">          
                <WishItem id={item.id} name={item.name} price={item.price} img={item.img} />                  
                </div>        
                )) : <h4>LISTA DE DESEADOS VACIA</h4> }       
    </div>        
    )
}

import React, { useEffect, useState } from 'react'
import { getProductsById } from '../AsyncMock';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} =  useParams();
    
    
    useEffect(() => {
      getProductsById(id)
        .then( response => {
            setProducts(response)
            setIsLoading(false)             
        })         
        .catch (error => 
            {console.log(error)
        })
    }, [id])
        
    return (
        <div className='h-5/6 mt-8' >
            {isLoading ? <h3>Cargando...</h3> : <ItemDetail {...products} /> }    
        </div>
    )
}

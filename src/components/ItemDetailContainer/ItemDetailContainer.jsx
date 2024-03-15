import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
export const ItemDetailContainer = () => {

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} =  useParams();
    
    const getProductDB = (id) => {
        
        const productRef = doc( db, "products", id );
        getDoc(productRef)
            .then( response => {
                const product = {
                    id: response.id,
                    ...response.data()
                }
                setProducts(product);
            })
    }

    useEffect(() => {
      setIsLoading(false);  
      getProductDB(id);
    }, [])
        
    return (
        <div className='h-5/6 mt-8' >
            {isLoading ? <h3>Cargando...</h3> : <ItemDetail {...products} /> }    
        </div>
    )
}

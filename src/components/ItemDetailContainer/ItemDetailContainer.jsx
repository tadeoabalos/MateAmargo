import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { BounceLoader, BeatLoader } from 'react-spinners';
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
                setIsLoading(false);  
            })
    }

    useEffect(() => {
      
      getProductDB(id);
    }, [])
        
    return (
        <div className='h-5/6 mt-8' >
            {isLoading ? <div className="h-3/4 flex items-center justify-center flex-col"><BeatLoader color={'#274939'} loading={isLoading} size={25} aria-label="Loading Spinner" data-testid="loader" /></div> : <ItemDetail {...products} /> }    
        </div>
    )
}

import { useState, useEffect, CSSProperties  } from "react"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { BounceLoader } from "react-spinners";

export const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {category, country, wc, continent} = useParams();       
  
  const filter = (category, country, wc, continent) => {
    if(category) return category
    else if(country) return country
    else if(wc) return wc
    else return continent    
  }
  const getProductsDB = ( category, country, wc, continent ) => {
    let myProducts = collection( db, "products" ) ;
    if (category && country) myProducts = query( collection( db, "products" ), where( "category", "==", category ), where("country", "==", country) );
    else if (category && continent) myProducts = query( collection( db, "products" ), where( "category", "==", category ), where("continent", "==", continent) );
    else if(category) myProducts = query( collection( db, "products" ), where( "category", "==", category ) ) ;
    else if (country) myProducts = query( collection( db, "products" ), where( "country", "==", country ) ) ;
    else if (wc) myProducts = query( collection( db, "products" ), where( "wc", "==", wc ) ) ;
    else if (continent) myProducts = query( collection( db, "products" ), where( "continent", "==", continent ) ) ;            
    
    getDocs(myProducts)
      .then( response => {        
        const productList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        })
        
        setProducts(productList);
        setIsLoading(false);
      } );
  };

  useEffect(() => {  
    setIsLoading(true);  
    getProductsDB(category, country, wc, continent);       
  }, [category, wc, country, continent])
  
  return (
    <>
      <h3 className="greeting">{greeting}</h3>          
      {isLoading ? <div className="h-3/4 flex items-center justify-center flex-col"><BounceLoader color={'#274939'} loading={isLoading} size={100} aria-label="Loading Spinner" data-testid="loader" /></div>                 
       : <ItemList products={products} /> }         
    </>
  )
}

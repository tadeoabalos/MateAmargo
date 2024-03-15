import { getClubByCountry, getProducts, getProductsByCat, getProductsByWC, getClubByContinent } from "../AsyncMock";
import { useState, useEffect } from "react"
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
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
    // referencia a la coleccion de nuestra bd
    //const myProducts = category ? query( collection( db, "products" ), where( "category", "==", category ) ) :  collection( db, "products" );
    let myProducts = collection( db, "products" ) ;
    if (category && country) myProducts = query( collection( db, "products" ), where( "category", "==", category ), where("country", "==", country) );
    else if (category && continent) myProducts = query( collection( db, "products" ), where( "category", "==", category ), where("continent", "==", continent) );
    else if(category) myProducts = query( collection( db, "products" ), where( "category", "==", category ) ) ;
    else if (country) myProducts = query( collection( db, "products" ), where( "country", "==", country ) ) ;
    else if (wc) myProducts = query( collection( db, "products" ), where( "wc", "==", wc ) ) ;
    else if (continent) myProducts = query( collection( db, "products" ), where( "continent", "==", continent ) ) ;            
    //obtener los documentos
    getDocs(myProducts)
      .then( response => {
        // Ordenamos los productos recibidos de nuestra bd
        const productList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        })

        //guardamos nuestros productos ordenados en nuestro state
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
      {isLoading ? <h3>Cargando...</h3> : <ItemList products={products} /> }         
    </>
  )
}

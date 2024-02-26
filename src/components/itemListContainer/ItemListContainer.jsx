import { getClubByCountry, getProducts, getProductsByCat, getProductsByWC, getClubByContinent } from "../AsyncMock";
import { useState, useEffect } from "react"
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {category, country, wc, continent} = useParams();   
  console.log(continent)
  useEffect(() => {    
    let asyncFunc = getProducts
    let parametro 
    if (category){      
      asyncFunc = getProductsByCat
      parametro = category
    }
    if (wc){      
      asyncFunc = getProductsByWC
      parametro = wc
    }
    if(category && country){   
      console.log("Hola!")   
      asyncFunc = getClubByCountry
      parametro = {category, country}
    }    
    if(category && continent){      
      console.log("Hola!")
      asyncFunc = getClubByContinent
      parametro = {category, continent}
    }   
    

    asyncFunc(parametro)
      
      .then(response => 
      {
        setProducts(response);
        setIsLoading(false); 
      })
      .catch (error => {
        console.log(error)
      })
  }, [category, wc, country, continent])
  
  return (
    <>
      <h3 className="greeting">{greeting}</h3>          
      {isLoading ? <h3>Cargando...</h3> : <ItemList products={products} /> }
         
    </>
  )
}

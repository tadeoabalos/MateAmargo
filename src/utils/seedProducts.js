import { addDoc, collection } from "firebase/firestore";
import productsList from "../components/products.json";
import { db } from "../config/firebaseConfig";
export const seedProducts = () =>{
    productsList.forEach( product => {
        //Agregamos el producto a nuestra base de datos
        addDoc( collection((db), "products"), product )
    } )    
}
import { createContext, useEffect, useState} from "react";
import { Item } from "../components";

export const CartContext = createContext(null);

export const CartContextProvider = ({children}) => {
    const [totalItems, setTotalItems] = useState(0)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {   
        // Copia del cart      
        const cartCopy = [...cart] ;
        // Verificar si el item se encuentra adentro del carrito
        const index = cartCopy.findIndex( product => product.id === item.id )

        if(index !== -1){                                  
            cartCopy[index].quantity += quantity ; 
            cartCopy[index].subTotal += quantity * item.price ;      
            setCart(cartCopy)
        }
        else{
            const newItem = { ...item , quantity, subTotal: item.price * quantity }
            setCart([...cart, newItem])            
        }        
     }    

    const plusItem = (id, quantity, stock) => {        
        const cartCopy = [...cart] ;
        const index = cartCopy.findIndex( product => product.id === id );
        if( index !== -1  ){
            if( quantity < stock ){                
                cartCopy[index].quantity += 1 ;                 
                cartCopy[index].subTotal += 1 * cartCopy[index].price ; 
                setCart(cartCopy) ;
                
            }            
            else {
                console.log("No hay mas stock");
            }

        }
        else {
            console.log("El producto no se encuentra en el carrito.");
        }                           
    }

    const subtractItem = (id, quantity) => {        
        const cartCopy = [...cart] ;
        const index = cartCopy.findIndex( product => product.id === id );
        if( index !== -1  ){
            if( quantity > 1 ){                
                cartCopy[index].quantity -= 1 ; 
                cartCopy[index].subTotal -= 1 * cartCopy[index].price ; 
                setCart(cartCopy) ;
            }            
            else {
                console.log("No podes comprar menos de 1 producto");
            }
        }
        else {
            console.log("El producto no se encuentra en el carrito.");
        }                     
    }

    const removeItem = (id) => {
        const cartFilter = cart.filter( item => item.id != id)
        setCart(cartFilter)
      } 

    const clearCart = () => { 
        setCart([]);
     }           
    
    const handleTotalItems = () => {
        const newTotalItems = cart.reduce((acum, item) => acum + item.quantity, 0)
        const newTotalPrice = cart.reduce((acum,item )=> acum + item.quantity * item.price, 0)
        setTotalItems(newTotalItems);
        setTotal(newTotalPrice);
    }    

    useEffect(()=>{
        handleTotalItems()
    },[cart])
    
    const objectValues = {
        cart, 
        totalItems, 
        total,      
        addItem,
        removeItem, 
        clearCart,
        plusItem,
        subtractItem        
    };

    return <CartContext.Provider value={objectValues}> {children} </CartContext.Provider>
}

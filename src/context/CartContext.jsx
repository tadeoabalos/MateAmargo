import { createContext, useEffect, useState} from "react";
import Swal from "sweetalert2";
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
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No hay mas stock!",
                  });
            }          
        }
    }

    const addItem2 = (item, quantity) => {                
        const cartCopy = [...cart] ;        
        const index = cartCopy.findIndex( product => product.id === item.id )
        if(index !== -1){     
            if((cartCopy[index].quantity + quantity) <= item.stock ){
                cartCopy[index].quantity += quantity ;
                cartCopy[index].subTotal += quantity * item.price ;      
                setCart(cartCopy)
            }
            else {                
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No hay mas stock!",
                  });
            }
        }
        else{
            const newItem = { ...item , quantity, subTotal: item.price * quantity }
            setCart([...cart, newItem])            
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
        addItem2,
        removeItem, 
        clearCart,
        plusItem,
        subtractItem        
    };

    return <CartContext.Provider value={objectValues}> {children} </CartContext.Provider>
}

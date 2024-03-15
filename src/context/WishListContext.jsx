import { createContext, useState} from "react";

export const WishListContext = createContext(null);

export const WishListContextProvider = ({children}) => {
    const [wishList, setWishList] = useState([])    

    const addItem = (item) => {             
        const newItem = { ...item}        
        setWishList([...wishList, newItem])                   
    }    
    
    const objectValues = {
        wishList,             
        addItem              
    };

    return <WishListContext.Provider value={objectValues}> {children} </WishListContext.Provider>
}
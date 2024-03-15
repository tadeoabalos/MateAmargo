import { createContext, useState, useEffect} from "react";

export const WishListContext = createContext(null);

export const WishListContextProvider = ({children}) => {
    const [wishList, setWishList] = useState([])    
    const [totalItems, setTotalItems] = useState([])

    const addItem = (item) => {             
        const newItem = { ...item}        
        setWishList([...wishList, newItem])                   
    }

    const handleTotalItems = () => {             
        const newTotalItems = wishList.length
        setTotalItems(newTotalItems)               
    }    
    
    const removeItem = (id) => {
        const wishListFilter = wishList.filter( item => item.id != id)
        setWishList(wishListFilter)
    }

    useEffect (()=>{
        handleTotalItems()
    },[wishList])

    const objectValues = {
        wishList, 
        totalItems,
        removeItem,           
        addItem              
    };

    return <WishListContext.Provider value={objectValues}> {children} </WishListContext.Provider>
}
import productsList from "./products.json";

export const getProducts = () => {
    return new Promise (( resolve, reject ) => { 
        if (productsList.length > 0){
            setTimeout(() => {resolve(productsList)}, 500);
        } else {
            reject("No hay productos");
        }
    })
}

export const getProductsById = (productId) => {          
    return new Promise (( resolve ) => { 
        if (productsList.length > 0){            
            setTimeout(() => { resolve(productsList.find( prod => prod.id == productId ))}, 500);                      
        }         
    })
}

export const getProductsByCat = (productCat) => {    
    return new Promise ((resolve, reject) => {
        if(productsList.length > 0) {
            setTimeout(() => {
                const filteredProducts = productsList.filter((prod) => prod.category === productCat);                                
                resolve(filteredProducts)
            }, 500)
        }
        else reject("404");
    })
}

export const getClubByCountry = (product) => {        
    return new Promise ((resolve, reject) => {
        if(productsList.length > 0) {
            setTimeout(() => {
                const filteredProducts = productsList.filter((prod) => prod.category === product.category && prod.country === product.country );                                
                resolve(filteredProducts)                
            }, 500)
        }
        else reject("404");
    })
}
export const getClubByContinent = (product) => {           
    return new Promise ((resolve, reject) => {
        if(productsList.length > 0) {
            setTimeout(() => {
                const filteredProducts = productsList.filter((prod) => prod.category === product.category && prod.continent === product.continent );                                
                resolve(filteredProducts)                
            }, 500)
        }
        else reject("404");
    })
}

export const getProductsByWC = (wc) => {    
    return new Promise ((resolve, reject) => {
        if(productsList.length > 0) {
            setTimeout(() => {
                const filteredProducts = productsList.filter((prod) => prod.wc === wc);                                
                resolve(filteredProducts)
            }, 500)
        }
        else reject("404");
    })
}



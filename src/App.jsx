import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer, ItemDetailContainer, NavBar, NoPage, Cart } from './components/index'
import './index.css'
import { CartContextProvider } from './context/CartContext'
import { WishListContextProvider } from './context/WishListContext'
import { CheckOut } from './components/CheckOut/CheckOut'
import { WishList } from './components/WishList/WishList'
function App() {
  return (
    <>
      <CartContextProvider>     
      <WishListContextProvider>
        <BrowserRouter>        
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'¡Encontra tu camiseta retro favorita aca en Mate Amargo!'} /> }/>                    
            <Route path='/detalle_camiseta/:id' element={<ItemDetailContainer /> }/>
            <Route path='/cart' element={<Cart />}/>                            
            <Route path='/category/:category/continent/:continent' element={<ItemListContainer /> }/>                         
            <Route path='/category/:category/:country' element={<ItemListContainer /> }/>
            <Route path='/category/:category' element={<ItemListContainer /> }/>    
            <Route path='/category/worldcup/:wc' element={<ItemListContainer /> }/>                  
            <Route path='/checkout' element={<CheckOut /> }/>                  
            <Route path='/mateados' element={<WishList /> }/>                  
            <Route path='*' element={<NoPage /> }/>                           
          </Routes>      
      </BrowserRouter>
    </WishListContextProvider> 
    </CartContextProvider>
  </>
  )
}

export default App

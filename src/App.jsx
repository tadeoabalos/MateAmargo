import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer, ItemDetailContainer, NavBar, NoPage, Cart } from './components/index'
import './index.css'
function App() {
  return (
    <BrowserRouter>        
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'¡Encontra tu camiseta retro favorita aca en Mate Amargo!'} /> }/>                    
        <Route path='/detalle_camiseta/:id' element={<ItemDetailContainer /> }/>
        <Route path='/category/:category' element={<ItemListContainer /> }/>                     
        <Route path='category/national/:wc' element={<ItemListContainer /> }/>
        <Route path='/category/:category/:country' element={<ItemListContainer /> }/>
        <Route path='/category/:category/continent/:continent' element={<ItemListContainer /> }/>                         
        <Route path='/cart' element={<Cart /> }/>                      
        <Route path='*' element={<NoPage /> }/>                     
      </Routes>      
    </BrowserRouter>
  )
}

export default App

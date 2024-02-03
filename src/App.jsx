import './App.css'
import { NavBar } from './components/NavBar'
import { Product } from './components/Product/Product'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Encontra tu camiseta retro favorita aqui en Mate Amargo!'} />
      <Product nameProduct={"Camiseta Mate Amargo 2022"}  priceProduct={5200}/>
    </>
  )
}

export default App

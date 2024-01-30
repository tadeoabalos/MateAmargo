import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Encontra tu camiseta retro favorita aqui en Mate Amargo!'} />
    </>
  )
}

export default App

import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Mate Amargo'} />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Product } from './components/Product/Product'
import { UseStateBtn } from './components/UseState/UseStateBtn'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'¡Encontra tu camiseta retro favorita aca en Mate Amargo!'} />
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

export const UseStateBtn = () => {
  const [ name, setName ] = useState("Tadeo")
  const [ number, setNumber ] = useState(0)


  const handleChangeName = () => {
        setName("Lucia");
   
  }

  const handleChangeNumber = () => {
    return setNumber(number + 1);
  }
  return(
    <>
        <h1>Nombre: {name}</h1>
        <button onClick={handleChangeName}>Cambiar nombre</button>
        <h1>Numero: {number}</h1>
        <button onClick={handleChangeNumber}>Cambiar numero</button>
    </>    
  );
}

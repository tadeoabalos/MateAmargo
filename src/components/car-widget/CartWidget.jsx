import React, { useContext } from 'react'
import {ShoppingCart} from './assets/ShoppingCart'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <Link to="/cart">
      <div className='flex items-center'>      
          <ShoppingCart></ShoppingCart>
          <h4 className='text-green-700 font-bold ml-2'> {totalItems} </h4>             
      </div>
    </Link> 
  )
}

import React from 'react'
import {ShoppingCart} from './assets/ShoppingCart'
import { Link } from 'react-router-dom'
export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className='cart'>      
          <ShoppingCart></ShoppingCart>
          <h4 className='color-car'> 0 </h4>             
      </div>
    </Link> 
  )
}

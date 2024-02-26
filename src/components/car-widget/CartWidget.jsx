import React from 'react'
import {ShoppingCart} from './assets/ShoppingCart'
export const CartWidget = () => {
  return (
    <div className='cart'>
        <ShoppingCart></ShoppingCart>
        <h4 className='color-car'> 0 </h4>
    </div>
  )
}

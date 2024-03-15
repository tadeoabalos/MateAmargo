import React from 'react'
import { WhiteMate } from './whiteMate'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { WishListContext } from '../context/WishListContext'
export const MateWidget = () => {

  const { totalItems } = useContext(WishListContext) 

  return (
    <Link to="/mateados"><div className='flex items-center mr-5'>
        <WhiteMate></WhiteMate>
        <h4 className='text-white font-bold ml-2'>{totalItems}</h4> 
    </div>
    </Link>   
  )
}

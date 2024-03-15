import React from 'react'
import { WhiteMate } from './whiteMate'
import { Link } from 'react-router-dom'
export const MateWidget = () => {
  return (
    <Link to="/mateados"><div className='flex items-center mr-5'>
        <WhiteMate></WhiteMate>
        <h4 className='text-green-700 font-bold ml-2'> 0 </h4> 
    </div>
    </Link>   
  )
}

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Flag } from '../Item/Assets/Flag'
import { LikeButton } from '../LikeButton/likeButton'
import { WishListContext } from '../../context/WishListContext'

export const WishItem = ({ id, name, price, img, country }) => {

  const [like, setLike] = useState(true);
  const { addItem , removeItem } = useContext(WishListContext);

  const handleOnAdd = () => {      
    const item = { id, price, name, img, country };                    
    addItem(item);            
  };

  return (
    <article className='card'>
        <div className='card-header'>
          <Flag country={country} size={24}/>   
          <button onClick={() => {
            if( like ){
              removeItem(id)
            }
            else {
              handleOnAdd()
            }
            setLike(!like)
          }}>
            <LikeButton like={like}/>
          </button>        
        </div>        
        <section className='card-image'><img src={img} alt={name} /></section>
        <section className='card-foot'>
            <h4 className='card-name'>{name}</h4>
            <div className='card-detail'>
              <p className='card-price'>${price}</p>  
              <Link to={`/detalle_camiseta/${id}`}>
                <button className='card-button'>Detalle</button>
              </Link>              
            </div>                                                   
        </section>                 
    </article>
  )
}

import './item.css';
import { Link } from 'react-router-dom';
import { Flag } from '../Item/Assets/Flag';
import { useState, useContext } from 'react';
import { LikeButton } from '../likeButton/likeButton';
import { WishListContext } from '../../context/WishListContext';

export const Item = ({ id, name, price, country, img }) => {  
  const [like, setLike] = useState(false);
  const { addItem } = useContext(WishListContext);

  const handleOnAdd = () => {      
    const item = { id, price, name, img };                    
    addItem(item);            
  };

  return (
    <article className='card'>
        <div className='card-header'>
          <Flag country={country} size={24}/>
          <button onClick={() => {setLike(!like); handleOnAdd();}}>
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
  );
};


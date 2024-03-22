import './item.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Flag, LikeButton, AddCartButton } from '../../../index';
import { WishListContext } from '../../../../context/WishListContext';

export const Item = ({ id, name, price, country, img, stock, size }) => {  
  
  const { addItem , removeItem, wishList } = useContext(WishListContext);

  const isLike = (id) => {
    const wishListCopy = [...wishList] ;
    const index = wishListCopy.findIndex( product => product.id === id );
    if(index !== -1) return true;
    else return false;
  }

  const [like, setLike] = useState(isLike(id));

  const handleOnAdd = () => {      
    const item = { id, price, name, img, country, size };                    
    addItem(item, 1);            
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
              <div className='flex flex-nowrap'>
                <Link to={`/detalle_camiseta/${id}`}>
                  <button className='card-button'>Detalle</button>
                </Link>
                <AddCartButton id={id} price={price} name={name} img={img} stock={stock} size={size}/> 
              </div>                            
            </div>                                                   
        </section>                 
    </article>
  );
};


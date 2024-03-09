import './item.css'
import { Link } from 'react-router-dom'
import { Flag } from '../Item/Assets/Flag'

export const Item = ({id, name, price, country, img}) => {

  const flag = `https://flagsapi.com/${country}/flat/48.png`;

  return (
    <article className='card'>
        <div className='card-header'><Flag country={country} size={24}/></div>        
        <section className='card-image'><img src={img} alt={name} /></section>
        <section className='card-foot'>
            <h4 className='card-name'>{name}</h4>
            <div className='card-detail'>
              <p className='card-price'>${price}</p>  
              <Link to={`/detalle_camiseta/${id}`}>
                <button>Detalle</button>
              </Link>              
            </div>                                                   
        </section>                 
    </article>
  )
}

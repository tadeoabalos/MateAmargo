import './itemList.css'
import { Item } from '../../index'
export const ItemList = ( {products} ) => {    

  return (
    <div className='list-products'>
        { products.map(  product =>  <Item key={product.id} {...product}/> ) }     
    </div>
  )
}



    
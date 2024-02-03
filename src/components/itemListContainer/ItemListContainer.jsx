import { Product } from "../Product/Product"

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <div className="main-container">
        <Product nameProduct={"Camiseta Mate Amargo 2022"}  priceProduct={5200}/>
        
      </div>
    </>
  )
}

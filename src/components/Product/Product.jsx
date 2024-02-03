

export const Product = ({nameProduct, imageProduct, priceProduct}) => {
  return (
    <div className="product-container">
        <h4>{nameProduct}</h4>
        <img>{imageProduct}</img>
        <div className="foot-product">
          <p>${priceProduct}</p>
          <button>COMPRAR</button>
        </div>        
    </div>
  )
}

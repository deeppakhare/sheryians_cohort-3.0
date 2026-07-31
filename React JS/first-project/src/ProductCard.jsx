import React from 'react'
import './productCard.css'

const ProductCard = ({product,del}) => {
  
  return (
    <div className='main'>
      <div className='card'>
        <div className='img'>
            <img src={product.image} alt="" />
        </div>
        <div className='text'>
        <h3>{product.title.substring(0,30)}</h3>
        <p>{product.description.substring(0,90)}</p>
        <p>{product.category}</p>
        <h3>Rs. {product.price}</h3>
        </div>
        <div className='button'>
        <button onClick={() => {
            return del(product.id)
        }} >Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

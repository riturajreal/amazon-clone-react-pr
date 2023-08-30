import {ProductBadge, ProductRatings } from './'
import React from 'react'

const ProductDetails = ({product, ratings}) => {
  return (
    <div className='mb-1'>
        <div className='text-xl font-medium mb-1'>{product.title}</div>
        <div className='text-sm  mb-1' > by <span className='text-blue-500'>{product.brand}</span></div>
        {
            ratings &&
        <div className='text-sm mb-1'><ProductRatings avgRating={product.avgRating} ratings={product.ratings} /> </div>
        }
        <div className='text-xs font-bold mb-1'>{product.attribute}</div>
        <div><ProductBadge badge={product.badge} /></div>
       
    </div>
  )
}

export default ProductDetails

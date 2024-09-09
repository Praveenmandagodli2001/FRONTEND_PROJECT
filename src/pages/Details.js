import React from 'react'
import ProductDetails from '../components/ProductDetails'
import { useSelector } from 'react-redux'

const Details = () => {
  let product=useSelector((state)=>state.currentProduct.product)
  return (
    <>

      <ProductDetails product={product}/>
      
       
    </>
  )
}

export default Details

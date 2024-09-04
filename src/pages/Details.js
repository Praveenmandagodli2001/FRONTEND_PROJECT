import React from 'react'
import ProductDetails from '../components/ProductDetails'
import { useSelector } from 'react-redux'
// import ProductSection from '../components/ProductSection'
// import FooterSection from '../components/FooterSection'
const Details = () => {
  let product=useSelector((state)=>state.currentProduct.product)
  return (
    <>

      <ProductDetails product={product}/>
      {/* <ProductSection />
      <FooterSection/>
       */}
    </>
  )
}

export default Details

import React from 'react'
import Sidebar from './Sidebar'
import ProductsCard from './ProductsCard'
import Products from "../api/data"
const ProductSection = () => {
  return (
    <>
  <div className="container-fluid my-4">
      <div className="row"> 
        {/* Sidebar on the left  */}
         <div className="col-md-3">
          <Sidebar />
        </div> 

        {/* Product Grid on the right */}
        <div className="col-md-9">
          <div className="row">
            {Products.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                <ProductsCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </> )}

export default ProductSection

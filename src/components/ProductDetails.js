import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions'

const ProductDetails = ({ product }) => {

    const dispatch = useDispatch();

    const handleBuyNow = () => {
      dispatch(addToCart(product));
      alert("Item added to the cart")
    };
    return (<>

        <Navbar/>
        <div style={{ marginTop: "120px" }}>

        
        <section id="product-info " className="container mt-5" >
            <div className="row">
                <div className="col-md-6 border rounded-2 w-50">
                    <div className="item-image-parent">
                        <div className="item-image-main mb-4 rounded">
                            {/* Main Product Image with fixed width and reduced height */}
                            <img
                                src={product.image}
                                alt="default"
                                className="img-fluid ps-5"
                                style={{ width: '80%', height: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>



                {/* Right Section: Product Information */}
                <div className="col-md-6 ">
                    <div className="item-info-parent border rounded-2 ps-2">
                        {/* Main Info */}
                        <div className="main-info">
                            <h6 style={{ color: "#666" }}>{product.title}</h6>
                            <p className="text-success">
                                <span id="price" className="fw-bold fs-4 text-dark">
                                    <i className="fa-solid fa-indian-rupee-sign"></i>{product.price}
                                </span>
                            </p>
                        </div>

                        <div
                            className="rating bg-success rounded-pill text-white mb-5 d-inline-block"
                            style={{ padding: '0px 2px', minWidth: '50px' }}
                        >
                            <span className="ps-1">{product.rate}</span>
                            <span style={{ fontSize: '0.6rem', marginLeft: '3px' }}>
                                <i className="fa-solid fa-star"></i>
                            </span>
                        </div>

                        {/* Adjusted Free Delivery Position */}
                        <div className='pe-1' style={{ marginTop: '-40px' }}>
                            <span
                                className="bg-light rounded-pill d-inline-block my-2"
                                style={{ fontSize: "0.7rem", color: "#666", padding: '5px 10px', minWidth: 'auto' }}
                            >
                                Free delivery
                            </span>
                        </div>
                    </div>

                    {/* selecting a size */}
                    <div className="item-info-parent border rounded-2 ps-2 my-3">
                        {/* Main Info */}
                        <div className="main-info my-3">
                            <h6>Selecting Size</h6>
                        </div>

                        {/* Size Buttons */}
                        <div className="size-buttons d-flex gap-2 mt-2 my-3 ">
                            <button className="btn btn-outline-dark rounded-pill" style={{ width: "50px" }}>S</button>
                            <button className="btn btn-outline-dark rounded-pill">M</button>
                            <button className="btn btn-outline-dark rounded-pill">L</button>
                            <button className="btn btn-outline-dark rounded-pill">XL</button>
                        </div>
                    </div>


                    <div className="item-info-parent border rounded-2 ps-2 my-3">
                        <div className="main-info my-3">
                            <h6>Product Details</h6>
                        </div>
                        <div >
                            <p className='my-0' style={{color:"#666"}}>Name:{product.title}</p>
                            <p className='my-0' style={{color:"#666"}}>category:{product.category}</p>
                            <p className='my-0' style={{color:"#666"}}>Language:{product.language}</p>
                            <p className='my-0' style={{color:"#666"}}>Publish-Year:{product.PublishYear}</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        </div>
        <div className="mt-3 ps-5 ms-5">
            <button className="btn btn-primary text-primary bg-white me-5" style={{ width: "180px", height: "35px" }} onClick={handleBuyNow}>Add to Cart</button>
           <Link className='text-decoration-none' to="/cartpage" > <button className="btn btn-success bg-primary" onClick={handleBuyNow} style={{ width: "180px", height: "35px" }}>Buy Now</button></Link>
        </div>

        <hr className='horizontal-line my-4' style={{ marginTop: "10px", maxWidth: "480px", marginLeft: '55px' }} />
    </>);
};

export default ProductDetails;

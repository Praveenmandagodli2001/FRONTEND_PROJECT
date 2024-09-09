import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/CartActions';
import Navbar from '../components/Navbar';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let navigate=useNavigate()

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleCheckout = () => {
    navigate('/checkoutPage'); // navigate to the checkout page
  };

  // Calculate total price by multiplying item price by item qty
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);

  return (
    <div className="container mt-5">
      <Navbar />
      <h3 className='border-bottom py-2 mb-3'>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <h4>No items in the cart</h4>
      ) : (
        <div className="row">
          <div className="col-md-8 border">
            {/* Labels Row */}
            <div className="row border-bottom py-2">
              <div className='col-md-9'>
                <h6>Product</h6>
              </div>
              <div className='col-md-1 text-end'>
                <h6>Price</h6>
              </div>
              <div className='col-md-1 text-end'>
                <h6>Qty</h6>
              </div>
              <div className='col-md-1 text-end'>
                <h6>Total</h6>
              </div>
            </div>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div className="row border-bottom py-3" key={item.id}>
                <div className='col-md-9 d-flex'>
                  <img src={item.image} alt={item.title} style={{ width: "40px", height: "40px" }} />
                  <h6 className='ps-3'>{item.title}</h6>
                </div>
                <div className='col-md-1 text-end'>{item.price.toFixed(1)}</div>
                <div className='col-md-1 text-end'>{item.qty || 1}</div>
                <div className='col-md-1 text-end'>{(item.price * (item.qty || 1)).toFixed(1)}</div>
                <button style={{ maxWidth: "80px" }} className='bg-white my-3 border-0' onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}
            {/* Total Price */}
            <div className="row py-3">
              <div className='col-md-12 text-end'>
                <h5>Total: {totalPrice.toFixed(2)}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow p-4">
              <p>Subtotal: {totalPrice.toFixed(2)}</p>
              <p>Delivery Charges: Free</p>
              <p>Total: {totalPrice.toFixed(2)}</p>
              <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

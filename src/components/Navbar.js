import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import meeshoLogo from '../assets/image/messhoLogo.png';
import "../styles/Navbar.css";
import Navbar1 from './Navbar1';
import { setSearchQuery, fetchProducts } from "../actions/productActions";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
    
    if (query.trim() === "") {
      dispatch(fetchProducts());
    }
  };

  const handleLogoClick = () => {
    setQuery('');
    dispatch(setSearchQuery(''));
  };

  return (
    <>
      <div className="fixed-navbar-container">
        <nav className="navbar navbar-expand-lg border-bottom navbar-light mb-2">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <Link className="navbar-brand" to="/">
              <img src={meeshoLogo} alt="Meesho" onClick={handleLogoClick} />
            </Link>

            <div className="navbar-search d-none d-lg-block flex-grow-1 ">
              <form className="d-flex position-relative" onSubmit={handleSearch}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Try Saree, Kurti or Search by Product Code"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <i className="fas fa-search position-absolute search-icon"></i>
              </form>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav1"
              aria-controls="navbarNav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav1">
              <ul className="navbar-nav align-items-center pe-3" style={{ fontSize: "14px" }}>
                <li className="nav-item d-flex align-items-center">
                  <i className="fa-solid fa-mobile me-1"></i> 
                  <Link className="nav-link" to="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pli=1">Download App</Link>
                </li>
                <span className="vertical-separator"></span>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Become a Supplier</Link>
                </li>
                <span className="vertical-separator"></span>
                <li className="nav-item">
                  <Link className="nav-link" to="https://www.meesho.io/news">Newsroom</Link>
                </li>
                <span className="vertical-separator"></span>
              </ul>

              <div className="navbar-icons d-flex align-items-center pe-4">
                <div className="icon-link position-relative profile-hover">
                  <div className="icon-container">
                    <i className="fa-regular fa-user icon"></i>
                    <span>Profile</span>
                  </div>
                 
                  <div className="dropdown-menu profile-dropdown">
                    
                    <Link to="/signUp">Sign Up</Link>
                    <Link to="/checkoutPage">My Orders</Link>
                    <Link to="/deleteAccount">Delete Account</Link>
                  </div>
                </div>

                <Link to="/cartpage" className="icon-link">
                  <div className="icon-container position-relative">
                    <i className="fa fa-shopping-cart icon"></i>
                    <span>Cart</span>
                    {cartItems.length > 0 && (
                      <span className="badge rounded-pill bg-danger position-absolute" style={{ top: "-10px", right: "-10px" }}>
                        {cartItems.length}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Navbar1 />
      </div>
    </>
  );
};

export default Navbar;

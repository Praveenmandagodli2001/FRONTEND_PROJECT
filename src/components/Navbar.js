import React from 'react';
import { Link } from 'react-router-dom';
import meeshoLogo from '../assets/image/messhoLogo.png';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* First Navbar */}
      <div className="fixed-navbar-container">
        <nav className="navbar navbar-expand-lg border-bottom navbar-light my-1">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={meeshoLogo} alt="Meesho" />
            </Link>

            {/* Search Bar */}
            <div className="navbar-search d-none d-lg-block flex-grow-1 mx-3">
              <form className="d-flex position-relative">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Try Saree, Kurti or Search by Product Code"
                  aria-label="Search"
                />
                <i
                  className="fas fa-search position-absolute search-icon"
                ></i>
              </form>
            </div>

            {/* Navbar Toggler for Mobile */}
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

            {/* Navbar Links and Icons */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav1">
              <ul className="navbar-nav align-items-center pe-3" style={{ fontSize: "14px" }}>
                <div class="icon-container">
                  <i class="fa-solid fa-mobile"></i>
                </div>
                <li className="nav-item" >
                  <Link className="nav-link" to="#">Download App</Link>
                </li>
                <span className="vertical-separator"></span>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Become a Supplier</Link>
                </li>
                <span className="vertical-separator"></span>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Newsroom</Link>
                </li>
                <span className="vertical-separator"></span>
              </ul>
              <div className="navbar-icons d-flex align-items-center pe-4">
                <Link to="#" className="icon-link">
                  <div className="icon-container">
                    <i className="fa-regular fa-user icon"></i>
                    <span>Profile</span>
                  </div>
                </Link>
                <Link to="#" className="icon-link">
                  <div className="icon-container">
                    <i className="fa fa-shopping-cart icon"></i>
                    <span>Cart</span>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </nav>

        {/* Second Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light border-bottom second-navbar">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex justify-content-around w-100 mb-0" style={{ fontSize: "13px" }}>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Women Ethnic</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/allSarees/">AllSarees</Link></li>
            <li><Link className="dropdown-item" to="/silkSarees/">SilkSarees</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Women Western</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/dresses/">Dresses</Link></li>
            <li><Link className="dropdown-item" to="/tops/">Tops</Link></li>
            <li><Link className="dropdown-item" to="/skirts/">Skirts</Link></li>
          </ul>
        </li>
        {/* <!-- Add more dropdown items as needed --> */}
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Men</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/TShirts/">T-Shirts</Link></li>
            <li><Link className="dropdown-item" to="#">Jeans</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Kids</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/dresses/">Dresses</Link></li>
          </ul>
        </li><li className="nav-item dropdown">
          <Link className="nav-link" to="#">Home & Kitchen</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Items</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Beauty & Health</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Items</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Bags & Footwear</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Dresses</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Electronics</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Dresses</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    </>
  );
};

export default Navbar;

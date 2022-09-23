import React from 'react'

import { Link } from 'react-router-dom'; 
function NavBar() {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div class="container">
    <Link to="/" class="navbar-brand fw-bold fs-4">Kisan-MART</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/product" class="nav-link">Products</Link>
        
        </li>
        <li class="nav-item">
        <Link to="/aboutus" class="nav-link">About Us</Link>
        </li>
        <li class="nav-item">
        <Link to="/contactus" class="nav-link">Contact US</Link>
        </li>
      </ul>
      <div className="buttons">
        <Link to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Login</Link>
        <Link to="/register" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Sign-Up</Link>
        <Link to="/cart" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Cart</Link>
      </div>
    </div>
  </div>
</nav>
</div>

  )
}

export default NavBar
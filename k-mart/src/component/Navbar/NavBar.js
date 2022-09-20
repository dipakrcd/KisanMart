import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../../images/img5.png";
import { Link } from 'react-router-dom';
function NavBar() {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container">
        <div className="navbar-brand" onClick={() => { history.push("/") }}>
          <img src={logo} alt="" width="130" height="65" className="d-inline-block align-text-top" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="nav">
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><button className="dropdown-item" >Vegetables</button></li>
                  <li><button className="dropdown-item" >Fruits</button></li>
                  <li><button className="dropdown-item" >Dairy Product</button></li>
                  <li><button className="dropdown-item" >Grocery</button></li>     
                </ul>
              </div>
            </li>
            <li className="nav-item">
                        <Link className="btn" to={'/aboutus'}>About us</Link>
                    </li>
                    <li className="nav-item justify-self-end">
                        <Link className="btn" to={'/contactus'}>Contact us</Link>
                    </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
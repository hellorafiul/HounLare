import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import fav from '../../images/fav.jpg'
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light font-primary bg-light">
        <div className="container container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mainmenu collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-danger link-hover" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger link-hover" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger link-hover" to="/service">Service</Link>
              </li>
              <li className="nav-item d-flex">
                <img src={fav} alt="" />
                <Link className="nav-link text-danger link-hover" to="/logout">LogOut</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger link-hover" to="/signup">signUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
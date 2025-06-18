import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/Logo.png"

const Header = () => {
  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand " to="/">
           
           <img src={logo} className="mx-lg-5" alt="error"/>
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center mx-5" id="collapsibleNavId">
            <ul className="navbar-nav  ">
              <li className="nav-item  mx-auto px-4  ">
                <NavLink className="nav-link " to="/" >
                  Home
                
                </NavLink>
              </li>
              <li className="nav-item mx-auto px-4 ">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item mx-auto px-4  ">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item mx-auto  px-4 ">
                <NavLink className="nav-link" to="/cars">
                  Cars
                </NavLink>
              </li>
              <li className="nav-item mx-auto  px-4  ">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            
            
              
            
              
            </ul>
            <NavLink className="nav-link" to="/booknow">
            <button  className=" mx-auto my-2  d-flex justify-content-center " >Book Now</button>
            </NavLink>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

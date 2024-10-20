import React from "react";
import icon from "./Untitled design (23)_edited.webp";
import "./style/navbar.css";
import { Outlet } from "react-router-dom";
const Navbar2 = () => {
  return (
    <>
      <div className="navbar" id="navbar2">
        <input type="checkbox" id="check" />

        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="icon">
          <a href="#home">
            <img src={icon} />
          </a>
        </div>
        <div className="navbar-list">
          <a className="list-item">HOME</a>
          <a className="list-item">SERVICES</a>
          <a className="list-item">PROJECTS</a>
          <a className="list-item">ABOUT US</a>
          <a className="list-item">BRANDS</a>
          <a className="contact">
            Contact us<div className="arrow"> →</div>
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar2;

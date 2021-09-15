import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Artboard – 1.png";

const Navbar = () => {
  return (
    <div className="container-fluid d-flex flex-row ">
      <div className="d-flex flex-row logo">
        <img src={logo} alt="" />
        <h4>VenttOut</h4>
      </div>
      <div className="btns d-flex flex-row">
        <h6>
          <a to="/home">Home</a>
        </h6>
        <button className="btn-1">
          <a to="/home">Sign up</a>
        </button>
        <button className="btn-2">
          <a to="/home">Log in</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from "../images/Artboard – 2.png";
import pic2 from "../images/Artboard – 3.png";
import pic3 from "../images/Artboard – 4.png";
import pic4 from "../images/Artboard – 5.png";

import pic5 from "../images/Ellipse 11.png";
import pic6 from "../images/Ellipse 12.png";
import pic7 from "../images/Ellipse 13.png";
import { motion } from "framer-motion";
import { photoAnim } from "../animation";

const Header = () => {
  return (
    <div className="header d-flex flex-column align-content-center justify-content-center text-center mt-5">
      <h1>
        Social Network for
        <br />
        <span>Universities</span>
      </h1>
      <h5 className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde
        ipsam!
      </h5>
      <button className="btn-3">Get Started</button>
      <motion.div
        variants={photoAnim}
        initial="hidden"
        animate="show"
        className="d-flex flex-row mt-5"
      >
        <div className="d-flex flex-column col-123">
          <div className="img1">
            <img src={pic6} alt="" />
          </div>
          <div className="img2">
            <img src={pic4} alt="" />
          </div>
          <div className="img3">
            <img src={pic7} alt="" />
          </div>
        </div>
        <div className="d-flex flex-column img4">
          <img src={pic1} alt="" />
        </div>
        <div className="d-flex flex-column col-789">
          <div className="img5">
            <img src={pic3} alt="" />
          </div>
          <div className="img6">
            <img src={pic5} alt="" />
          </div>
          <div className="img7">
            <img src={pic2} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

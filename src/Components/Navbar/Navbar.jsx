import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
       <div className="container">
        <div className="navRow">
          <a href="#" className="logo">
            <img src="/logo.svg" alt="" className="object_fit" />
          </a>
          <div className="navCenter">
            <ul className="list">
              <li className="list_item"><a className="list_item-link" href="#">Home</a></li>
              <li className="list_item"><a className="list_item-link" href="#">About</a></li>
              <li className="list_item"><a className="list_item-link" href="#">Resume</a></li>
              <li className="list_item"><a className="list_item-link" href="#">Portfolio</a></li>
              <li className="list_item"><a className="list_item-link" href="#">Testimonial</a></li>
              <li className="list_item"><a className="list_item-link" href="#">Blog</a></li>
              <li className="list_item"><a className="list_item-link" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="navRight">
            <a className="btn btn_CV" href="">
              Download CV
            </a>
          </div>
          {/* <h1>M Awais Faryad</h1> */}
        </div>
       </div>
      </nav>
  );
};
export default Navbar;

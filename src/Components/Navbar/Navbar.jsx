import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
       <div className="container">
        <div className="navRow">
          <a href="#" className="logo">
            <img src="/logo.svg" alt="" className="object_fit" />
          </a>
          <div className="navCenter">
            <ul className="list">
              <li className="list_item"><a className="list_item-link" href="#home">Home</a></li>
              <li className="list_item"><a className="list_item-link" href="#about">About</a></li>
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
          <div className="menu">
            <button className="btn_menu" href="#">
              <img className="object-fit menu_open" src="./Menu.svg" alt="" />
              <img className="object-fit menu_close" src="./Cross.svg" alt="" />
            </button>
          </div>
        </div>
       </div>
      </nav>
  );
};
export default Navbar;

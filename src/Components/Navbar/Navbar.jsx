import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };


  return (
    <nav id="navbar">
      <div className="container">
        <div className="navRow" >
          <a href="#" className="logo">
            <img src="/logo.svg" alt="" className="object_fit" />
          </a>
          <div className={`navCenter ${isActive ? 'show' : ''}`} >
            <ul className="list">
              <li className="list_item">
                <a className="list_item-link active" href="#home">Home</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#about">About</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#">Resume</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#">Portfolio</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#">Testimonial</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#">Blog</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navRight">
            <a className="btn btn_CV" href="">
              Download CV
            </a>
          </div>
          <div className="menu">
            <button className="btn_menu nav__toggle" href="#" onClick={toggleMenu}>
              <img className="object-fit menu_close" src="./Cross.svg" alt="" />
              <img className="object-fit menu_open" src="./Menu.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

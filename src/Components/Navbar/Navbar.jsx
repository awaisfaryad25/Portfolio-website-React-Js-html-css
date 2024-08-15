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
                <a className="list_item-link" href="#resume">Resume</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#testimonial">Testimonial</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#blog">Blog</a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#contact">Contact</a>
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
              <img className={`object-fit menu_open ${isActive ? 'close' : ''}`} src="./Menu.svg" alt="" />
              <img  className={`object-fit menu_close ${isActive ? 'open' : ''}`} src="./Cross.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

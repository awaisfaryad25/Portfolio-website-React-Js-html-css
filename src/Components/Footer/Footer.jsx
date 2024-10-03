import React from "react";
import "./Footer.css"
const footer = () => {
  return(
    <div className="footer">
      <div className="footerRow">
        <div className="footerCol">
          <h3 className="goldenText">Awais Wolf</h3>
        </div>
        <div className="footerCol footerCol-mob">
          <strong>Download</strong>
          <ul>
            <li><a href="">Desktop App</a></li>
            <li><a href="">Mac App</a></li>
            <li><a href="">Linux App</a></li>
          </ul>
          <strong>Services</strong>
          <ul>
            <li><a href="">Design</a></li>
            <li><a href="">Development</a></li>
            <li><a href="">Content</a></li>
          </ul>
        </div>
        <div className="footerCol footerCol-mob">
          <strong>Products</strong>
          <ul>
            <li><a href="">Web</a></li>
            <li><a href="">App</a></li>
            <li><a href="">Software</a></li>
            <li><a href="">Ecommerce</a></li>
          </ul>
          <strong>Company</strong>
          <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footerCol">
          <strong>Get In Touch</strong>
        </div>
      </div>
      <div className="footBg"></div>
    </div>
  );
};
export default footer;

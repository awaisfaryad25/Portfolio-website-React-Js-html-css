import React from "react";
import "./Footer.css"
const footer = () => {
  return(
    <div className="footer">
      <div className="footerRow">
        <div className="footerCol">
          <div className="footerName">
            <h3 className="goldenText footerAwais">Awais Wolf</h3>
            <img src="./wolf.svg" alt="" />
          </div>
        </div>
        <div className="footerCol footerCol-mob">
          <strong>Download</strong>
          <ul className="footerList">
            <li className="footerList-item"><a className="footerList-link" href="">Desktop App</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Mac App</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Linux App</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Other</a></li>
          </ul>
          <strong>Services</strong>
          <ul className="footerList">
            <li className="footerList-item"><a className="footerList-link" href="">Design</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Development</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Content</a></li>
          </ul>
        </div>
        <div className="footerCol footerCol-mob">
          <strong>Products</strong>
          <ul className="footerList">
            <li className="footerList-item"><a className="footerList-link" href="">Web</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">App</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Software</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Ecommerce</a></li>
          </ul>
          <strong>Company</strong>
          <ul className="footerList">
            <li className="footerList-item"><a className="footerList-link" href="">Privacy Policy</a></li>
            <li className="footerList-item"><a className="footerList-link" href="">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footerCol">
          <strong>Get In Touch</strong>
          <div className="">
            
          </div>
        </div>
      </div>
      <hr className="footerHr my-0"/>
      <div className="footerRights">
        <span>© 2024 Awais Faryad. All Rights Reserved</span>
      </div>
      <div className="footBg"></div>
    </div>
  );
};
export default footer;

import React from "react";
import "./ClientSlider.css";

const ClientSlider = () => {
  return (
    <div className="feedbackSlider">
      <div className="slider">
        <div className="sliderRapper">
          <div className="slider_col colLeft">
            <div className="slider_img">
              <img className="object-fit" src="./2.jpg" alt="" />
            </div>
            <div className="slider_title">
              <h4 className="my">John Martan</h4>
              <span>Ui/Ux Designer</span>
            </div>
          </div>
          <div className="sliderCol colRight">
            <div className="slider_content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, recusandae quaerat sed repellendus, est nulla repudiandae porro fugiat ipsum provident veniam explicabo laborum similique cupiditate animi eligendi corporis optio quasi.</p>
            </div>
            <div className="qouet">
              <img src="./qoutes.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="dots">
        <button className="dot-btn"></button>
      </div>
    </div>
  );
};

export default ClientSlider;
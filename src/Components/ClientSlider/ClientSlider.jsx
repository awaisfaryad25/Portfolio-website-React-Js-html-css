import React, { useState, useEffect } from "react";
import "./ClientSlider.css";

const ClientSlider = () => {

  const clientData = [
    {
      id : 1,
      name: "Jasmine Sandal",
      role:"Frontend Dev",
      image: "https://img.freepik.com/free-photo/business-woman-posing-street_23-2148213512.jpg?t=st=1725877935~exp=1725881535~hmac=236bf1f4fe181ebd430e1b30d14acbe440ddd0ec43a4c8dcb4b23f8a3686fe81&w=826",
      comment: "I appreciate Your work and the way of design very impressive. I will contect you soon for my further projects. “Exceptionally sterling delivery. The item was optimum and standout! The packaging was outstanding.”"
    },
    {
      id : 2,
      name: "Elena Martia",
      role:"Graphic Designing",
      image: "https://img.freepik.com/premium-photo/woman-black-jacket-is-standing-front-building_1165411-6606.jpg?uid=R156125114&ga=GA1.1.55140716.1719488327&semt=ais_hybrid",
      comment: "Their customer service is second to none.“The product quality is consistently outstanding, exceeding my expectations every time.” “I was completely impressed with their professionalism and customer service."
    },
    {
      id : 3,
      name: "IsaBella John",
      role:"Content Writing",
      image: "https://img.freepik.com/free-photo/reporter-sea_23-2148568138.jpg?t=st=1725878085~exp=1725881685~hmac=0e6064cad19e92b7505b55ed8b1495b19b20dc89c4390d38cc202bb1dc282ed0&w=360",
      comment: "Great client, excellent communication and every task had clear instructions which the client provided immediately after accepting the job. Looking forward to hearing from Michael again in future."
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((preSLide) =>
        preSLide === clientData.length - 1 ? 0 : preSLide + 1
      );
    }, 3000);

    return() => clearInterval(slideInterval);
  }, [currentSlide, clientData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className="feedbackSlider">
        {clientData.map((feedback, index) => (
      <div className={`slider, index === currentSlide ? "slide active" : "slide"`} key={feedback.id}>
          {index === currentSlide && (
            <div className="sliderRapper">
            <div className="slider_col colLeft">
              <div className="slider_img">
                {<img className="object-fit" src={feedback.image} alt="" />}
              </div>
              <div className="slider_title">
                <h4 className="my">{feedback.name}</h4>
                <span>{feedback.role}</span>
              </div>
            </div>
            <div className="sliderCol colRight">
              <div className="slider_content">
                <p>{feedback.comment}</p>
              </div>
              <div className="qouet">
                <img src="./qoutes.svg" alt="" />
              </div>
            </div>
            </div>
          )}
          
      </div>
        ))}

      <div className="dots">
      {clientData.map((_, index) => (
        <button onClick={() => goToSlide(index)} className={ index === currentSlide ? "active-dot" : "dot"} key={index}></button>
      ))}
      </div>
    </div>
  );
};

export default ClientSlider;
import { useState } from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ClientSlider from "./Components/ClientSlider/ClientSlider";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Resume from "./Components/resume/Resume";
import About from "./Components/about/About";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: '15px', // Add border-radius here
  overflow: 'hidden'
};

const center = {
  lat: 29.89993428613175, // latitude 
  lng: 72.35259870019031, // longitude 
};

function App() {

  return (
    <>
      <header id="header">
        <Navbar />
      </header>
      <main id="home">
        <section id="banner">
          <div className="bannerRapper">
            <div className="container">
              <div className="banner">
                <div className="banner_row">
                  <div className="banner_col">
                    <div className="bannerData">
                      <br />
                      <h1 className="awais my-0">
                        <img className=" myM" src="./m.svg" alt="" />
                        awais
                      </h1>
                      <h1 className="faryad my-0">FARYAD</h1>
                      <br />
                      <p className="nameShort my-0">
                        A passionate FrontEnd Developer in React Js based In
                        Lahore, PAK.
                      </p>
                      <p className="nameShort my-0">
                      Aspiring Software Developer with 6 months of experience developing web applications, I have contributed to several projects across industry. I thrive on tackling challenges and pushing the boundaries of web development through creativity and innovation.
                      </p>
                      <div className="social">
                        <a className="btnHire" href="#">
                          Hire Me
                        </a>
                        <img src="./hr.svg" alt="" />
                        <span>Follow Me</span>
                        <ul className=" --list-style list">
                          <li className="list_item">
                            <a
                              className="list_item-icn"
                              target="blank"
                              href="https://www.linkedin.com/in/awaisfaryad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            >
                              <img
                                className="object-fit"
                                src="./in.svg"
                                alt="LinkedIn"
                              />
                            </a>
                          </li>
                          <li className="list_item">
                            <a
                              className="list_item-icn"
                              target="blank"
                              href="https://www.instagram.com/awaiswolf?igsh=YmNla2JxbDB1Ymli"
                            >
                              <img
                                className="object-fit"
                                src="./insta.svg"
                                alt="Instagram"
                              />
                            </a>
                          </li>
                          <li className="list_item">
                            <a
                              className="list_item-icn"
                              target="blank"
                              href="https://www.facebook.com/awaisfaryad25/"
                            >
                              <img
                                className="object-fit"
                                src="./fb.svg"
                                alt="Facebook"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="banner_col1">
                    <div className="bannerProfile">
                      <div className="profile">
                        <img
                          className="object-fit"
                          src="./Home-Port1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="backBanner"></div>
          </div>
        </section>
        <section className="space-y-8 mt-12">
          <About/>
          <Resume/>
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <div className="portfolioRapper">
            <div className="container">
              <div className="portfolio">
                <div className="portfolioMain">
                  <h2 className="portfolioTitle goldenText">My Portfolio</h2>
                  <h3>My work that I did for my clients</h3>
                  <div className="portfolio_cetagory">
                    <a className="portfolio_cetagory-link" href="">
                      All
                    </a>
                    <a className="portfolio_cetagory-link" href="">
                      Populer
                    </a>
                    <a className="portfolio_cetagory-link" href="">
                      Latest
                    </a>
                  </div>
                  <div className="portfolioRow">
                    <div className="portfolioCol">
                      <div className="product">
                        <img
                          className="object-fit product_img"
                          src="/carRantel.jpg"
                          alt=""
                        />
                        <div className="product_brief">
                          <h4>Car Rental Service</h4>
                          <p className="my-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quas, et at nam facere reiciendis sequi rem
                            aliquam deleniti porro sit distinctio, rerum minima,
                            qui neque nesciunt a temporibus molestias similique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolioCol">
                      <div className="product">
                        <img
                          className="object-fit"
                          src="/pizza-point.jpg"
                          alt=""
                        />
                        <div className="product_brief">
                          <h4>Kashmiri Pizza</h4>
                          <p className="my-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quas, et at nam facere reiciendis sequi rem
                            aliquam deleniti porro sit distinctio, rerum minima,
                            qui neque nesciunt a temporibus molestias similique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolioCol">
                      <div className="product">
                        <img className="object-fit" src="/G14.jpg" alt="" />
                        <div className="product_brief">
                          <h4>Plant Growing App</h4>
                          <p className="my-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quas, et at nam facere reiciendis sequi rem
                            aliquam deleniti porro sit distinctio, rerum minima,
                            qui neque nesciunt a temporibus molestias similique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolioCol">
                      <div className="product">
                        <img className="object-fit" src="/G1.jpg" alt="" />
                        <div className="product_brief">
                          <h4>Another Planting App</h4>
                          <p className="my-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quas, et at nam facere reiciendis sequi rem
                            aliquam deleniti porro sit distinctio, rerum minima,
                            qui neque nesciunt a temporibus molestias similique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolioCol">
                      <div className="product">
                        <img className="object-fit" src="/T1.jpg" alt="" />
                        <div className="product_brief">
                          <h4>Admin Dadhboard</h4>
                          <p className="my-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quas, et at nam facere reiciendis sequi rem
                            aliquam deleniti porro sit distinctio, rerum minima,
                            qui neque nesciunt a temporibus molestias similique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolioCol">
                      <div className="product">
                        <img className="object-fit" src="/cards1.png" alt="" />
                        <div className="product_brief">
                          <h4>Shoes Store</h4>
                          <p className="my-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quas, et at nam facere reiciendis sequi rem
                            aliquam deleniti porro sit distinctio, rerum minima,
                            qui neque nesciunt a temporibus molestias similique.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="services">
          <div className="servicesRapper">
            <div className="container">
              <div className="services">
                <div className="servicesMain">
                  <h2 className="servicesTitle goldenText">Services</h2>
                  <h3>Never compromise with quality</h3>
                  <div className="servicesRow">
                    <div className="servicesCol">
                      <div className="card servicesCard">
                        <div className="service-logo logo-react">
                          <div className="card-logo">
                            <img
                              className="object-fit"
                              src="/react.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="card-brief">
                          <h4 className="servicesCard_title">
                            Web Development
                          </h4>
                          <span>
                            Web development is the building and maintenance of
                            websites. it's the work that...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="servicesCol">
                      <div className="card servicesCard">
                        <div className="service-logo logo-react">
                          <div className="card-logo">
                            <img
                              className="object-fit"
                              src="/uiux.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="card-brief">
                          <h4 className="servicesCard_title">UI / UX Design</h4>
                          <span>
                            Web development is the building and maintenance of
                            websites. it's the work that...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="servicesCol">
                      <div className="card servicesCard">
                        <div className="service-logo logo-react">
                          <div className="card-logo">
                            <img
                              className="object-fit"
                              src="/paint.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="card-brief">
                          <h4 className="servicesCard_title">Graphic Design</h4>
                          <span>
                            Web development is the building and maintenance of
                            websites. it's the work that...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="servicesCol">
                      <div className="card servicesCard">
                        <div className="service-logo logo-react">
                          <div className="card-logo">
                            <img
                              className="object-fit"
                              src="/wordpress.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="card-brief">
                          <h4 className="servicesCard_title">CMS Design</h4>
                          <span>
                            Web development is the building and maintenance of
                            websites. it's the work that...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="servicesCol">
                      <div className="card servicesCard">
                        <div className="service-logo logo-react">
                          <div className="card-logo">
                            <img
                              className="object-fit"
                              src="/writing.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="card-brief">
                          <h4 className="servicesCard_title">
                            Content Writing
                          </h4>
                          <span>
                            Web development is the building and maintenance of
                            websites. it's the work that...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="servicesCol">
                      <div className="card servicesCard">
                        <div className="service-logo logo-react">
                          <div className="card-logo">
                            <img
                              className="object-fit"
                              src="/react.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="card-brief">
                          <h4 className="servicesCard_title">Data Entry</h4>
                          <span>
                            Web development is the building and maintenance of
                            websites. it's the work that...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feedback */}
        <section id="feedback">
          <div className="feedbackRapper">
            <div className="container">
              <div className="feedback">
                <div className="feedbackMain">
                  <h2 className="feedbackTitle goldenText">Feedback</h2>
                  <h3>What People Say About Me</h3>
                  <div className="feedbackRow">
                    <ClientSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="contactRapper">
            <div className="container">
              <div className="contact">
                <div className="contactMain">
                  <h2 className="contactTitle goldenText">Contact Us</h2>
                  <div className="contactRow">
                    <div className="contactCol contactCol-form">
                      <div className="contactAbout">
                        <h5 className="contactTouch">Get in touch</h5>
                        <h4 className="contactAbout-title">Let's Chat, Reach out to Us</h4>
                        <p>
                          Have a question or feedback? We are here to help. Send
                          us a message, and we'll respond within 24 hours.
                        </p>
                      </div>
                      <hr />
                      <form action="" className="contactForm">
                        <div className="formInput">
                          <label htmlFor="">First Name</label>
                          <br />
                          <input type="text" />
                        </div>
                        <div className="formInput">
                          <label htmlFor="">Last Name</label>
                          <br />
                          <input type="text" />
                        </div>
                        <div className="formInput">
                          <label htmlFor="">Email</label>
                          <br />
                          <input type="email" />
                        </div>
                        <div className="formInput">
                          <label htmlFor="">Message</label>
                          <br />
                          <textarea name="" id=""></textarea>
                        </div>
                        <div className="formInput">
                          <input type="checkbox" />
                          <span>
                            I agreed to our friendly{" "}
                            <a href="">privacy policy</a>
                          </span>
                        </div>
                        <div className="contactSnd">
                          <button className=" contactBtn">Send Message</button>
                        </div>
                      </form>
                    </div>
                    <div className="contactCol contactCol-map">
                      <div className="mapWrapper">
                        <LoadScript googleMapsApiKey="AIzaSyBs9rGNv2ed2_VbvC5U7SJI3bRoZnemvWA">
                          <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={12}
                          >
                            <Marker position={center} />
                          </GoogleMap>
                        </LoadScript>
                      </div>
                      <div className="contactInfoWrapper">
                        <div className="contactInfo">
                          <i className="contactInfo-icn">
                            <img src="" alt="" />
                          </i>
                          <div className="">
                            <h4>Email</h4>
                            <span>awaisfaryad25@gmail.com</span>
                          </div>
                        </div>
                        <div className="contactInfo">
                          <i className="contactInfo-icn">
                            <img src="" alt="" />
                          </i>
                          <div className="">
                            <h4>Phone Number</h4>
                            <span>+923012525017</span>
                          </div>
                        </div>
                        <div className="contactInfo">
                          <i className="contactInfo-icn">
                            <img src="" alt="" />
                          </i>
                          <div className="">
                            <h4>Address</h4>
                            <address>Wapda Town, Lahore</address>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <br /><br />
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;

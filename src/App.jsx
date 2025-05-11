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
import Services from "./Components/services/Services";
import Feedback from "./Components/feedback/Feedback";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";

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
          <Portfolio/>
          <Services/>
          <Feedback/>
          <Contact/>
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

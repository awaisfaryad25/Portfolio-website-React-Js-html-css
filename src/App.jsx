import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

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
                        <img className="object-fit myM" src="./m.svg" alt="" />
                        awais
                      </h1>
                      <h1 className="faryad my-0">FARYAD</h1>
                      <br />
                      <p className="nameShort my-0">
                        A passionate FrontEnd Developer in React Js based In
                        Lahore, PAK.
                      </p>
                      <p className="nameShort my-0">
                        Aspiring React Developer, 6 months of hands-on
                        experience with HTML and CSS and 3 months of experience
                        with JavaScript and React.js.
                      </p>
                      <div className="social">
                        <a className="btnHire" href="#">
                          Hire Me
                        </a>
                        <img src="./hr.svg" alt="" />
                        <span>Follow Me</span>
                        <ul className=" --list-style list">
                          <li className="list_item">
                            <a className="list_item-icn" href="">
                              <img
                                className="object-fit"
                                src="./in.svg"
                                alt="LinkedIn"
                              />
                            </a>
                          </li>
                          <li className="list_item">
                            <a className="list_item-icn" href="">
                              <img
                                className="object-fit"
                                src="./insta.svg"
                                alt="Instagram"
                              />
                            </a>
                          </li>
                          <li className="list_item">
                            <a className="list_item-icn" href="">
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
        <section id="about">
          <div className="aboutRapper">
            <div className="container">
              <div className="about">
                <div className="aboutMain">
                  <h2 className="aboutTitle">About Me</h2>
                  <div className="aboutRow">
                    <div className="aboutCol">
                      <div className="imageRapper">
                        <div className="card cardImg">
                          <img className="object-fit" src="../WW.jpg" alt="" />
                        </div>
                        <div className="card cardInfo">
                          <h6>Name</h6>
                          <strong>M Awais Faryad</strong>
                          <hr />
                          <h6>Father Name</h6>
                          <strong>Muhammad Faryad</strong>
                          <hr />
                          <h6>Phone </h6>
                          <strong>+92 301 2525017</strong>
                          <hr />
                          <h6>Mail</h6>
                          <strong>awaisfaryad25@gmail.com</strong>
                          <hr />
                          <h6>Address</h6>
                          <strong>Wapda Town, Lahore</strong>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="aboutCol1">
                      <div className="dataRap">
                        <strong className="myRole">Web Designer</strong>
                        <br />
                        <strong className="myRole">Frontend Developer</strong>
                        <p className="my-0">
                          A passionate FrontEnd Developer in React Js based In
                          Lahore, PAK.
                        </p>
                        <p className="my-">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Deleniti odit laborum assumenda sequi totam vel?
                          Ea blanditiis eligendi debitis ipsum. Iure architecto
                          reprehenderit, esse itaque ut illum sunt assumenda
                          maiores incidunt exercitationem dolores repellendus
                          eos nesciunt, est eum aspernatur rem optio commodi
                          repellat praesentium alias. In possimus placeat
                          commodi nihil!
                        </p>
                        <div className="btnRap">
                        <a className="btn btn_cv" href="">Download CV</a>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

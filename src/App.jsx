import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ClientSlider from "./Components/ClientSlider/ClientSlider";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
                          <address>Wapda Town, Lahore</address>
                          <strong></strong>
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
                          <a className="btn btn_cv" href="">
                            Download CV
                          </a>
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
        <section id="resume">
          <div className="resumeRapper">
            <div className="container">
              <div className="resume">
                <div className="resumeMain">
                  <h2 className="resumeTitle goldenText">My Resume</h2>
                  <div className="resumeRow">
                    {/* Let Col */}
                    <div className="resumeCol">
                      <div className="experience">
                        <h3 className="resume_mainHeading">Experience</h3>
                        <div className="company">
                          <h4 className="resume_subHeading">
                            Shopify Frontend Developer
                          </h4>
                          <span className="lightText">
                            Alpha Rages, High Q. Tower Lahore{" "}
                          </span>
                          <blockquote className="lightText mt-0">
                            Design and develop custom Shopify themes to enhance
                            user experience and drive sales. Collaborate with
                            design and marketing teams to implement responsive
                            and user-friendly interfaces. Utilize HTML, CSS,
                            JavaScript, and Liquid to create and customize
                            Shopify themes.
                          </blockquote>
                        </div>
                        <div className="company">
                          <h4 className="resume_subHeading">
                            Frontend Internship
                          </h4>
                          <span className="lightText">
                            Enigmatix PVT Ltd. Bahawalpur{" "}
                          </span>
                          <blockquote className="lightText mt-0">
                            This Internship was intended to learn frontend
                            development. I’ve complete grip on frontend
                            development with mobile responsive and have
                            practiced basics of react library.
                          </blockquote>
                        </div>
                      </div>
                      <hr />
                      {/* Projects Section */}
                      <div className="projectRapper">
                        <h3 className="resume_mainHeading">Projects</h3>
                        <div className="project">
                          <h4 className="project_title">
                            Todo List App in React Js.
                          </h4>
                          <span className="project_subtitle lightText">
                            Technologies:
                          </span>
                          <blockquote className="project_descript lightText my-0">
                            React Js, HTML, CSS and JavaScript.
                          </blockquote>
                          <span className="project_subtitle lightText ">
                            Description:
                          </span>
                          <blockquote className="project_descript lightText mt-0">
                            Task add, update and delete. After a task done you
                            can move to task submit/done list.
                          </blockquote>
                        </div>

                        <div className="project">
                          <h4 className="project_title">Motu Dev Store</h4>
                          <span className="project_subtitle lightText">
                            Technologies:
                          </span>
                          <blockquote className="project_descript lightText my-0">
                            HTML, CSS and JavaScript.
                          </blockquote>
                          <span className="project_subtitle lightText">
                            Description:
                          </span>
                          <blockquote className="project_descript lightText mt-0">
                            Design different sections of e-commerce website.
                            i.e. Header, Footer, Mega Menu, Product details
                            card, contact us, cart-page.
                          </blockquote>
                        </div>

                        <div className="project">
                          <h4 className="project_title">REJUVENATE SPA.</h4>
                          <span className="project_subtitle lightText">
                            Technologies:
                          </span>
                          <blockquote className="project_descript lightText my-0">
                             HTML, CSS and JavaScript.
                          </blockquote>
                          <span className="project_subtitle lightText">
                            Description:
                          </span>
                          <blockquote className="project_descript lightText mt-0">
                          Rewrote HTML, CSS and Js to enhance structure and styling according to
                          modern web standards. Applied a mobile-first approach to ensure optimal 
                          performance and responsiveness across all devices. Implemented best practices 
                          for accessibility and cross-browser compatibility.
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    {/* Right Col */}
                    <div className="resumeCol1">
                      <div className="education">
                        <h3 className="resume_mainHeading">Education</h3>
                        <h4 className="resume_subHeading">
                          BS in Computer Science
                        </h4>
                        <span className="lightText">
                          COMSATS University Islamabad
                        </span>
                      </div>
                      <hr />
                      <div className="professionalSkills">
                        <h3 className="resume_mainHeading">SKILLS</h3>
                        <h4 className="resume_subHeading">Languages</h4>
                        <blockquote className="mt-0">
                          <h5>HTML5</h5>
                          <progress value={85} max={100}></progress>
                          <h5>CSS</h5>
                          <progress value={75} max={100}></progress>
                          <h5>SASS</h5>
                          <progress value={75} max={100}></progress>
                          <h5>JavaScript</h5>
                          <progress value={75} max={100}></progress>
                        </blockquote>

                        <h4 className="resume_subHeading">
                          Framework / Libraries
                        </h4>
                        <blockquote className="mt-0">
                          <h5>React Js</h5>
                          <progress value={55} max={100}></progress>
                          <h5>Tailwind</h5>
                          <progress value={85} max={100}></progress>
                          <h5>Material Ui</h5>
                          <progress value={65} max={100}></progress>
                        </blockquote>

                        <h4 className="resume_subHeading">Tools</h4>
                        <blockquote className="mt-0">
                          <h5 className="my-0">Git</h5>
                          <progress
                            className="my-0"
                            value={55}
                            max={100}
                          ></progress>
                          <h5>Figma</h5>
                          <progress value={85} max={100}></progress>
                          <h5>Photoshop</h5>
                          <progress value={50} max={100}></progress>
                        </blockquote>
                      </div>
                      <hr />
                      <div className="otherSkills">
                        <h3 className="resume_mainHeading">Other Skills</h3>
                        <blockquote>
                          <h5>Responsive Design</h5>
                          <progress value={90} max={100}></progress>

                          <h5>Ui Design</h5>
                          <progress value={80} max={100}></progress>

                          <h5>Graphic Design</h5>
                          <progress value={60} max={100}></progress>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

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
        <About/>
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
                        Aspiring Software Developer with 6 months of experience developing web applications, I have
contributed to projects across industries such as Construction Management, Tourism, Solar
Systems, Cleaning Management, Shipment Management, Custom Dashboards, CRM solutions,
and Responsive Single-Page Applications (SPAs). I thrive on tackling challenges and pushing the
boundaries of web development through creativity and innovation.
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
        <section>
          <Resume/>
        </section>

        {/* <section id="resume">
          <div className="resumeRapper">
            <div className="container">
              <div className="resume">
                <div className="resumeMain">
                  <h2 className="resumeTitle goldenText">My Resume</h2>
                  <div className="resumeRow">
                    <div className="resumeCol">
                      <div className="experience">
                        <h3 className="resume_mainHeading">Experience</h3>
                        <div className="company">
                          <h4 className="resume_subHeading">
                          Associate Software Developer
                          </h4>
                          <span className="lightText">
                            CodeMiners IT & Consultancy ( Sep 2024 Present )
                          </span>
                          <blockquote className="lightText mt-0">
                            <ul className="list-disc">
                              <li>Collaborate with cross-functional teams to deliver high quality, user-focused solutions.</li>
                              <li>Develop responsive and dynamic web applications using React.js, ensuring seamless user experiences across devices.</li>
                              <li>Integrate RESTful APIs for efficient data handling and backend communication</li>
                              <li>Utilize Redux for state management to create scalable and maintainable applications.</li>
                              <li>Implement payment gateway integrations to enable secure and reliable transactions.</li>
                            </ul>
                          </blockquote>
                        </div>
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
                        
                      </div>
                      <hr />
                      <div className="projectRapper">
                        <h3 className="resume_mainHeading">Projects</h3>
                        <div className="project">
                          <h4 className="project_title">
                          Helper log Super Admin Panel.
                          </h4>
                          <blockquote className="project_descript lightText my-0">
                            Technologies: React, Tailwind, JSX, Redux, REST APIs.
                          </blockquote>
                          <blockquote className="project_descript lightText mt-0">
                            Contributed significantly to the development of a comprehensive shipment
                            management dashboard aimed at streamlining parcel and shipment workflows. Key
                            responsibilities included.
                            <ul className="list-disc">
                              <li>Implemented Manifest Management to add, track, and view shipment manifests withsecure document handling</li>
                              <li>Developed functionality for creating and managing Purchase Orders (POs), Invoices, and detailed Invoice Items linked to manifests</li>
                              <li>Built modules for Agent Management (middlemen) and Runner Management (delivery personnel), enabling seamless addition, viewing, and deletion of records</li>
                              <li>Ensured a secure and user-friendly interface for Super Admin Login and Signup functionalitie</li>
                            </ul>	
                          </blockquote>
                        </div>
                        <div className="project">
                          <h4 className="project_title">GhoomoPhiroo Pakistan Tourist Web App</h4>
                          <blockquote className="project_descript lightText my-0">
                            Technologies: React, Tailwind, JSX, Redux, REST APIs, Payment gateway.
                          </blockquote>
                          <blockquote className="project_descript lightText mt-0">
                            Developed an engaging and user-friendly tourist web application for exploring and
                            booking travel experiences across Pakistan. Key contributions include	
                            <ul className="list-disc">
                              <li>Tours and Hotels: Showcased a wide range of tours and hotels with interactive listing and detailed exploration pages</li>
                              <li>Trip Bookings and Tickets: Implemented seamless trip booking functionality, including ticket generation and management</li>
                              <li>Lucky Draw: Developed a lottery based trip selection system, enabling users to win trips and ensuring efficient lucky draw management</li>
                              <li>Destination Management: Built modules to display, manage, and organize popular destinations, reviews, and events, along with their detailed pages</li>
                              <li>Content Pages: Designed About Us, Contact Us, and Privacy Policy pages to provide essential information to users</li>
                              <li>Admin Panel: Created a robust admin dashboard to update, manage, and maintain all app data, including tours, hotels, destinations, and user-generated content.</li>
                              <li>This project focused on creating an immersive experience for users while ensuring seamless backend data management for administrators.</li>
                            </ul>
                          </blockquote>
                        </div>
                      </div>
                    </div>
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
                        <h4 className="resume_subHeading mt-2">Languages</h4>
                        <blockquote className="mt-2">
                          <h5>HTML5</h5>
                          <progress value={85} max={100}></progress>
                          <h5>CSS</h5>
                          <progress value={75} max={100}></progress>
                          <h5>SASS</h5>
                          <progress value={75} max={100}></progress>
                          <h5>JavaScript</h5>
                          <progress value={75} max={100}></progress>
                        </blockquote>

                        <h4 className="resume_subHeading mt-4">
                          Framework / Libraries
                        </h4>
                        <blockquote className="mt-2">
                          <h5>React Js</h5>
                          <progress value={55} max={100}></progress>
                          <h5>Tailwind</h5>
                          <progress value={85} max={100}></progress>
                          <h5>Material Ui</h5>
                          <progress value={65} max={100}></progress>
                          <h5>Axios</h5>
                          <progress value={75} max={100}></progress>
                          <h5>Redux</h5>
                          <progress value={55} max={100}></progress>
                          <h5>Socket.io</h5>
                          <progress value={65} max={100}></progress>
                        </blockquote>

                        <h4 className="resume_subHeading mt-4">Tools</h4>
                        <blockquote className="mt-2">
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
                      <hr className="my-4" />
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
        </section> */}

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

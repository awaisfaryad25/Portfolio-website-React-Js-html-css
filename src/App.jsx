import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <section>
      <div className="bannerRapper">
        <div className="container">
          <div className="banner">
            <div className="banner_row">
              <div className="banner_col">
                <div className="bannerData">
                  <br />
                  <h1 className='awais my-0'>
                  <img className="object-fit myM" src="./m.svg" alt="" />
                    awais</h1>
                  <h1 className='faryad my-0'>FARYAD</h1>
                  <p className='nameShort my-0'>A passionate FrontEnd Developer in React Js based In Lahore, PAK.</p>
                  <p className='nameShort my-0'>Aspiring React Developer, 6 months of hands-on experience with HTML and CSS and 
                    3 months of experience with JavaScript and React.js.</p>
                  <div className="social">
                    <a className='btnHire' href="#">Hire Me  </a>
                    <img src="./hr.svg" alt="" />
                    <span>Follow Me</span>
                    <ul className='list --list-style'>
                      <li className='list_item'><a className='list_item-icn' href=""><img className='object-fit' src="./in.svg" alt="LinkedIn" /></a></li>
                      <li className='list_item'><a className='list_item-icn' href=""><img className='object-fit' src="./insta.svg" alt="Instagram" /></a></li>
                      <li className='list_item'><a className='list_item-icn' href=""><img className='object-fit' src="./fb.svg" alt="Facebook" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="banner_col1">
                <div className="bannerProfile">
                  <div className="profile">
                    <img className='object-fit' src="./Home-Port1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backBanner"></div>
      </div>
    </section>
    </>
  )
}

export default App

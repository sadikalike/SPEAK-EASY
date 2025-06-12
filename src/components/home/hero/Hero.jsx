import {React,useEffect} from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { Password } from "@mui/icons-material"


const Hero = () => {
  
       return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <h1>Speak English with Confidence. Learn with SKILLON.</h1>
            <p>Join 1000+ learners on a journey to fluency with our personalized, brain-based training system.
</p>
            <div className='button'>
          
              <button className='primary-btn'>
              <Link to="/about">
  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
</Link>

              </button>
              <button>
                <Link to="/courses">
  VIEW COURSE<i className="fa fa-long-arrow-alt-right"></i>
</Link>
              </button>
            </div>
          </div>
                 </div>
      </section>
      <a className="whatsapp-link" href="https://wa.me/918217436350" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <div className='margin'></div>
    </>
  )
}

export default Hero

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
 <a
  href="https://wa.me/7510436350"
  target="_blank"
  className="whatsapp-link"
>
  <i className="fab fa-whatsapp"></i>
</a>

        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero

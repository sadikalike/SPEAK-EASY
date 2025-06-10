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
            <Heading title='Skillon — Your Gateway to Confident English' />
            <p>Fluency is not a dream. It’s a system. Let Skillon guide you.</p>
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
      <div className='margin'></div>
    </>
  )
}

export default Hero

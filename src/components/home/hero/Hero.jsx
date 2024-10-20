import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='ಕನ್ನಡದ ಮೂಲಕ ಇಂಗ್ಲೀಷ್ ಕಲಿಯೋಣ..' title='Best Online Education Expertise' />
            <p>"Master Any Language, Anytime, Anywhere</p>
            <div className='button'>
              <button className='primary-btn'>
              <Link to="/courses">
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

import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='ಕನ್ನಡದ ಮೂಲಕ ಇಂಗ್ಲೀಷ್ ಕಲಿಯೋಣ..' title='Best Online Education Expertise' />
            <p>"Master Any Language, Anytime, Anywhere – Your Journey to Fluency Starts Here!"</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
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

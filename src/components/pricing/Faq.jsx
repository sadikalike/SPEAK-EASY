import React, { useRef, useState } from "react"
import { faq } from "../../dummydata"
import Heading from "../common/heading/Heading"

const Faq = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
     
     <div className="htt"><Heading title='Frequently Asked Questions' /></div>
      <section className='faq'>
        <div className='container'>
          {faq.map((val, index) => (
            <div className='box'>
              <button className='accordion' onClick={() => toggle(index)} key={index}>
                <h2>{val.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
        <section className='contacts padding'>
        <div className='container shadow flexSB'>
          {/* <div className='left row'>
            <iframe src={map}></iframe>
          </div> */}
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Mangaluru, Dakshina Kannada , Karnataka</p>
              
              {/* <div className='box'>
                <h4>EMAIL:</h4>
                <p> speakeasy</p>
              </div> */}
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+91 7025191020</p>
              </div>
            </div></div>

           <form action=''>
  <div className='flexSB'>
    <input type='text' placeholder='Name' />
    <input type='email' placeholder='Email' />
  </div>
  <input type='text' placeholder='Subject' />
  <textarea cols='30' rows='10' placeholder='Create a message here...'></textarea>
  
  <button className='primary-btnn'>SEND MESSAGE</button>
</form>


            {/* <h3>Follow us here</h3> */}
            <p></p>
{/* <div className="media">
           <a href="https://www.facebook.com/profile.php?id=61566606833059&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
    <i className='fab fa-facebook-f icon'></i>
  </a>
  <a href="https://www.instagram.com/speak_easy_kannada313?igsh=MWE3dnJjdHltN3A4Mw==" target="_blank" rel="noopener noreferrer">
    <i className='fab fa-instagram icon'></i>
  </a>
  <a href="https://www.threads.net/@speak_easy_kannada313" target="_blank" rel="noopener noreferrer">
    <i className='fab fa-twitter icon'></i>
  </a>
  <a href="https://www.youtube.com/@Speakeasy_delighted.313CM" target="_blank" rel="noopener noreferrer">
    <i className='fab fa-youtube icon'></i>
  </a>
          </div> */}
          </div>
        </div>
      </section>

    </>
  )
}

export default Faq

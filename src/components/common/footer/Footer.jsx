import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left-row'>
            <h2>ಕನ್ನಡದ ಮೂಲಕ ಸುಲಭವಾದ ರೀತಿಯಲ್ಲಿ ಇಂಗ್ಲೀಷ್ ಕಲಿಯೋಣ...</h2>
            <span>ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ WhatsApp chat ಮೂಲಕ ತಿಳಿಸಿ</span>
          </div>
          <div className="right-row">
  <a href="https://wa.me/message/623IU7KBDAFIH1" target="_blank" rel="noopener noreferrer">
    Whtasapp Now<i className=" fab fa-whatsapp icon"></i>

  </a>
  </div>

        </div>
      </section>
      <footer>
        <div className='container-padding'>
          <div className='box logo'>
           <h2 className="speak">ENGLISH GUIDE</h2>

           {/* <img className="speaklogo" src='./images/logooo.jpg' alt='' /> */}
            <span>ONLINE EDUCATION & LEARNING</span>
           <p></p>
<div className="socialmedia">
           <a href="https://www.facebook.com/profile.php?id=61566606833059&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
    <i className='fab fa-facebook-f icon'></i>
  </a>
  <a href="https://www.instagram.com/englishguide_kannada?igsh=MWE3dnJjdHltN3A4Mw==" target="_blank" rel="noopener noreferrer">
    <i className='fab fa-instagram icon'></i>
  </a>
  <a href="https://www.threads.net/@englishguide_kannada" target="_blank" rel="noopener noreferrer">
    <i className='fab fa-twitter icon'></i>
  </a>
  <a href="https://www.youtube.com/@Englishguide_delighted.313CM " target="_blank" rel="noopener noreferrer">
    <i className='fab fa-youtube icon'></i>
  </a>
          </div>
          </div>
          <div className='box-link'>
            
            
     <a href="/">Home |</a>      
  <a href="/about">About Us |</a>
    <a href="/courses">Courses |</a>
  <a href="/pricing">Pdf&Price |</a>
  <a href="/contact">Contact Us </a>
  
            
          </div>
          {/* <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div> */}
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          {/* <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div> */}
        </div>
    </footer>
     
     
     

      <div className='legal'>
        <p>
          Copyright ©2024 English guide All rights reserved |</p><p> Design And Developed By Cm-delight
        </p>
      </div>
    </>
  )
}

export default Footer
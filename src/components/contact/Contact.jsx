 import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
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
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              
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

export default Contact

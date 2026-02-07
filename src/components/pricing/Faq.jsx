import React, { useState } from "react"
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
      <div className="htt">
        <Heading title="Frequently Asked Questions" />
      </div>

      <section className="faq">
        <div className="container">
          {faq.map((val, index) => (
            <div className="box" key={index}>
              <button
                className="accordion"
                onClick={() => toggle(index)}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>

              {click === index && (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91 7025191020</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Create a message here..."
              ></textarea>

              <button className="primary-btnn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq

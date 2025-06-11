import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { Heading } from "@chakra-ui/react"


const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'> 
       
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  {/* <div className='img'>
                    <img src={val.cover} alt='' />
                  </div> */}
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  {/* <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div> */}
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            {/* <img src={details.dcover} alt='' /> */}
                          </div>
                          <div className='para'>
                            {/* <h4>{details.name}</h4> */}
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div> */}
              <div className="enq">
             <button className='outline-btn' onClick={() => window.open("https://wa.me/message/623IU7KBDAFIH1", "_blank")}>
  ENQUERY NOW 
  {/* <i className="fab fa-whatsapp icon"></i> */}
</button>
</div>
              
            </div>
          ))}
          <div className="code"><ul><h2>Ready to Speak English Fluently?</h2>
          <li>👉 Book your Free Demo Session now and experience our unique learning system.</li>
          <li>👉 100% satisfaction or full refund within 7 days — no questions asked.</li></ul>
          <h4 className="get">[Get Started] [Talk to a Trainer] [Join on WhatsApp]</h4></div>
        </div>
      </section>
    </>
  )
}

export default CoursesCard

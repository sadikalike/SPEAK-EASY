import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span>₹</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          {/* <div className="enq"> */}
             <button className='outline-btn' onClick={() => window.open("https://wa.me/message/623IU7KBDAFIH1", "_blank")}>
  BUY NOW 
  {/* <i className="fab fa-whatsapp icon"></i> */}
</button>
</div>
        // </div>
      ))}
    </>
  )
}

export default PriceCard
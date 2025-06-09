import React from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='slider-wrapper'>
            <div className='track'>
              {testimonal.concat(testimonal).map((val, index) => (  // duplicate for looping effect
                <div className='items shadow' key={index}>
                  <div className='box flex'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      <i className='fa fa-quote-left icon'></i>
                    </div>
                    <div className='name'>
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;

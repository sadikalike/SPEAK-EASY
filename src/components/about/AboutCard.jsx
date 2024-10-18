import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import { useInView } from 'react-intersection-observer';

const AboutCard = () => {
  // Using Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers each time it enters view
    threshold: 0.2, // Element should be 20% visible to trigger
  });

  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          {/* Left side with image */}
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>

          {/* Right side with content */}
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />

            {/* Applying the scroll animation on the container */}
            <div className={`items ${inView ? 'visible' : ''}`} ref={ref}>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' key={val.id}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;

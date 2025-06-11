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
          {/* <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div> */}

          {/* Right side with content */}
          <div className='right row'>
      <div className="ben"  >   <Heading  title='Welcome to SKILLON English Academy' /></div> 
<h3 className="skill">

At SKILLON, we believe learning English should be simple, practical, and powerful. Our mission is to help learners overcome fear and speak confidently in real-life situations using our proven 25-Code Learning System, Mind Mapping Learning Method, and Psychology-Based Coaching.

Whether you're a student, professional, or homemaker — we tailor your learning journey based on your goals.</h3>
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
           <div className="code">
  
  <ul className="code">
    <h2>Why Choose SKILLON?</h2>
    <li>One-on-One Coaching – Individual attention for faster progress</li>
    <li>25 Learning Codes – A unique system designed for easy understanding</li>
    <li>Mind Mapping Learning System – Learn the natural way your brain remembers</li>
    <li>Psychological Support Techniques – Build confidence from within</li>
    <li>Flexible Timings – Learn anytime, from anywhere</li>
    <li>Practical Approach – Focused on speaking, listening, and real conversation</li>
  </ul>
</div>
   <div className="code"><ul>
    <h2>What You'll Learn</h2>
    <li>Grammar Made Simple</li>
<li>Vocabulary for Everyday Situations</li>
<li> Real-World Speaking Practice</li>
<li>Pronunciation & Accent Training</li>
<li>Confidence-Building Exercises</li>
<li>Listening & Response Skills</li>
<li>Interview & Presentation Trainin</li>
</ul></div>

          </div>
          
        </div>
      </section>
    </>
  );
};

export default AboutCard;
import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import { useInView } from 'react-intersection-observer';

const AboutCard = () => {
  const { ref: benRef, inView: benInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: codeRef, inView: codeInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: codeRef2, inView: codeInView2 } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: itemRef, inView: itemInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>

          <div className='right row'>

            {/* Heading and Introduction with Left-to-Right Animation */}
            <div className={`ben ${benInView ? 'slide-in-left' : ''}`} ref={benRef}>
              <Heading title='Welcome to SKILLON English Academy' />
              <h3 className="skill">
                At SKILLON, we believe learning English should be simple, practical, and powerful. Our mission is to help learners overcome fear and speak confidently in real-life situations using our proven 25-Code Learning System, Mind Mapping Learning Method, and Psychology-Based Coaching.

                Whether you're a student, professional, or homemaker — we tailor your learning journey based on your goals.
              </h3>
            </div>

            {/* First Code Section - Scroll Up Animation */}
            <div className={`code ${codeInView ? 'code-appear' : ''}`} ref={codeRef}>
              <ul>
                <h2>Why Choose SKILLON?</h2>
                <li>One-on-One Coaching – Individual attention for faster progress</li>
                <li>25 Learning Codes – A unique system designed for easy understanding</li>
                <li>Mind Mapping Learning System – Learn the natural way your brain remembers</li>
                <li>Psychological Support Techniques – Build confidence from within</li>
                <li>Flexible Timings – Learn anytime, from anywhere</li>
                <li>Practical Approach – Focused on speaking, listening, and real conversation</li>
              </ul>
            </div>

            {/* Animated Cards Section */}
            <div className={`items ${itemInView ? 'visible' : ''}`} ref={itemRef}>
              {homeAbout.map((val) => (
                <div className='item flexSB' key={val.id}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Code Section - Scroll Up Animation */}
            <div className={`code ${codeInView2 ? 'code-appear' : ''}`} ref={codeRef2}>
              <ul>
                <h2>What You'll Learn</h2>
                <li>Grammar Made Simple</li>
                <li>Vocabulary for Everyday Situations</li>
                <li>Real-World Speaking Practice</li>
                <li>Pronunciation & Accent Training</li>
                <li>Confidence-Building Exercises</li>
                <li>Listening & Response Skills</li>
                <li>Interview & Presentation Training</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;

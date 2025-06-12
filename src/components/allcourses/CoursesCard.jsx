import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { useInView } from "react-intersection-observer";

// Individual Course Card Component with scroll animation
const CourseCardItem = ({ val }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`items ${inView ? "slide-in-up" : ""}`} ref={ref}>
      <div className='content flex'>
        <div className='left'></div>
        <div className='text'>
          <h1>{val.coursesName}</h1>
          <div className='details'>
            {val.courTeacher.map((details, i) => (
              <div className='box' key={i}>
                <div className='dimg'></div>
                <div className='para'></div>
                <span>{details.totalTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='enq'>
        <button
          className='outline-btn'
          onClick={() =>
            window.open("https://wa.me/message/623IU7KBDAFIH1", "_blank")
          }
        >
          ENQUERY NOW
        </button>
      </div>
    </div>
  );
};

// Main Courses Section
const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val, index) => (
            <CourseCardItem key={index} val={val} />
          ))}
        </div>

        <div className='demo'>
          <ul>
            <h2>Ready to Speak English Fluently?</h2>
            <li>
              👉 Book your Free Demo Session now and experience our unique
              learning system.
            </li>
            <li>
              👉 100% satisfaction or full refund within 7 days — no questions
              asked.
            </li>
          </ul>
          <div className='what'>
            <a
              className='righttrow'
              href='https://wa.me/message/623IU7KBDAFIH1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Join on WhatsApp
              <i className='fab fa-whatsapp icons'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesCard;

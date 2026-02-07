import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Testimonal from "./testimonal/Testimonal"
import Faq from "../pricing/Faq"
import CoursesCard from "../allcourses/CoursesCard"
// import Hblog from "./Hblog"
// import Hprice from "./Hprice"
// import Contact from "../contact/Contact"

const Home = () => {
  return (
    <>
      <div className="set">
        <Hero />
        <AboutCard />
        <CoursesCard />
        <HAbout />
        <Testimonal />
        {/* <Hblog /> */}
        {/* <Hprice /> */}
        <Faq />
        {/* <Contact /> */}
      </div>
    </>
  )
}

export default Home

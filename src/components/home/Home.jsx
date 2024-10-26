import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Faq from "../pricing/Faq"
import CoursesCard from "../allcourses/CoursesCard"
// import CoursesCard from "../allcourses/CoursesCard"


const Home = () => {
  return (
    <>
   <div className="set">
      <Hero />
      <AboutCard />
      <CoursesCard/>
      <HAbout />
       <Testimonal />
      {/* <Hblog /> */}
      <Hprice />
      <Faq/>
     </div>
    </>
  )
}

export default Home

import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Faq from "../pricing/Faq"


const Home = () => {
  return (
    <>
   
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      {/* <Hblog /> */}
      <Hprice />
      <Faq/>
     
    </>
  )
}

export default Home

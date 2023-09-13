import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import PrintingCard from '../components/PrintingCard'
import Work from '../components/Work'

const Project = () => {
  return <>
  <Navbar/>
  <HeroImage2 heading="PROJECTS." text="My first portfoilo in React js"/>
  <Work/>
  {/* <PrintingCard/> */}
  <Footer/>
  </>
}

export default Project
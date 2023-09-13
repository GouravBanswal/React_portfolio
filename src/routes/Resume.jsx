import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResumeOfMy from '../components/ResumeOfMy'
import HeroImage2 from '../components/HeroImage2'

const Resume = () => {
  return <>
  <Navbar/>
  
  <HeroImage2 heading="RESUME." text="My first portfoilo in React js"/>
  
  <ResumeOfMy/>
  <Footer/>
  </>
}

export default Resume
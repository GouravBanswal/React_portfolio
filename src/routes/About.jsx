import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return <>
  <Navbar/>
  <HeroImage2 heading="ABOUT." text="I am full stack developer" />
  <AboutContent/>
  <Footer/>
  </>
}

export default About
import "../components/HeroImage.css"

import React from 'react'
import nastuh from '../assets/nastuh.jpg'
import { Link } from "react-router-dom"
const HeroImage = () => {
    return <div className="hero">
    <div className="mask">
    <img className="into-img"
    src={nastuh}/>
    </div>
    <div className="content">
    <p>Hi, I'm  Gourav Banswal.</p>
    <h1>React Developer.</h1>
     <div>
        <Link to="/project" className="btn">Project</Link>
        <Link to="/project" className="btn btn-light">Contact</Link>
     </div>
    </div>
    </div>
}

export default HeroImage
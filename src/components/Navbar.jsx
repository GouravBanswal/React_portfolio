import { Link } from "react-router-dom"
import "./NavbarStyle.css"
import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false)
    const handleColor = () => {
        if(window.scrollY >=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", handleColor)
  return (
      
      <div className={color ? "header header-bg" : "header"} >
        <h1>Portfolio.</h1>
    <Link to="/">
    </Link>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/skills">Skills</Link>
        </li>
        <li>
            <Link to="/resume">Resume</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        
    </ul>
    <div className="hamburger" onClick={handleClick}>
        {click
        ? ( <FaTimes size={20} style={{ color:"#fff"}} />) 
        : (<FaBars size={20} style={{ color:"#fff"}} />)
    }
    </div>
 </div>
  )
}

export default Navbar
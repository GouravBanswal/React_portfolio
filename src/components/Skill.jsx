import React from 'react'
import Skills from '../routes/Skills'
import javaScript from '../assets/img/js.jpg'
import download from '../assets/img/react.png'
import rr from '../assets/img/redux.png'
import MongoDB_Logo from '../assets/img/mongo.png'
import nod from '../assets/img/node-js.png'
import next from '../assets/img/next-js-logo.png'
import typeScript from '../assets/img/typescript.png'
import tailwind from '../assets/img/tailwind.png'
import rest from '../assets/img/restApi.png'
import git from '../assets/img/git.png'
import material  from '../assets/img/MaterialUi-2.png'
import sass  from '../assets/img/sass-logo.jpg'
import SkillData from './SkillData'
import './WorkCardStyle.css'
import Navbar from './Navbar'
import Footer from './Footer'


const Skill = () => {
  
 const SkillDataa = [
  {
      imgsrc: javaScript,
      title: "JavaScript",
  },
  {
      imgsrc: download,
      title: "React Js",
  },
  {
      imgsrc: rr,
      title: "Redux",
  },
  {
      imgsrc: MongoDB_Logo,
      title: "MongoDB",
  },
  {
      imgsrc: nod,
      title: "Node Js",
  },
  {
      imgsrc:  material,
      title: "Next Js",
  },
  {
      imgsrc: typeScript,
      title: "TypeScript",
  },
  {
      imgsrc: next ,
      title: "Material UI",
  },
  {
      imgsrc: sass ,
      title: "Sass",
  },
  {
      imgsrc: tailwind ,
      title: "Tailwind",
  },
  {
      imgsrc: rest ,
      title: "Rest API",
  },
  {
      imgsrc: git ,
      title: "Git & GitHub",
  },
]

  return <>
  <Navbar/>
  <pre style={{color:"white"}}>
  </pre>
  <div className='work-container'>
        <h1 className='project-heading' >Skills</h1>
        <div className="project-container" >
            
        {
          SkillDataa.map(item=> <>
           <div className="project-card">
                <img src={item.imgsrc} alt="img" />
                <h2 className='project-title'>{item.title}</h2>
            </div>
          </>)
        }
        </div> 
    </div>
    
<Footer/>
  </>
}

export default Skill
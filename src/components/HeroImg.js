import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
       <img className="intro" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi, Im a Freelancer</p>
            <h1>React Developer</h1>
        <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg;


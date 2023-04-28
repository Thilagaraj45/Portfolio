import "./InfoContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import react1 from "../assets/react1.png"
import react2 from "../assets/react2.jpg"

const InfoContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>Im a react developer. I create responsive web designs.</p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true" />

                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true" />

                </div>
            </div>
        </div>
    </div>
  );
};

export default InfoContent;
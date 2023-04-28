import"./WorkCardStyle.css"
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="img" />
                <h4 className="project-title"> {props.title} </h4>
                <div className="pro-details">
                    <p>{props.text} </p>
                    <div className="pro-btns">
                        <NavLink to= {props.view} className="btn" > VIEW </NavLink>
                        <NavLink to="url.com" className="btn" > Source </NavLink>
                    </div>
                </div>
            </div>
  );
};

export default WorkCard;
 
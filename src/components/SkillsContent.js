import "./SkillsContentStyles.css"
import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact, FaJs,  } from "react-icons/fa";

const SkillsContent = () => {
  return (
    <div className="skill">
        
        <div><FaHtml5 size={90} style={{color:"Yellow", marginRight: "1rem"}} />
        <h3>HTML</h3></div> 
        <div>
        <FaCss3 size={90} style={{color:"yellow", marginRight: "1rem"}} />
        <h3>CSS</h3></div>
        <div>
        <FaJs size={90} style={{color:"Yellow", marginRight: "1rem"}} />
        <h3>JAVASCRIPT</h3></div>
        <div>
        <FaReact size={90} style={{color:"yellow", marginRight: "1rem"}} />
        <h3>REACT JS</h3>
        </div>
        <div>
        <FaBootstrap size={90} style={{color:"yellow", marginRight: "1rem"}} />
        <h3>BOOTSTRAP</h3></div>
        <div>
        <FaNodeJs size={90} style={{color:"yellow", marginRight: "1rem"}} />
        <h3>NODE JS</h3></div>
        
    </div>
  );
};

export default SkillsContent;
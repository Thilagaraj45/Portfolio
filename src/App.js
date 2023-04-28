import React from "react";
import "./index.css"
import Skills from "./routes/Skills";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Homes from "./routes/Homes";
import Info from "./routes/Info";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/info" element={<Info/>} />  
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    </>
  );
}

export default App;

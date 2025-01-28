import React from "react";
import "../styles.css";
import Navbar from "../Components/Navbar";
import AboutSection from "../Components/AboutSection";
import Skills from "../Components/Skills";
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="divider"></div>
      <AboutSection />
      <Skills />
    </div>
  );
};

export default About;

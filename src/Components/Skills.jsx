import React from "react";
import SkillCard from "./SkillCard";
import "../Styles/common.css";

// Importing the assets for images
import Csharp from "../Assets/Csharp.png";
import MERN from "../Assets/MERN.jpg";
import Git from "../Assets/Git.png";
import unity from "../Assets/unity.png";
import Java from "../Assets/java.png";
import PGsql from "../Assets/postgres-logo.png";
const skillsData = [
  {
    image: Csharp,
    title: "C#",
    description:
      "A versatile programming language for web and game development.",
  },
  {
    image: MERN,
    title: "MERN",
    description:
      "A full-stack JavaScript framework (MongoDB, Express, React, Node).",
  },
  {
    image: Git,
    title: "Git",
    description:
      "A version control system to track changes in source code during software development.",
  },
  {
    image: unity,
    title: "Unity",
    description:
      "A powerful game development engine used for creating 2D, 3D, and AR/VR experiences.",
  },
  {
    image: Java,
    title: "Java",
    description: "OOPS",
  },
  {
    image: PGsql,
    title: "PostgresSQL",
    description:
      "PostgreSQL is an free open-source database system that supports both relational (SQL) and non-relational (JSON) queries",
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="divider"></div> {/* This is the line under the heading */}
      <div className="card-container">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            image={skill.image}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

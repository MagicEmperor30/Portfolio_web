import { useState } from "react";
import "../Styles/common.css";
import Navbar from "../Components/Navbar";

const Resume = () => {
  const [showGameDev, setShowGameDev] = useState(true); // Default to Game Dev Resume

  const toggleResume = () => {
    setShowGameDev(!showGameDev); // Toggle between the two resumes
  };

  return (
    <div className="resume-page">
      <Navbar />
      <div className="resume-container">
        <header>
          <h1>Digvijay Sasane</h1>
          <p>Software Engineer | Full Stack Developer | Game Developer</p>
          <p>GitHub: github.com/MagicEmperor30</p>
        </header>

        {/* Button to toggle between resumes */}
        <div className="toggle-buttons">
          <button onClick={toggleResume} className="toggle-btn">
            {showGameDev
              ? "Show Web Developer Resume"
              : "Show Game Developer Resume"}
          </button>
        </div>

        {/* Game Developer Resume */}
        {showGameDev && (
          <section className="resume-content">
            <h2>Profile Summary</h2>
            <p>
              Passionate Game Developer with experience in Unity and C#. Adept
              in designing engaging game mechanics, gameplay systems, and
              immersive environments. Looking for an opportunity to contribute
              to creative game development projects and collaborate within a
              dynamic team.
            </p>

            <h2>Technical Skills</h2>
            <ul>
              <li>
                <strong>Game Development:</strong> Unity, C#, OOPS
              </li>
              <li>
                <strong>Game Design:</strong> Gameplay Mechanics, Visual Design
              </li>
              <li>
                <strong>Testing and Debugging</strong>
              </li>
            </ul>

            <h2>Certifications</h2>
            <p>
              <strong>Complete C# Unity Game Developer 3D</strong> - Udemy
            </p>
            <a href="/DigvijayResume.pdf" download>
              <button className="download-btn">
                Download Game Developer Resume as PDF
              </button>
            </a>
          </section>
        )}

        {/* Web Developer Resume */}
        {!showGameDev && (
          <section className="resume-content">
            <h2>Profile Summary</h2>
            <p>
              Results-oriented Computer Science graduate with hands-on
              experience in programming, database management, and web
              development. Skilled in solving complex problems and eager to
              learn and apply the latest technologies. Experienced in building
              engaging web applications using technologies such as React.js,
              Node.js, and Express.js. Seeking opportunities to contribute
              innovative solutions in the tech industry.
            </p>

            <h2>Technical Skills</h2>
            <ul>
              <li>
                <strong>Programming Languages:</strong> Java, Python,
                JavaScript, C#
              </li>
              <li>
                <strong>Web Development Frameworks:</strong> React.js, Node.js,
                Express.js
              </li>
              <li>
                <strong>Database Management:</strong> SQL
              </li>
              <li>
                <strong>Version Control:</strong> Git, GitHub
              </li>
            </ul>

            <h2>Certifications</h2>
            <p>
              <strong>The Complete 2024 Web Development Bootcamp</strong> -
              Udemy
            </p>
            <a href="/DigvijayCVResume.pdf" download>
              <button className="download-btn">
                Download Web Developer Resume as PDF
              </button>
            </a>
          </section>
        )}
      </div>
    </div>
  );
};

export default Resume;

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
            <h2>Summary</h2>
            <p>
              <strong>DIGVIJAY SASANE</strong><br />
              Ghatkopar Mumbai Maharashtra 400075 | piyushsasane30@gmail.com | 9653673717
            </p>
            <p>
              Seeking an internship or junior developer position in game development to leverage my technical skills in Unity and my passion for creating engaging gaming experiences. I aim to gain practical experience in the industry while contributing to innovative game projects.
            </p>

            <h2>Technical Skills</h2>
            <ul>
              <li><strong>Game Engines:</strong> Unity</li>
              <li><strong>Languages:</strong> C#</li>
              <li><strong>Concepts:</strong> OOP, Gameplay Systems, Visual Design</li>
              <li><strong>Tools:</strong> Unity Cloud Build, Google Play Games SDK</li>
              <li><strong>Other:</strong> Problem Solving, Debugging</li>
            </ul>

            <h2>Experience</h2>
            <p><strong>Unity Developer Intern, Dikshavision LLP, Mumbai</strong></p>
            <ul>
              <li>Developed an arcade-style 3D racing game in Unity.</li>
              <li>Implemented spline-based AI for racing opponents.</li>
              <li>Built UI: lap counters, speedometer, menus.</li>
              <li>Integrated Google Play Games SDK and Google Login.</li>
              <li>Used Unity Cloud.</li>
              <li>Created Simple shaders, VFX, and lighting for polished visuals.</li>
            </ul>

            <h2>Projects</h2>
            <p><strong>Cosmic Drift: A 3D Space Exploration Game</strong></p>
            <ul>
              <li>Developed in Unity with intuitive controls and engaging visuals.</li>
              <li>Implemented spacecraft movement, acceleration, and obstacle avoidance.</li>
              <li>Designed five unique levels with distinct challenges.</li>
              <li>Created vibrant space environments with appealing visuals.</li>
              <li>Achieved smooth and responsive player controls.</li>
            </ul>
            <p><strong>Castle Defenders: 3D Tower Defense Game</strong></p>
            <ul>
              <li>Designed grid-based tower placement mechanics to defend against enemies.</li>
              <li>Managed limited resources for strategic gameplay.</li>
              <li>Created a medieval fantasy theme using voxel art in HD resolution.</li>
              <li>Developed for PC, Mac, and Linux with mouse-only controls.</li>
            </ul>

            <h2>Certificates</h2>
            <p><strong>C# Unity Game Developer – Udemy, 2024</strong></p>

            <h2>Education</h2>
            <p><strong>B.Sc. in Computer Science, Pune University</strong></p>
            <p>CGPA: 8.8</p>
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
              <strong>The Complete 2024 Web Development Bootcamp</strong> - Udemy
            </p>
            <a href="/DigvijayCV Resume.pdf" download>
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

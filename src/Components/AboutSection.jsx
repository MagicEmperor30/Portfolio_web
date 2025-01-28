import "../Styles/common.css";
import profilePic from "../Assets/profile-pic.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <h1>About Me</h1>
      <div className="line"></div>
      <div className="content">
        <p>
          I’m Digvijay Sasane, a passionate Software Engineer and Game Developer
          with a Bachelor in Computer Science. I specialize in web development
          (React.js, Node.js, SQL) and game development (Unity, C#). I’ve worked
          on projects such as Expense Tracker, Anime Suggestion Website, Cosmic
          Drift, and Castle Defenders. Always eager to expand my knowledge, I’m
          focused on solving complex problems and contributing to dynamic teams
          in both software and game development.
        </p>
        <img src={profilePic} alt="Your Photo" className="profile-photo" />
      </div>
    </div>
  );
};

export default AboutSection;

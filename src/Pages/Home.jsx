/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../Styles/Home.css"; // Assuming you have the rest of the CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-box">
        <h1 className="header">Digivjay</h1>
        <p className="intro">
          Hi, it is great to meet you.
          <br />
           I'm Digivjay, a Computer Programmer,
          <br />
          and welcome to my portfolio website.
        </p>
        <Link to="/about" className="btn">
          Click
        </Link>
      </div>
    </div>
  );
};

export default Home;

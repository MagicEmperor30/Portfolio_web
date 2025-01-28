/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../Styles/common.css";

const ProjectCards = ({ image, title, description, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length); // Cycle to the next image
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length // Cycle to the previous image
    );
  };

  // Auto transition every 3 seconds
  useEffect(() => {
    if (image.length > 1) {
      const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }
  }, [image.length]); // Only set interval if there are multiple images

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <div className="project-images">
        <div className="project-image">
          <img
            src={image[currentImageIndex]}
            alt={`${title}-image-${currentImageIndex}`}
          />
        </div>

        {/* Show navigation buttons only if there are multiple images */}
        {image.length > 1 && (
          <div className="image-nav-buttons">
            <button className="prev-image-button" onClick={prevImage}>
              &#10096; {/* Left arrow symbol */}
            </button>
            <button className="next-image-button" onClick={nextImage}>
              &#10095; {/* Right arrow symbol */}
            </button>
          </div>
        )}
      </div>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCards;

import "../Styles/common.css";

const SkillCard = ({ image, title, description }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className="skill-card-image" />
      <h3 className="skill-card-title">{title}</h3>
      <p className="skill-card-description">{description}</p>
    </div>
  );
};

export default SkillCard;

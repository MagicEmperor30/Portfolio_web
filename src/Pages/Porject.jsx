import "../Styles/common.css";
import Navbar from "../Components/Navbar";
import ProjectCards from "../Components/ProjectCards";
import CosmicDrift from "../Assets/ProjectImages/CosmicDrift.png";
import CastleDefender from "../Assets/ProjectImages/CastleDefender.png";
import ZombieShooter from "../Assets/ProjectImages/ZombieShooter.png";
import Platformer1 from "../Assets/ProjectImages/Platformer1.png";
import Platformer2 from "../Assets/ProjectImages/Platformer2.png";
import platformer3 from "../Assets/ProjectImages/platformer3.png";
import Platformer4 from "../Assets/ProjectImages/Platformer4.png";
import Platformer5 from "../Assets/ProjectImages/Platformer5.png";
import KingsRush1 from "../Assets/ProjectImages/KingsRush1.png";
import KingsRush2 from "../Assets/ProjectImages/KingsRush2.png";
import ET1 from "../Assets/ProjectImages/ET1.png";
import ET2 from "../Assets/ProjectImages/ET2.png";
import ET3 from "../Assets/ProjectImages/ET3.png";
import ET4 from "../Assets/ProjectImages/ET4.png";
import ET5 from "../Assets/ProjectImages/ET5.png";
import ET6 from "../Assets/ProjectImages/ET6.png";
import ET7 from "../Assets/ProjectImages/ET7.png";

const Projects = () => {
  const projectInfo = [
    {
      title: "Cosmic Drift: A 3D Space Exploration Game",
      image: [CosmicDrift],
      description:
        "A thrilling space exploration game developed in Unity, featuring smooth spacecraft movement, acceleration, and obstacle avoidance mechanics. The game offers five unique levels, each with distinct challenges set in vibrant, visually stunning space environments. The intuitive controls ensure a seamless player experience as they navigate through the vast cosmos.",
      link: "https://sharemygame.com/@MagicEmperor30/cosmic-drift-project-by-magicemperor30",
    },
    {
      title: "Castle Defenders: 3D Tower Defense Game",
      image: [CastleDefender],
      description:
        "A strategic tower defense game set in a medieval fantasy world, created using voxel art in HD resolution. Players place towers on a grid to defend against waves of enemies while managing limited resources for strategic gameplay. Developed for PC,WebGl with mouse-only controls, offering an engaging and tactical gaming experience.",
      link: "https://sharemygame.com/@MagicEmperor30/castle-defender-by-magicempror-inspired-by-gamedev",
    },
    {
      title: "Zombie Shooter: First-Person Shooter",
      image: [ZombieShooter],
      description:
        "An intense first-person shooter set in a zombie apocalypse, where players engage in immersive combat against AI-driven zombies. Featuring realistic player movement, shooting mechanics, and integrated health and flashlight systems, the game creates an atmosphere of tension. The game includes diverse levels, such as dark forests and bunkers, designed using ProBuilder for an immersive survival experience.",
      link: "https://sharemygame.com/@MagicEmperor30/zombie-shooter-magicemperor30-gamedevtv",
    },
    {
      title: "2DPlatformerGame",
      image: [Platformer1, Platformer2, platformer3, Platformer4, Platformer5],
      description:
        "Embark on a thrilling 2D platformer adventure where you battle goblins, flying eyes, and the fearsome Death Bringer. Master ground, air, and ranged attacks to defeat enemies and conquer challenging levels. With smooth controls and intense combat, every moment keeps you on your toes. Can you save the realm from destruction?",
      link: "#",
    },
    {
      title: "King Rush",
      image: [KingsRush1, KingsRush2],
      description:
        "In King Rush, players race across a shaky bridge, dodging procedurally generated physics-based obstacles. The goal is to survive as long as possible, collecting power-ups to speed up or unlock checkpoints. With dynamic challenges and increasing difficulty, every run is unique!",
      link: "#",
    },
    {
      title: "Expense Tracker",
      image: [ET1, ET2, ET3, ET4, ET5, ET6, ET7],
      description:
        "Built a secure login system and intuitive interface for tracking expenses. Developed tools for budgeting, and automated savings calculations to aid in financial planning.",
      link: "https://github.com/MagicEmperor30/ExpenseTrackerApp",
    },
  ];

  return (
    <div className="project-container">
      <Navbar />
      <h1>Projects</h1>
      <div className="line"></div>
      <div className="project-cards-container">
        {projectInfo.map((project, index) => (
          <ProjectCards
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

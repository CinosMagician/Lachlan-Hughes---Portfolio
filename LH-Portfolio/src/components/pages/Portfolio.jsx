import React from "react";
import projectImage1 from "../../assets/reciplace logo 750 x 750.png";
import projectImage2 from "../../assets/weather.png";
import projectImage3 from "../../assets/readme.png";
import projectImage4 from "../../assets/blogspace.png";
import githubIcon from "../../assets/GitHub.svg";


// NOTE: BlogSpace is currently not working due to the 30 day trial of Render expiring.
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Group Project - ReciPlace",
      image: projectImage1,
      projectLink: "https://cinosmagician.github.io/group-2-recipe-project/",
      githubLink: "https://github.com/CinosMagician/group-2-recipe-project",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      image: projectImage2,
      projectLink: "https://cinosmagician.github.io/weather-dashboard/",
      githubLink: "https://github.com/CinosMagician/weather-dashboard",
    },
    {
      id: 3,
      title: "README.md Generator",
      image: projectImage3,
      projectLink: "https://github.com/CinosMagician/README-generator",
      githubLink: "https://github.com/CinosMagician/README-generator",
    },
    {
      id: 4,
      title: "BlogSpace",
      image: projectImage4,
      projectLink: "https://github.com/CinosMagician/BlogSpace",
      githubLink: "https://github.com/CinosMagician/BlogSpace",
    },
  ];

  return (
    <h1 className="portfolioText">Portfolio
    <div className="portfolio">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-box"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="project-overlay">
            <a href={project.projectLink} className="project-title">
              <h2 className="portfolioText">{project.title}</h2>
            </a>
            <a href={project.githubLink}>
              <img className="gitlogo" src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      ))}
    </div>
    </h1>
  );
}

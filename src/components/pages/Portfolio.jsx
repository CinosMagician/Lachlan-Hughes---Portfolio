import React from "react";
import projectImage1 from "../../assets/reciplace logo 750 x 750.png";
import projectImage2 from "../../assets/DJ-topview.jpg";
import projectImage3 from "../../assets/readme.png";
import projectImage4 from "../../assets/blogspace.png";
import githubIcon from "../../assets/GitHub.svg";

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
      title: "Requests DJ v2",
      image: projectImage2,
      projectLink: "https://requests.dj/",
      githubLink: "https://github.com/roughnut/requests-dj-v2",
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
      projectLink: "https://blog-db-rofh.onrender.com/",
      githubLink: "https://github.com/CinosMagician/BlogSpace",
    },
  ];

  return (
    <div>
      <h1 className="portfolioText">Portfolio</h1>
      <div className="portfolio">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-box"
            // changer cursor to pointer
            onClick={() => window.open(project.projectLink, "_blank")}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-overlay">
              <h2 className="portfolioText">{project.title}</h2>
              <a
                href={project.githubLink}
                onClick={(e) => e.stopPropagation()} // Prevents triggering project link
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="gitlogo" src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

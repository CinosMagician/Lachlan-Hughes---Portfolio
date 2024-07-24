import React from "react";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project2.png";
import projectImage3 from "../../assets/project3.png";
import projectImage4 from "../../assets/project4.png";
import githubIcon from "../../assets/GitHub.svg";


// NOTE: This page is full of placeholders, Will update the images, the titles and links once ready.
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: projectImage1,
      projectLink: "https://example.com/project-one",
      githubLink: "https://github.com/username/project-one",
    },
    {
      id: 2,
      title: "Project Two",
      image: projectImage2,
      projectLink: "https://example.com/project-two",
      githubLink: "https://github.com/username/project-two",
    },
    {
      id: 3,
      title: "Project Three",
      image: projectImage3,
      projectLink: "https://example.com/project-three",
      githubLink: "https://github.com/username/project-three",
    },
    {
      id: 4,
      title: "Project Four",
      image: projectImage4,
      projectLink: "https://example.com/project-four",
      githubLink: "https://github.com/username/project-four",
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

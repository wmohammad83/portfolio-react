import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import portfolio from "../projects.json";
import Footer from "../components/Footer/Footer";

function Projects() {
  const [projects, setProjects] = useState(portfolio);
  return (
    <div>
      <div className="container py-5">
        <h2 className="mb-4 txt display-6">Projects</h2>
        <div className="row">
          <div className="col">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.projectName}
                  image={project.image}
                  description={project.description}
                  livePage={project.livePage}
                  gitHub={project.gitHub}
                  technologies={project.technologies}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;

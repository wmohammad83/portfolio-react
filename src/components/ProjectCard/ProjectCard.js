import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css"

function ProjectCard({ name, description, image, livePage, gitHub }) {
  return (
    <div class="card mb-3 shadow">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={image} class="img-fluid rounded shadow m-2 border" alt="project screenshot" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <Link
              to={livePage}
              class="btn mx-2 card-btn"
              style={
                livePage ? { display: "inline-block" } : { display: "none" }
              }
            >
              <i class="fa-regular fa-browsers"></i>
              Live Page
            </Link>
            <Link to={gitHub} class="btn mx-2 card-btn">
              <i class="fa-regular fa-browsers"></i>
              GitHub Repo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

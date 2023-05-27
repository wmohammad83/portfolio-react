import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css"

import { FaGithubSquare, FaRegWindowMaximize, FaHtml5 } from "react-icons/fa";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectCard({ name, description, image, livePage, gitHub, technologies }) {
  return (
    <div>
      <Row>
        <Col sm={12} md={6} className="">
        <div className="mr-4">
           <img src={image} class="img-fluid rounded shadow m-2" alt="project screenshot" />
         </div>
        </Col>
        <Col>
        <h4 class="display-6 txt">{name}</h4>
        <p class="">{description}</p>

        <Link
              to={livePage}
              class="btn mx-2 card-btn"
              style={
                livePage ? { display: "inline-block" } : { display: "none" }
              }
            >
             <FaRegWindowMaximize/> Live Page
            </Link>
            <Link to={gitHub} class="btn mx-2 card-btn">
              < FaGithubSquare /> GitHub Repo
            </Link>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectCard;

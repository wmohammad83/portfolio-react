import React from "react";
import "./SkillsCard.css"

function SkillsCard({ logo, skill }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card text-center my-4">
        <div className="card-body">
          <span className="skill-icon">
            <i className={logo}></i>
          </span>
          <h4 className="text-uppercase">{skill}</h4>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;

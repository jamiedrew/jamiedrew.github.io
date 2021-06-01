import React from "react";
import "../styles/projects.scss";

const ProjectCard = ({ title }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
        </div>
    )
}

export default ProjectCard;
import React from 'react';
import bannerImg from '../assets/project.png';

interface ProjectCardProps {
  title: string;
  main: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, main }) => {
  return (
    <div className="project-card">
      <img src={bannerImg} alt="Project Banner" />
      <h3>{title}</h3>
      <p>{main}</p>
      <div className="project-buttons">
        <button>Demo</button>
        <button>Source Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;

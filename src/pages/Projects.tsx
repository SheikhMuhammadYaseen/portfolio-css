import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div id="Projects" className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        <ProjectCard
          title="Blogging Website"
          main="This is a blogging website created in Next.js."
        />
        <ProjectCard
          title="YouTube Clone"
          main="This is a YouTube website created in Next.js."
        />
        <ProjectCard
          title="Netflix Clone"
          main="This is a Netflix website created in Next.js."
        />
      </div>
    </div>
  );
};

export default Projects;

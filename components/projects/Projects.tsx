'use client';

import { projects } from '@/constants/projects';
import ProjectBtn from './ProjectBtn';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleActiveProject = (id: string) => {
    setActiveProject(projects.find((project) => project.id === id)!);
  };

  return (
    <div className="">
      <div className="relative">
        <div className="flex items-start justify-center gap-8 mx-auto">
          <ProjectCard
            src={activeProject.screenshot}
            title={activeProject.title}
          />

          {/* Buttons */}
          <div className="w-fit flex gap-20 pt-8">
            {projects.map((project) => (
              <ProjectBtn
                key={project.id}
                id={project.id}
                color={project.color}
                active={project.id === activeProject.id}
                switchActiveProject={handleActiveProject}
              />
            ))}
          </div>
        </div>

        {/* Grid pattern */}
        <div className="absolute z-[-10] inset-0 projects-grid-pattern mt-36 opacity-50 border-t border-t-tundora" />
      </div>
      {/* Project details card */}

      <ProjectDetails
        title={activeProject.title}
        subTitle={activeProject.subTitle}
        stack={activeProject.stack}
        description={activeProject.description}
        date={activeProject.date}
        github={activeProject.github}
        live={activeProject.live}
        color={activeProject.color}
        btnBg={activeProject.btnBg}
        btnBgHover={activeProject.btnBgHover}
        cardBg={activeProject.cardBg}
      />
    </div>
  );
};
export default Projects;

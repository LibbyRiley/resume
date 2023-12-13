import * as React from "react";
import { Project } from "../data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, client, story, stack, url, image } = project;
  return (
    <a href={url} className="mt-4 group" target="_blank" rel="noopener">
      <h3 className="text-xl font-bold group-hover:underline">{title}</h3>
      <p className={`m-0 max-w-[30ch] text-lg font-light opacity-60`}>
        {client}
      </p>

      <p className={`mt-4 text-sm`}>{story}</p>
      <p className={`mt-4 text-sm italic`}>{stack}</p>
      <img className="mt-4 rounded-lg" src={image.src} alt={image.alt} />
    </a>
  );
};

export default ProjectCard;

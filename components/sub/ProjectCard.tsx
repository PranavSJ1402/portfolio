import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { StaticImageData } from 'next/image';

type ProjectCardProps = {
  src: string |StaticImageData;
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
  projectName: string
};

const ProjectCard = ({
  src,
  title,
  description,
  githubLink,
  projectLink,
  projectName
}: ProjectCardProps) => (
<div className="w-full min-h flex flex-col bg-[#1a1a2e] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
    <div>
      <div className="mb-4 rounded-md overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={800}
          height={400}
          className="object-cover w-full h-[200px] rounded-md transition duration-300 group-hover:opacity-80"
        />
      </div>
      <div className="flex gap-1 mb-1">
      <p className="text-xl sm:text-xl text-white font-semibold">{projectName}:</p>
      <h3 className="text-xl text-gray-400">{title}
      </h3>
      </div>
      <p className="text-gray-400 text-[15px] leading-relaxed text-justify">{description}</p>
    </div>

    <div className="flex justify-between items-center mt-4">
      {/* Live Project Link */}
  <a
    href={projectLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-[14px] text-white hover:underline hover:text-blue-300 transition-colors duration-200"
  >
    <span className="text-[14px] hover:underline">View Project</span>
    <FaExternalLinkAlt size={12} />
  </a>


      {/* GitHub Link */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white hover:text-blue-300 transition-colors duration-200"
        aria-label="View GitHub Repository"
      >
        <span className="text-[14px] hover:underline">View Repo</span>
        <FaGithub size={20} />
      </a>
    </div>
  </div>
);

export default ProjectCard;

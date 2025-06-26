import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  githubLink: string;
};

const ProjectCard = ({
  src,
  title,
  description,
  githubLink,
}: ProjectCardProps) => (
  <div className="w-full bg-[#1a1a2e] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group text-left">
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <div className="mb-4 rounded-md overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={800}
          height={400}
          className="object-cover w-full h-[200px] rounded-md transition duration-300 group-hover:opacity-80"
        />
      </div>
    </a>

    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-400 text-[15px] leading-relaxed">{description}</p>
  </div>
);

export default ProjectCard;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { StaticImageData } from 'next/image';

type ProjectCardProps = {
  src: string | StaticImageData;
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
  projectName: string;
};

const ProjectCard = ({
  src,
  title,
  description,
  githubLink,
  projectLink,
  projectName
}: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.5 }}
    className="group relative w-full flex flex-col bg-[#1a1a2e]/40 backdrop-blur-md rounded-2xl border border-purple-500/20 overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
  >
    {/* Project Image Wrapper */}
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />

      {/* Floating Project Name Tag */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/80 backdrop-blur-md rounded-full border border-white/20">
        <span className="text-white text-xs font-bold tracking-widest uppercase">{projectName}</span>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col p-6">
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors">
        {description}
      </p>

      {/* Buttons / Links */}
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
        <motion.a
          whileHover={{ x: 3 }}
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm font-semibold transition-colors ${projectLink ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-600 cursor-not-allowed'}`}
          onClick={(e) => !projectLink && e.preventDefault()}
        >
          {projectLink ? 'Live Preview' : 'Staging...'}
          <FaExternalLinkAlt size={12} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white transition-all shadow-lg shadow-black/20"
          aria-label="View Source Code"
        >
          <span className="text-xs font-bold">Source</span>
          <FaGithub size={18} />
        </motion.a>
      </div>
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-2xl pointer-events-none transition-all duration-500" />
  </motion.div>
);

export default ProjectCard;

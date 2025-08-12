"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostgresql,
} from "react-icons/si";

// Floating Particle Component
const FloatingParticle = ({
  delay,
  duration,
  targetX,
  targetY,
}: {
  delay: number;
  duration: number;
  targetX: number;
  targetY: number;
}) => (
  <motion.div
    className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, targetX],
      y: [0, targetY],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: 2,
    }}
    style={{ left: "50%", top: "50%" }}
  />
);

// Skill Badge Component
const SkillBadge = ({
  skill,
  Icon,
  delay,
  color,
  imageUrl,
}: {
  skill: string;
  Icon: React.ElementType | null;
  delay: number;
  color: string;
  imageUrl?: string;
}) => {
  const needsBg = color === "#000000";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center justify-center w-24 sm:w-28 md:w-32 gap-2 px-3 py-3 text-white/90 hover:text-white transition-all cursor-pointer"
    >
      <div
        className="text-4xl sm:text-5xl p-2 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: "transparent",
          boxShadow: needsBg ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
        }}
      >
      {Icon ? (
  <Icon color={color} />
) : (
  <img
    src={imageUrl}
    alt={skill}
    className={`object-contain ${
      skill === "Python" ? "w-20 h-20 sm:w-24 sm:h-24" : "w-14 h-14 sm:w-12 sm:h-12"
    }`}
  />
)}

      </div>
      <span className="font-medium text-sm sm:text-base text-center">
        {skill}
      </span>
    </motion.div>
  );
};

// Skill Text Main Component
const SkillText = () => {
  const [showParticles, setShowParticles] = useState(false);

  const skills = [
    { skill: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { skill: "CSS", Icon: SiCss3, color: "#1572B6" },
    { skill: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { skill: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { skill: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { skill: "React.js", Icon: SiReact, color: "#61DAFB" },
    { skill: "Next.js", Icon: null,color: "#000000", imageUrl: "/next.png"},
    { skill: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { skill: "Express.js", Icon: null,color: "#000000", imageUrl: "/express.png"},
    { skill: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    {
      skill: "Postgresql",
      Icon: null,
      color: "#000000",
      imageUrl: "/postger.png"
    },{
      skill: "Prisma",
      Icon: null,
      color: "#000000",
      imageUrl: "/prisma.webp"
    },
    
    { skill: "MySQL", Icon: SiMysql, color: "#4479A1" },
    {
      skill: "Python",
      Icon: null,
      color: "#000000",
      imageUrl: "/python (2).png"
    },
    { skill: "Git", Icon: SiGit, color: "#F05032" },
    {
      skill: "Figma",
      Icon: null,
      color: "#000000",
      imageUrl: "/figma.png", 
    },
  ];

  const handleSkillBadgeClick = () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 2000);
  };

  return (
    <div
      id="tech-stack"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 mb-0 mt-16 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating Particles */}
      {showParticles &&
        [...Array(15)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.08}
            duration={2.5}
            targetX={Math.random() * 300 - 150}
            targetY={Math.random() * 300 - 150}
          />
        ))}

      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative mb-10 text-center"
        onClick={handleSkillBadgeClick}
      >
        <motion.h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 cursor-pointer">
          Technical Skills
        </motion.h1>
        <p className="text-white/70  italic text-xl sm:text-base mt-2">
          Technologies I have worked with
        </p>
      </motion.div>

      {/* Skill Badges Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
  className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-10 justify-items-center mb-0 max-w-6xl"
      >
        {skills.map((item, index) => (
          <SkillBadge
            key={index}
            skill={item.skill}
            Icon={item.Icon}
            delay={index * 0.05}
            color={item.color}
            imageUrl={item.imageUrl}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillText;

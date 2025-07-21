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
  SiFigma,
  SiPython,
} from "react-icons/si";

// FloatingParticle Component
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

// SkillBadge Component
const SkillBadge = ({
  skill,
  Icon,
  delay,
}: {
  skill: string;
  Icon: React.ElementType;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.08, y: -4 }}
    className="flex flex-col items-center justify-center w-24 sm:w-28 md:w-32 gap-2 px-3 py-3 text-white/90 hover:text-white transition-all cursor-pointer"
  >
    <div className="text-4xl sm:text-5xl">
      <Icon />
    </div>
    <span className="font-medium text-sm sm:text-base text-center">
      {skill}
    </span>
  </motion.div>
);

// SkillText Main Component
const SkillText = () => {
  const [showParticles, setShowParticles] = useState(false);

  const skills = [
    { skill: "HTML", Icon: SiHtml5 },
    { skill: "CSS", Icon: SiCss3 },
    { skill: "JavaScript", Icon: SiJavascript },
    { skill: "TypeScript", Icon: SiTypescript },
    { skill: "Tailwind CSS", Icon: SiTailwindcss },
    { skill: "React.js", Icon: SiReact },
    { skill: "Next.js", Icon: SiNextdotjs },
    { skill: "Node.js", Icon: SiNodedotjs },
    { skill: "Express.js", Icon: SiExpress },
    { skill: "MongoDB", Icon: SiMongodb },
    { skill: "MySQL", Icon: SiMysql },
    { skill: "Python", Icon: SiPython },
    { skill: "Git", Icon: SiGit },
    { skill: "Figma", Icon: SiFigma },
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
          Tech Stack
        </motion.h1>
        <p className="text-white/70 text-m sm:text-base mt-2">
          Technologies I work with
        </p>
      </motion.div>

      {/* Skill Badges Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-10 mb-0 max-w-6xl"
      >
        {skills.map((item, index) => (
          <SkillBadge
            key={index}
            skill={item.skill}
            Icon={item.Icon}
            delay={index * 0.05}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillText;

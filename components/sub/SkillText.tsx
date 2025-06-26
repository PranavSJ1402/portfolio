"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type FloatingParticleProps = {
  delay: number;
  duration: number;
  targetX: number;
  targetY: number;
};

const FloatingParticle: React.FC<FloatingParticleProps> = ({
  delay,
  duration,
  targetX,
  targetY,
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
    style={{
      left: "50%",
      top: "50%",
    }}
  />
);

const SkillBadge = ({
  skill,
  delay,
  image,
  width,
  height,
}: {
  skill: string;
  delay: number;
  image?: string;
  width?: number;
  height?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{
      scale: 1.1,
      y: -8,
      boxShadow: "0 15px 35px rgba(112, 66, 248, 0.4)",
    }}
    className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl text-base text-white/90 hover:text-white hover:border-purple-400 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30"
  >
    {image && (
      <motion.img
        src={image}
        alt={skill}
        width={width || 24}
        height={height || 24}
        className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      />
    )}
    <span className="font-semibold text-base sm:text-lg">{skill}</span>
  </motion.div>
);

const SkillText = () => {
  const [showParticles, setShowParticles] = useState(false);

  const skills = [
    { skill_name: "HTML", Image: "/html.png", width: 80, height: 80 },
    { skill_name: "CSS", Image: "/css.png", width: 80, height: 80 },
    { skill_name: "JavaScript", Image: "/js.png", width: 65, height: 65 },
    {
      skill_name: "Tailwind CSS",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    { skill_name: "ReactJS", Image: "/react.png", width: 80, height: 80 },
    { skill_name: "NextJS", Image: "/next.png", width: 80, height: 80 },
    { skill_name: "Git", Image: "/git.png", width: 80, height: 80 },
    { skill_name: "Python", Image: "/python.webp", width: 70, height: 70 },
  ];

  const handleSkillBadgeClick = () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 2000);
  };

  return (
    <div
      id="tech-stack"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating Particles */}
      {showParticles && (
        <>
          {[...Array(15)].map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.08}
              duration={2.5}
              targetX={Math.random() * 300 - 150}
              targetY={Math.random() * 300 - 150}
            />
          ))}
        </>
      )}

      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative mb-12 scroll-mt-24"
        onClick={handleSkillBadgeClick}
      >
        <motion.h1 className="text-[40px] sm:text-[48px] md:text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer">
          Tech Stack
        </motion.h1>
      </motion.div>

      {/* Skill Badges Grid (Responsive) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 px-4"
      >
        {skills.map((skill, index) => (
          <SkillBadge
            key={index}
            skill={skill.skill_name}
            delay={index * 0.1}
            image={skill.Image}
            width={skill.width}
            height={skill.height}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillText;

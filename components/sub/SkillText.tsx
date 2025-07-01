"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';


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
    style={{ left: "50%", top: "50%" }}
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
}) => {
  // Reduce size for JS and TS logos
  const isSmallLogo = skill === "JavaScript" || skill === "TypeScript";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center justify-center w-24 sm:w-28 md:w-32 gap-2 px-3 py-3 text-white/90 hover:text-white transition-all cursor-pointer"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
        {image && (
         <Image src="/something.png" alt="Skill" width={64} height={64} />

        )}
      </div>
      <span className="font-medium text-sm sm:text-base text-center">
        {skill}
      </span>
    </motion.div>
  );
};

const SkillText = () => {
  const [showParticles, setShowParticles] = useState(false);

  const skills = [
    { skill_name: "HTML", Image: "/html.png", width: 80, height: 80 },
    { skill_name: "CSS", Image: "/css.png", width: 80, height: 80 },
    { skill_name: "JavaScript", Image: "/js.png", width: 50, height: 65 },
    { skill_name: "TypeScript", Image: "/ts.png", width: 50, height: 65 },
    { skill_name: "Tailwind CSS", Image: "/tailwind.png", width: 80, height: 80 },
    { skill_name: "React.js", Image: "/react.png", width: 80, height: 80 },
    { skill_name: "Next.js", Image: "/next.png", width: 80, height: 80 },
    { skill_name: "Node.js", Image: "/node-js.png", width: 80, height: 80 },
    { skill_name: "Express.js", Image: "/express.png", width: 80, height: 80 },
    { skill_name: "MongoDB", Image: "/mongodb.png", width: 80, height: 80 },
    { skill_name: "MySQL", Image: "/mysql.png", width: 80, height: 80 },
    { skill_name: "Git", Image: "/git (2).png", width: 80, height: 80 },
    { skill_name: "Figma", Image: "/figma.png", width: 80, height: 80 },
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

      {/* Skill Badges Flex Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-10 mb-0 max-w-6xl"
      >
        {skills.map((skill, index) => (
          <SkillBadge
            key={index}
            skill={skill.skill_name}
            delay={index * 0.05}
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

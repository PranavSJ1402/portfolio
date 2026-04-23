"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ---------------- Title ---------------- */

const HeroTypingBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mb-4"
    >
      <motion.h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 cursor-pointer">
        About Me
      </motion.h1>
    </motion.div>
  );
};

/* ---------------- Floating Orb ---------------- */

const FloatingOrb = ({ delay, size, color, position }: any) => (
  <motion.div
    className={`absolute rounded-full opacity-20 blur-xl ${color}`}
    style={{
      width: size,
      height: size,
      ...position,
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ---------------- Main Component ---------------- */

const HeroContent = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const dynamicWords = ["scalable", "secure", "end-to-end"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  const fadeInVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 mt-8 md:mt-20 w-full z-[20] gap-12 lg:gap-20 relative"
    >
      {/* Left Section - Image */}
      <motion.div
        variants={fadeInVariant(0.8)}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2 flex justify-center lg:justify-start relative order-2 lg:order-1"
      >
        {/* Floating Orbs */}
        <FloatingOrb
          delay={0}
          size="200px"
          color="bg-purple-500"
          position={{ top: "10%", left: "10%" }}
        />
        <FloatingOrb
          delay={2}
          size="150px"
          color="bg-cyan-500"
          position={{ bottom: "20%", right: "15%" }}
        />
        <FloatingOrb
          delay={4}
          size="100px"
          color="bg-pink-500"
          position={{ top: "60%", left: "70%" }}
        />

        <div className="relative group">
          {/* Decorative rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-500/30 scale-110"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-500/30 scale-125"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Main Image */}
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-4 border-white/30 shadow-lg ring-2 ring-purple-500/40 hover:shadow-xl hover:ring-purple-600/70 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/Pranav-blazer1.jpeg"
              alt="Pranav"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Text */}
      <div className="flex flex-col gap-6 justify-center items-center md:items-start w-full max-w-3xl lg:w-1/2 order-1 lg:order-2 text-center md:text-left lg:text-justify">
        <HeroTypingBox />

        {/* Headline */}
        <motion.div
          variants={fadeInVariant(0.2)}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-3xl lg:text-5xl font-bold text-white leading-tight"
        >
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="block md:inline-block mr-0 md:mr-5"
          >
            Building
          </motion.span>

          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-[length:200%_200%]"
                style={{ animation: "gradient-shift 3s ease infinite" }}
              >
                {dynamicWords[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <motion.span whileHover={{ scale: 1.02 }} className="inline-block">
            full-stack applications
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInVariant(0.6)}
          initial="hidden"
          animate="visible"
          className="text-gray-300 text-lg leading-8 text-center md:text-left lg:text-justify"
        >
          <span className="font-semibold text-white">
            Full Stack Developer with ~1 year of professional experience
          </span>
          &nbsp;delivering end-to-end web applications. Based in Chh. Sambhajinagar, I focus on clean architecture, reusable components, and performance-optimized code.
          <br />
          <br />
          Proficient across the entire stack — crafting responsive UIs using&nbsp;
          <span className="text-white font-medium">React.js</span>,&nbsp;
          <span className="text-white font-medium">Next.js</span>, and&nbsp;
          <span className="text-white font-medium">TypeScript</span>, while
          architecting robust backend systems with&nbsp;
          <span className="text-white font-medium">Node.js</span>,&nbsp;
          <span className="text-white font-medium">Express.js</span>, and&nbsp;
          <span className="text-white font-medium">REST APIs</span>.
          <br />
          <br />
          I am experienced in shipping production-grade features, designing efficient database schemas (SQL & NoSQL), and building modern applications—including interactive workflows powered by&nbsp;
          <span className="text-white font-medium">AI</span>.
        </motion.p>


      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default HeroContent;

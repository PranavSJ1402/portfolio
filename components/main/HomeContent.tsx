"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

/* ---------------- Floating Orb ---------------- */

interface FloatingOrbProps {
  delay: number;
  size: string;
  color: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const FloatingOrb = ({ delay, size, color, position }: FloatingOrbProps) => (
  <motion.div
    className={`absolute rounded-full opacity-25 blur-2xl ${color} pointer-events-none`}
    style={{ width: size, height: size, ...position }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ---------------- Letter Animation ---------------- */

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

/* ---------------- Main Component ---------------- */

const HomeContent = () => {
  const name = "Pranav Joshi";

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1LASrX2tFRFURDh3Rj1Wohe8-KbX6-7br/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative z-30 flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-16 min-h-screen overflow-hidden text-white mt-12"
    >
      {/* Floating Orbs */}
      <FloatingOrb
        delay={0}
        size="200px"
        color="bg-purple-500"
        position={{ top: "8%", left: "5%" }}
      />
      <FloatingOrb
        delay={2}
        size="150px"
        color="bg-cyan-400"
        position={{ bottom: "18%", right: "10%" }}
      />
      <FloatingOrb
        delay={4}
        size="120px"
        color="bg-pink-500"
        position={{ top: "65%", left: "75%" }}
      />

      {/* Left Content */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        whileHover={{ x: 5 }}
        className="flex-1 z-30 text-center md:text-left flex flex-col items-center md:items-start"
      >
        <h2 className="text-3xl md:text-4xl font-medium mb-2 text-gray-300">
          Hey, I&apos;m
        </h2>

        {/* Name with Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full" />

          <h1 className="relative text-5xl md:text-6xl font-extrabold flex bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                custom={index}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Role */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-100">
          Fullstack Developer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          I&apos;m a passionate Fullstack Developer crafting smooth, scalable web
          applications with modern technologies. Explore my work and journey
          below.
        </p>

        {/* Resume Button */}
        <button
          onClick={handleDownload}
          className="inline-block py-3 px-6 bg-cyan-600 hover:bg-purple-500 text-white rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 z-[9999] relative pointer-events-auto cursor-pointer"
        >
          Download Resume
        </button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1 flex justify-center relative z-20"
      >
        <div className="relative group mt-10 md:mt-0">
          {/* Image with Tilt */}
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-4 border-white/30 shadow-lg ring-2 ring-purple-500/40 hover:shadow-xl hover:ring-purple-600/70 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/Pranav-blazer.jpeg"
              alt="Pranav Joshi"
              fill
              className="rounded-full object-cover object-top relative z-10"
              priority
            />
          </motion.div>

          {/* Floating Dots */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full pointer-events-none"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full pointer-events-none"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeContent;
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

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
    className={`absolute rounded-full opacity-20 blur-xl ${color} pointer-events-none`}
    style={{ width: size, height: size, ...position }}
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

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const HomeContent = () => {
  const name = "Pranav Joshi";

  return (
    <section
      id="home"
      className="relative z-30 pointer-events-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-8 md:px-16 min-h-screen overflow-hidden text-white"
    >
      {/* Floating Orbs */}
      <FloatingOrb
        delay={0}
        size="180px"
        color="bg-purple-500"
        position={{ top: "10%", left: "5%" }}
      />
      <FloatingOrb
        delay={2}
        size="140px"
        color="bg-cyan-400"
        position={{ bottom: "15%", right: "10%" }}
      />
      <FloatingOrb
        delay={4}
        size="100px"
        color="bg-pink-500"
        position={{ top: "65%", left: "75%" }}
      />

      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-30"
      >
        <h2 className="text-3xl md:text-4xl font-medium mb-2 text-gray-300">
          Hey, I&apos;m
        </h2>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 flex bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
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

        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Fullstack <br /> Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl pointer-events-auto">
          Hey there, I&apos;m a passionate Fullstack Developer crafting smooth,
          scalable web apps. Take a look around and discover what I&apos;ve
          built!
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative z-20"
      >
        <div className="relative group pointer-events-auto">
          {/* Decorative rotating rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-500/30 scale-110 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-500/30 scale-125 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Image */}
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-4 border-white/30 shadow-lg ring-2 ring-purple-500/40 hover:shadow-xl hover:ring-purple-600/70 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/Pranav.jpg"
              alt="Pranav Joshi"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-full"
              priority
            />
          </motion.div>

          {/* Floating Dots */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full pointer-events-none"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeContent;

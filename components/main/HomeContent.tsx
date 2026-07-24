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

/* ---------------- Icons (inline, no extra deps) ---------------- */

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path
      d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowDown = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path
      d="M12 5v14m0 0 6-6m-6 6-6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------------- Main Component ---------------- */

const HomeContent = () => {
  const name = "Pranav Joshi";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Pranav_Joshi_Resume_SDE.pdf"; // must exist at public/resume.pdf
    link.download = "Pranav_Joshi_Resume_SDE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      {/* subtle grid texture for depth, consistent with rest of the site */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Left Content */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1 z-30 text-center md:text-left flex flex-col items-center md:items-start"
      >
        {/* Status badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-cyan-300/80 border border-cyan-300/20 bg-cyan-300/[0.04] rounded-full px-4 py-1.5 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Open to opportunities
        </motion.span>

        <h2 className="text-3xl md:text-4xl font-medium mb-2 text-gray-300">
          Hey, I&apos;m
        </h2>

        {/* Name with Glow */}
        <div className="relative mb-4">
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
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-100"
        >
          Fullstack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
        >
          I&apos;m a passionate Fullstack Developer crafting smooth, scalable
          web applications with modern technologies. Explore my work and journey
          below.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/Pranav_Joshi_SDE_Resume.pdf"
            download="Pranav_Joshi_SDE_Resume.pdf"
            className="group inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-white rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20 z-[9999] relative pointer-events-auto cursor-pointer"
          >
            <IconDownload />
            Download Resume
          </a>

        </motion.div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1 flex justify-center relative z-20"
      >
        <div className="relative group mt-10 md:mt-0">
          {/* rotating gradient ring behind the photo */}
          <motion.div
            className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,theme(colors.purple.500),theme(colors.cyan.400),theme(colors.pink.500),theme(colors.purple.500))] opacity-60 blur-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          {/* Image with Tilt */}
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-4 border-white/20 shadow-lg transition-all duration-300"
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
            className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full pointer-events-none shadow-lg shadow-purple-500/40"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full pointer-events-none shadow-lg shadow-cyan-500/40"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeContent;

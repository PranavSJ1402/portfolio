"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ---------------- Floating Orb ---------------- */

interface FloatingOrbProps {
  delay: number;
  size: string;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
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
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ---------------- Capability glyphs (no extra deps) ---------------- */

const GlyphFrontend = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const GlyphBackend = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="7" cy="7" r="1" fill="currentColor" />
    <circle cx="7" cy="17" r="1" fill="currentColor" />
  </svg>
);
const GlyphSystems = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

/* ---------------- Main Component ---------------- */

const HeroContent = () => {
  const fadeInVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  const capabilities = [
    {
      title: "Frontend",
      desc: "React.js, Next.js, TypeScript",
      icon: <GlyphFrontend />,
      theme: "from-cyan-300 to-blue-400",
    },
    {
      title: "Backend",
      desc: "Node.js, Express.js, REST APIs",
      icon: <GlyphBackend />,
      theme: "from-emerald-300 to-green-400",
    },
    {
      title: "Systems",
      desc: "SQL & NoSQL schema design, AI-powered features",
      icon: <GlyphSystems />,
      theme: "from-rose-300 to-pink-400",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 mt-8 md:mt-20 w-full z-[20] gap-14 lg:gap-16 relative max-w-7xl mx-auto"
    >
      {/* Left Section - Image */}
      <motion.div
        variants={fadeInVariant(0.8)}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-[42%] flex justify-center items-center order-2 lg:order-1 shrink-0"
      >
        <div className="relative group w-80 h-80 md:w-96 md:h-96">
          {/* Floating Orbs — anchored to the image itself, not the column */}
          <FloatingOrb delay={0} size="120px" color="bg-purple-500" position={{ top: "-8%", left: "-10%" }} />
          <FloatingOrb delay={2} size="100px" color="bg-cyan-500" position={{ bottom: "-6%", right: "-8%" }} />
          <FloatingOrb delay={4} size="70px" color="bg-pink-500" position={{ top: "45%", right: "-14%" }} />

          {/* Decorative rings */}
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

          {/* Main Image */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-4 border-white/20 shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/Pranav-blazer1.jpeg"
              alt="Pranav"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Text */}
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start w-full lg:w-[58%] order-1 lg:order-2 text-center lg:text-left">
        {/* Eyebrow */}
        <motion.span
          variants={fadeInVariant(0)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 font-mono text-xl tracking-[0.25em] uppercase text-cyan-300/70 border border-cyan-300/20 bg-cyan-300/[0.04] rounded-full px-4 py-1.5"
        >
          About me
        </motion.span>

        {/* Headline — static sentence, no cycling */}
        <motion.div
          variants={fadeInVariant(0.15)}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-[46px] font-bold text-white leading-[1.15]"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            scalable, secure, end-to-end
          </span>{" "}
          full-stack apps
        </motion.div>

        {/* Intro line */}
        <motion.p
          variants={fadeInVariant(0.3)}
          initial="hidden"
          animate="visible"
          className="text-gray-300 text-base md:text-lg leading-7 md:leading-8 max-w-xl"
        >
          <span className="font-semibold text-white">
            Full Stack Developer with ~1 year of professional experience
          </span>{" "}
          delivering end-to-end web applications — focused on clean
          architecture, reusable components, and performance-optimized code.
        </motion.p>

        {/* Capability rows */}
        <motion.div
          variants={fadeInVariant(0.45)}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col gap-3 max-w-xl"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.035] border border-white/[0.07] hover:border-white/[0.16] hover:bg-white/[0.06] transition-all duration-200"
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center bg-gradient-to-br ${cap.theme} text-black/80`}
              >
                {cap.icon}
              </div>
              <div className="text-left">
                <p className="text-white/95 font-semibold text-sm sm:text-base">
                  {cap.title}
                </p>
                <p className="text-white/45 text-xs sm:text-sm">{cap.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
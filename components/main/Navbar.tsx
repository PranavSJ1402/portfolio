"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-me", label: "About me" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contacts", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-full h-[65px] fixed top-0 left-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">

      {/* ── Desktop: logo+name left · tabs center ── */}
      <div className="hidden md:flex w-full h-full items-center justify-between relative">

        {/* Left — logo + domain handle */}
        <a href="#about-me" className="shrink-0 flex items-center gap-3 group">
          <Image
            src="/PJLogo.png"
            alt="Pranav Joshi"
            width={44}
            height={44}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            priority
          />
          <span className="font-mono text-[15px] shrink-0 select-none flex items-center">
            <span className="text-cyan-400 font-bold mr-0.5">&lt;</span>
            <span className="text-gray-300 font-semibold tracking-wide">PranavJoshi</span>
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-cyan-400 font-bold ml-1"
            >
              /&gt;
            </motion.span>
          </span>
        </a>

        {/* Center — tabs */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 px-6 py-2 border border-[#7042f861] rounded-full text-gray-200 text-sm">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right - spacer to maintain flex balance or leave empty */}
        <div className="w-[100px] shrink-0"></div>
      </div>

      {/* ── Mobile: tagline left · logo button right ── */}
      <div className="flex md:hidden w-full h-full items-center justify-between">

        {/* Left — domain handle */}
        <span className="font-mono text-[15px] select-none flex items-center">
          <span className="text-cyan-400 font-bold mr-0.5">&lt;</span>
          <span className="text-gray-300 font-semibold tracking-wide">pranavjoshi</span>
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-cyan-400 font-bold ml-1"
          >
            /&gt;
          </motion.span>
        </span>

        {/* Right — Logo toggles mobile menu */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="shrink-0"
        >
          <motion.div
            animate={{ rotate: menuOpen ? 360 : 0, scale: menuOpen ? 0.85 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/PJLogo.png"
              alt="Menu"
              width={40}
              height={40}
              className="object-contain opacity-90"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute top-[65px] left-0 w-full bg-[#0e0b1c]/95 backdrop-blur-md border-t border-[#7042f861] z-40 px-6 py-5 text-white"
          >
            <div className="flex flex-col gap-5 text-base font-medium">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="hover:text-purple-400 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

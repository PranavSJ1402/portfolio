"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-md border-b border-[#2A0E61]/50 bg-[#030014]/80">
      <div className="mx-auto max-w-7xl px-4 md:px-10 h-[65px] flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center gap-1">
          <motion.span
            animate={{ color: ["#8b5cf6", "#06b6d4", "#8b5cf6"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-bold text-3xl sm:text-4xl leading-none"
          >
            P
          </motion.span>
          <motion.span
            animate={{ color: ["#8b5cf6", "#06b6d4", "#8b5cf6"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-bold text-2xl sm:text-3xl leading-none"
          >
            ranav
          </motion.span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <div className="flex gap-6 px-6 py-2 border border-[#7042f861] rounded-full text-gray-200">
            <a href="#home">Home</a>
            <a href="#about-me">About me</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contact</a>
          </div>
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-[65px] left-0 w-full bg-[#0e0b1c] border-t border-[#7042f861] py-4 px-6 flex flex-col gap-4 text-white z-40">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about-me" onClick={() => setMenuOpen(false)}>About me</a>
          <a href="#tech-stack" onClick={() => setMenuOpen(false)}>Tech Stack</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

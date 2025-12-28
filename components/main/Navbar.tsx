"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-[65px] fixed top-0 left-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center space-x-1">
          {/* "P" with gradient animation */}
          <motion.span
            initial={{ color: "#8b5cf6" }}
            animate={{ color: ["#8b5cf6", "#06b6d4", "#8b5cf6"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-bold text-3xl sm:text-4xl"
          >
            P
          </motion.span>

          {/* "ranav" – no animation, force white color */}
          <span className="font-bold text-3xl sm:text-4xl text-white">ranav</span>

          {/* "J" with gradient animation */}
          <motion.span
            initial={{ color: "#8b5cf6" }}
            animate={{ color: ["#8b5cf6", "#06b6d4", "#8b5cf6"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-bold text-3xl sm:text-4xl"
          >
            J
          </motion.span>

          {/* "oshi" – no animation, force white color */}
          <span className="font-bold text-3xl sm:text-4xl text-white">oshi</span>
        </a>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex gap-6 px-6 py-2 border border-[#7042f861] rounded-full text-gray-200">
            <a href="#home">Home</a>
            <a href="#about-me">About me</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contact</a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-[65px] left-0 w-full bg-[#0e0b1c] border-t border-[#7042f861] z-40 px-6 py-4 text-white"
        >
          <div className="flex flex-col gap-4">
            <a href="#home" onClick={toggleMenu}>Home</a>
            <a href="#about-me" onClick={toggleMenu}>About me</a>
            <a href="#tech-stack" onClick={toggleMenu}>Tech Stack</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#contacts" onClick={toggleMenu}>Contact</a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

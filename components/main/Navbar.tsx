"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon set (install if needed)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center space-x-1">
          <motion.span
            animate={{ color: ["#8b5cf6", "#06b6d4", "#8b5cf6"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            className="font-bold text-3xl sm:text-4xl"
          >P</motion.span>
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-bold text-3xl sm:text-4xl text-white"
          >ranav
          </motion.span>
          <motion.span
            animate={{ color: ["#8b5cf6", "#06b6d4", "#8b5cf6"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            className="font-bold text-3xl sm:text-4xl"
          >
            J
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-bold text-3xl sm:text-4xl text-white"
          >
            oshi
          </motion.span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex gap-6 px-6 py-2 border border-[#7042f861] rounded-full text-gray-200">
            <a href="#home" className="cursor-pointer">Home</a>
            <a href="#about-me" className="cursor-pointer">About me</a>
            <a href="#tech-stack" className="cursor-pointer">Tech Stack</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
            <a href="#contacts" className="cursor-pointer">Contact</a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#0e0b1c] border-t border-[#7042f861] rounded-b-lg py-4 px-6 flex flex-col gap-4 text-white">
          <a href="#home" className="cursor-pointer" onClick={toggleMenu}>Home</a>
          <a href="#about-me" className="cursor-pointer" onClick={toggleMenu}>About me</a>
          <a href="#tech-stack" className="cursor-pointer" onClick={toggleMenu}>Tech Stack</a>
          <a href="#projects" className="cursor-pointer" onClick={toggleMenu}>Projects</a>
          <a href="#contacts" className="cursor-pointer" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

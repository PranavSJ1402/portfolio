"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

type ExperienceCardProps = {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  logo: string;
};

const ExperienceCard = ({
  role,
  company,
  duration,
  responsibilities,
  logo,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#1a1a2e]/40 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
    >
      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="relative z-10 flex items-start gap-5 mb-5">
        {/* Company Logo Container */}
        <div className="w-16 h-16 rounded-xl bg-white/5 p-2 flex items-center justify-center overflow-hidden shrink-0 border border-white/10 group-hover:border-purple-500/40 transition-colors duration-300">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>

        {/* Role & Company info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {role}
          </h3>
          <p className="text-purple-400 font-medium text-sm mt-0.5">{company}</p>

          <div className="flex items-center gap-2 text-gray-400 text-xs mt-2 bg-white/5 w-fit px-2 py-1 rounded-md border border-white/5">
            <FaCalendarAlt className="text-purple-400/80" />
            <span className="font-medium tracking-wide">{duration}</span>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="relative z-10">
        <ul className="space-y-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-3 group/item">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60 mt-2 shrink-0 group-hover/item:bg-purple-400 group-hover/item:scale-125 transition-all duration-300" />
              <p className="text-gray-300/90 text-[14px] leading-relaxed group-hover/item:text-white transition-colors duration-300">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

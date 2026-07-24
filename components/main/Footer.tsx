"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {

    const fadeInVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });
  const socialLinks = [
    {
      href: "https://github.com/PranavSJ1402",
      icon: <RxGithubLogo size={24} />,
      label: "GitHub",
      color: "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    },
    {
      href: "https://linkedin.com/in/pranav-joshi-611838224",
      icon: <RxLinkedinLogo size={24} />,
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=pranavsj02@gmail.com",
      icon: <MdEmail size={24} />,
      label: "Email Me",
      color: "hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
    },
    {
      href: "tel:+918625801402",
      icon: <MdPhone size={24} />,
      label: "+91 8625801402",
      color: "hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]",
    },
  ];

  return (
    <footer
      className="w-full bg-[#030014]/30 backdrop-blur-xl border-t border-white/10 text-gray-200 py-16 relative z-50 overflow-hidden"
      id="contacts"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
               <motion.span
                 variants={fadeInVariant(0)}
                 initial="hidden"
                 animate="visible"
                 className="inline-flex items-center gap-2 font-mono mb-4 text-3xl tracking-[0.25em] uppercase text-cyan-300/70 border border-cyan-300/20 bg-cyan-300/[0.04] rounded-full px-4 py-1.5"
               >
                 Let&rsquo;s Connect
            </motion.span>
          <p className="text-gray-400 text-md italic max-w-md mx-auto">
            Reach out via any of these platforms!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group ${link.color}`}
            >
              <div className="mb-4 text-gray-400 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <span className="text-sm font-medium tracking-wide transition-colors duration-300">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Pranav Joshi. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-default hover:text-purple-400 transition-colors">Built with Next.js & Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

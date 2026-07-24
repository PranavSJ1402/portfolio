"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../main/ExperienceCard";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "IP SUPER SHOPPEE Pvt Ltd",
    duration: "09/2025 – 03/2026",
    logo: "/ipshopy.png",
    responsibilities: [
      "Developed a blog application using Next.js, enhancing key features and improving user engagement through interactive UI components and dynamic routing.",
      "Worked on building Google Ads management platform enabling sellers to manage ad campaigns efficiently.",
      "Integrated backend APIs for real-time updates and smooth data flow.",
      "Collaborated with cross-functional teams to deliver production-ready features.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Small Fare Pvt Ltd",
    duration: "07/2025 – 10/2025",
    logo: "/smallfare_logo.jpg",
    responsibilities: [
      "Built responsive UI components using Next.js and TypeScript.",
      "Implemented dynamic workflows to improve user interactions.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Baoiam Innovations Pvt Ltd",
    duration: "11/2024 – 02/2025",
    logo: "/baoiam.jpg",
    responsibilities: [
      "Developed React.js frontend features integrated with backend APIs.",
      "Improved Profile Page UX and API handling.",
    ],
  },
  {
    role: "B.Tech in Computer Science and Engineering",
    company: "Marathwada Institute of Technology",
    duration: "2021 – 2025",
    logo: "/mit_logo.png",
    responsibilities: [
      "Bachelor of Technology in Computer Science and Engineering.",
      "CGPA: 7.32",
      "Chhatrapati Sambhajinagar, Maharashtra.",
    ],
  },
];

const Experience = () => {
    const fadeInVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <motion.span
                 variants={fadeInVariant(0)}
                 initial="hidden"
                 animate="visible"
                 className="inline-flex items-center gap-2 font-mono mb-4 text-3xl tracking-[0.25em] uppercase text-cyan-300/70 border border-cyan-300/20 bg-cyan-300/[0.04] rounded-full px-4 py-1.5"
               >
                 My Journey
            </motion.span>
          <p className="text-gray-400 text-lg md:text-xl italic font-medium">
            From college classrooms to real-world products
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-30 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12"
              >
                {/* Modern Step Indicator */}
                <div className="absolute left-0 top-0 mt-6 -translate-x-0">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-10 h-10 bg-purple-500/20 rounded-full animate-ping" />
                    <div className="relative w-9 h-9 rounded-full bg-[#030014] border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      {idx + 1}
                    </div>
                  </div>
                </div>

                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  duration={exp.duration}
                  responsibilities={exp.responsibilities}
                  logo={exp.logo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

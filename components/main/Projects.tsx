"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import expenseTrackerImg from '../../public/Expense-Tracker.png'

const Projects = () => {
    const fadeInVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
            <motion.span
                        variants={fadeInVariant(0)}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 font-mono mb-4 text-3xl tracking-[0.25em] uppercase text-cyan-300/70 border border-cyan-300/20 bg-cyan-300/[0.04] rounded-full px-4 py-1.5"
                      >
                        PROJECTS
                   </motion.span>
        <p className="text-gray-400 text-sm italic  md:text-xl max-w-2xl mx-auto">
          Projects that i have built, showcasing my skills and expertise in full-stack development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        <ProjectCard
          src="/FitBot(1).png"
          title="Fitness-Plan Generator AI"
          projectName="FitBot"
          description="A full-stack AI fitness platform built with Next.js. It generates personalized workout and diet plans based on user goals and inputs. Integrated with voice-based interaction using Vapi and features a clean, responsive UI."
          githubLink="https://github.com/PranavSJ1402/FitMentorAI"
          projectLink="https://fitbot-ai.vercel.app/"
        />
        <ProjectCard
          src="/AI-Interview.png"
          title="Interview Prep Platform"
          projectName="PrepMate"
          description="A full-stack interview prep tool powered by Gemini API. It generates dynamic Q&A based on user-selected roles, with concept explanations and session flow. Built using React, Tailwind CSS, Node.js, and MongoDB."
          githubLink="https://github.com/PranavSJ1402/AI-Interview-Prep-Platform"
          projectLink="https://prepmate-interview-prep.vercel.app/"
        />
   <ProjectCard
  src="/collabedit.png"
  title="Real-Time Collaborative Editor"
  projectName="Collab-Edit"
  description="A real-time collaborative document editor built with Socket.io for live syncing. Features JWT-secured auth, document CRUD, and a three-tier permission system, backed by Prisma with Neon Postgres. Dockerized and deployed on AWS ECS/Fargate."
  githubLink="https://github.com/PranavSJ1402/CollabEdit"
  projectLink="#"
/>
      </div>
    </section>
  );
};

export default Projects;

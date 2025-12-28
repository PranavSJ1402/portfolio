"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import expenseTrackerImg from '../../public/Expense-Tracker.png'

const Projects = () => {
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
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 pb-4">
          Featured Projects
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          A showcase of my recent work, combining robust engineering with creative design.
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
          src={expenseTrackerImg}
          title="AI-Powered tracker"
          projectName="Tracklet"
          description="An AI expense tracker that categorizes spending, analyzes patterns, and offers personalized financial tips. Built with Next.js, Clerk for authentication, OpenAI for insights, and real-time visualizations using React Charts."
          githubLink="https://github.com/PranavSJ1402/Expense_Tracker_AI"
          projectLink="https://tracklet-ai.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;

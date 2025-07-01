import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-2 px-10">
        <ProjectCard
          src="/Fitness Mentor Ai.png"
          title="Fitness-Mentor AI"
          description="A full-stack AI-powered fitness planning platform built with Next.js. It delivers personalized workout and meal plans based on user inputs like fitness goals and dietary preferences. Features interactive voice-based guidance and a clean, responsive interface for a smooth user experience."
          githubLink="https://github.com/PranavSJ1402/FitMentorAI"
        />
        <ProjectCard
          src="/ai interview.png"
          title="AI Interview Prep Platform"
          description="A fullstack web application that helps users prepare for technical interviews using AI. Features include dynamic Q&A generation, personalized sessions by role, and concept explanations. Built with React, Tailwind, and Gemini API."
          githubLink="https://github.com/PranavSJ1402/ai-interview-prep"
        />

        <ProjectCard
          src="/task manager.png"
          title="Task Management App"
          description="A fullstack task management platform where users can create, update, and organize their tasks efficiently. Includes status filters, deadline tracking, and a responsive UI built with React and styled using Tailwind CSS."
          githubLink="https://github.com/PranavSJ1402/task-manager-app"
        />
      </div>
    </div>
  );
};

export default Projects;

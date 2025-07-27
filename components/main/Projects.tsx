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
          src="/FitBot(1).png"
          title="Fitness-Plan Generator AI"
          projectName="FitBot"
          description="A full-stack AI fitness platform built with Next.js. It generates personalized workout and diet plans based on user goals and inputs. Integrated with voice-based interaction using Vapi and features a clean, responsive UI."
          githubLink="https://github.com/PranavSJ1402/FitMentorAI"
          projectLink="https://fitbot-ai.vercel.app/"
        />
        <ProjectCard
          src="/AI-Interview.png"
          title="AI Interview Prep Platform"
          projectName="PrepMate"
          description="A full-stack interview prep tool powered by Gemini API. It generates dynamic Q&A based on user-selected roles, with concept explanations and session flow. Built using React, Tailwind CSS, Node.js, and MongoDB."
          githubLink="https://github.com/PranavSJ1402/AI-Interview-Prep-Platform"
          projectLink="https://prepmate-interview-prep.vercel.app/"
        />
        <ProjectCard
          src="/task manager.png"
          title="Task Management App"
          projectName="Assignly"
          description="A full-stack task manager with RBAC, allowing team leads to assign tasks and members to receive and update task status. Tracks tasks by priority, status, and deadlines. Built using React, Node.js, Express.js, MySQL, and Tailwind CSS."
          githubLink="https://github.com/PranavSJ1402/Task_Manager"
          projectLink=""

        />
      </div>
    </div>
  );
};

export default Projects;

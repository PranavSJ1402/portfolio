import React from "react";
import ProjectCard from "../sub/ProjectCard";
import expenseTrackerImg from '../../public/Expense-Tracker.png'
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
          src={expenseTrackerImg}
          title="AI-Powered Expense Tracker"
          projectName="Tracklet"
          description="An AI expense tracker that categorizes spending, analyzes patterns, and offers personalized financial tips. Built with Next.js, Clerk for authentication, OpenAI for insights, and real-time visualizations using React Charts."
          githubLink="https://github.com/PranavSJ1402/Expense_Tracker_AI"
          projectLink=""
        />

      </div>
    </div>
  );
};

export default Projects;

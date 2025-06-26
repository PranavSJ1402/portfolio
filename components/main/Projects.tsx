import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
   <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
  <ProjectCard
    src="/Fitness Mentor Ai.png"
    title="Fitness-Mentor AI"
    description="A full-stack AI-powered fitness planning platform built with Next.js. It delivers personalized workout and meal plans based on user inputs like fitness goals and dietary preferences. Features interactive voice-based guidance and a clean, responsive interface for a smooth user experience."
    githubLink="https://github.com/PranavSJ1402/FitMentorAI"
  />
  <ProjectCard
    src="/Jobspot.png"
    title="Job Listing Platform"
    description="A fully responsive job listing frontend platform built using React. Users can browse job postings and view job details. Designed with modern UI principles and built for recruiters and job seekers."
    githubLink="https://github.com/PranavSJ1402/JobSpot"
  />
  <ProjectCard
    src="/flavorfleet.png"
    title="Food Delivery Web-App"
    description="A fully responsive food delivery platform built using React. Users can browse food items, manage their cart, and enjoy a clean, intuitive UI. Designed with modern CSS and HTML for seamless performance across devices."
    githubLink="https://github.com/your-username/portfolio"
  />
</div>

    </div>
  );
};

export default Projects;

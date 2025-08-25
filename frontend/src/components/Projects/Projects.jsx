import React from 'react';
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import "./Projects.css";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      url: "https://mernportfolio-1.netlify.app/",
      projectImage: "/portfolio.png",
      projectTitle: "3d Portfolio Website",
      description: " Developed an full stack portfolio website using mern stack.",
      technologies: "React, MongoDB, Express, NodeJs & Three Js, Mailtrap, Cloudinary.",
    },
    {
      url: "https://sensai-smoky-psi.vercel.app/",
      projectImage: "/sensai.png",
      projectTitle: "AI Career Coach",
      description: "built a full stack AI career coach called Sensei with features like user onboarding to generate interactive dashboard displaying in demand skills and salary Trends in your industry which is updated weekly.",
      technologies: "React JS, Next JS, Tailwind CSS, NeonDB, Prisma, Clerk Authentication, Inngest, Gemini API, Shadcn UI"
    },
    {
      url: "https://nextjs-crypto-api-dun.vercel.app/",
      projectImage: "/Crypto-api.png",
      projectTitle: "Bitcoin Cryptocurrency Finance Price Tracker App",
      description: "Developed a Bitcoin Cryptocurrency Finance Price Tracker App in which we used Crypto API to get the data. Users can search different bitcoin names and track their price using NextJS and ReactJs.",
      technologies: "NextJs, ReactJS, Crypto API",
    },
  ];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            url={project.url}
            projectImage={project.projectImage}
            projectTitle={project.projectTitle}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
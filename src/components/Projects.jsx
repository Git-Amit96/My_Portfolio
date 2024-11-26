import React from "react";
import ProjectCard from "./ProjectCard";
import photo from "../utils/Netflix.png";
import swiggy from "../utils/Swiggy.png";
import youtube from "../utils/Youtube.png";
import portfolio from "../utils/Portfolio.png";
import airbnb from "../utils/Airbnb.png";

const Projects = () => {
  return (
    <div id="projects" className="bg-black mb-[4rem]">
      <div className="container mx-auto  max-w-[1300px] py-6 px-4 sm:px-6 text-white ">
        <div className="mb-[40px]">
          <h1 className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight">
            HERE'S A GLIMPSE OF
          </h1>
          <h1 className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight">
            ✨SOME EXCITING PROJECTS
          </h1>
          <h1 className="font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight">
            I'VE DONE
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <ProjectCard
            title="Netflix Website"
            summary="A dynamic movie-streaming web app built with React, utilizing TMDB API for fetching and displaying movies. It features responsive design, seamless navigation, and a visually appealing UI."
            tech={[
              "React",
              "JavaScript",
              "Firebase",
              "Tailwind",
              "TMDB API",
              "Redux",
            ]}
            photo={photo}
            isPreview={true}
            linkPreview="https://netflixgpt-bd4b9.web.app/"
            linkCode="https://github.com/Git-Amit96/Netflix-GPT.git"
          />
          <ProjectCard
            title="Food Ordering Website"
            summary="A food delivery app replica built with React, showcasing responsive design, dynamic restaurant listings, and a cart system for smooth user interactions."
            tech={["React", "Redux", "Tailwind", "JavaScript", "Parcel"]}
            photo={swiggy}
            isPreview={false}
            linkPreview=""
            linkCode="https://github.com/Git-Amit96/Food_Ordering_Website.git"
          />
          <ProjectCard
            title="Youtube Player"
            summary="A video streaming platform replica created using React, featuring video search, dynamic video rendering, and responsive design for an engaging user experience."
            tech={["React", "Redux", "JavaScript", "Vite"]}
            photo={youtube}
            isPreview={false}
            linkPreview=""
            linkCode="https://github.com/Git-Amit96/Food_Ordering_Website.git"
          />
          <ProjectCard
            title="Airbnb Website"
            summary="A fully responsive rental booking platform built with React, featuring dynamic property listings, interactive search, and seamless navigation for a user-friendly experience."
            tech={["Node.js", "Express.js", "React", "JavaScript"]}
            photo={airbnb}
            isPreview={false}
            linkPreview=""
            linkCode="https://github.com/Git-Amit96/My_Airbnb_Clone.git"
          />
          <ProjectCard
            title="Portfolio"
            summary="A personal portfolio website showcasing my skills, projects, and knowledge. Built with React and Tailwind CSS, it delivers a visually appealing and responsive design."
            tech={["React", "Tailwind", "JavaScript"]}
            photo={portfolio}
            isPreview={false}
            linkPreview=""
            linkCode="https://github.com/Git-Amit96/My_Portfolio.git"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

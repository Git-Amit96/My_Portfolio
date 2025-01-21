import React from "react";
import ProjectCard from "./ProjectCard";
import photo from "../utils/Netflix.png";
import collab from "../utils/Collab.png";
import swiggy from "../utils/Swiggy.png";
import youtube from "../utils/Youtube.png";
import portfolio from "../utils/Portfolio.png";
import recipe from "../utils/Recipe.png";

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
          {/* Collab App Card */}
          <ProjectCard
            title="Collab App"
            summary="A Full Stack Collaborating Task Managing App built in MERN Stack. It features responsive design, share tasks with other users, manage Tasks and keep tracking activities related to task. "
            tech={[
              "Node.js",
              "Express.js",
              "React.js",
              "MongoDB Atlas",
              "Authentication",
              "Redux",
              "Tailwind CSS",
              "Postman",
              "Micro Services",
            ]}
            photo={collab}
            isPreview={true}
            linkPreview="https://mellow-frangipane-e24486.netlify.app"
            linkCode="https://github.com/Git-Amit96/To-Do-App.git"
          />
          {/* Recipe Book App Card */}
          <ProjectCard
            title="Recipe Book App"
            summary="A fully responsive Recipe Book app built with React, featuring dynamic recipes listings, interactive search, and seamless navigation for a user-friendly experience."
            tech={["React", "API", "Spoonacular API", "JavaScript", "Tailwind", "HTML"]}
            photo={recipe}
            isPreview={true}
            linkPreview="https://hunger-bell.netlify.app/"
            linkCode="https://github.com/Git-Amit96/Recipe-Book.git"
          />

          {/* Netflix App Card */}
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

          {/* Swiggy App Card */}
          <ProjectCard
            title="Food Ordering Website"
            summary="A food delivery app replica built with React, showcasing responsive design, dynamic restaurant listings, and a cart system for smooth user interactions."
            tech={["React", "Redux", "Tailwind", "JavaScript", "Parcel"]}
            photo={swiggy}
            isPreview={false}
            linkPreview=""
            linkCode="https://github.com/Git-Amit96/Food_Ordering_Website.git"
          />

          {/* Youtube App Card */}
          <ProjectCard
            title="Youtube Player"
            summary="A video streaming platform replica created using React, featuring video search, dynamic video rendering, and responsive design for an engaging user experience."
            tech={["React", "Redux", "JavaScript", "Vite"]}
            photo={youtube}
            isPreview={false}
            linkPreview=""
            linkCode="https://github.com/Git-Amit96/Food_Ordering_Website.git"
          />

          {/* Portfolio App Card */}
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

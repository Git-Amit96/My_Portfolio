import React from "react";
import { motion } from "motion/react";
const ProjectCard = ({
  title,
  summary,
  tech,
  photo,
  isPreview,
  linkPreview,
  linkCode,
}) => {
  return (
    <motion.div
      className="w-full sm:w-[48%] md:w-[32%] lg:w-[30%] p-2"
      initial={{ translateY: 0, opacity: 0 }}
      whileInView={{ translateY: -20, opacity: 1, transition: { duration: 1 } }}
    >
      <div className="card-container h-full rounded-lg overflow-hidden shadow-lg relative group border border-slate-300 bg-white">
        {/* Project Image */}
        <div className="image-container">
          <img
            src={photo}
            alt="Project Screenshot"
            className="w-full h-[200px] sm:h-[250px] object-cover"
          />
        </div>

        {/* Project Content */}
        <div className="content p-4 flex flex-col ">
          {/* Project Title */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
            {title}
          </h2>
          {/* Short Summary */}
          <p className="text-xs sm:text-sm text-gray-600 mb-4 flex-grow">
            {summary}
          </p>
          {/* Tech Stack Tags */}
          <div className=" flex flex-wrap gap-2 ">
            {tech.map((stack, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full "
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="buttons flex gap-4">
            {/* Code Button */}
            <a
              href={linkCode}
              target="_blank"
              className="bg-white text-black px-4 py-2 text-sm font-semibold rounded hover:bg-gray-200"
            >
              Code
            </a>
            {/* Preview Button */}
            {isPreview ? (
              <a
                href={linkPreview}
                target="_blank"
                className="bg-white text-black px-4 py-2 text-sm font-semibold rounded hover:bg-gray-200"
              >
                Preview
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

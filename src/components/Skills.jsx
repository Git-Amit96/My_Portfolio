import React from "react";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <motion.div
      className="py-[4em] relative"
      id="skills"
      initial={{ translateY: 0, opacity: 0 }}
      whileInView={{
        translateY: -20,
        opacity: 1,
        transition: { duration: 1 },
      }}
    >
      <div className="text-center font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight">
        I SPECIALIZE IN A
      </div>
      <div className="text-center font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight">
        RANGE OF 💪SKILLS
      </div>
      <div className="container mx-auto flex flex-col md:flex-row md:flex-wrap justify-center gap-4 items-center max-w-[1300px] py-6 px-4 sm:px-6 text-white space-y-6 md:space-y-0">
        {/** Card 1: Front-end Development */}
        <div className="w-full sm:w-[350px] h-auto md:h-[200px] rounded-md border border-gray-300 hover:scale-105 transition-transform duration-500 text-black px-4 py-6 hover:bg-neon">
          <h1 className="text-center text-[20px] md:text-[22px] font-bold">
            Front-end Development
          </h1>
          <p className="text-center text-[16px] md:text-[18px] text-slate-700 mt-2">
            I am proficient in
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center font-normal">
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              React
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              JavaScript
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              HTML
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              Redux
            </span>
          </div>
        </div>

        {/** Card 2: Back-end Development */}
        <div className="w-full sm:w-[350px] h-auto md:h-[200px] rounded-md border border-gray-300 hover:scale-105 transition-transform duration-500 text-black px-4 py-6 hover:bg-neon">
          <h1 className="text-center text-[20px] md:text-[22px] font-bold">
            Back-end Development
          </h1>
          <p className="text-center text-[16px] md:text-[18px] text-slate-700 mt-2">
            I am proficient in
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center font-normal">
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              Node.js
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              Express.js
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              REST APIs
            </span>
          </div>
        </div>

        {/** Card 3: Database Management */}
        <div className="w-full sm:w-[350px] h-auto md:h-[200px] rounded-md border border-gray-300 hover:scale-105 transition-transform duration-500 text-black px-4 py-6 hover:bg-neon">
          <h1 className="text-center text-[20px] md:text-[22px] font-bold">
            Database Management
          </h1>
          <p className="text-center text-[16px] md:text-[18px] text-slate-700 mt-2">
            I am proficient in
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center font-normal">
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              MongoDB
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              MySQL
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              MongoDB Atlas
            </span>
          </div>
        </div>

        {/** Card 4: Languages */}
        <div className="w-full sm:w-[350px] h-auto md:h-[200px] rounded-md border border-gray-300 hover:scale-105 transition-transform duration-500 text-black px-4 py-6 hover:bg-neon">
          <h1 className="text-center text-[20px] md:text-[22px] font-bold">
            Languages
          </h1>
          <p className="text-center text-[16px] md:text-[18px] text-slate-700 mt-2">
            I am proficient in
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center font-normal">
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              JavaScript
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              C++
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              SQL
            </span>
          </div>
        </div>

        {/** Card 5: Additional */}
        <div className="w-full sm:w-[350px] h-auto md:h-[200px] rounded-md border border-gray-300 hover:scale-105 transition-transform duration-500 text-black px-4 py-6 hover:bg-neon">
          <h1 className="text-center text-[20px] md:text-[22px] font-bold">
            Additional
          </h1>
          <p className="text-center text-[16px] md:text-[18px] text-slate-700 mt-2">
            I am proficient in
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center font-normal">
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              Problem Solving
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              English
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              DSA
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

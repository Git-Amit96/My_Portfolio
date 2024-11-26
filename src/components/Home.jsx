import React from "react";
import { Github_LOGO } from "../utils/common";
import { Linkdin_LOGO } from "../utils/common";
import { motion } from "motion/react";
import Resume from "/public/Amit_Resume.pdf";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="bg-black relative py-8 mb-6 overflow-hidden" // Added overflow-hidden
      >
        {/* Main Section */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-[1300px] py-6 px-4 sm:px-6 text-white space-y-6 lg:space-y-0">
          {/* Text Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ translateX: -30, opacity: 0 }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            <div className="font-bold text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px] leading-tight">
              <h1>CODING WITH</h1>
              <h1 className="lg:pl-12">✨ PASSION, CREATING</h1>
              <h1>WITH PURPOSE</h1>
            </div>
            <div className="max-w-[90%] sm:max-w-[70%] lg:max-w-[40%] mt-3 mx-auto lg:mx-0 text-gray-400">
              <p>
                I am a Web Developer skilled in creating responsive and dynamic
                frontends utilizing{" "}
                <span className="text-newYellow">React</span>,{" "}
                <span className="text-newYellow">JavaScript</span> and{" "}
                <span className="text-newYellow">Tailwind</span>. Proficient in
                both <span className="text-neon">FrontEnd</span> and{" "}
                <span className="text-neon">BackEnd</span> using MERN.
              </p>
              {/* Button */}
              <a
                href={Resume}
                download
                className="flex items-center justify-center mt-8 mx-auto lg:mx-0 font-primaryFont font-bold text-black space-x-2 px-4 lg:px-6 py-2 lg:py-3 bg-neon rounded-sm hover:bg-white transition-transform duration-150 scale-100 hover:scale-110 text-sm lg:text-base"
              >
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0l3.75-3.75M12 15.75L8.25 12m11.25 6.75H4.5a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 18z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Decorative Box */}
          {/* <div className="relative flex justify-center items-center">
            <div className="bg-newYellow w-[150px] sm:w-[200px] lg:w-[250px] h-[200px] sm:h-[250px] lg:h-[350px]  mx-auto lg:mx-0 rounded-md rotate-6 ">
              <div className="bg-newPurple w-full h-full rounded-md -rotate-12"></div>
            </div>
          </div> */}
        </div>

        {/* Footer Section */}
        <div className="container mx-auto flex justify-center lg:justify-start items-center space-x-4 max-w-[1300px] py-4 px-6 text-white">
          {/* Social Icons */}
          <div className="w-[30px] bg-white rounded-full transition-transform duration-150 hover:scale-110">
            <a href="https://linkedin.com/in/amit-saini432024" target="main">
              <img
                src={Linkdin_LOGO}
                alt="LinkedIn"
                className="rounded-full cursor-pointer"
              />
            </a>
          </div>
          <div className="w-[30px] bg-white rounded-full transition-transform duration-150 hover:scale-110">
            <a href="https://github.com/Git-Amit96" target="main">
              <img
                src={Github_LOGO}
                alt="GitHub"
                className="rounded-full cursor-pointer"
              />
            </a>
          </div>
          {/* Divider */}
          <div className="hidden sm:block w-[50%] lg:w-[23vw] h-[2px] bg-white"></div>
        </div>
      </section>
    </>
  );
};

export default Home;

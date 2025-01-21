import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <motion.div
        id="about"
        initial={{ translateX: -30, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
        className="container mx-auto flex justify-center text-center max-w-[1000px] items-center py-10 px-6 "
      >
        <p className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] leading-relaxed">
          👋 Hii, I am Amit Saini, a results-oriented Full Stack Web Developer using <span className="text-newPurple">MERN</span> skilled in
          creating responsive and dynamic frontends utilizing{" "}
          <span className="text-newPurple">React, JavaScript, Redux, HTML,</span> and{" "}
          <span className="text-newPurple">Tailwind CSS</span>{" "} and Scalable Backends using {" "}
          <span className="text-newPurple">Node.js, Express.js, MongoDB</span>,
          ensuring smooth integration between{" "}
          <span className="text-yellow-600">FRONT-END</span> and{" "}
          <span className="text-yellow-600">BACK-END</span>. Possesses a strong
          background in <span className="text-newPurple">MySQL</span> and{" "}
          <span className="text-newPurple">C++</span>, demonstrating excellent
          problem-solving skills and a commitment to delivering user-focused,
          visually appealing web solutions. Adept at transforming client needs
          into interactive and intuitive digital experiences that align with
          business objectives.
        </p>
      </motion.div>
    </>
  );
};

export default About;

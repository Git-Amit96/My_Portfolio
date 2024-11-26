import React, { useState } from "react";

const HeaderWithSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      {/* Header */}
      <header className="w-full bg-black text-white z-50">
        <div className="container mx-auto flex justify-between max-w-[1300px] items-center py-4 px-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white">
            AMIT<span className="text-neon">FOLIO.</span>
          </a>

          {/* Navigation Links (Hidden on smaller screens) */}
          <nav className="hidden md:flex space-x-[4em] font-normal items-center">
            <a
              href="#home"
              className="hover:text-newYellow transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-newYellow transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-newYellow transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-newYellow transition-colors duration-200"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="hidden md:inline bg-neon text-black px-4 py-2 rounded-full font-medium transition"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="mt-20 flex flex-col items-center space-y-6">
          <a
            href="#about"
            className="text-lg text-gray-800 hover:text-purple-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg text-gray-800 hover:text-purple-500 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-lg text-gray-800 hover:text-purple-500 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-800 hover:text-purple-500 transition"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="bg-purple-500 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600 transition"
          >
            Hire Me
          </a>
        </nav>
      </div>

      {/* Overlay (optional, to close sidebar on click) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default HeaderWithSidebar;

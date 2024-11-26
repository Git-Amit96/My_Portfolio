import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";


const appRouter = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // App component with Header and Outlet
    children: [{
      path: "/home",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/skills",
      element: <Skills />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/contact",
      element: <ContactForm />
    }
    ]

  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

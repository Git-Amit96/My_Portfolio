import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home";

import { lazy } from 'react';
import ContactForm from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));


export const App = () => {
  return (
    <div className="scroll-smooth">
      <ScrollToTop />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />

    </div>
  )
}

export default App;

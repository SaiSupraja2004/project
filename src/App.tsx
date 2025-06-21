import React from 'react';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Internships } from './components/Internships';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <ThemeToggle />
      
      <main>
        <Hero />
        <Education />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Achievements />
      </main>
      
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Sai Supraja Dharani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { Folder, Wine, Bot } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Wine Quality Prediction',
      description: 'Used Python and ML libraries to assess wine quality based on chemical attributes.',
      icon: Wine,
      color: 'bg-purple-500'
    },
    {
      title: 'Obstacle Avoiding Robot',
      description: 'Arduino-based robot that detects and avoids obstacles using IR sensors.',
      icon: Bot,
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Briefcase, Calendar, MapPin, Globe } from 'lucide-react';

export function Internships() {
  const internships = [
    {
      company: 'NIT Warangal',
      title: 'Online Purchase Viewers Intentions using ML',
      type: 'Offline',
      duration: 'July 6 – 26, 2024',
      description: 'ML model to predict whether a website visitor is likely to make a purchase.',
      icon: MapPin
    },
    {
      company: 'InternPe',
      title: 'Web Development Internship',
      type: 'Online',
      duration: 'July 1 – 28, 2024',
      description: 'Completed 4 structured tasks related to front-end and deployment.',
      icon: Globe
    }
  ];

  return (
    <section id="internships" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Internships</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <div
              key={internship.company}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {internship.company}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {internship.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <internship.icon className="w-4 h-4" />
                  <span>{internship.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{internship.duration}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {internship.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
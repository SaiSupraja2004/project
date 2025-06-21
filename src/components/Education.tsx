import React from 'react';
import { GraduationCap, Calendar, Trophy, BookOpen, Award } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      level: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'SR University',
      duration: 'Oct 2022 – June 2026',
      score: 'GPA: 9.2/10',
      icon: GraduationCap,
      color: 'bg-blue-600',
      courses: [
        'Data Structures', 'Machine Learning', 'DAA', 'OOP', 
        'Operating Systems', 'Network Security', 'C', 'Python', 'Java'
      ]
    },
    {
      level: 'Intermediate',
      field: 'Science',
      institution: 'Board of Intermediate Education',
      duration: '2020 – 2022',
      score: '975/1000',
      icon: BookOpen,
      color: 'bg-teal-600',
      courses: []
    },
    {
      level: 'Secondary School Certificate (SSC)',
      field: 'General Education',
      institution: 'Board of Secondary Education',
      duration: '2019 – 2020',
      score: 'GPA: 10/10',
      icon: Award,
      color: 'bg-green-600',
      courses: []
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.level}
              className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${edu.color} rounded-full flex items-center justify-center`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.level}
                    {edu.field && (
                      <span className="text-lg font-normal text-gray-600 dark:text-gray-300">
                        {' '}in {edu.field}
                      </span>
                    )}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {edu.institution}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">{edu.score}</span>
                    </div>
                  </div>

                  {edu.courses.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-500"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
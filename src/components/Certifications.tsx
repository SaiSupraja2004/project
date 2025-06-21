import React from 'react';
import { Award, Shield, Cloud, Smartphone, Network } from 'lucide-react';

export function Certifications() {
  const certifications = [
    { name: 'NPTEL – Theory of Computation', icon: Award, color: 'bg-blue-500' },
    { name: 'CCNA – Introduction to Networks', icon: Network, color: 'bg-green-500' },
    { name: 'CCNA – Switching, Routing & Wireless Essentials', icon: Network, color: 'bg-green-500' },
    { name: 'AWS Academy – AIML Internship', icon: Cloud, color: 'bg-orange-500' },
    { name: 'Google – Android Developer Internship', icon: Smartphone, color: 'bg-red-500' },
    { name: 'Fortinet – Network Security Associate', icon: Shield, color: 'bg-purple-500' },
    { name: 'Palo Alto – Cybersecurity Internship', icon: Shield, color: 'bg-teal-500' }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <cert.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  {cert.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
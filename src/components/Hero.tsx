import React from 'react';
import { Mail, Phone, Download, Linkedin, Github, Award } from 'lucide-react';

export function Hero() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sai-supraja-dharani-65598a28a',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SaiSupraja2004',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'HackerRank',
      url: 'https://hackerrank.com/profile/2203a51201',
      icon: Award,
      color: 'hover:text-green-600'
    },
    {
      name: 'Credly',
      url: 'https://www.credly.com/users/sai-supraja-dharani',
      icon: Award,
      color: 'hover:text-orange-600'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 p-1">
            <img
              src="/main.jpg"
              alt="Sai Supraja Dharani"
              className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Sai Supraja Dharani
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Aspiring Developer | Machine Learning Enthusiast
          </p>
        </div>

        <div className="mb-8 animate-fade-in-up animation-delay-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="mailto:saisupraja1126@gmail.com"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              saisupraja1126@gmail.com
            </a>
            <a 
              href="tel:+917731842843"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              +91-7731842843
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/sai%20supraja.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-400">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-300 ${link.color}`}
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
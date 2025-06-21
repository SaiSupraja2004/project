import React from 'react';
import { Trophy, Code, Clock } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  SR University Internal Hackathon
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>12-hour event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    <span>Real-world problems</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Participated in SR University's intensive 12-hour internal hackathon, 
                  collaborating with fellow students to tackle real-world problems through 
                  innovative technological solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
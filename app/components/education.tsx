'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Trophy } from 'lucide-react';

const educationData = [
  {
    institution: 'The College of Idaho',
    degree: 'B.S. in Mathematics & Computer Science',
    period: 'Expected May 2027',
    location: 'Caldwell, Idaho',
    status: 'In Progress',
    gpa: '3.8/4.0',
    honors: [
      'Dean\'s List',
      'Davis UWC Scholar'
    ],
    coursework: [
      'Differential Equations',
      'Applied Databases',
      'Data Manipulation & Visualization',
      'Linear Algebra'
    ],
    icon: <GraduationCap size={24} />,
    color: 'from-blue-500 to-indigo-600',
    current: true,
  },
  {
    institution: 'UWC ISAK Japan',
    degree: 'International Baccalaureate Bilingual Diploma',
    period: 'Aug 2022 - May 2024',
    location: 'Karuizawa, Japan',
    status: 'Graduated',
    honors: [
      'IB Diploma with Bilingual Recognition',
      'BP Talented Youth Scholar'
    ],
    coursework: [
      'Computer Science',
      'Mathematics Analysis & Approaches',
      'Physics',
      'Economics'
    ],
    icon: <Trophy size={24} />,
    color: 'from-emerald-500 to-teal-600',
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 font-mono tracking-tighter text-zinc-900 dark:text-white"
        >
          Education
        </motion.h2>
        
        <div className="relative">
          {/* Academic Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800" />
          
          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} border-4 border-white dark:border-zinc-950 shadow-lg ${edu.current ? 'animate-pulse' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${edu.current ? 'animate-ping' : ''}`} />
                  </div>
                </div>
                
                {/* Education Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative">
                    {/* Gradient Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-3xl blur opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                    
                    <div className="relative bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`bg-gradient-to-r ${edu.color} p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            {edu.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                              {edu.institution}
                            </h3>
                            <p className="text-lg font-semibold text-[#355872] dark:text-[#276DC3] mt-1">
                              {edu.degree}
                            </p>
                            <div className="flex items-center gap-2 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                              <MapPin size={14} />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`px-4 py-2 rounded-xl text-sm font-bold ${
                          edu.current 
                            ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white' 
                            : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                        }`}>
                          {edu.status}
                        </div>
                      </div>
                      
                      {/* Academic Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Calendar size={16} className="text-zinc-500 dark:text-zinc-400" />
                          </div>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Period</p>
                          <p className="font-bold text-zinc-900 dark:text-white text-sm">{edu.period}</p>
                        </div>
                        
                        {edu.gpa && (
                          <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Award size={16} className="text-zinc-500 dark:text-zinc-400" />
                            </div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">GPA</p>
                            <p className="font-bold text-zinc-900 dark:text-white text-sm">{edu.gpa}</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Honors & Awards */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={18} className={`text-transparent bg-gradient-to-r ${edu.color} bg-clip-text`} />
                          <h4 className="font-bold text-zinc-900 dark:text-white">Honors & Awards</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-sm rounded-full font-medium shadow-sm`}
                            >
                              {honor}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Relevant Coursework */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen size={18} className={`text-transparent bg-gradient-to-r ${edu.color} bg-clip-text`} />
                          <h4 className="font-bold text-zinc-900 dark:text-white">Key Coursework</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.coursework.map((course, i) => (
                            <div 
                              key={i}
                              className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/30 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`} />
                              <span className="text-sm text-zinc-700 dark:text-zinc-300">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Current Student Badge */}
                      {edu.current && (
                        <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          Current Student
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Academic Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-800/50 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Academic Journey</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              From international education in Japan to advanced computer science studies in Idaho, 
              my academic path has been shaped by diverse experiences and a commitment to excellence 
              in both mathematics and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

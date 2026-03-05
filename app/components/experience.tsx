'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Code, Database, Calendar } from 'lucide-react';

const experienceData = [
  {
    role: 'Student Supervisor',
    company: 'Bon Appetit',
    period: 'Aug 2025 - Present',
    description:
      'I lead a team of 5-6 staff during busy service hours. My role is to coordinate tasks and keep communication clear so that everything runs smoothly and guests are taken care of. I focus on solving problems in real-time and making sure our team hits our safety and service goals every shift.',
    icon: <Users size={20} />,
    color: 'from-orange-500 to-red-500',
    current: true,
  },
  {
    role: 'Technical Support Assistant',
    company: 'The College of Idaho',
    period: 'Sep 2024 - May 2025',
    description:
      'I helped students and faculty solve technical problems with their devices and software. I supported Microsoft applications across campus and wrote down step-by-step guides (workflows) to make sure common issues could be fixed faster in the future.',
    icon: <Briefcase size={20} />,
    color: 'from-green-500 to-emerald-500',
    current: false,
  },
  {
    role: 'Teacher Assistant',
    company: 'The College of Idaho',
    period: 'Feb 2025 - May 2025',
    description:
      'I helped teach Computer Science lessons and supported students as they worked through difficult coding projects. I spent most of my time debugging code with students and giving them feedback on their assignments to help them improve their programming skills.',
    icon: <Code size={20} />,
    color: 'from-purple-500 to-pink-500',
    current: false,
  },
  {
    role: 'Data Analyst Intern',
    company: 'Innovation & Digital Development Agency',
    period: 'Jul 2024 - Aug 2024',
    description:
      'I worked with datasets for over 100,000 users as part of Azerbaijan\'s national digital infrastructure. Using SQL and Python, I analyzed government-level data to help improve system performance while maintaining strict security and confidentiality.',
    icon: <Database size={20} />,
    color: 'from-blue-500 to-cyan-500',
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 font-mono tracking-tighter text-zinc-900 dark:text-white"
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800" />
          
          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${item.color} border-3 sm:border-4 border-white dark:border-zinc-950 shadow-lg ${item.current ? 'animate-pulse' : ''}`} />
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 ml-12 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
                      <div className="flex items-start gap-3">
                        <div className={`bg-gradient-to-r ${item.color} p-2.5 sm:p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                            {item.role}
                          </h3>
                          <p className="text-sm sm:text-md font-semibold text-[#355872] dark:text-[#276DC3]">
                            {item.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800 px-3 py-1.5 rounded-lg shrink-0 self-start">
                        <Calendar size={14} className="text-zinc-500 dark:text-zinc-400" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                          {item.period}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Current Badge */}
                    {item.current && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Current Position
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

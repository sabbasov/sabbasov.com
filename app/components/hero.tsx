'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, MapPin, GraduationCap } from 'lucide-react';

const techStack = [
  {
    name: 'Python',
    logo: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H27.209c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.904-1.008zm-6.7 7.621c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
        <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.818 35.816c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    logo: (
      <svg viewBox="0 0 128 128" className="w-6 h-6" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H35.1V41.7h26.6l28.1 45.6V41.7h13.3v61.9C116.8 94.4 128 80.5 128 64c0-35.3-28.7-64-64-64z" />
      </svg>
    ),
  },
  {
    name: 'R Shiny',
    logo: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Shiny_hex_logo.svg" alt="R Shiny" className="w-6 h-6" />
    ),
  },
  {
    name: 'TypeScript',
    logo: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <rect width="128" height="128" rx="6" fill="#3178C6" />
        <path fill="#fff" d="M23.5 63.4V73h15.3v43.8h11.3V73H65v-9.6H23.5zm76.5 9.8c-2.1-1.1-4.5-1.6-7.1-1.6-3.9 0-6.9 1-9.1 3.1-2.2 2-3.3 4.8-3.3 8.2 0 2.3.5 4.2 1.4 5.7.9 1.5 2.2 2.7 3.8 3.7 1.6 1 4 2 7.2 3.1 2.4.8 4 1.5 5 2.2 1 .7 1.5 1.6 1.5 2.7 0 1.2-.5 2.1-1.4 2.8-.9.6-2.3.9-4 .9-1.8 0-3.5-.4-5.2-1.2-1.7-.8-3.2-1.9-4.5-3.3l-6.2 7.2c1.8 2 4 3.5 6.6 4.5 2.6 1 5.6 1.5 8.9 1.5 4.3 0 7.7-1.1 10.2-3.3 2.6-2.2 3.8-5.1 3.8-8.8 0-2.4-.5-4.4-1.5-5.9-1-1.6-2.4-2.9-4.1-3.9-1.7-1-4.2-2.1-7.3-3.2-2.2-.8-3.7-1.5-4.5-2.1-.8-.6-1.2-1.4-1.2-2.4 0-1 .4-1.8 1.2-2.4.8-.6 2-.9 3.5-.9 1.6 0 3.1.3 4.5 1 1.4.7 2.7 1.6 3.8 2.8l6-6.9c-1.5-1.7-3.4-3-5.6-4z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    logo: (
      <svg viewBox="0 0 109 113" className="w-6 h-6" fill="none">
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#supabase-hero-a)" />
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#supabase-hero-b)" fillOpacity=".2" />
        <path d="M45.317 2.071C48.177-1.53 53.976.443 54.044 5.041l.427 67.251H9.252c-8.19 0-12.758-9.46-7.665-15.875L45.317 2.071z" fill="#3ECF8E" />
        <defs>
          <linearGradient id="supabase-hero-a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
          <linearGradient id="supabase-hero-b" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Flask',
    logo: (
      <svg viewBox="0 0 300 300" className="w-6 h-6">
        <defs>
          <linearGradient id="flask-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#4ECDC4" />
          </linearGradient>
        </defs>
        <g id="Logo">
          <path id="Box" d="M300,30l0,240c0,16.557 -13.443,30 -30,30l-240,-0c-16.557,-0 -30,-13.443 -30,-30l0,-240c0,-16.557 13.443,-30 30,-30l240,0c16.557,0 30,13.443 30,30Z" fill="url(#flask-gradient)"/>
          <path id="Shadow" d="M300,239.188l0,30.812c0,16.557 -13.443,30 -30,30l-56.467,-0l-102.271,-102.271c8.125,7.368 17.707,13.707 28.945,17.933c20.672,7.788 47.014,8.525 80.222,-4.85l0.184,0.941c0.164,1.054 1.433,2.17 3.152,1.494l5.516,-2.149c1.893,-0.716 1.904,-2.169 1.627,-3.111l7.103,-2.773c0.798,-0.307 3.274,-2.221 1.146,-5.23l-0.021,0l-4.37,-6.672c-0.655,-0.727 -1.668,-1.003 -2.558,-0.645l-5.608,2.16c-0.665,-0.737 -1.627,-1.013 -2.569,-0.645c-1.832,0.716 -3.674,1.443 -5.505,2.159c-0.594,0.225 -0.758,0.665 -0.645,1.239l0.358,1.749c-10.336,1.116 -27.805,0.563 -43.452,-11.727c-6.918,-5.424 -13.406,-13.099 -18.82,-23.835l-50.354,25.662l-7.947,-6.453c18.154,-9.251 36.319,-18.502 54.474,-27.754c-1.177,-3.049 -2.323,-6.355 -6.243,-21.143l-58.849,26.336l-7.097,-7.096l64.186,-28.726c-0.921,-8.328 -3.437,-32.242 -3.336,-43.002l-0,-0.01c-0.016,-1.137 -0.111,-1.697 -0.51,-2.103l159.709,159.71Zm-233.137,-111.262c0.763,0.699 2.048,0.814 3.356,0.238l0.45,-0.194c0.387,1.622 0.824,3.325 1.309,5.071l-5.115,-5.115Z" fill="#3b808b"/>
          <g id="Icon">
            <path d="M140.801,81.591c-0.021,-1.494 -0.174,-1.996 -0.972,-2.456c-0.758,-0.502 -1.904,-0.512 -2.999,-0.031l-73.683,31.551c-1.095,0.481 -2.128,1.443 -2.681,2.486c-0.552,1.044 -0.614,2.149 -0.184,2.937l6.151,11.298l0.081,0.133c0.666,1.055 2.17,1.331 3.705,0.655l0.45,-0.194c1.924,8.064 5.076,18.155 9.282,25.349l64.186,-28.726c-0.921,-8.33 -3.439,-32.257 -3.336,-43.012l-0,0.01Z" fill="#fff" fillRule="nonzero"/>
            <path d="M145.897,134.079l-61.811,27.662c3.633,6.887 8.115,14.194 13.58,21.235c18.154,-9.251 36.319,-18.502 54.474,-27.754c-1.177,-3.049 -2.323,-6.355 -6.243,-21.143Z" fill="#fff" fillRule="nonzero"/>
            <path d="M239.136,199.984l-4.37,-6.672c-0.655,-0.727 -1.668,-1.003 -2.558,-0.645l-5.608,2.16c-0.665,-0.737 -1.627,-1.013 -2.569,-0.645c-1.832,0.716 -3.674,1.443 -5.505,2.159c-0.594,0.225 -0.758,0.665 -0.645,1.239l0.358,1.749c-10.336,1.116 -27.805,0.563 -43.452,-11.727c-6.918,-5.424 -13.406,-13.099 -18.82,-23.835l-52.11,26.557c9.528,10.469 21.491,19.751 36.35,25.338c20.672,7.788 47.014,8.525 80.222,-4.85l0.184,0.941c0.164,1.054 1.433,2.17 3.152,1.494l5.516,-2.149c1.893,-0.716 1.904,-2.169 1.627,-3.111l7.103,-2.773c0.798,-0.307 3.274,-2.221 1.146,-5.23l-0.021,0Z" fill="#fff" fillRule="nonzero"/>
          </g>
        </g>
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <span className="block text-zinc-900 dark:text-white font-mono">
                  Sabuhi
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#355872] via-[#276DC3] to-[#4F46E5] font-mono">
                  Abbasov
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg text-zinc-600 dark:text-zinc-400">
                <GraduationCap size={20} className="text-[#355872]" />
                <span>Math & Computer Science</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-zinc-500 dark:text-zinc-500">
                <MapPin size={16} />
                <span>College of Idaho</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              I build data-driven aviation tools and machine learning systems that turn complex information into actionable insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="bg-gradient-to-r from-[#355872] to-[#276DC3] text-white font-medium px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#355872]/25 transition-all duration-300 hover:scale-105"
              >
                Explore My Projects →
              </a>
              
              <a
                href="https://github.com/sabbasov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-8 py-4 rounded-xl hover:border-[#355872] hover:text-[#355872] dark:hover:border-[#276DC3] dark:hover:text-[#276DC3] transition-all duration-300"
              >
                <Github size={20} />
                View GitHub
              </a>
            </motion.div>
          </div>

          {/* Right Side - Tech Stack Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 text-center font-mono tracking-tight">
                Technologies I Work With
              </h3>
              
              <div className="grid grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-[#355872]/50 dark:hover:border-[#276DC3]/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {tech.logo}
                    </div>
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Passionate about <span className="font-semibold text-[#355872] dark:text-[#276DC3]">aviation data</span> & <span className="font-semibold text-[#355872] dark:text-[#276DC3]">machine learning</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
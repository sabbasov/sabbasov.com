'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'AeroGuard',
    subtitle: 'Aviation Safety Research Tool',
    description: 'An aviation safety research tool built around FAA data. Enter an FAA tail number and get aircraft registration info, maintenance history, and applicable airworthiness directives with risk scoring.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Python', 'Gemini AI'],
    link: '/aeroguard',
    external: 'https://aeroguard-gamma.vercel.app/',
    github: 'https://github.com/sabbasov/aeroguard',
    gradient: 'from-[#355872] to-[#2a4356]',
  },
  {
    title: 'Airport Traffic Analyzer',
    subtitle: 'ML-Powered Flight Delay Prediction',
    description: 'A real-time flight delay monitoring and prediction system using machine learning. Features an interactive R Shiny dashboard and Random Forest model with 8.4 min RMSE.',
    technologies: ['Python', 'R Shiny', 'scikit-learn', 'tidymodels', 'Plotly'],
    link: '/airport-traffic-analyzer',
    external: 'https://sabbasov.shinyapps.io/airport-traffic-analyzer/',
    github: 'https://github.com/sabbasov/airport-traffic-analyzer',
    gradient: 'from-[#276DC3] to-[#1e5a9e]',
  },
];

const otherProjects = [
  {
    title: 'Foodie Social Network',
    description: 'A full-stack social platform built with Flask where users can share and manage food-related content. Features custom database design for community posts and interactions.',
    tags: ['Flask', 'Python', 'Web Development', 'SQLite'],
    link: 'https://github.com/sabbasov/foodie-social-network',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-mono tracking-tighter text-zinc-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I'm passionate about aviation data and building tools that make complex information accessible and actionable.
          </p>
        </motion.div>

        {/* Featured Aviation Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-bold font-mono tracking-tight">{project.title}</h3>
                  <p className="text-sm opacity-90 font-medium">{project.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter mb-6">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
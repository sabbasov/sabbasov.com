'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projectsData = [
  {
    title: 'Airport Traffic Analyzer',
    description: 'A JavaScript-driven tool visualizing airport logistics and flight data patterns. Focuses on data-driven insights for aviation systems.',
    tags: ['JavaScript', 'Data Viz', 'Logistics'],
    link: 'https://github.com/sabbasov/airport-traffic-analyzer',
  },
  {
    title: 'Wildwood SQL Architecture',
    description: 'A comprehensive 11-table relational database design for property management. Features automated business rules for rent, maintenance, and invoicing.',
    tags: ['SQL', 'Database Design', 'Architecture'],
    link: '',
  },
  {
    title: 'Foodie Social Network',
    description: 'A full-stack Flask application optimized for community data sharing and interactive content management.',
    tags: ['Flask', 'Python', 'Full-stack'],
    link: 'https://github.com/sabbasov/foodie-social-network',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 font-mono tracking-tighter text-zinc-900 dark:text-white"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col transition-all duration-300 hover:border-[#355872]/50 hover:shadow-lg hover:shadow-[#355872]/10 hover:scale-[1.02]"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300">
                  <Github size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
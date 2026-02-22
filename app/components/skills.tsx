'use client';

import { motion } from 'framer-motion';
import { Globe, Database, Code, GitBranch, Terminal, FileSpreadsheet } from 'lucide-react';

const skillsData = [
  { name: 'Python', icon: <Code size={32} /> },
  { name: 'SQL', icon: <Database size={32} /> },
  { name: 'JavaScript', icon: <Code size={32} /> },
  { name: 'Flask', icon: <Globe size={32} /> },
  { name: 'Git', icon: <GitBranch size={32} /> },
  { name: 'Linux', icon: <Terminal size={32} /> },
  { name: 'Excel', icon: <FileSpreadsheet size={32} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 font-mono tracking-tighter text-zinc-900 dark:text-white"
      >
        Skills & Tech Stack
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 w-32 h-32 justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-300"
          >
            <div className="text-blue-400">{skill.icon}</div>
            <p className="font-medium text-sm text-zinc-800 dark:text-zinc-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
'use client';

import { motion } from 'framer-motion';
import { Globe, Database, Code, GitBranch, Terminal, FileSpreadsheet } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

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
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});
  
  // The specific blue you requested
  const customBlue = "#355872";

  const handleClick = (skillName: string, event: React.MouseEvent<HTMLDivElement>) => {
    const newCounts = { ...clickCounts };
    newCounts[skillName] = (newCounts[skillName] || 0) + 1;
    setClickCounts(newCounts);

    if (newCounts[skillName] === 5) {
      const rect = event.currentTarget.getBoundingClientRect();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (rect.left + rect.right) / 2 / window.innerWidth,
          y: (rect.top + rect.bottom) / 2 / window.innerHeight,
        },
        colors: [customBlue, '#ffffff', '#000000'] // Confetti now matches your brand
      });
      newCounts[skillName] = 0;
      setClickCounts(newCounts);
    }
  };

  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 font-mono tracking-tighter text-zinc-900 dark:text-white"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, translateY: -5 }} // Smooth hover animation
            whileTap={{ scale: 0.95 }} // Tactile click feedback
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 w-32 h-32 justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            onClick={(e) => handleClick(skill.name, e)}
          >
            <div className="text-custom-blue dark:text-custom-blue transition-colors duration-300">
              {skill.icon}
            </div>
            <p className="font-medium text-xs uppercase tracking-widest text-zinc-700 dark:text-zinc-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
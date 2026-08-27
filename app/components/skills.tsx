'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Code, BarChart3, Cloud, Users, Zap, Target } from 'lucide-react';

const skillCategories = [
  {
    category: "Languages",
    icon: <Brain size={24} />,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-200 dark:border-purple-800",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "R"],
  },
  {
    category: "Frameworks",
    icon: <Code size={24} />,
    color: "from-blue-500 to-cyan-500", 
    borderColor: "border-blue-200 dark:border-blue-800",
    skills: ["Next.js", "React", "Flask", "Tailwind CSS"],
  },
  {
    category: "Tools",
    icon: <Database size={24} />,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-200 dark:border-green-800", 
    skills: ["Git", "GitHub", "Vercel", "Postman", "Jupyter", "Linux"],
  },
  {
    category: "Databases", 
    icon: <Users size={24} />,
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-200 dark:border-orange-800",
    skills: ["PostgreSQL", "Supabase", "SQLite"],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-mono tracking-tighter text-zinc-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Built through real projects and work experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-zinc-900 rounded-2xl border ${category.borderColor} p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-mono">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className={`text-sm font-medium px-3 py-1.5 rounded-full border bg-gradient-to-r ${category.color} text-white`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">8.4 Min RMSE</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">ML model accuracy for flight delay prediction</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">100K+ Records</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Government dataset analysis experience</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">2 Live Products</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">End-to-end project delivery and deployment</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
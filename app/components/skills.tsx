'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Code, BarChart3, Cloud, Users, Zap, Target } from 'lucide-react';

const skillCategories = [
  {
    category: "Data Science & ML",
    icon: <Brain size={24} />,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-200 dark:border-purple-800",
    skills: [
      { name: "Machine Learning", level: 85, description: "Random Forest, scikit-learn, model validation" },
      { name: "Data Pipeline", level: 90, description: "ETL, data cleaning, automation scripts" },
      { name: "Statistical Analysis", level: 80, description: "R, tidymodels, data visualization" },
      { name: "Predictive Modeling", level: 75, description: "Flight delay prediction, risk scoring" }
    ]
  },
  {
    category: "Software Development",
    icon: <Code size={24} />,
    color: "from-blue-500 to-cyan-500", 
    borderColor: "border-blue-200 dark:border-blue-800",
    skills: [
      { name: "Full-Stack Development", level: 85, description: "Next.js, TypeScript, Flask, PostgreSQL" },
      { name: "API Development", level: 80, description: "RESTful APIs, external integrations" },
      { name: "Database Design", level: 75, description: "SQL, relational modeling, optimization" },
      { name: "Version Control", level: 90, description: "Git workflows, collaboration" }
    ]
  },
  {
    category: "Data Engineering",
    icon: <Database size={24} />,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-200 dark:border-green-800", 
    skills: [
      { name: "Data Processing", level: 85, description: "Python, pandas, data transformation" },
      { name: "Cloud Platforms", level: 70, description: "Supabase, Vercel deployment" },
      { name: "Automation", level: 80, description: "Scripting, workflow optimization" },
      { name: "Data Visualization", level: 75, description: "Plotly, interactive dashboards" }
    ]
  },
  {
    category: "Leadership & Collaboration", 
    icon: <Users size={24} />,
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-200 dark:border-orange-800",
    skills: [
      { name: "Team Leadership", level: 85, description: "Leading 5-6 staff, conflict resolution" },
      { name: "Project Management", level: 75, description: "End-to-end project delivery" },
      { name: "Technical Communication", level: 80, description: "Documentation, stakeholder updates" },
      { name: "Problem Solving", level: 90, description: "Real-time issue resolution" }
    ]
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
            Core Competencies
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Skills developed through hands-on projects and real-world experience in aviation data systems and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mb-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {skill.description}
                    </p>
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
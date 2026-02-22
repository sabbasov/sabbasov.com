'use client';

import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Student Supervisor',
    company: 'Bon Appétit',
    period: 'Aug 2025 – Present',
    description:
      'Directing a team of 5-6 staff during high-volume service windows to ensure operational efficiency. Managing real-time communication and task delegation to maintain service flow and customer satisfaction.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Innovation & Digital Development Agency',
    period: 'Jul 2024 – Aug 2024',
    description:
      'Processed datasets for 100,000+ users for national digital infrastructure. Applied SQL and Python to analyze government-level data while ensuring strict confidentiality.',
  },
  {
    role: 'Technical Support Assistant',
    company: 'The College of Idaho',
    period: 'Sep 2024 – May 2025',
    description:
      'Troubleshot technical issues for students and faculty. Provided enterprise-level support for Microsoft applications and documented technical workflows.',
  },
  {
    role: 'Teacher Assistant',
    company: 'The College of Idaho',
    period: 'Feb 2025 – May 2025',
    description:
      'Assisted in delivering Computer Science lessons. Supported students with complex coding issues and provided feedback on programming assignments.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 font-mono tracking-tighter text-zinc-900 dark:text-white"
      >
        The Professional Timeline
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
                <p className="text-md font-medium text-blue-500 dark:text-blue-400">{item.company}</p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 text-right flex-shrink-0 ml-4">{item.period}</p>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
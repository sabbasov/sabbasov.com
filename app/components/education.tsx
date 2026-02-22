'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'The College of Idaho',
    degree: 'B.S. in Mathematics & Computer Science',
    period: 'Expected May 2027',
    details: [
      'Honors: Dean’s List, Davis UWC Scholar, BP Talented Youth Scholar',
      'Relevant courses: Differential Equations, Applied Databases, Data Manipulation & Visualization',
    ],
  },
  {
    institution: 'UWC ISAK Japan',
    degree: 'International Baccalaureate Bilingual Diploma',
    period: 'May 2024',
    details: [
      'Courses: Computer Science, Mathematics, Physics, Economics.',
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 font-mono tracking-tighter text-zinc-900 dark:text-white"
      >
        Education
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{edu.institution}</h3>
                <p className="text-md font-medium text-custom-blue">{edu.degree}</p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 text-right flex-shrink-0 ml-4">{edu.period}</p>
            </div>
            <ul className="mt-4 list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

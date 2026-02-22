'use client';

import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Student Supervisor',
    company: 'Bon Appétit',
    period: 'Aug 2025 – Present',
    description:
      'I lead a team of 5–6 staff during busy service hours. My role is to coordinate tasks and keep communication clear so that everything runs smoothly and guests are taken care of. I focus on solving problems in real-time and making sure our team hits our safety and service goals every shift.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Innovation & Digital Development Agency',
    period: 'Jul 2024 – Aug 2024',
    description:
      'I worked with datasets for over 100,000 users as part of Azerbaijan’s national digital infrastructure. Using SQL and Python, I analyzed government-level data to help improve system performance while maintaining strict security and confidentiality.',
  },
  {
    role: 'Technical Support Assistant',
    company: 'The College of Idaho',
    period: 'Sep 2024 – May 2025',
    description:
      'I helped students and faculty solve technical problems with their devices and software. I supported Microsoft applications across campus and wrote down step-by-step guides (workflows) to make sure common issues could be fixed faster in the future.',
  },
  {
    role: 'Teacher Assistant',
    company: 'The College of Idaho',
    period: 'Feb 2025 – May 2025',
    description:
      'I helped teach Computer Science lessons and supported students as they worked through difficult coding projects. I spent most of my time debugging code with students and giving them feedback on their assignments to help them improve their programming skills.',
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
        Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experienceData.map((item, index) => (
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
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
                <p className="text-md font-medium text-custom-blue dark:text-custom-blue">{item.company}</p>
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
'use client';

import { motion } from 'framer-motion';

const Aviation = () => {
  return (
    <section id="aviation" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">Aviation Passion</h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            My fascination with aviation goes beyond the cockpit; I am driven by the mathematical complexity of flight operations. I view every flight path as a graph to be optimized and every delay as a variable to be solved. My goal is to apply my Math and CS background to the future of aerospace logistics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aviation;
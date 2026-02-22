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
            I’ve always been fascinated by how planes get from A to B, but my real interest is the math behind the scenes. To me, a flight path is a puzzle to solve, and every delay is an opportunity to see how systems can work better. As a Math and Computer Science student, I want to combine what I'm learning with my love for aviation to help make logistics a little more efficient.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aviation;
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
            I’ve always been fascinated by how planes get from one place to another, but my real interest lies in the math behind the scenes. To me, a flight path is a puzzle to solve, and every delay is a chance to learn how systems can work better. As a student of Math and Computer Science, I’m working to combine my studies with my love for aviation to help make flight logistics a little more efficient for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aviation;
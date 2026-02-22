'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center pt-16">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 font-mono"
        >
          Sabuhi Abbasov
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400"
        >
          Math & Computer Science @ College of Idaho
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-block bg-[#355872] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#2a4356] transition-colors duration-300 shadow-lg shadow-[#355872]/20"
          >
            Explore My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
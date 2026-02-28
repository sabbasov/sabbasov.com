'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
            I’ve always been drawn to aviation — not just flying, but the data side of it. How aircraft get certified, tracked, and maintained. That interest led me to build AeroGuard, a tool that lets you look up any FAA-registered aircraft by tail number and see its maintenance history and applicable airworthiness directives.
          </p>
          <div className="mt-8">
            <Link
              href="/aeroguard"
              className="inline-block bg-[#355872] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#2a4356] transition-colors duration-300 shadow-lg shadow-[#355872]/20"
            >
              View Project →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aviation;

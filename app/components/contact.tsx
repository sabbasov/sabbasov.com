'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">Let's Connect</h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            I’m always open to discussing math, computer science, or aviation logistics. Feel free to reach out if you’d like to collaborate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <a href="mailto:hello@sabbasov.com" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-custom-blue dark:hover:text-custom-blue transition-colors duration-300">
              <Mail size={20} />
              <span>hello@sabbasov.com</span>
            </a>
            <a href="https://linkedin.sabbasov.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-custom-blue dark:hover:text-custom-blue transition-colors duration-300">
              <Linkedin size={20} />
              <span>linkedin.sabbasov.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

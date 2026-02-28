'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';

const navItems = [
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Aviation', href: '#aviation' },
  { name: 'Skills', href: '#skills' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">
                sabbasov
              </Link>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase tracking-wider font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Internships
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/sabbasov/sabbasov.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-600 dark:text-zinc-400"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase tracking-wider font-bold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Internships
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
               <a href="https://github.com/sabbasov/sabbasov.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <Github size={20} />
                  Source Code
                </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
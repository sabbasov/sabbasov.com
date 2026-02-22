'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
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
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">
              Sabuhi Abbasov
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
             <div className="flex items-center gap-4">
              <a href="https://github.com/sabbasov/sabbasov.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
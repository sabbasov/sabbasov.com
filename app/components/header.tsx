'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const prefix = pathname === '/' ? '' : '/';

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
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">
                {/* Inline SVG logo */}
                <span className="w-7 h-7 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 -250 500 500" width="28" height="28">
                    <defs>
                      <linearGradient x1="-200" y1="-200" x2="200" y2="200" gradientUnits="userSpaceOnUse" id="logo-grad-header">
                        <stop offset="0" stopColor="#355872" />
                        <stop offset="1" stopColor="#92FE9D" />
                      </linearGradient>
                    </defs>
                    <path d="M 170.65618658416722,0.0 Q 87.21915399469356,109.36935979384127 32.370317340852104,103.9270938871789 Q -22.478519312989345,98.48482798051654 -66.64834899979981,75.92602506923275 Q -110.81817868661027,53.36722215794895 -122.85991431876292,-5.798994246834933 Q -134.90164995091558,-64.96521065161882 -85.6272750278971,-112.1188363330943 Q -36.352900104878614,-159.27246201456978 9.977554461501427,-114.94023601414332 Q 56.30800902788147,-70.60801001371685 113.48209780602434,-35.304005006858425 Z" fill="url(#logo-grad-header)" stroke="none" />
                  </svg>
                </span>
                <span>sabbasov</span>
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
                  href={`${prefix}${item.href}`}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a href="https://github.com/sabbasov/sabbasov.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-all duration-300">
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
                  href={`${prefix}${item.href}`}
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
                <ThemeToggle />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
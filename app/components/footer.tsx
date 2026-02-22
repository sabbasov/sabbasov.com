'use client';

import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            &copy; {currentYear} Sabuhi Abbasov. All Rights Reserved.
          </p>
          <a href="https://github.com/sabbasov/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300">
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [displayTheme, setDisplayTheme] = useState<Theme>('system');

  useEffect(() => {
    setMounted(true);
    if (theme) {
      setDisplayTheme(theme as Theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const themes: Theme[] = ['dark', 'light', 'system'];
    const currentTheme = displayTheme;
    const nextIdx = (themes.indexOf(currentTheme) + 1) % themes.length;
    const nextTheme = themes[nextIdx];
    console.log('Toggling theme from', currentTheme, 'to', nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return <div className="relative w-5 h-5" />;
  }
displayTheme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
      }`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  // Moon icon SVG
  const MoonIcon = () => (
    <svg
      className={`h-5 w-5 absolute transition-all duration-300 ${
        displayTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
      }`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  // System icon SVG (monitor)
  const SystemIcon = () => (
    <svg
      className={`h-5 w-5 absolute transition-all duration-300 ${
        displayT
  // System icon SVG (monitor)
  const SystemIcon = () => (
    <svg
      className={`h-5 w-5 absolute transition-all duration-300 ${
        theme === 'system' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );

  return (
    <button
      onClick={toggleTheme}
      className="relative w-5 h-5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
      aria-label="Toggle theme"
      title={`Current: ${displayTheme} • Click to cycle`}
    >
      <SunIcon />
      <MoonIcon />
      <SystemIcon />
    </button>
  );
};

export default ThemeToggle;

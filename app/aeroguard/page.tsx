'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Contact from '../components/contact';
import ScrollToTop from '../components/scroll-to-top';

const techStack = [
  {
    name: 'Next.js 16',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H35.1V41.7h26.6l28.1 45.6V41.7h13.3v61.9C116.8 94.4 128 80.5 128 64c0-35.3-28.7-64-64-64z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <rect width="128" height="128" rx="6" fill="#3178C6" />
        <path fill="#fff" d="M23.5 63.4V73h15.3v43.8h11.3V73H65v-9.6H23.5zm76.5 9.8c-2.1-1.1-4.5-1.6-7.1-1.6-3.9 0-6.9 1-9.1 3.1-2.2 2-3.3 4.8-3.3 8.2 0 2.3.5 4.2 1.4 5.7.9 1.5 2.2 2.7 3.8 3.7 1.6 1 4 2 7.2 3.1 2.4.8 4 1.5 5 2.2 1 .7 1.5 1.6 1.5 2.7 0 1.2-.5 2.1-1.4 2.8-.9.6-2.3.9-4 .9-1.8 0-3.5-.4-5.2-1.2-1.7-.8-3.2-1.9-4.5-3.3l-6.2 7.2c1.8 2 4 3.5 6.6 4.5 2.6 1 5.6 1.5 8.9 1.5 4.3 0 7.7-1.1 10.2-3.3 2.6-2.2 3.8-5.1 3.8-8.8 0-2.4-.5-4.4-1.5-5.9-1-1.6-2.4-2.9-4.1-3.9-1.7-1-4.2-2.1-7.3-3.2-2.2-.8-3.7-1.5-4.5-2.1-.8-.6-1.2-1.4-1.2-2.4 0-1 .4-1.8 1.2-2.4.8-.6 2-.9 3.5-.9 1.6 0 3.1.3 4.5 1 1.4.7 2.7 1.6 3.8 2.8l6-6.9c-1.5-1.7-3.4-3-5.6-4z" />
      </svg>
    ),
  },
  {
    name: 'React 19',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0" fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4" />
        <path fill="none" stroke="#61DAFB" strokeWidth="6" d="M64 27.3c20.7 0 39.4 3 53 7.8 16.3 5.8 26 14.3 26 28.9s-9.7 23.1-26 28.9c-13.6 4.8-32.3 7.8-53 7.8s-39.4-3-53-7.8C-5.3 87.1-15 78.6-15 64s9.7-23.1 26-28.9c13.6-4.8 32.3-7.8 53-7.8z" />
        <path fill="none" stroke="#61DAFB" strokeWidth="6" d="M90.9 45.7c10.4 17.9 16.3 36.3 16.3 54.3 0 17.1-5.4 27.8-17.2 27.8-13.2 0-26.6-13.2-37-35.8" />
        <path fill="none" stroke="#61DAFB" strokeWidth="6" d="M37.1 45.7C26.7 63.6 20.8 82 20.8 100c0 17.1 5.4 27.8 17.2 27.8 13.2 0 26.6-13.2 37-35.8" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS v4',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <path fill="#38BDF8" d="M64.004 25.602c-17.067 0-27.734 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.733-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.733 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.734-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    logo: (
      <svg viewBox="0 0 109 113" className="w-4 h-4 shrink-0" fill="none">
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#supabase-a)" />
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#supabase-b)" fillOpacity=".2" />
        <path d="M45.317 2.071C48.177-1.53 53.976.443 54.044 5.041l.427 67.251H9.252c-8.19 0-12.758-9.46-7.665-15.875L45.317 2.071z" fill="#3ECF8E" />
        <defs>
          <linearGradient id="supabase-a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
          <linearGradient id="supabase-b" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Python 3',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H27.209c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.904-1.008zm-6.7 7.621c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
        <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.818 35.816c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
      </svg>
    ),
  },
  {
    name: 'Gemini AI',
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#4285F4" />
        <path d="M12 6.5c-.828 0-1.5.672-1.5 1.5v8c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5V8c0-.828-.672-1.5-1.5-1.5z" fill="white" />
        <path d="M6.5 12c0-.828.672-1.5 1.5-1.5h8c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H8c-.828 0-1.5-.672-1.5-1.5z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    logo: (
      <svg viewBox="0 0 76 65" className="w-4 h-4 shrink-0" fill="currentColor">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
  },
];

type Category = 'All' | 'Data Pipeline' | 'APIs & External Services' | 'Database';

const lessons: { title: string; body: string; category: Exclude<Category, 'All'> }[] = [
  {
    title: 'My first parser parsed zero records',
    body: 'I wrote the SDR parser against a format I assumed the FAA file would have. It was wrong. I had to read the actual file line by line and rewrite the parser from scratch. Assumptions about data formats are usually wrong.',
    category: 'Data Pipeline',
  },
  {
    title: 'Hyperlinks in Excel are not in cell.value',
    body: 'The FAA AD spreadsheet had clickable links in the cells, but reading cell.value only gave me the display text. The actual URL was stored separately and had to be accessed via cell.hyperlink.target in openpyxl. Not obvious until you look at how it handles hyperlinks.',
    category: 'Data Pipeline',
  },
  {
    title: 'Column name mismatch between script and database',
    body: 'The Python script was sending camelCase field names, but the Supabase table had snake_case columns. Every insert failed. Fixed it with a schema migration. Good reminder to agree on naming conventions before you start loading data.',
    category: 'Database',
  },
  {
    title: 'Anon keys and service-role keys do different things',
    body: 'My API routes were using the public anon key, which has Row Level Security restrictions. They were silently failing. Fixed it by creating a separate Supabase admin client with the service-role key for server-side calls only.',
    category: 'Database',
  },
  {
    title: 'The Supabase Python SDK did not work',
    body: 'It failed to install on my Python version. I dropped it and called the PostgREST HTTP API directly using httpx instead. Turned out to be cleaner — fewer moving parts.',
    category: 'APIs & External Services',
  },
  {
    title: 'Calling an LLM for every record was too slow',
    body: 'With 50+ Airworthiness Directives per aircraft, Gemini was being called for every single one. Analysis took up to 8 minutes. I built local regex matching first — it handles the clear-cut cases instantly — and only falls back to Gemini when confidence is below 80%. Brought it down to a few seconds.',
    category: 'APIs & External Services',
  },
  {
    title: 'The Gemini model I used got deprecated',
    body: 'I had built around gemini-2.0-flash and it stopped working mid-project. Had to switch models. Always check model availability before building a hard dependency on a specific version.',
    category: 'APIs & External Services',
  },
];

const categories: Category[] = ['All', 'Data Pipeline', 'Database', 'APIs & External Services'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  'Data Pipeline': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50',
  'Database': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
  'APIs & External Services': 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/50',
};

const AeroGuardPage = () => {
  const [activeCategories, setActiveCategories] = useState<Category[]>(['All']);

  const toggleCategory = (cat: Category) => {
    if (cat === 'All') {
      setActiveCategories(['All']);
      return;
    }
    const withoutAll = activeCategories.filter((c) => c !== 'All');
    if (withoutAll.includes(cat)) {
      const next = withoutAll.filter((c) => c !== cat);
      setActiveCategories(next.length === 0 ? ['All'] : next);
    } else {
      setActiveCategories([...withoutAll, cat]);
    }
  };

  const visibleLessons = activeCategories.includes('All')
    ? lessons
    : lessons.filter((l) => activeCategories.includes(l.category));

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 mb-8"
            >
              ← Back to portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">AeroGuard</h1>
            <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
              An aviation safety research tool built around FAA data
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://aeroguard-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#355872] text-white font-medium px-6 py-2.5 rounded-lg hover:bg-[#2a4356] transition-colors duration-300 shadow-lg shadow-[#355872]/20"
              >
                Live Site →
              </a>
              <a
                href="https://github.com/sabbasov/aeroguard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium px-6 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">What it does</h2>
            <div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                You enter an FAA tail number (N-number) and AeroGuard pulls the aircraft registration from the FAA Civil Aviation Registry. From there it searches a database of FAA Service Difficulty Reports — SDRs are reports that mechanics file when they find a problem during maintenance. You can see what issues have been reported for that specific aircraft or its model.
              </p>
              <p>
                It also cross-references applicable Airworthiness Directives for the aircraft. ADs are FAA-mandated safety inspections or fixes — if one applies to your serial number, you need to comply with it. AeroGuard checks whether the specific serial number is actually affected, not just the model in general.
              </p>
              <p>
                Based on applicable ADs, failed-part findings, and excess wear reports, the tool gives a risk score from 0 to 100. It is meant to give you a quick sense of an aircraft's maintenance picture before you dig deeper.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">The data pipeline</h2>
            <div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                The raw FAA data does not come in a developer-friendly format. I downloaded SDR files and AD spreadsheets directly from FAA sources, then wrote Python scripts to parse and load them into a Supabase (Postgres) database. The main tools were httpx, openpyxl, and pymupdf — for HTTP requests, reading Excel files, and parsing PDFs.
              </p>
              <p>
                One thing that took time was extracting hyperlinks from the AD spreadsheet. The cell values were just display text — the actual FAA document URLs were stored separately as embedded hyperlinks and had to be pulled using cell.hyperlink.target in openpyxl.
              </p>
              <p>
                AD applicability — figuring out whether a specific serial number is actually affected — is done with local regex and heuristic pattern matching first. I built six matching strategies covering explicit serial number ranges, fleet-wide applicability, exclusion clauses, and complex hyphenated ranges. If confidence falls below 80%, the analysis falls back to Gemini 2.5 Flash Lite. This keeps it fast for clear-cut cases while still handling ambiguous ones. All scripts are idempotent, so they are safe to re-run without creating duplicate records.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700"
                >
                  {tech.logo}
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">What I learned</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                      isActive
                        ? 'bg-zinc-800 dark:bg-white text-white dark:text-zinc-900 border-zinc-800 dark:border-white'
                        : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 hover:border-zinc-500 dark:hover:border-zinc-400'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 space-y-3">
              <AnimatePresence initial={false}>
                {visibleLessons.map((lesson) => (
                  <motion.div
                    key={lesson.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50"
                  >
                    <div className="flex items-start gap-2">
                      <span className={`mt-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${categoryColors[lesson.category]}`}>  
                        {lesson.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">{lesson.title}</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{lesson.body}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AeroGuardPage;
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
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Tailwind CSS' },
  { name: 'Python' },
  { name: 'REST APIs' },
];

type Category = 'All' | 'Data Pipeline' | 'System Design' | 'APIs & Services';

const lessons: { title: string; body: string; category: Exclude<Category, 'All'> }[] = [
  {
    title: 'Normalizing Unstructured Criteria',
    body: 'Developed custom parsing routines to transform varied scholarship requirements into strict, queryable parameters.',
    category: 'Data Pipeline',
  },
  {
    title: 'Weighted Match Scoring',
    body: 'Engineered a multi-tier matching algorithm that prioritizes hard eligibility filters before scoring optional criteria.',
    category: 'System Design',
  },
  {
    title: 'Handling External Rate Limits',
    body: 'Implemented resilient HTTP request handling with backoff strategies during automated data fetches.',
    category: 'APIs & Services',
  },
];

const categories: Category[] = ['All', 'Data Pipeline', 'System Design', 'APIs & Services'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  'Data Pipeline': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50',
  'System Design': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
  'APIs & Services': 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/50',
};

const ScholarshipMatcherPage = () => {
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
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">COI Scholarship Matcher</h1>
            <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
              An intelligent matching engine connecting students with relevant COI scholarship opportunities
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/sabbasov/coi-scholarship-matcher/"
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
                COI Scholarship Matcher parses varied scholarship criteria and converts unstructured requirements into consistent eligibility rules that can be evaluated reliably.
              </p>
              <p>
                It matches student profiles against complex eligibility parameters, applying strict qualification gates first and then ranking opportunities by how strongly each scholarship fits the applicant.
              </p>
              <p>
                The tool efficiently surfaces tailored financial aid options so students can quickly focus on scholarships they are actually eligible and competitive for.
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

export default ScholarshipMatcherPage;

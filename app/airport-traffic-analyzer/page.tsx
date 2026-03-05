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
    name: 'Python',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H27.209c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.904-1.008zm-6.7 7.621c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
        <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.818 35.816c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
      </svg>
    ),
  },
  {
    name: 'R Shiny',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <path fill="#276DC3" d="M18.8 71.1c0-25.9 21-46.9 46.9-46.9s46.9 21 46.9 46.9-21 46.9-46.9 46.9-46.9-21-46.9-46.9z" />
        <path fill="#fff" d="M45.4 56.8c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm20.8 0c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm20.8 0c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z" />
        <path fill="#fff" d="M65.8 82.8H49.9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h15.9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    name: 'scikit-learn',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <path fill="#F7931E" d="M20.8 49.6c-2.2-2.2-2.2-5.8 0-8s5.8-2.2 8 0l12.7 12.7c2.2 2.2 2.2 5.8 0 8s-5.8 2.2-8 0L20.8 49.6zm65.6 0c2.2-2.2 5.8-2.2 8 0s2.2 5.8 0 8L81.7 70.3c-2.2 2.2-5.8 2.2-8 0s-2.2-5.8 0-8l12.7-12.7zM64 28.8c3.1 0 5.6 2.5 5.6 5.6v18c0 3.1-2.5 5.6-5.6 5.6s-5.6-2.5-5.6-5.6v-18c0-3.1 2.5-5.6 5.6-5.6zm0 41.6c3.1 0 5.6 2.5 5.6 5.6v18c0 3.1-2.5 5.6-5.6 5.6s-5.6-2.5-5.6-5.6V76c0-3.1 2.5-5.6 5.6-5.6z" />
      </svg>
    ),
  },
  {
    name: 'tidymodels',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <circle cx="64" cy="64" r="40" fill="#276DC3" />
        <path fill="#fff" d="M44 54h40v20H44z" />
      </svg>
    ),
  },
  {
    name: 'Plotly',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <path fill="#3F4F75" d="M32 32h64v64H32z" />
        <path fill="#00D4AA" d="M40 50h48v28H40z" />
        <circle cx="64" cy="64" r="8" fill="#119DFF" />
      </svg>
    ),
  },
  {
    name: 'pandas',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <path fill="#150458" d="M47.4 24v80h8.4V24h-8.4zm25.2 0v80h8.4V24h-8.4zM30.2 40v24h8.4V40h-8.4zm50.4 0v24h8.4V40h-8.4zM72.2 64v40h8.4V64h-8.4z" />
      </svg>
    ),
  },
  {
    name: 'Aviation Stack API',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0" fill="currentColor">
        <path d="M64 20L45 45h38L64 20zm0 88L83 83H45l19 25zm-30-44L10 64l24 0V64zm60 0h24V64l-24 0z" />
      </svg>
    ),
  },
  {
    name: 'ShinyApps.io',
    logo: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 shrink-0">
        <circle cx="64" cy="64" r="32" fill="#276DC3" />
        <path fill="#fff" d="M48 56h32v16H48z" />
      </svg>
    ),
  },
];

type Category = 'All' | 'Data Pipeline' | 'Machine Learning' | 'Deployment' | 'APIs';

const lessons: { title: string; body: string; category: Exclude<Category, 'All'> }[] = [
  {
    title: 'Real flight data is expensive and messy',
    body: 'I paid $50 for Aviation Stack API access and quickly learned that real-world flight data has missing fields, inconsistent formats, and duplicates. Cleaning took longer than expected — had to build robust validation pipelines.',
    category: 'Data Pipeline',
  },
  {
    title: 'Growing datasets are better than fresh ones',
    body: 'Instead of fetching fresh data every time, I built a system that accumulates new flights while keeping historical ones. This gives the ML model more training data and saves 99% of API calls after the first run.',
    category: 'Data Pipeline',
  },
  {
    title: 'Not all intuitive features work',
    body: 'I assumed wind speed would strongly correlate with delays. The data showed almost no relationship. Lesson: test assumptions with data first, don\'t build features based on hunches alone.',
    category: 'Machine Learning',
  },
  {
    title: 'Feature engineering beats raw features',
    body: 'The model performed much better with engineered features like hour-of-day and day-of-week rather than just timestamps. Turning continuous time into categorical buckets helped capture temporal patterns.',
    category: 'Machine Learning',
  },
  {
    title: 'Cross-validation prevents overfitting',
    body: 'My first model had great training performance but terrible test results. Implementing 5-fold cross-validation showed the real performance and helped me tune hyperparameters properly.',
    category: 'Machine Learning',
  },
  {
    title: 'Shiny deployment has memory limits',
    body: 'ShinyApps.io free tier has strict RAM limits. I had to optimize data loading and use efficient data structures. Large datasets need to be pre-processed and cached rather than loaded fresh.',
    category: 'Deployment',
  },
  {
    title: 'API rate limits need careful handling',
    body: 'Aviation Stack API has daily request limits. I built retry logic with exponential backoff and saved all responses locally to avoid hitting limits during development. Always cache external API calls.',
    category: 'APIs',
  },
  {
    title: 'Weather data improves predictions',
    body: 'Adding Open-Meteo weather data (temperature, wind, visibility) to the model improved accuracy. Even though individual weather factors were weak predictors, the combination added valuable signal.',
    category: 'Machine Learning',
  },
];

const categories: Category[] = ['All', 'Data Pipeline', 'Machine Learning', 'Deployment', 'APIs'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  'Data Pipeline': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50',
  'Machine Learning': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/50',
  'Deployment': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
  'APIs': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/50',
};

const AirportTrafficAnalyzerPage = () => {
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
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">Airport Traffic Analyzer</h1>
            <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
              A real-time flight delay monitoring and prediction system built with Python, R, and machine learning
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://sabbasov.shinyapps.io/airport-traffic-analyzer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#276DC3] text-white font-medium px-6 py-2.5 rounded-lg hover:bg-[#1e5a9e] transition-colors duration-300 shadow-lg shadow-[#276DC3]/20"
              >
                Live Dashboard →
              </a>
              <a
                href="https://github.com/sabbasov/airport-traffic-analyzer"
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
                The Airport Traffic Analyzer is a machine learning system that predicts flight departure delays using real flight and weather data. It combines data from the Aviation Stack API with weather information from Open-Meteo to train a Random Forest model that can predict delays with an RMSE of 8.4 minutes.
              </p>
              <p>
                The interactive Shiny dashboard provides airline performance rankings, temporal risk patterns, and real-time delay predictions. You can compare airlines, identify high-risk departure times, and see how weather factors like wind speed correlate with delays across different hours and days of the week.
              </p>
              <p>
                The system uses a smart data accumulation strategy — instead of fetching fresh data each time, it grows the database by adding only new flights. This gives the ML model more training data over time while reducing API costs by 99% after the initial setup.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-mono tracking-tighter">Key features</h2>
            <div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                <strong>Interactive Dashboard:</strong> Five-tab Shiny interface with airline comparisons, temporal risk heatmaps, and real-time predictions with filtering capabilities.
              </p>
              <p>
                <strong>Machine Learning Model:</strong> Random Forest regression trained on 1,800+ flights with 59 engineered features, achieving 8.4 minutes RMSE through 5-fold cross-validation.
              </p>
              <p>
                <strong>Data Pipeline:</strong> Automated Python scripts that fetch, clean, and merge flight data with weather information, handling duplicates and missing values.
              </p>
              <p>
                <strong>Analytics Report:</strong> Comprehensive Quarto document with 50+ visualizations analyzing delay patterns, airline performance, and weather correlations.
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

export default AirportTrafficAnalyzerPage;
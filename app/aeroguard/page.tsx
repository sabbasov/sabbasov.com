'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';
import Contact from '../components/contact';
import ScrollToTop from '../components/scroll-to-top';

const techStack = [
  'Next.js 16 (App Router)',
  'TypeScript',
  'React 19',
  'Tailwind CSS v4',
  'Supabase (Postgres)',
  'Python 3 (data pipeline)',
  'Google Gemini 2.5 Flash Lite',
  'Vercel',
];

const lessons = [
  {
    title: 'The Supabase Python SDK didn\'t work',
    body: 'It failed to install on my Python version. I dropped it and called the PostgREST HTTP API directly using httpx instead. Turned out to be cleaner — fewer moving parts.',
  },
  {
    title: 'My first parser parsed zero records',
    body: 'I wrote the SDR parser against a format I assumed the FAA file would have. It was wrong. I had to read the actual file line by line and rewrite the parser from scratch. Assumptions about data formats are usually wrong.',
  },
  {
    title: 'Column name mismatch between script and database',
    body: 'The Python script was sending camelCase field names, but the Supabase table had snake_case columns. Every insert failed. Fixed it with a schema migration. Good reminder to agree on naming conventions before you start loading data.',
  },
  {
    title: 'Calling an LLM for every record was too slow',
    body: 'With 50+ Airworthiness Directives per aircraft, Gemini was being called for every single one. Analysis took up to 8 minutes. I built local regex matching first — it handles the clear-cut cases instantly — and only falls back to Gemini when confidence is below 80%. Brought it down to a few seconds.',
  },
  {
    title: 'The Gemini model I used got deprecated',
    body: 'I had built around gemini-2.0-flash and it stopped working mid-project. Had to switch models. Always check model availability before building a hard dependency on a specific version.',
  },
  {
    title: 'Hyperlinks in Excel aren\'t in cell.value',
    body: 'The FAA AD spreadsheet had clickable links in the cells, but reading cell.value only gave me the display text. The actual URL was stored separately and had to be accessed via cell.hyperlink.target in openpyxl. Not obvious until you look at how it handles hyperlinks.',
  },
  {
    title: 'Anon keys and service-role keys do different things',
    body: 'My API routes were using the public anon key, which has Row Level Security restrictions. They were silently failing. Fixed it by creating a separate Supabase admin client with the service-role key for server-side calls only.',
  },
];

const AeroGuardPage = () => {
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
                Based on applicable ADs, failed-part findings, and excess wear reports, the tool gives a risk score from 0 to 100. It's meant to give you a quick sense of an aircraft's maintenance picture before you dig deeper.
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
                The raw FAA data doesn't come in a developer-friendly format. I downloaded SDR files and AD spreadsheets directly from FAA sources, then wrote Python scripts to parse and load them into a Supabase (Postgres) database. The main tools were httpx, openpyxl, and pymupdf — for HTTP requests, reading Excel files, and parsing PDFs.
              </p>
              <p>
                One thing that took time was extracting hyperlinks from the AD spreadsheet. The cell values were just display text — the actual FAA document URLs were stored separately as embedded hyperlinks and had to be pulled using cell.hyperlink.target in openpyxl.
              </p>
              <p>
                AD applicability — figuring out whether a specific serial number is actually affected — is done with local regex and heuristic pattern matching first. I built six matching strategies covering explicit serial number ranges, fleet-wide applicability, exclusion clauses, and complex hyphenated ranges. If confidence falls below 80%, the analysis falls back to Gemini 2.5 Flash Lite. This keeps it fast for clear-cut cases while still handling ambiguous ones. All scripts are idempotent, so they're safe to re-run without creating duplicate records.
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
                  key={tech}
                  className="text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700"
                >
                  {tech}
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
            <div className="mt-4 space-y-4">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50"
                >
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{lesson.title}</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{lesson.body}</p>
                </div>
              ))}
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

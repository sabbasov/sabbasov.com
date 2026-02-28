'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Contact from '../components/contact';

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
                href="https://aeroguard.sabbasov.com"
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
                className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium px-6 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
              >
                GitHub →
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
                The raw FAA data doesn't come in a developer-friendly format. I downloaded SDR files and AD spreadsheets directly from FAA sources, then wrote Python scripts to parse and load them into a Supabase (Postgres) database. The main tools were <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">httpx</span>, <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">openpyxl</span>, and <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">pymupdf</span> — for HTTP requests, reading Excel files, and parsing PDFs.
              </p>
              <p>
                One thing that took time was extracting hyperlinks from the AD spreadsheet. The cell values were just display text — the actual FAA document URLs were stored separately as embedded hyperlinks and had to be pulled with <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">cell.hyperlink.target</span> in openpyxl.
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
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed list-none">
              <li className="flex gap-2">
                <span className="text-zinc-400 shrink-0">—</span>
                The official Python Supabase SDK didn't work on my Python version, so I dropped it and called the PostgREST API directly with <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">httpx</span>. That actually turned out cleaner — fewer moving parts.
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 shrink-0">—</span>
                My first SDR parser was written against an assumed file format. It parsed zero records. I had to go back, read the actual FAA text file structure line by line, and rewrite the parser from scratch. Assumptions about data formats are usually wrong.
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 shrink-0">—</span>
                Database column names between the Python script and the Supabase schema were out of sync (camelCase vs snake_case). Fixed it with a schema migration, but it was a good reminder to agree on naming conventions before you start loading data.
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 shrink-0">—</span>
                AD analysis with an LLM for every record was too slow — up to 8 minutes per aircraft with 50+ ADs. Building local regex matching first brought that down to a few seconds and made the LLM fallback the exception, not the rule.
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 shrink-0">—</span>
                Gemini model names change. <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">gemini-2.0-flash</span> stopped working after I had already built around it. Always check model availability before you build a dependency on a specific version.
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 shrink-0">—</span>
                The FAA AD spreadsheet had clickable links in the cells, but <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">cell.value</span> only gave me the display text. The actual URL was in <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">cell.hyperlink.target</span> — not obvious until you look at how openpyxl handles hyperlinks.
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-400 shrink-0">—</span>
                Anon keys and service-role keys in Supabase do different things. API routes were silently failing because I was using the wrong one. Keeping a separate admin client for server-side operations fixed it.
              </li>
            </ul>
          </motion.div>
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AeroGuardPage;
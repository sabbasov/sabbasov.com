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
                Based on applicable ADs, failed-part findings, and excess wear reports, the tool gives a risk score from 0 to 100. It’s meant to give you a quick sense of an aircraft’s maintenance picture before you dig deeper.
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
                The raw FAA data doesn’t come in a format that’s easy to work with. I downloaded the SDR and AD files directly from FAA sources, wrote Python scripts to parse them, and loaded everything into a Supabase (Postgres) database. The main tools were <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">httpx</span>, <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">openpyxl</span>, and <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">pymupdf</span> for fetching, reading spreadsheets, and parsing PDFs respectively.
              </p>
              <p>
                AD applicability analysis — figuring out whether a specific serial number is affected — is done with local regex and heuristic pattern matching first. If confidence falls below 80%, it falls back to Gemini 2.5 Flash Lite. This keeps it fast and cheap for clear-cut cases while still handling the ambiguous ones. All pipeline scripts are idempotent, so they’re safe to re-run without creating duplicate data.
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
            <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed list-none">
              <li className="flex gap-2"><span className="text-zinc-400">—</span>Working with real government data that wasn’t designed for developers. FAA files come in a mix of formats and the structure isn’t always consistent.</li>
              <li className="flex gap-2"><span className="text-zinc-400">—</span>Building a processing pipeline that handles partial and missing data without breaking — a lot of records are incomplete and you have to account for that.</li>
              <li className="flex gap-2"><span className="text-zinc-400">—</span>Thinking through the logic of serial-number-level AD applicability, which is more nuanced than it sounds. The same AD can apply to some serial numbers but not others based on manufacture date ranges or retrofit status.</li>
              <li className="flex gap-2"><span className="text-zinc-400">—</span>Knowing when to use an LLM as a fallback versus doing it deterministically. For structured data with clear patterns, regex is faster, cheaper, and more predictable.</li>
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

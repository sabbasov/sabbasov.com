'use client';

import { useEffect } from 'react';
import Aviation from './components/aviation';
import Experience from './components/experience';
import Education from './components/education';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import ScrollToTop from './components/scroll-to-top';
import Contact from './components/contact';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Aviation />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

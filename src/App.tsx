import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ContentSections } from './components/ContentSections';
import { TableOfContents } from './components/TableOfContents';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('s1');

  useEffect(() => {
    const sectionIds = [
      's1',
      's2',
      's3',
      's4',
      's5',
      's6',
      's7',
      's8',
      's9',
      's10',
      'takeaways',
      'chapters',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header & Reading Progress */}
      <Navigation activeId={activeSection} />

      {/* Hero Section with Sole Page H1 & SVG 01 */}
      <Hero />

      {/* Main Educational Article Content Area with Desktop Sticky TOC Sidebar */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
          {/* Main Article Body (8 cols on desktop) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <ContentSections />
          </div>

          {/* Sticky Table of Contents Sidebar (4 cols on desktop) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-24">
            <TableOfContents activeId={activeSection} />
          </aside>
        </div>
      </main>

      {/* Footer with Organization Branding, Copyright and Disclaimer */}
      <Footer />
    </div>
  );
}

export default App;

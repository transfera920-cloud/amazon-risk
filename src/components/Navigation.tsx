import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, BookOpen, Compass, ShieldCheck } from 'lucide-react';

interface NavigationProps {
  activeId: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeId }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 's1', label: '01 什麼是風險管理' },
    { id: 's2', label: '02 四大風險來源' },
    { id: 's3', label: '03 風險辨識流程' },
    { id: 's4', label: '04 風險矩陣評估' },
    { id: 's5', label: '05 FMEA 風險分析' },
    { id: 's6', label: '06 瑞士乳酪模型' },
    { id: 's7', label: '07 常見風險分析' },
    { id: 's8', label: '08 四種控制方法' },
    { id: 's9', label: '09 領隊管理流程' },
    { id: 's10', label: '10 事故案例三問' },
    { id: 'takeaways', label: '本章重點整理' },
    { id: 'chapters', label: '章節導覽' },
  ];

  return (
    <>
      {/* Top Fixed Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-amber-500 z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="頁面閱讀進度"
      />

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand & Chapter Identification */}
          <a
            href="https://amazon-hike.com/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg transition-opacity hover:opacity-90"
            title="亞馬遜國家山岳協會"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 text-sm sm:text-base tracking-wide group-hover:text-amber-300 transition-colors">
                  亞馬遜國家山岳協會
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-semibold bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
                  Ch. 09 / 16
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Amazon National Alpine Association · 登山教育教材
              </p>
            </div>
          </a>

          {/* Quick navigation anchor / Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#s1"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              開始閱讀
            </a>
            <a
              href="#takeaways"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              本章重點
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              aria-label="開啟章節目錄"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 shadow-2xl">
            <div className="text-xs font-semibold text-amber-400 px-2 py-1 uppercase tracking-wider">
              本章章節目錄
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    activeId === item.id
                      ? 'bg-amber-500/20 text-amber-300 font-semibold border-l-2 border-amber-400'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-amber-500 text-slate-950 shadow-lg hover:bg-amber-400 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-300"
          aria-label="返回頁面頂部"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </>
  );
};

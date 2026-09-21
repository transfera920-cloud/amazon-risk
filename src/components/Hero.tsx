import React from 'react';
import { Diagram01Overview } from './diagrams/Diagram01Overview';
import { Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-12 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950">
      {/* Native SVG Topographic Mountain Contour Lines in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Subtle Contour elevation lines */}
          <path
            d="M 0 150 Q 300 80, 600 180 T 1200 120"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <path
            d="M 0 250 Q 350 160, 700 280 T 1200 200"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.2"
          />
          <path
            d="M 0 350 Q 400 240, 800 380 T 1200 300"
            fill="none"
            stroke="#64748b"
            strokeWidth="1"
          />
          <path
            d="M 0 450 Q 450 320, 900 480 T 1200 400"
            fill="none"
            stroke="#64748b"
            strokeWidth="0.8"
          />
          {/* Stylized Mountain Ridge Silhouette in native SVG */}
          <polygon
            points="0,600 180,320 320,410 520,240 680,370 860,190 1020,310 1200,210 1200,600"
            fill="#0f172a"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sole H1 of the entire page */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight sm:leading-none mb-4">
          登山風險管理
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-medium text-slate-300 mb-6 max-w-3xl leading-relaxed">
          從風險辨識到決策管理，建立安全登山的系統方法。
        </p>

        {/* Core Philosophy Callout Box */}
        <div className="p-4 sm:p-5 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                核心理念
              </div>
              <p className="text-base sm:text-lg font-semibold text-amber-200 leading-snug">
                安全不是沒有風險，而是知道風險在哪裡，並提前做好管理。
              </p>
            </div>
          </div>
        </div>

        {/* SVG 01 Embedded in Hero */}
        <Diagram01Overview />
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <a
            href="https://amazon-hike.com/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg transition-opacity hover:opacity-90"
            title="亞馬遜國家山岳協會"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-200 text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                亞馬遜國家山岳協會 · 登山教育教材
              </div>
              <p className="text-xs text-slate-400">
                Amazon National Alpine Association · Mountaineering Education Series
              </p>
            </div>
          </a>
        </div>

        {/* Copyright & Organization Identity */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
          <p>© {new Date().getFullYear()} Amazon National Alpine Association. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>專業 · 系統 · 安全 · 傳承</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              標準山岳安全教材
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

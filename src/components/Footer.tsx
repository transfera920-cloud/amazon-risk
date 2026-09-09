import React from 'react';
import { ShieldCheck, Compass, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-200 text-sm tracking-wide">
                亞馬遜國家山岳協會 · 登山教育教材
              </div>
              <p className="text-xs text-slate-400">
                Amazon National Alpine Association · Mountaineering Education Series
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Chapter 09 · 登山風險管理 (Mountain Risk Management)
          </div>
        </div>

        {/* Disclaimer Callout Box */}
        <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-slate-300 font-semibold block">【專業免責聲明】</strong>
            <p className="leading-relaxed">
              本教材為第九章「登山風險管理」，供教學與內部訓練使用。實際登山活動請依當下環境與專業判斷執行。高山氣候多變且具不可預測之客觀危害，每位登山者應具備自主風險評估與撤退決策能力。
            </p>
          </div>
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

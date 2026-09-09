import React from 'react';
import { ListOrdered } from 'lucide-react';

interface TableOfContentsProps {
  activeId: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ activeId }) => {
  const sections = [
    { id: 's1', num: '01', title: '什麼是登山風險管理' },
    { id: 's2', num: '02', title: '登山風險的四大來源' },
    { id: 's3', num: '03', title: '風險辨識流程' },
    { id: 's4', num: '04', title: '風險評估方法（風險矩陣）' },
    { id: 's5', num: '05', title: 'FMEA 風險分析概念' },
    { id: 's6', num: '06', title: 'Swiss Cheese Model 事故分析' },
    { id: 's7', num: '07', title: '常見登山風險分析' },
    { id: 's8', num: '08', title: '風險控制方法' },
    { id: 's9', num: '09', title: '領隊風險管理流程' },
    { id: 's10', num: '10', title: '登山事故案例分析' },
    { id: 'takeaways', num: '★', title: '本章重點整理' },
    { id: 'chapters', num: '☲', title: '章節關聯與導覽' },
  ];

  return (
    <nav
      aria-label="章節目錄導覽"
      className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sticky top-24 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-xs font-bold text-amber-400 uppercase tracking-wider">
        <ListOrdered className="w-4 h-4" />
        <span>章節目錄導覽</span>
      </div>

      <ul className="space-y-1 text-xs">
        {sections.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-300 font-semibold border-l-2 border-amber-400 pl-2'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span
                  className={`font-mono text-[10px] px-1 py-0.5 rounded ${
                    isActive ? 'bg-amber-500/20 text-amber-300' : 'text-slate-500'
                  }`}
                >
                  {sec.num}
                </span>
                <span className="leading-relaxed line-clamp-1">{sec.title}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500">
        亞馬遜國家山岳協會 · 登山教育系列教材
      </div>
    </nav>
  );
};

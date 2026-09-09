import React from 'react';

/**
 * SVG 06｜Swiss Cheese Model (瑞士乳酪模型) 事故分析
 * 建立五層防護：
 * 第 1 層：行前評估
 * 第 2 層：裝備確認
 * 第 3 層：天氣監控
 * 第 4 層：現場決策
 * 第 5 層：緊急應變
 * 每一層都可能有漏洞；當所有漏洞恰好對齊，事故才會穿透。
 * 管理的目的不是消除漏洞，而是「增加防護層」以攔截事故。
 */
export const Diagram06SwissCheese: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 06｜Swiss Cheese Model 瑞士乳酪五層防護架構
          </span>
        </div>
        <span className="text-xs text-slate-400">系統防護與事故穿透機轉</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 350"
          className="w-full h-auto max-w-full"
          aria-label="Swiss Cheese Model登山事故分析：五層防護層與漏洞攔截原理"
          role="img"
        >
          <defs>
            <marker
              id="hazardArrowRed"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
            </marker>
            <linearGradient id="cheeseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Background guide line */}
          <line x1="20" y1="130" x2="700" y2="130" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

          {/* Hazard Source (Left) */}
          <g transform="translate(14, 90)">
            <rect width="78" height="80" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
            <text x="39" y="26" fill="#f87171" fontSize="12" fontWeight="bold" textAnchor="middle">
              潛在危害
            </text>
            <text x="39" y="46" fill="#cbd5e1" fontSize="10" textAnchor="middle">
              暴風雪/低溫
            </text>
            <text x="39" y="62" fill="#cbd5e1" fontSize="10" textAnchor="middle">
              落石/迷途
            </text>
          </g>

          {/* Trajectory 1: Penetrates Slice 1 & 2, but BLOCKED by Slice 3 */}
          <path
            d="M 92 130 L 340 130"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeDasharray="5 3"
          />
          {/* Block symbol at layer 3 */}
          <circle cx="345" cy="130" r="12" fill="#10b981" stroke="#059669" strokeWidth="2" />
          <path d="M 340 130 L 344 134 L 350 126" fill="none" stroke="#ffffff" strokeWidth="2" />
          <text x="345" y="108" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
            成功阻截！
          </text>

          {/* SLICE 1: 行前評估 */}
          <g transform="translate(110, 30)">
            <rect width="86" height="235" rx="8" fill="url(#cheeseGrad)" stroke="#fcd34d" strokeWidth="1.5" />
            <text x="43" y="24" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              第 1 層
            </text>
            <text x="43" y="42" fill="#0f172a" fontSize="13" fontWeight="black" textAnchor="middle">
              行前評估
            </text>
            {/* Holes */}
            <circle cx="43" cy="100" r="14" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="28" cy="165" r="10" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="58" cy="205" r="11" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <text x="43" y="280" fill="#cbd5e1" fontSize="10" textAnchor="middle">路線/體能審核</text>
          </g>

          {/* SLICE 2: 裝備確認 */}
          <g transform="translate(225, 30)">
            <rect width="86" height="235" rx="8" fill="url(#cheeseGrad)" stroke="#fcd34d" strokeWidth="1.5" />
            <text x="43" y="24" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              第 2 層
            </text>
            <text x="43" y="42" fill="#0f172a" fontSize="13" fontWeight="black" textAnchor="middle">
              裝備確認
            </text>
            {/* Holes */}
            <circle cx="50" cy="100" r="12" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="32" cy="150" r="11" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="45" cy="210" r="10" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <text x="43" y="280" fill="#cbd5e1" fontSize="10" textAnchor="middle">雨具/雙導航</text>
          </g>

          {/* SLICE 3: 天氣監控 */}
          <g transform="translate(340, 30)">
            <rect width="86" height="235" rx="8" fill="url(#cheeseGrad)" stroke="#fcd34d" strokeWidth="1.5" />
            <text x="43" y="24" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              第 3 層
            </text>
            <text x="43" y="42" fill="#0f172a" fontSize="13" fontWeight="black" textAnchor="middle">
              天氣監控
            </text>
            {/* Holes (Solid at y=100 so it blocks the upper ray!) */}
            <circle cx="43" cy="55" r="10" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="30" cy="175" r="12" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="56" cy="215" r="9" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <text x="43" y="280" fill="#cbd5e1" fontSize="10" textAnchor="middle">即時氣象掌握</text>
          </g>

          {/* SLICE 4: 現場決策 */}
          <g transform="translate(455, 30)">
            <rect width="86" height="235" rx="8" fill="url(#cheeseGrad)" stroke="#fcd34d" strokeWidth="1.5" />
            <text x="43" y="24" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              第 4 層
            </text>
            <text x="43" y="42" fill="#0f172a" fontSize="13" fontWeight="black" textAnchor="middle">
              現場決策
            </text>
            {/* Holes */}
            <circle cx="30" cy="90" r="11" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="50" cy="155" r="13" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="36" cy="210" r="10" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <text x="43" y="280" fill="#cbd5e1" fontSize="10" textAnchor="middle">折返停損/步態</text>
          </g>

          {/* SLICE 5: 緊急應變 */}
          <g transform="translate(570, 30)">
            <rect width="86" height="235" rx="8" fill="url(#cheeseGrad)" stroke="#fcd34d" strokeWidth="1.5" />
            <text x="43" y="24" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              第 5 層
            </text>
            <text x="43" y="42" fill="#0f172a" fontSize="13" fontWeight="black" textAnchor="middle">
              緊急應變
            </text>
            {/* Holes */}
            <circle cx="48" cy="95" r="11" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="28" cy="160" r="10" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="50" cy="210" r="11" fill="#0f172a" stroke="#fef08a" strokeWidth="1.5" />
            <text x="43" y="280" fill="#cbd5e1" fontSize="10" textAnchor="middle">留守啟動/搜救</text>
          </g>

          {/* Theoretical Trajectory (Bottom): Penetration occurs ONLY if all holes align */}
          <path
            d="M 92 315 L 685 315"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            markerEnd="url(#hazardArrowRed)"
          />
          <text x="360" y="338" fill="#f87171" fontSize="11" textAnchor="middle">
            事故穿透極限狀況：唯有所有獨立防線的漏洞同時被穿透，重大山難才會真正發生
          </text>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300">
        <div>
          <span className="text-amber-400 font-semibold">🧀 核心洞見：</span>
          事故通常不是單一原因造成，而是多個小錯誤累積、恰好對齊。每一層防護都有漏洞。
        </div>
        <div>
          <span className="text-sky-400 font-semibold">🛡️ 安全管理的目的：</span>
          不是消除所有人類天生漏洞，而是<strong>增加獨立防護層</strong>，大幅降低漏洞完全對齊的機率。
        </div>
      </div>
    </div>
  );
};

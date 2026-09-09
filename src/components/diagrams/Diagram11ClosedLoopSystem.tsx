import React from 'react';

/**
 * SVG 11｜本章完整風險管理系統
 * 全章總覽閉環架構：
 * 辨識 → 評估 → 控制 → 監控 → 重新評估 → 決策 → 事故預防
 * 形成完整閉環。這張 SVG 是全章的集大成總結圖。
 */
export const Diagram11ClosedLoopSystem: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 11｜登山風險管理全章系統閉環總覽
          </span>
        </div>
        <span className="text-xs text-slate-400">系統化安全循環與事故預防</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 435"
          className="w-full h-auto max-w-full"
          aria-label="登山風險管理全章完整閉環圖：辨識、評估、控制、監控、重新評估、決策、事故預防"
          role="img"
        >
          <defs>
            <linearGradient id="sysRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
            </linearGradient>
            <marker
              id="loopArrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
            </marker>
          </defs>

          {/* Central Circular Loop Ring Track */}
          <circle cx="360" cy="225" r="145" fill="none" stroke="url(#sysRing)" strokeWidth="3" strokeDasharray="5 4" />

          {/* Center Hub: 安全核心價值 */}
          <g transform="translate(360, 225)">
            <circle r="60" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
            <circle r="52" fill="#1e293b" />
            <text y="-12" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">
              安全登山系統
            </text>
            <text y="4" fill="#f8fafc" fontSize="10" textAnchor="middle">
              SYSTEM SAFETY
            </text>
            <text y="20" fill="#94a3b8" fontSize="9" textAnchor="middle">
              動態管理 · 閉環防護
            </text>
            <text y="36" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
              平安返家
            </text>
          </g>

          {/* 7 Circular Stages around the Perimeter */}

          {/* Node 1: 01 辨識 (Top: 360, 55) */}
          <g transform="translate(302, 30)">
            <rect width="116" height="52" rx="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="58" y="22" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle">01 辨識</text>
            <text x="58" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">四大來源清點</text>
          </g>

          {/* Node 2: 02 評估 (Top-Right: ~490, 80) */}
          <g transform="translate(475, 65)">
            <rect width="116" height="52" rx="7" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="58" y="22" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">02 評估</text>
            <text x="58" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">風險矩陣/FMEA</text>
          </g>

          {/* Node 3: 03 控制 (Right: ~530, 200) */}
          <g transform="translate(535, 195)">
            <rect width="118" height="52" rx="7" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
            <text x="59" y="22" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">03 控制</text>
            <text x="59" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">避免/降低/轉移</text>
          </g>

          {/* Node 4: 04 監控 (Bottom-Right: ~460, 325) */}
          <g transform="translate(460, 320)">
            <rect width="116" height="52" rx="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="58" y="22" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle">04 監控</text>
            <text x="58" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">行進持續觀察</text>
          </g>

          {/* Node 5: 05 重新評估 (Bottom: ~295, 360) */}
          <g transform="translate(295, 360)">
            <rect width="116" height="52" rx="7" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="58" y="22" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">05 重新評估</text>
            <text x="58" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">動態進度檢定</text>
          </g>

          {/* Node 6: 06 決策 (Bottom-Left: ~135, 310) */}
          <g transform="translate(130, 310)">
            <rect width="116" height="52" rx="7" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <text x="58" y="22" fill="#c084fc" fontSize="12" fontWeight="bold" textAnchor="middle">06 決策</text>
            <text x="58" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">折返/推進/避難</text>
          </g>

          {/* Node 7: 07 事故預防 (Left: ~65, 165) */}
          <g transform="translate(70, 165)">
            <rect width="116" height="52" rx="7" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
            <text x="58" y="22" fill="#f87171" fontSize="12" fontWeight="bold" textAnchor="middle">07 檢討預防</text>
            <text x="58" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">多層防護升級</text>
          </g>

          {/* Directional Flow Arrows around loop */}
          <path d="M 425 45 Q 460 50 472 65" fill="none" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#loopArrow)" />
          <path d="M 570 120 Q 590 155 588 190" fill="none" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#loopArrow)" />
          <path d="M 575 252 Q 565 295 540 320" fill="none" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#loopArrow)" />
          <path d="M 455 358 Q 435 375 415 380" fill="none" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#loopArrow)" />
          <path d="M 290 380 Q 265 370 248 350" fill="none" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#loopArrow)" />
          <path d="M 140 305 Q 120 260 125 222" fill="none" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#loopArrow)" />
          <path d="M 155 160 Q 210 90 295 55" fill="none" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#loopArrow)" />
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        從行前辨識到現場決策，完整的風險管理是一個動態互聯的閉環生態：系統比個人英雄更有力量。
      </p>
    </div>
  );
};

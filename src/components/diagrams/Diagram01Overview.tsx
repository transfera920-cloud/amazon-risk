import React from 'react';

/**
 * SVG 01｜首頁風險管理總覽
 * 表達：危害 → 風險 → 評估 → 控制 → 持續監控
 * 讓使用者一進入網站就理解本章的核心邏輯
 */
export const Diagram01Overview: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400">
            教材圖解
          </span>
        </div>
        <span className="text-xs text-slate-400">登山風險管理核心邏輯總覽</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 330"
          className="w-full h-auto max-w-full"
          aria-label="登山風險管理核心邏輯流程圖：危害至持續監控"
          role="img"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
            <marker
              id="arrowAmber"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
            </marker>
            <marker
              id="arrowLoop"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
          </defs>

          {/* Row 1: 01 危害 -> 02 風險 -> 03 評估 */}
          {/* Connector 1 -> 2 */}
          <line x1="205" y1="65" x2="245" y2="65" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />

          {/* Connector 2 -> 3 */}
          <line x1="445" y1="65" x2="485" y2="65" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />

          {/* Card 01: 危害 */}
          <g transform="translate(15, 15)">
            <rect width="190" height="100" rx="10" fill="#0f172a" stroke="#ef4444" strokeWidth="2" />
            <rect width="190" height="30" rx="10" fill="#1e293b" />
            <rect y="18" width="190" height="12" fill="#1e293b" />
            <text x="16" y="21" fill="#f87171" fontSize="13" fontWeight="bold">01 危害 (Hazard)</text>
            <text x="16" y="55" fill="#f1f5f9" fontSize="13" fontWeight="600">客觀危險來源</text>
            <text x="16" y="78" fill="#94a3b8" fontSize="11">地形 / 氣候 / 人員狀態</text>
          </g>

          {/* Card 02: 風險 */}
          <g transform="translate(255, 15)">
            <rect width="190" height="100" rx="10" fill="#0f172a" stroke="#f97316" strokeWidth="2" />
            <rect width="190" height="30" rx="10" fill="#1e293b" />
            <rect y="18" width="190" height="12" fill="#1e293b" />
            <text x="16" y="21" fill="#fb923c" fontSize="13" fontWeight="bold">02 風險 (Risk)</text>
            <text x="16" y="55" fill="#f1f5f9" fontSize="13" fontWeight="600">暴露與衝擊程度</text>
            <text x="16" y="78" fill="#94a3b8" fontSize="11">發生機率 × 衝擊嚴重度</text>
          </g>

          {/* Card 03: 評估 */}
          <g transform="translate(495, 15)">
            <rect width="210" height="100" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <rect width="210" height="30" rx="10" fill="#1e293b" />
            <rect y="18" width="210" height="12" fill="#1e293b" />
            <text x="16" y="21" fill="#fbbf24" fontSize="13" fontWeight="bold">03 評估 (Assessment)</text>
            <text x="16" y="55" fill="#f1f5f9" fontSize="13" fontWeight="600">量化矩陣與分析</text>
            <text x="16" y="78" fill="#94a3b8" fontSize="11">4×4矩陣 / FMEA失效分析</text>
          </g>

          {/* Downward Turn Connector from Step 3 to Step 4 */}
          <path
            d="M 600 115 L 600 155 C 600 165, 590 175, 580 175 L 485 175"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            markerEnd="url(#arrowAmber)"
          />

          {/* Row 2: 04 控制 -> 05 持續監控 */}
          {/* Connector 4 -> 5 */}
          <line x1="265" y1="215" x2="215" y2="215" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />

          {/* Card 04: 控制 */}
          <g transform="translate(265, 165)">
            <rect width="210" height="100" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <rect width="210" height="30" rx="10" fill="#1e293b" />
            <rect y="18" width="210" height="12" fill="#1e293b" />
            <text x="16" y="21" fill="#7dd3fc" fontSize="13" fontWeight="bold">04 控制 (Control)</text>
            <text x="16" y="55" fill="#f1f5f9" fontSize="13" fontWeight="600">四大策略組合實踐</text>
            <text x="16" y="78" fill="#94a3b8" fontSize="11">避免 / 降低 / 轉移 / 接受</text>
          </g>

          {/* Card 05: 持續監控 */}
          <g transform="translate(15, 165)">
            <rect width="190" height="100" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <rect width="190" height="30" rx="10" fill="#1e293b" />
            <rect y="18" width="190" height="12" fill="#1e293b" />
            <text x="16" y="21" fill="#34d399" fontSize="13" fontWeight="bold">05 持續監控 (Monitor)</text>
            <text x="16" y="55" fill="#f1f5f9" fontSize="13" fontWeight="600">動態觀測與決策</text>
            <text x="16" y="78" fill="#94a3b8" fontSize="11">行進狀態 / 天候 / 撤退線</text>
          </g>

          {/* Feedback Loop Path from Node 5 back to Node 3 (Assessment) */}
          <path
            d="M 110 265 L 110 295 C 110 305, 120 312, 130 312 L 670 312 C 685 312, 695 302, 695 285 L 695 125"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="5 3"
            markerEnd="url(#arrowLoop)"
          />
          <text
            x="400"
            y="304"
            fill="#34d399"
            fontSize="12"
            textAnchor="middle"
            fontWeight="bold"
          >
            現場動態回饋閉環（即時回傳資訊，重新評估調整計畫）
          </text>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        全景架構：登山風險並非單一步驟，而是自危害識別至控制監控的動態決策閉環。
      </p>
    </div>
  );
};

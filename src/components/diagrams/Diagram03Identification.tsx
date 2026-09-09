import React from 'react';

/**
 * SVG 03｜風險辨識流程
 * 建立流程：
 * 行前：分析路線 → 找出可能危害 → 評估嚴重程度 → 制定預防措施
 * 行程中：持續觀察 → 重新評估 → 調整計畫
 * 最後形成循環，表達「風險會隨時間改變」。
 */
export const Diagram03Identification: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 03｜風險辨識動態循環流程
          </span>
        </div>
        <span className="text-xs text-slate-400">行前準備與行程中動態調整</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 395"
          className="w-full h-auto max-w-full"
          aria-label="登山風險辨識流程：行前評估與行程中動態循環"
          role="img"
        >
          <defs>
            <marker
              id="arrowId"
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
          </defs>

          {/* Phase 1: 行前容器 */}
          <rect
            x="15"
            y="15"
            width="690"
            height="150"
            rx="10"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1.5"
          />
          {/* Badge Phase 1 */}
          <rect x="30" y="8" width="130" height="22" rx="4" fill="#38bdf8" />
          <text x="95" y="23" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
            階段一：行前準備
          </text>

          {/* Steps in Phase 1 */}
          {/* Step 1: 分析路線 */}
          <g transform="translate(30, 42)">
            <rect width="145" height="72" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="14" y="26" fill="#38bdf8" fontSize="13" fontWeight="bold">01. 分析路線</text>
            <text x="14" y="46" fill="#94a3b8" fontSize="11">坡度 / 里程 / 水源</text>
            <text x="14" y="62" fill="#64748b" fontSize="10">標註關鍵撤退點</text>
          </g>

          <line x1="180" y1="78" x2="200" y2="78" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowId)" />

          {/* Step 2: 找出可能危害 */}
          <g transform="translate(205, 42)">
            <rect width="145" height="72" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="14" y="26" fill="#38bdf8" fontSize="13" fontWeight="bold">02. 找出危害</text>
            <text x="14" y="46" fill="#94a3b8" fontSize="11">崩壁 / 溪水 / 濃霧</text>
            <text x="14" y="62" fill="#64748b" fontSize="10">排查潛在脆弱點</text>
          </g>

          <line x1="355" y1="78" x2="375" y2="78" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowId)" />

          {/* Step 3: 評估嚴重程度 */}
          <g transform="translate(380, 42)">
            <rect width="145" height="72" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="14" y="26" fill="#38bdf8" fontSize="13" fontWeight="bold">03. 評估嚴重度</text>
            <text x="14" y="46" fill="#94a3b8" fontSize="11">事故機率 × 後果</text>
            <text x="14" y="62" fill="#64748b" fontSize="10">以矩陣量化層級</text>
          </g>

          <line x1="530" y1="78" x2="550" y2="78" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowId)" />

          {/* Step 4: 制定預防措施 */}
          <g transform="translate(555, 42)">
            <rect width="135" height="72" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="14" y="26" fill="#38bdf8" fontSize="13" fontWeight="bold">04. 制定預防</text>
            <text x="14" y="46" fill="#94a3b8" fontSize="11">備用計畫 / 裝備</text>
            <text x="14" y="62" fill="#64748b" fontSize="10">核定撤退門檻</text>
          </g>

          <text x="360" y="145" fill="#64748b" fontSize="11" textAnchor="middle">
            行前落實分析與預防方案，方能建立扎實的第一道安全防線
          </text>

          {/* Transition Connector between Phase 1 and Phase 2 */}
          <path
            d="M 622 114 L 622 178 C 622 192, 608 200, 595 200 L 400 200"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            markerEnd="url(#arrowAmber)"
          />
          <text x="500" y="194" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
            啟程入山 ── 轉入現場即時循環
          </text>

          {/* Phase 2: 行程中容器 */}
          <rect
            x="15"
            y="215"
            width="690"
            height="165"
            rx="10"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1.5"
          />
          {/* Badge Phase 2 */}
          <rect x="30" y="208" width="145" height="22" rx="4" fill="#f59e0b" />
          <text x="102" y="223" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
            階段二：行程中動態循環
          </text>

          {/* Steps in Phase 2 */}
          {/* Step 1: 持續觀察 */}
          <g transform="translate(35, 242)">
            <rect width="185" height="74" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="16" y="28" fill="#fbbf24" fontSize="13" fontWeight="bold">01. 持續觀察</text>
            <text x="16" y="48" fill="#cbd5e1" fontSize="11">隊員步態 / 天候雲相</text>
            <text x="16" y="64" fill="#94a3b8" fontSize="10">時間配速與生理狀態</text>
          </g>

          <line x1="225" y1="279" x2="260" y2="279" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowAmber)" />

          {/* Step 2: 重新評估 */}
          <g transform="translate(265, 242)">
            <rect width="185" height="74" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="16" y="28" fill="#fbbf24" fontSize="13" fontWeight="bold">02. 重新評估</text>
            <text x="16" y="48" fill="#cbd5e1" fontSize="11">體能衰退 / 天氣惡化</text>
            <text x="16" y="64" fill="#94a3b8" fontSize="10">對比時間預算與進度</text>
          </g>

          <line x1="455" y1="279" x2="490" y2="279" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowAmber)" />

          {/* Step 3: 調整計畫 */}
          <g transform="translate(495, 242)">
            <rect width="195" height="74" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="16" y="28" fill="#fbbf24" fontSize="13" fontWeight="bold">03. 調整決策</text>
            <text x="16" y="48" fill="#cbd5e1" fontSize="11">調整配速 / 迫降避難</text>
            <text x="16" y="64" fill="#f87171" fontSize="10" fontWeight="bold">觸發折返點果斷撤退</text>
          </g>

          {/* Cycle Loop Path: from Step 3 in Phase 2 back to Step 1 in Phase 2 */}
          <path
            d="M 590 316 C 590 355, 125 355, 125 321"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeDasharray="5 3"
            markerEnd="url(#arrowAmber)"
          />
          <text
            x="360"
            y="350"
            fill="#fbbf24"
            fontSize="11"
            textAnchor="middle"
            fontWeight="bold"
          >
            現場動態回饋閉環：風險隨時間、體能與天候持續演變
          </text>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        登山過程中的風險管理絕非行前做完一次表格即結束，而是在行進中持續觀察、反覆評估與動態調整的閉環系統。
      </p>
    </div>
  );
};

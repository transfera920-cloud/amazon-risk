import React from 'react';

/**
 * SVG 05｜FMEA 風險分析概念
 * 四段流程：可能失效模式 → 原因分析 → 造成後果 → 預防措施
 * 實例貫穿：迷路 → 路線不熟 → 行程延誤 → 事前路線研究
 * 目的：讓使用者理解 FMEA 是如何把「什麼可能出錯」拆開為不同面向，再逐一對應預防策略。
 */
export const Diagram05FMEA: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 05｜FMEA 失效模式與原因後果分析架構
          </span>
        </div>
        <span className="text-xs text-slate-400">Failure Mode & Effects Analysis</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 318"
          className="w-full h-auto max-w-full"
          aria-label="FMEA登山風險分析流程：失效模式、原因分析、造成後果、預防措施"
          role="img"
        >
          <defs>
            <marker
              id="fmeaArrow"
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

          {/* Top Banner: Industrial logic to Alpine Practice */}
          <rect x="18" y="12" width="684" height="32" rx="6" fill="#1e293b" stroke="#334155" />
          <text x="36" y="32" fill="#f59e0b" fontSize="12" fontWeight="bold">
            FMEA 登山工程分析：將「什麼可能出錯」拆解為結構化因果鏈，精準落實對應策略
          </text>

          {/* Stage 1: 可能失效模式 */}
          <g transform="translate(18, 54)">
            <rect width="154" height="162" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
            <rect width="154" height="32" rx="8" fill="#1e293b" />
            <rect y="22" width="154" height="10" fill="#1e293b" />
            <text x="77" y="21" fill="#f87171" fontSize="12" fontWeight="bold" textAnchor="middle">
              1. 失效模式
            </text>
            <text x="14" y="58" fill="#e2e8f0" fontSize="12">• 迷路 (Lost)</text>
            <text x="14" y="86" fill="#e2e8f0" fontSize="12">• 失溫 (Cold)</text>
            <text x="14" y="114" fill="#e2e8f0" fontSize="12">• 落石 (Rockfall)</text>
            <text x="14" y="142" fill="#e2e8f0" fontSize="12">• 跌墜 (Fall/Trauma)</text>
          </g>

          <line x1="175" y1="135" x2="191" y2="135" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#fmeaArrow)" />

          {/* Stage 2: 原因分析 */}
          <g transform="translate(194, 54)">
            <rect width="154" height="162" rx="8" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" />
            <rect width="154" height="32" rx="8" fill="#1e293b" />
            <rect y="22" width="154" height="10" fill="#1e293b" />
            <text x="77" y="21" fill="#fb923c" fontSize="12" fontWeight="bold" textAnchor="middle">
              2. 原因分析
            </text>
            <text x="14" y="62" fill="#e2e8f0" fontSize="12">• 氣候驟變 (Weather)</text>
            <text x="14" y="98" fill="#e2e8f0" fontSize="12">• 判斷失誤 (Judgment)</text>
            <text x="14" y="134" fill="#e2e8f0" fontSize="12">• 裝備不足 (Gear)</text>
          </g>

          <line x1="351" y1="135" x2="367" y2="135" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#fmeaArrow)" />

          {/* Stage 3: 造成後果 */}
          <g transform="translate(370, 54)">
            <rect width="154" height="162" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
            <rect width="154" height="32" rx="8" fill="#1e293b" />
            <rect y="22" width="154" height="10" fill="#1e293b" />
            <text x="77" y="21" fill="#fde047" fontSize="12" fontWeight="bold" textAnchor="middle">
              3. 造成後果
            </text>
            <text x="14" y="62" fill="#e2e8f0" fontSize="12">• 行程嚴重延誤</text>
            <text x="14" y="98" fill="#e2e8f0" fontSize="12">• 摸黑或受困受凍</text>
            <text x="14" y="134" fill="#e2e8f0" fontSize="12">• 需外部緊急救援</text>
          </g>

          <line x1="527" y1="135" x2="543" y2="135" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#fmeaArrow)" />

          {/* Stage 4: 預防措施 */}
          <g transform="translate(546, 54)">
            <rect width="156" height="162" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <rect width="156" height="32" rx="8" fill="#1e293b" />
            <rect y="22" width="156" height="10" fill="#1e293b" />
            <text x="78" y="21" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">
              4. 落地預防
            </text>
            <text x="14" y="62" fill="#e2e8f0" fontSize="12">• 詳讀航跡與地貌</text>
            <text x="14" y="98" fill="#e2e8f0" fontSize="12">• 雙備份離線地圖</text>
            <text x="14" y="134" fill="#e2e8f0" fontSize="12">• 嚴守設定折返點</text>
          </g>

          {/* Bottom Concrete Case Highlight */}
          <g transform="translate(18, 228)">
            <rect width="684" height="74" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            <text x="16" y="22" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【實例貫穿：登山常見迷路事件工程化推演】
            </text>
            <text x="16" y="52" fill="#fca5a5" fontSize="11" fontWeight="bold">
              [失效] 迷路受困
            </text>
            <text x="135" y="52" fill="#94a3b8" fontSize="11">→</text>
            <text x="150" y="52" fill="#fdba74" fontSize="11" fontWeight="bold">
              [原因] 路線不熟/起霧盲走
            </text>
            <text x="310" y="52" fill="#94a3b8" fontSize="11">→</text>
            <text x="325" y="52" fill="#fef08a" fontSize="11" fontWeight="bold">
              [後果] 行程延誤/無法原路撤退
            </text>
            <text x="495" y="52" fill="#94a3b8" fontSize="11">→</text>
            <text x="510" y="52" fill="#86efac" fontSize="11" fontWeight="bold">
              [預防] 預載雙GPX/停損撤退點
            </text>
          </g>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        FMEA 將模糊的「小心一點」轉化為精確的工程化分析：從辨識失效、探究真因、評估衝擊，到制定落地預防。
      </p>
    </div>
  );
};

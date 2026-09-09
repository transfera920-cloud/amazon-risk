import React from 'react';

/**
 * SVG 09｜領隊風險管理流程循環
 * 建立：
 * 出發前：路線分析 → 天氣評估 → 隊員評估 → 裝備確認
 * 行程中：觀察狀況 → 重新評估 → 調整決策
 * 事故前：提前撤退 → 避免危機
 * 回到：觀察／重新評估
 * 目的：表達領隊風險管理不是出發前做一次就結束，而是隨隊伍行進持續進行的動態決策循環。
 */
export const Diagram09LeaderLoop: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 09｜領隊全時程風險決策動態循環
          </span>
        </div>
        <span className="text-xs text-slate-400">出發前 · 行程中 · 事故前</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 415"
          className="w-full h-auto max-w-full"
          aria-label="領隊登山風險管理流程循環：出發前、行程中、事故前持續回饋"
          role="img"
        >
          <defs>
            <marker
              id="leaderArrow"
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
              id="retreatArrow"
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

          {/* Section 1: 出發前 (Pre-trip) */}
          <g transform="translate(18, 20)">
            <rect width="684" height="98" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="18" y="-11" width="95" height="22" rx="4" fill="#38bdf8" />
            <text x="65" y="4" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              一．出發前整備
            </text>

            <g transform="translate(18, 22)">
              {/* 1. 路線分析 */}
              <rect x="0" y="0" width="144" height="58" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="72" y="24" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle">1. 路線分析</text>
              <text x="72" y="44" fill="#94a3b8" fontSize="10" textAnchor="middle">高低差/關鍵水源/營地</text>

              <line x1="147" y1="29" x2="167" y2="29" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#leaderArrow)" />

              {/* 2. 天氣評估 */}
              <rect x="170" y="0" width="144" height="58" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="242" y="24" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle">2. 天氣評估</text>
              <text x="242" y="44" fill="#94a3b8" fontSize="10" textAnchor="middle">鋒面/強風降溫/降雨</text>

              <line x1="317" y1="29" x2="337" y2="29" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#leaderArrow)" />

              {/* 3. 隊員評估 */}
              <rect x="340" y="0" width="144" height="58" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="412" y="24" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle">3. 隊員評估</text>
              <text x="412" y="44" fill="#94a3b8" fontSize="10" textAnchor="middle">體能狀況/高山經驗</text>

              <line x1="487" y1="29" x2="507" y2="29" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#leaderArrow)" />

              {/* 4. 裝備確認 */}
              <rect x="510" y="0" width="138" height="58" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="579" y="24" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle">4. 裝備確認</text>
              <text x="579" y="44" fill="#94a3b8" fontSize="10" textAnchor="middle">雨具/雙導航/求生包</text>
            </g>
          </g>

          {/* Connector from 出發前 to 行程中 */}
          <path
            d="M 600 118 L 600 138 L 560 138"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            markerEnd="url(#leaderArrow)"
          />

          {/* Section 2: 行程中 (En route) */}
          <g transform="translate(18, 142)">
            <rect width="684" height="135" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x="18" y="-11" width="95" height="22" rx="4" fill="#f59e0b" />
            <text x="65" y="4" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              二．行程動態管理
            </text>

            <g transform="translate(20, 48)">
              {/* 1. 觀察狀況 */}
              <rect x="0" y="0" width="195" height="66" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="97" y="26" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">1. 觀察狀況</text>
              <text x="97" y="48" fill="#cbd5e1" fontSize="11" textAnchor="middle">隊員氣色 · 步速 · 雲霧天候</text>

              <line x1="198" y1="33" x2="223" y2="33" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#leaderArrow)" />

              {/* 2. 重新評估 */}
              <rect x="226" y="0" width="195" height="66" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="323" y="26" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">2. 重新評估</text>
              <text x="323" y="48" fill="#cbd5e1" fontSize="11" textAnchor="middle">預定進度差距 · 剩餘體能儲備</text>

              <line x1="424" y1="33" x2="449" y2="33" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#leaderArrow)" />

              {/* 3. 調整決策 */}
              <rect x="452" y="0" width="192" height="66" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="548" y="26" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">3. 調整決策</text>
              <text x="548" y="48" fill="#cbd5e1" fontSize="11" textAnchor="middle">調配節奏 · 提前避風 · 停損判定</text>
            </g>

            {/* Loopback within Section 2 */}
            <path
              d="M 548 44 C 548 20, 97 20, 97 44"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#leaderArrow)"
            />
            <text x="323" y="26" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="bold">
              持續回到「觀察狀況與動態評估」閉環循環
            </text>
          </g>

          {/* Section 3: 事故前 (Prior to incident) */}
          <g transform="translate(18, 300)">
            <rect width="684" height="92" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <rect x="18" y="-11" width="95" height="22" rx="4" fill="#10b981" />
            <text x="65" y="4" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
              三．事故前停損點
            </text>

            <g transform="translate(30, 20)">
              {/* 1. 提前撤退 */}
              <rect x="0" y="0" width="280" height="54" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
              <text x="140" y="24" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
                1. 提前撤退 (Early Retreat)
              </text>
              <text x="140" y="43" fill="#cbd5e1" fontSize="10" textAnchor="middle">
                在尚未失控前到達預設折返點立即回頭
              </text>

              <line x1="285" y1="27" x2="335" y2="27" stroke="#10b981" strokeWidth="2" markerEnd="url(#retreatArrow)" />

              {/* 2. 避免危機 */}
              <rect x="340" y="0" width="284" height="54" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
              <text x="482" y="24" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
                2. 終止連鎖 (Crisis Aversion)
              </text>
              <text x="482" y="43" fill="#cbd5e1" fontSize="10" textAnchor="middle">
                全隊平安折返，從源頭截斷事故骨牌反應
              </text>
            </g>
          </g>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        真正優秀的領隊不是在山難發生時展現英勇救援，而是在危機成形前的關鍵節點，做出果斷撤退以保全隊伍。
      </p>
    </div>
  );
};

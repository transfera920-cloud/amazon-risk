import React from 'react';

/**
 * SVG 10｜事故分析三問
 * 中心：事故案例
 * 向三個方向：
 * 1. 事件：發生了什麼？（依時間軸還原客觀事實）
 * 2. 原因：哪些風險沒有被辨識、評估或控制？
 * 3. 改善：未來如何在系統中加入新的防護層？
 * 目的：傳達「事故案例分析的目的不是責怪個人，而是找出系統問題以升級整體安全機制」。
 */
export const Diagram10CaseAnalysis: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 10｜登山事故案例三維系統分析模型
          </span>
        </div>
        <span className="text-xs text-slate-400">事件 · 原因 · 改善（去個人化/重系統化）</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 405"
          className="w-full h-auto max-w-full"
          aria-label="登山事故分析三問架構：事件還原、原因剖析、系統改善"
          role="img"
        >
          <defs>
            <radialGradient id="caseCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Glow */}
          <circle cx="360" cy="205" r="160" fill="url(#caseCenterGlow)" />

          {/* Connectors from Center to 3 Pillars */}
          <line x1="360" y1="145" x2="360" y2="108" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="305" y1="230" x2="220" y2="250" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="415" y1="230" x2="500" y2="250" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />

          {/* CENTER HUB: 登山事故案例 */}
          <g transform="translate(360, 205)">
            <circle r="60" fill="#0f172a" stroke="#ef4444" strokeWidth="2.5" />
            <circle r="52" fill="#1e293b" />
            <text y="-12" fill="#f87171" fontSize="14" fontWeight="bold" textAnchor="middle">
              事故案例檢討
            </text>
            <text y="6" fill="#fbbf24" fontSize="10" textAnchor="middle">
              CASE ANALYSIS
            </text>
            <line x1="-38" y1="14" x2="38" y2="14" stroke="#475569" strokeWidth="1" />
            <text y="28" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontWeight="bold">
              追溯系統防護漏洞
            </text>
            <text y="42" fill="#94a3b8" fontSize="9" textAnchor="middle">
              (拒絕流於指責個人)
            </text>
          </g>

          {/* PILLAR 1: 事件 (Top) */}
          <g transform="translate(215, 12)">
            <rect width="290" height="96" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <rect width="290" height="30" rx="8" fill="#1e293b" />
            <rect y="20" width="290" height="10" fill="#1e293b" />
            <circle cx="16" cy="15" r="5" fill="#38bdf8" />
            <text x="28" y="19" fill="#7dd3fc" fontSize="12" fontWeight="bold">
              1．事件：發生了什麼？
            </text>
            <text x="16" y="48" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【客觀事實還原】
            </text>
            <text x="16" y="68" fill="#e2e8f0" fontSize="11">
              • 依客觀時間軸還原天候、路況與位置
            </text>
            <text x="16" y="86" fill="#cbd5e1" fontSize="10">
              • 記錄各時間點通聯紀錄與生理狀況
            </text>
          </g>

          {/* PILLAR 2: 原因 (Bottom-Left) */}
          <g transform="translate(20, 250)">
            <rect width="310" height="140" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <rect width="310" height="30" rx="8" fill="#1e293b" />
            <rect y="20" width="310" height="10" fill="#1e293b" />
            <circle cx="16" cy="15" r="5" fill="#f59e0b" />
            <text x="28" y="19" fill="#fbbf24" fontSize="12" fontWeight="bold">
              2．原因：哪些風險未受控？
            </text>
            <text x="16" y="48" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【多維度系統漏洞挖掘】
            </text>
            <text x="16" y="68" fill="#e2e8f0" fontSize="11">
              • 哪些風險在行前未被辨識？
            </text>
            <text x="16" y="88" fill="#e2e8f0" fontSize="11">
              • 哪些嚴重度或氣象惡化被低估？
            </text>
            <text x="16" y="108" fill="#e2e8f0" fontSize="11">
              • 現場哪些控制措施與折返停損失效？
            </text>
          </g>

          {/* PILLAR 3: 改善 (Bottom-Right) */}
          <g transform="translate(390, 250)">
            <rect width="310" height="140" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <rect width="310" height="30" rx="8" fill="#1e293b" />
            <rect y="20" width="310" height="10" fill="#1e293b" />
            <circle cx="16" cy="15" r="5" fill="#10b981" />
            <text x="28" y="19" fill="#34d399" fontSize="12" fontWeight="bold">
              3．改善：如何加入新防護層？
            </text>
            <text x="16" y="48" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【建立組織與機制升級】
            </text>
            <text x="16" y="68" fill="#e2e8f0" fontSize="11">
              • 增加何種行前檢核與通訊防護？
            </text>
            <text x="16" y="88" fill="#e2e8f0" fontSize="11">
              • 修訂領隊折返標準與即時通報規範？
            </text>
            <text x="16" y="108" fill="#e2e8f0" fontSize="11">
              • 建立可重複套用的制度防呆措施
            </text>
          </g>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        登山事故檢討若止步於指責登山者「太大意」，悲劇必將再次上演；唯有透過三問追溯系統防護層，才能轉化為所有山友的護身盾牌。
      </p>
    </div>
  );
};

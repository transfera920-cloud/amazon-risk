import React from 'react';

/**
 * SVG 02｜四大風險來源
 * 中心：登山風險
 * 向外分成四個分支：環境、人員、裝備、管理
 * 每個分支顯示代表性項目
 * 目的：讓使用者快速理解登山風險不是單一來源
 */
export const Diagram02FourSources: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400">
            四大風險來源
          </span>
        </div>
        <span className="text-xs text-slate-400">環境 · 人員 · 裝備 · 管理</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 435"
          className="w-full h-auto max-w-full"
          aria-label="登山風險四大來源圖解：環境、人員、裝備、管理"
          role="img"
        >
          <defs>
            {/* Center glow */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Radial */}
          <circle cx="360" cy="215" r="160" fill="url(#centerGlow)" />

          {/* Connectors from Center to 4 Quadrants */}
          {/* Top-Left: 環境 */}
          <path
            d="M 315 175 C 280 145, 260 120, 245 105"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />
          {/* Top-Right: 人員 */}
          <path
            d="M 405 175 C 440 145, 460 120, 475 105"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />
          {/* Bottom-Left: 裝備 */}
          <path
            d="M 315 255 C 280 285, 260 310, 245 325"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />
          {/* Bottom-Right: 管理 */}
          <path
            d="M 405 255 C 440 285, 460 310, 475 325"
            fill="none"
            stroke="#ec4899"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* CENTER HUB: 登山風險 */}
          <g transform="translate(360, 215)">
            <circle r="65" fill="#0f172a" stroke="#f59e0b" strokeWidth="3" />
            <circle r="55" fill="#1e293b" />
            <polygon
              points="0,-30 20,12 -20,12"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              opacity="0.35"
            />
            <text y="-5" fill="#f8fafc" fontSize="16" fontWeight="bold" textAnchor="middle">
              登山風險
            </text>
            <text y="16" fill="#fbbf24" fontSize="10" textAnchor="middle" letterSpacing="2">
              MOUNTAIN RISK
            </text>
            <text y="34" fill="#94a3b8" fontSize="10" textAnchor="middle">
              四大核心來源
            </text>
          </g>

          {/* Quadrant 1: 環境風險 (Top-Left) */}
          <g transform="translate(15, 15)">
            <rect
              width="230"
              height="185"
              rx="10"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <rect width="230" height="34" rx="10" fill="#1e293b" />
            <rect y="22" width="230" height="12" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#38bdf8" />
            <text x="32" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold">
              一．環境風險 (Environment)
            </text>
            <text x="16" y="58" fill="#e2e8f0" fontSize="12">
              • 天氣驟變（暴雨 / 暴風 / 濃霧）
            </text>
            <text x="16" y="83" fill="#e2e8f0" fontSize="12">
              • 地形險阻（斷崖 / 崩壁 / 碎石）
            </text>
            <text x="16" y="108" fill="#e2e8f0" fontSize="12">
              • 海拔高度（低壓低氧高山症）
            </text>
            <text x="16" y="133" fill="#e2e8f0" fontSize="12">
              • 氣溫劇降（風寒 / 輻射冷卻）
            </text>
            <text x="16" y="158" fill="#e2e8f0" fontSize="12">
              • 水域溪流（暴漲 / 渡溪失足）
            </text>
          </g>

          {/* Quadrant 2: 人員風險 (Top-Right) */}
          <g transform="translate(475, 15)">
            <rect
              width="230"
              height="185"
              rx="10"
              fill="#0f172a"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <rect width="230" height="34" rx="10" fill="#1e293b" />
            <rect y="22" width="230" height="12" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#f59e0b" />
            <text x="32" y="22" fill="#fbbf24" fontSize="13" fontWeight="bold">
              二．人員風險 (People)
            </text>
            <text x="16" y="60" fill="#e2e8f0" fontSize="12">
              • 體能不足（配速失調 / 體力透支）
            </text>
            <text x="16" y="88" fill="#e2e8f0" fontSize="12">
              • 經驗不足（地形與地圖判讀弱）
            </text>
            <text x="16" y="116" fill="#e2e8f0" fontSize="12">
              • 健康狀況（慢性疾病 / 潛在不適）
            </text>
            <text x="16" y="144" fill="#e2e8f0" fontSize="12">
              • 心理盲點（恐慌 / 登頂狂熱誘惑）
            </text>
          </g>

          {/* Quadrant 3: 裝備風險 (Bottom-Left) */}
          <g transform="translate(15, 235)">
            <rect
              width="230"
              height="185"
              rx="10"
              fill="#0f172a"
              stroke="#10b981"
              strokeWidth="2"
            />
            <rect width="230" height="34" rx="10" fill="#1e293b" />
            <rect y="22" width="230" height="12" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#10b981" />
            <text x="32" y="22" fill="#34d399" fontSize="13" fontWeight="bold">
              三．裝備風險 (Equipment)
            </text>
            <text x="16" y="65" fill="#e2e8f0" fontSize="12">
              • 裝備不足（缺保暖衣物、專業雨具）
            </text>
            <text x="16" y="98" fill="#e2e8f0" fontSize="12">
              • 使用錯誤（頭燈沒電、冰爪不合）
            </text>
            <text x="16" y="131" fill="#e2e8f0" fontSize="12">
              • 裝備故障（鞋底開花、通訊中斷）
            </text>
            <text x="16" y="158" fill="#94a3b8" fontSize="11">
              • 導航依賴單一手機且無離線地圖
            </text>
          </g>

          {/* Quadrant 4: 管理風險 (Bottom-Right) */}
          <g transform="translate(475, 235)">
            <rect
              width="230"
              height="185"
              rx="10"
              fill="#0f172a"
              stroke="#ec4899"
              strokeWidth="2"
            />
            <rect width="230" height="34" rx="10" fill="#1e293b" />
            <rect y="22" width="230" height="12" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#ec4899" />
            <text x="32" y="22" fill="#f472b6" fontSize="13" fontWeight="bold">
              四．管理風險 (Management)
            </text>
            <text x="16" y="65" fill="#e2e8f0" fontSize="12">
              • 行程安排失當（時程緊迫無餘裕）
            </text>
            <text x="16" y="98" fill="#e2e8f0" fontSize="12">
              • 時間控制失敗（未設停損折返點）
            </text>
            <text x="16" y="131" fill="#e2e8f0" fontSize="12">
              • 團隊溝通脫節（領隊與壓後失聯）
            </text>
            <text x="16" y="158" fill="#94a3b8" fontSize="11">
              • 留守機制缺位，後方無法啟動救援
            </text>
          </g>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        登山風險是環境、人員、裝備與管理四個面向相互交織的結果，任何單一環節失控都可能引發連鎖效應。
      </p>
    </div>
  );
};

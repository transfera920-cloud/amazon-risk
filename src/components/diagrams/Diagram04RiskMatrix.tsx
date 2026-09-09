import React from 'react';

/**
 * SVG 04｜風險矩陣 (4x4)
 * 核心公式：風險 = 發生可能性 × 後果嚴重程度
 * 橫軸：後果嚴重程度 (輕微、中等、嚴重、重大)
 * 縱軸：發生可能性 (常見、可能、偶爾、罕見)
 */
export const Diagram04RiskMatrix: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 04｜標準登山風險評估矩陣 (4×4)
          </span>
        </div>
        <span className="text-xs text-slate-400">風險 = 發生可能性 × 後果嚴重程度</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 415"
          className="w-full h-auto max-w-full"
          aria-label="4x4登山風險矩陣圖：發生可能性乘以後果嚴重程度"
          role="img"
        >
          {/* Y Axis Header */}
          <g transform="translate(18, 205) rotate(-90)">
            <text fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle" letterSpacing="2">
              ▲ 發生可能性 (LIKELIHOOD)
            </text>
          </g>

          {/* X Axis Header */}
          <text x="410" y="22" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle" letterSpacing="2">
            後果嚴重程度 (SEVERITY) ▶
          </text>

          {/* Column Headers (X Axis) */}
          <g transform="translate(118, 32)">
            {/* Column 1: 輕微 */}
            <rect x="0" y="0" width="140" height="28" rx="5" fill="#1e293b" stroke="#334155" />
            <text x="70" y="19" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">
              輕微 (Minor)
            </text>

            {/* Column 2: 中等 */}
            <rect x="148" y="0" width="140" height="28" rx="5" fill="#1e293b" stroke="#334155" />
            <text x="218" y="19" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">
              中等 (Moderate)
            </text>

            {/* Column 3: 嚴重 */}
            <rect x="296" y="0" width="140" height="28" rx="5" fill="#1e293b" stroke="#334155" />
            <text x="366" y="19" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">
              嚴重 (Serious)
            </text>

            {/* Column 4: 重大 */}
            <rect x="444" y="0" width="140" height="28" rx="5" fill="#1e293b" stroke="#334155" />
            <text x="514" y="19" fill="#fca5a5" fontSize="13" fontWeight="bold" textAnchor="middle">
              重大 (Critical)
            </text>
          </g>

          {/* ROW 1: 常見 (Y = 68) */}
          <g transform="translate(32, 68)">
            <rect x="0" y="0" width="80" height="66" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="40" y="38" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">
              常見
            </text>

            {/* Cell 1,1: 低 */}
            <g transform="translate(86, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">常規防範措施</text>
            </g>

            {/* Cell 1,2: 中 */}
            <g transform="translate(234, 0)">
              <rect width="140" height="66" rx="6" fill="#78350f" stroke="#d97706" strokeWidth="1.5" />
              <text x="70" y="34" fill="#fde68a" fontSize="14" fontWeight="bold" textAnchor="middle">
                中度風險
              </text>
              <text x="70" y="52" fill="#fcd34d" fontSize="11" textAnchor="middle">監控與減緩措施</text>
            </g>

            {/* Cell 1,3: 高 */}
            <g transform="translate(382, 0)">
              <rect width="140" height="66" rx="6" fill="#7c2d12" stroke="#ea580c" strokeWidth="1.5" />
              <text x="70" y="34" fill="#fed7aa" fontSize="14" fontWeight="bold" textAnchor="middle">
                高度風險
              </text>
              <text x="70" y="52" fill="#fdba74" fontSize="11" textAnchor="middle">制定嚴格替代案</text>
            </g>

            {/* Cell 1,4: 重大 */}
            <g transform="translate(530, 0)">
              <rect width="140" height="66" rx="6" fill="#881337" stroke="#e11d48" strokeWidth="2" />
              <text x="70" y="34" fill="#fecdd3" fontSize="14" fontWeight="black" textAnchor="middle">
                重大風險
              </text>
              <text x="70" y="52" fill="#fda4af" fontSize="11" textAnchor="middle">不可承受 / 終止</text>
            </g>
          </g>

          {/* ROW 2: 可能 (Y = 142) */}
          <g transform="translate(32, 142)">
            <rect x="0" y="0" width="80" height="66" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="40" y="38" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">
              可能
            </text>

            {/* Cell 2,1: 低 */}
            <g transform="translate(86, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">常規防範管理</text>
            </g>

            {/* Cell 2,2: 中 */}
            <g transform="translate(234, 0)">
              <rect width="140" height="66" rx="6" fill="#78350f" stroke="#d97706" strokeWidth="1.5" />
              <text x="70" y="34" fill="#fde68a" fontSize="14" fontWeight="bold" textAnchor="middle">
                中度風險
              </text>
              <text x="70" y="52" fill="#fcd34d" fontSize="11" textAnchor="middle">加強動態管控</text>
            </g>

            {/* Cell 2,3: 高 */}
            <g transform="translate(382, 0)">
              <rect width="140" height="66" rx="6" fill="#7c2d12" stroke="#ea580c" strokeWidth="1.5" />
              <text x="70" y="34" fill="#fed7aa" fontSize="14" fontWeight="bold" textAnchor="middle">
                高度風險
              </text>
              <text x="70" y="52" fill="#fdba74" fontSize="11" textAnchor="middle">嚴格防護計畫</text>
            </g>

            {/* Cell 2,4: 高 */}
            <g transform="translate(530, 0)">
              <rect width="140" height="66" rx="6" fill="#7c2d12" stroke="#ea580c" strokeWidth="1.5" />
              <text x="70" y="34" fill="#fed7aa" fontSize="14" fontWeight="bold" textAnchor="middle">
                高度風險
              </text>
              <text x="70" y="52" fill="#fdba74" fontSize="11" textAnchor="middle">啟動防護與備案</text>
            </g>
          </g>

          {/* ROW 3: 偶爾 (Y = 216) */}
          <g transform="translate(32, 216)">
            <rect x="0" y="0" width="80" height="66" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="40" y="38" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">
              偶爾
            </text>

            {/* Cell 3,1: 低 */}
            <g transform="translate(86, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">接受並保持警覺</text>
            </g>

            {/* Cell 3,2: 低 */}
            <g transform="translate(234, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">接受並保持警覺</text>
            </g>

            {/* Cell 3,3: 中 */}
            <g transform="translate(382, 0)">
              <rect width="140" height="66" rx="6" fill="#78350f" stroke="#d97706" strokeWidth="1.5" />
              <text x="70" y="34" fill="#fde68a" fontSize="14" fontWeight="bold" textAnchor="middle">
                中度風險
              </text>
              <text x="70" y="52" fill="#fcd34d" fontSize="11" textAnchor="middle">現場決策關注</text>
            </g>

            {/* Cell 3,4: 中 */}
            <g transform="translate(530, 0)">
              <rect width="140" height="66" rx="6" fill="#78350f" stroke="#d97706" strokeWidth="1.5" />
              <text x="70" y="34" fill="#fde68a" fontSize="14" fontWeight="bold" textAnchor="middle">
                中度風險
              </text>
              <text x="70" y="52" fill="#fcd34d" fontSize="11" textAnchor="middle">確保應變裝備</text>
            </g>
          </g>

          {/* ROW 4: 罕見 (Y = 290) */}
          <g transform="translate(32, 290)">
            <rect x="0" y="0" width="80" height="66" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="40" y="38" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">
              罕見
            </text>

            {/* Cell 4,1: 低 */}
            <g transform="translate(86, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">常態承受</text>
            </g>

            {/* Cell 4,2: 低 */}
            <g transform="translate(234, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">常態承受</text>
            </g>

            {/* Cell 4,3: 低 */}
            <g transform="translate(382, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">常態承受</text>
            </g>

            {/* Cell 4,4: 低 */}
            <g transform="translate(530, 0)">
              <rect width="140" height="66" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
              <text x="70" y="34" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">
                低風險
              </text>
              <text x="70" y="52" fill="#6ee7b7" fontSize="11" textAnchor="middle">基礎防備</text>
            </g>
          </g>

          {/* Bottom Legend */}
          <g transform="translate(32, 375)">
            {/* Low */}
            <rect x="0" y="0" width="14" height="14" rx="3" fill="#059669" />
            <text x="20" y="12" fill="#a7f3d0" fontSize="11">低風險 (常規管理)</text>

            {/* Medium */}
            <rect x="155" y="0" width="14" height="14" rx="3" fill="#d97706" />
            <text x="175" y="12" fill="#fde68a" fontSize="11">中度風險 (監控防護)</text>

            {/* High */}
            <rect x="325" y="0" width="14" height="14" rx="3" fill="#ea580c" />
            <text x="345" y="12" fill="#fed7aa" fontSize="11">高度風險 (嚴格替代案)</text>

            {/* Critical */}
            <rect x="500" y="0" width="14" height="14" rx="3" fill="#e11d48" />
            <text x="520" y="12" fill="#fecdd3" fontSize="11">重大風險 (不可承受/終止)</text>
          </g>
        </svg>
      </div>
      <div className="mt-3 p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>💡 <strong>核心觀念：</strong>同一個危險會因季節、天氣、隊伍能力而落在不同等級。</span>
        <span className="text-amber-400 font-medium">矩陣不是答案，而是全隊與領隊的共同決策語言。</span>
      </div>
    </div>
  );
};

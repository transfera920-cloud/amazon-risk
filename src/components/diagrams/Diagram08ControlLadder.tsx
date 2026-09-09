import React from 'react';

/**
 * SVG 08｜風險控制方法
 * 四大策略：
 * 01 避免 Avoid：取消或不執行高風險計畫。
 * 02 降低 Reduce：調整路線、時間、裝備以降低暴露。
 * 03 轉移 Transfer：通訊、保險、後送、救援系統。
 * 04 接受 Accept：了解剩餘風險並做好準備。
 * 注意：不要暗示四種方法永遠存在固定優先順序，它們是互補的風險控制策略矩陣。
 */
export const Diagram08ControlLadder: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            SVG 08｜四大風險控制策略矩陣
          </span>
        </div>
        <span className="text-xs text-slate-400">避免 · 降低 · 轉移 · 接受</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 298"
          className="w-full h-auto max-w-full"
          aria-label="四大登山風險控制策略：避免、降低、轉移、接受"
          role="img"
        >
          {/* Strategy 1: 避免 Avoid */}
          <g transform="translate(15, 14)">
            <rect width="162" height="230" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
            <rect width="162" height="34" rx="8" fill="#1e293b" />
            <rect y="24" width="162" height="10" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#ef4444" />
            <text x="30" y="21" fill="#f87171" fontSize="13" fontWeight="bold">
              01 避免 Avoid
            </text>

            <text x="14" y="56" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【策略核心】
            </text>
            <text x="14" y="76" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              取消或中止
            </text>
            <text x="14" y="94" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              超標危險活動
            </text>

            <line x1="14" y1="108" x2="148" y2="108" stroke="#334155" strokeWidth="1" />

            <text x="14" y="126" fill="#94a3b8" fontSize="10" fontWeight="bold">
              【高山實踐】
            </text>
            <text x="14" y="146" fill="#cbd5e1" fontSize="10">• 豪大雨特報果斷取消</text>
            <text x="14" y="168" fill="#cbd5e1" fontSize="10">• 崩壁大落石直接折返</text>
            <text x="14" y="190" fill="#cbd5e1" fontSize="10">• 暴漲深溪絕不強渡</text>
            <text x="14" y="212" fill="#cbd5e1" fontSize="10">• 停損守則優先生命</text>
          </g>

          {/* Strategy 2: 降低 Reduce */}
          <g transform="translate(189, 14)">
            <rect width="162" height="230" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <rect width="162" height="34" rx="8" fill="#1e293b" />
            <rect y="24" width="162" height="10" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#f59e0b" />
            <text x="30" y="21" fill="#fbbf24" fontSize="13" fontWeight="bold">
              02 降低 Reduce
            </text>

            <text x="14" y="56" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【策略核心】
            </text>
            <text x="14" y="76" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              技術、裝備、時程
            </text>
            <text x="14" y="94" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              壓低危險暴露率
            </text>

            <line x1="14" y1="108" x2="148" y2="108" stroke="#334155" strokeWidth="1" />

            <text x="14" y="126" fill="#94a3b8" fontSize="10" fontWeight="bold">
              【高山實踐】
            </text>
            <text x="14" y="146" fill="#cbd5e1" fontSize="10">• 提早起登避開雷雨</text>
            <text x="14" y="168" fill="#cbd5e1" fontSize="10">• 配戴岩盔防落石</text>
            <text x="14" y="190" fill="#cbd5e1" fontSize="10">• 踏點濕滑掛確保繩</text>
            <text x="14" y="212" fill="#cbd5e1" fontSize="10">• 循腰繞避開窄瘦稜</text>
          </g>

          {/* Strategy 3: 轉移 Transfer */}
          <g transform="translate(363, 14)">
            <rect width="162" height="230" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <rect width="162" height="34" rx="8" fill="#1e293b" />
            <rect y="24" width="162" height="10" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#38bdf8" />
            <text x="30" y="21" fill="#7dd3fc" fontSize="13" fontWeight="bold">
              03 轉移 Transfer
            </text>

            <text x="14" y="56" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【策略核心】
            </text>
            <text x="14" y="76" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              藉由制度與科技
            </text>
            <text x="14" y="94" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              分攤救護與損失
            </text>

            <line x1="14" y1="108" x2="148" y2="108" stroke="#334155" strokeWidth="1" />

            <text x="14" y="126" fill="#94a3b8" fontSize="10" fontWeight="bold">
              【高山實踐】
            </text>
            <text x="14" y="146" fill="#cbd5e1" fontSize="10">• 投保登山綜合險</text>
            <text x="14" y="168" fill="#cbd5e1" fontSize="10">• 攜帶inReach衛星通訊</text>
            <text x="14" y="190" fill="#cbd5e1" fontSize="10">• 定位即時發送地面留守</text>
            <text x="14" y="212" fill="#cbd5e1" fontSize="10">• 專業嚮導帶隊指導</text>
          </g>

          {/* Strategy 4: 接受 Accept */}
          <g transform="translate(537, 14)">
            <rect width="162" height="230" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <rect width="162" height="34" rx="8" fill="#1e293b" />
            <rect y="24" width="162" height="10" fill="#1e293b" />
            <circle cx="18" cy="17" r="5" fill="#10b981" />
            <text x="30" y="21" fill="#34d399" fontSize="13" fontWeight="bold">
              04 接受 Accept
            </text>

            <text x="14" y="56" fill="#fbbf24" fontSize="11" fontWeight="bold">
              【策略核心】
            </text>
            <text x="14" y="76" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              洞悉不可消除殘餘
            </text>
            <text x="14" y="94" fill="#f1f5f9" fontSize="12" fontWeight="bold">
              建立充分應變準備
            </text>

            <line x1="14" y1="108" x2="148" y2="108" stroke="#334155" strokeWidth="1" />

            <text x="14" y="126" fill="#94a3b8" fontSize="10" fontWeight="bold">
              【高山實踐】
            </text>
            <text x="14" y="146" fill="#cbd5e1" fontSize="10">• 接受氣候生理耗損殘餘</text>
            <text x="14" y="168" fill="#cbd5e1" fontSize="10">• 備妥露宿袋與緊急糧</text>
            <text x="14" y="190" fill="#cbd5e1" fontSize="10">• 保留冷靜判斷體能餘裕</text>
            <text x="14" y="212" fill="#cbd5e1" fontSize="10">• 心理預演各種緊急處置</text>
          </g>

          {/* Bottom connecting bar */}
          <rect x="15" y="254" width="684" height="32" rx="6" fill="#1e293b" stroke="#334155" />
          <text x="357" y="274" fill="#cbd5e1" fontSize="11" textAnchor="middle">
            四種控制並無絕對優劣階層，而是在不同情境中靈活搭配，將殘餘風險壓在安全邊界內
          </text>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        登山從不追求盲目歸零，而是透過「避免、降低、轉移、接受」將殘餘風險壓制在隊伍可承受的安全餘裕之內。
      </p>
    </div>
  );
};

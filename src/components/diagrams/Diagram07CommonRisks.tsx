import React from 'react';

/**
 * SVG 07｜常見登山風險分析
 * 建立四個風險節點：失溫、迷途、疲勞、高山症
 * 每個節點連接：原因 → 預防
 * 目的：讓使用者快速橫向比較四種最具代表性的高山風險本質與預防手段。
 */
export const Diagram07CommonRisks: React.FC = () => {
  return (
    <div className="w-full my-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="text-xs font-semibold tracking-wider text-amber-400">
            四大核心高山風險成因與預防對照
          </span>
        </div>
        <span className="text-xs text-slate-400">失溫 · 迷途 · 疲勞 · 高山症</span>
      </div>

      <div className="w-full flex justify-center">
        <svg
          viewBox="0 0 720 405"
          className="w-full h-auto max-w-full"
          aria-label="常見登山風險分析：失溫、迷途、疲勞、高山症成因與預防圖解"
          role="img"
        >
          <defs>
            <marker
              id="riskArrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
          </defs>

          {/* Row 1: 失溫 (Hypothermia) */}
          <g transform="translate(16, 12)">
            {/* Risk Title Card */}
            <rect width="140" height="84" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="70" y="34" fill="#7dd3fc" fontSize="15" fontWeight="bold" textAnchor="middle">
              失溫
            </text>
            <text x="70" y="52" fill="#38bdf8" fontSize="10" textAnchor="middle">Hypothermia</text>
            <text x="70" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">高山最致命威脅</text>

            <line x1="144" y1="42" x2="168" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Causes */}
            <rect x="172" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
            <text x="186" y="22" fill="#f87171" fontSize="11" fontWeight="bold">【成因】低溫、強風、雨水潮濕</text>
            <text x="186" y="44" fill="#cbd5e1" fontSize="11">• 汗濕或淋雨導致熱傳導加速</text>
            <text x="186" y="66" fill="#cbd5e1" fontSize="11">• 風寒效應劇烈帶走體表核心熱能</text>

            <line x1="426" y1="42" x2="450" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Prevention */}
            <rect x="454" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="468" y="22" fill="#34d399" fontSize="11" fontWeight="bold">【預防】三層穿搭與即時防雨防風</text>
            <text x="468" y="44" fill="#cbd5e1" fontSize="11">• 嚴格執行分層（排汗/保暖/防水）</text>
            <text x="468" y="66" fill="#cbd5e1" fontSize="11">• 備份防水袋衣物、定時補充熱飲</text>
          </g>

          {/* Row 2: 迷途 (Route Loss) */}
          <g transform="translate(16, 108)">
            <rect width="140" height="84" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="70" y="34" fill="#fbbf24" fontSize="15" fontWeight="bold" textAnchor="middle">
              迷途
            </text>
            <text x="70" y="52" fill="#f59e0b" fontSize="10" textAnchor="middle">Route Loss</text>
            <text x="70" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">最常引發搜救</text>

            <line x1="144" y1="42" x2="168" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Causes */}
            <rect x="172" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
            <text x="186" y="22" fill="#f87171" fontSize="11" fontWeight="bold">【成因】濃霧起霧、脫離主步道</text>
            <text x="186" y="44" fill="#cbd5e1" fontSize="11">• 誤入獸徑、舊倒木路或乾溪溝</text>
            <text x="186" y="66" fill="#cbd5e1" fontSize="11">• 摸黑前行且未備足照明與地圖</text>

            <line x1="426" y1="42" x2="450" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Prevention */}
            <rect x="454" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="468" y="22" fill="#34d399" fontSize="11" fontWeight="bold">【預防】雙離線導航與停損原則</text>
            <text x="468" y="44" fill="#cbd5e1" fontSize="11">• 手機雙App離線地圖 + 備用電源</text>
            <text x="468" y="66" fill="#cbd5e1" fontSize="11">• 發現偏離立即原地停下，原路回返</text>
          </g>

          {/* Row 3: 疲勞 (Exhaustion) */}
          <g transform="translate(16, 204)">
            <rect width="140" height="84" rx="8" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
            <text x="70" y="34" fill="#f472b6" fontSize="15" fontWeight="bold" textAnchor="middle">
              體能衰竭
            </text>
            <text x="70" y="52" fill="#ec4899" fontSize="10" textAnchor="middle">Exhaustion</text>
            <text x="70" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">引發跌倒墜落真因</text>

            <line x1="144" y1="42" x2="168" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Causes */}
            <rect x="172" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
            <text x="186" y="22" fill="#f87171" fontSize="11" fontWeight="bold">【成因】行程排程過滿、配速過急</text>
            <text x="186" y="44" fill="#cbd5e1" fontSize="11">• 睡眠不足、負重超過體能負擔</text>
            <text x="186" y="66" fill="#cbd5e1" fontSize="11">• 補水補糖不及時致低血糖崩潰</text>

            <line x1="426" y1="42" x2="450" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Prevention */}
            <rect x="454" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="468" y="22" fill="#34d399" fontSize="11" fontWeight="bold">【預防】節奏管理與定時補給</text>
            <text x="468" y="44" fill="#cbd5e1" fontSize="11">• 行前依隊員最慢者安排合理時程</text>
            <text x="468" y="66" fill="#cbd5e1" fontSize="11">• 每50分鐘定時休息補給水與電解質</text>
          </g>

          {/* Row 4: 高山症 (AMS) */}
          <g transform="translate(16, 300)">
            <rect width="140" height="84" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
            <text x="70" y="34" fill="#c084fc" fontSize="15" fontWeight="bold" textAnchor="middle">
              高山症
            </text>
            <text x="70" y="52" fill="#a855f7" fontSize="10" textAnchor="middle">Altitude Illness</text>
            <text x="70" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">缺氧誘發急性病症</text>

            <line x1="144" y1="42" x2="168" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Causes */}
            <rect x="172" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
            <text x="186" y="22" fill="#f87171" fontSize="11" fontWeight="bold">【成因】上升海拔過快、未適應</text>
            <text x="186" y="44" fill="#cbd5e1" fontSize="11">• 高海拔氧分壓下降，身體未適應</text>
            <text x="186" y="66" fill="#cbd5e1" fontSize="11">• 隱瞞輕微頭痛噁心，逞強未通報</text>

            <line x1="426" y1="42" x2="450" y2="42" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#riskArrow)" />

            {/* Prevention */}
            <rect x="454" y="0" width="250" height="84" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="468" y="22" fill="#34d399" fontSize="11" fontWeight="bold">【預防】上升節奏原則：下降最有效</text>
            <text x="468" y="44" fill="#cbd5e1" fontSize="11">• 遵循爬高睡低原則、評估預防用藥</text>
            <text x="468" y="66" fill="#cbd5e1" fontSize="11">• 出現中重度症狀立即由隊友陪同下撤</text>
          </g>
        </svg>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        四種常見高山風險皆具備可辨識的前置原因；只要落實對應預防，絕大多數山難皆可在萌芽期被消解。
      </p>
    </div>
  );
};

import React from 'react';
import { Diagram02FourSources } from './diagrams/Diagram02FourSources';
import { Diagram03Identification } from './diagrams/Diagram03Identification';
import { Diagram04RiskMatrix } from './diagrams/Diagram04RiskMatrix';
import { Diagram05FMEA } from './diagrams/Diagram05FMEA';
import { Diagram06SwissCheese } from './diagrams/Diagram06SwissCheese';
import { Diagram07CommonRisks } from './diagrams/Diagram07CommonRisks';
import { Diagram08ControlLadder } from './diagrams/Diagram08ControlLadder';
import { Diagram09LeaderLoop } from './diagrams/Diagram09LeaderLoop';
import { Diagram10CaseAnalysis } from './diagrams/Diagram10CaseAnalysis';
import { Diagram11ClosedLoopSystem } from './diagrams/Diagram11ClosedLoopSystem';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Layers,
  Activity,
  HeartHandshake,
  TrendingDown,
  Navigation as NavIcon,
  HelpCircle,
  Award,
} from 'lucide-react';

export const ContentSections: React.FC = () => {
  return (
    <article className="space-y-16 lg:space-y-24">
      {/* =========================================================================
          SECTION 01: 什麼是登山風險管理
      ========================================================================= */}
      <section id="s1" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            01 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 01</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          什麼是登山風險管理
        </h2>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-5 text-base sm:text-lg leading-relaxed">
          <p className="font-semibold text-slate-200 text-lg sm:text-xl">
            登山一定存在風險。
          </p>

          <p>
            風險不會因為經驗豐富而消失，只會因為系統性的管理而變得可承受。
          </p>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 my-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              風險來源涵蓋面向
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-base list-disc list-inside">
              <li>自然環境</li>
              <li>人員因素</li>
              <li>裝備條件</li>
              <li>行程規劃</li>
              <li>現場決策品質</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border-l-4 border-amber-500 p-5 rounded-r-xl">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">
              核心觀念
            </h3>
            <p className="text-slate-100 font-medium">
              風險管理的目的不是消除所有危險，而是：
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3 font-bold text-amber-300 text-lg">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>降低事故發生機率</span>
              </div>
              <p className="text-slate-400 text-sm ml-8">同時：</p>
              <div className="flex items-center gap-3 font-bold text-amber-300 text-lg">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>降低事故造成的傷害。</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: 登山風險的四大來源
      ========================================================================= */}
      <section id="s2" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            02 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 02</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          登山風險的四大來源
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* 一．環境風險 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-sky-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              一．環境風險
            </h3>
            <ul className="space-y-2 text-slate-300 text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                天氣變化
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                地形難度
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                海拔高度
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                溫度落差
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                水域與溪流
              </li>
            </ul>
          </div>

          {/* 二．人員風險 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              二．人員風險
            </h3>
            <ul className="space-y-2 text-slate-300 text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                體能不足
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                經驗不足
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                健康狀況
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                心理壓力
              </li>
            </ul>
          </div>

          {/* 三．裝備風險 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              三．裝備風險
            </h3>
            <ul className="space-y-2 text-slate-300 text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                裝備不足
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                使用錯誤
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                裝備故障
              </li>
            </ul>
          </div>

          {/* 四．管理風險 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              四．管理風險
            </h3>
            <ul className="space-y-2 text-slate-300 text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                行程安排不合理
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                時間控制失敗
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                溝通不足
              </li>
            </ul>
          </div>
        </div>

        {/* SVG 02 */}
        <Diagram02FourSources />
      </section>

      {/* =========================================================================
          SECTION 03: 風險辨識流程
      ========================================================================= */}
      <section id="s3" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            03 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 03</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          風險辨識流程
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* 行前 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-lg font-bold text-sky-400 mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs">階段一</span>
              行前
            </h3>
            <ol className="space-y-3 text-slate-300 text-base">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-slate-100">分析路線</strong>
                  <p className="text-xs text-slate-400 mt-0.5">地圖等高線、水源、露營點與緊急撤退路線。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-slate-100">找出可能危害</strong>
                  <p className="text-xs text-slate-400 mt-0.5">易崩塌斷崖、暴漲過溪點、強風風口與低溫區。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-slate-100">評估嚴重程度</strong>
                  <p className="text-xs text-slate-400 mt-0.5">若危害成真可能造成的隊伍衝擊與傷亡等級。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <strong className="text-slate-100">制定預防措施</strong>
                  <p className="text-xs text-slate-400 mt-0.5">裝備清單備份、提早出發時間與設定折返點。</p>
                </div>
              </li>
            </ol>
          </div>

          {/* 行程中 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs">階段二</span>
              行程中
            </h3>
            <ol className="space-y-3 text-slate-300 text-base">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-slate-100">持續觀察</strong>
                  <p className="text-xs text-slate-400 mt-0.5">實時觀察天候雲相風速、隊員體能與行進節奏。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-slate-100">重新評估</strong>
                  <p className="text-xs text-slate-400 mt-0.5">依據現場狀況與時間差距，重新計算殘餘風險。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-slate-100">調整計畫</strong>
                  <p className="text-xs text-slate-400 mt-0.5">及時調整配速、縮減行程、迫降或啟動撤退。</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* 關鍵 Callout */}
        <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mb-6">
          <div className="flex items-center gap-2 font-bold text-amber-400 text-sm mb-1">
            <Activity className="w-4 h-4" />
            關鍵
          </div>
          <p className="text-slate-200 text-base font-medium">
            風險不是固定的，會隨環境、隊伍狀態與時間變化。
          </p>
        </div>

        {/* SVG 03 */}
        <Diagram03Identification />
      </section>

      {/* =========================================================================
          SECTION 04: 風險評估方法（風險矩陣）
      ========================================================================= */}
      <section id="s4" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            04 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 04</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          風險評估方法（風險矩陣）
        </h2>

        {/* Formula Display */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 mb-6 text-center">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            核心公式
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-100">
            風險 = 發生可能性 × 後果嚴重程度
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
            <h3 className="font-bold text-sky-400 mb-2">橫軸：後果嚴重程度</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300">
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">輕微</li>
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">中等</li>
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">嚴重</li>
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">重大</li>
            </ul>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4">
            <h3 className="font-bold text-amber-400 mb-2">縱軸：發生可能性</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300">
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">常見</li>
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">可能</li>
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">偶爾</li>
              <li className="bg-slate-800/80 px-2.5 py-1 rounded text-center">罕見</li>
            </ul>
          </div>
        </div>

        {/* Native HTML Table for Full SEO & Accessibility */}
        <div className="overflow-x-auto mb-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4">
          <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center justify-between">
            <span>標準 4×4 登山風險評估矩陣表</span>
            <span>單位：風險等級 (低/中/高/重大)</span>
          </div>
          <table className="w-full text-center border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/60">
                <th className="p-3 text-slate-300 font-bold border-r border-slate-700">
                  發生可能性＼後果
                </th>
                <th className="p-3 text-slate-200 font-bold border-r border-slate-700">輕微</th>
                <th className="p-3 text-slate-200 font-bold border-r border-slate-700">中等</th>
                <th className="p-3 text-slate-200 font-bold border-r border-slate-700">嚴重</th>
                <th className="p-3 text-slate-200 font-bold">重大</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30">
                <th className="p-3 font-bold text-slate-300 bg-slate-800/40 border-r border-slate-700">
                  常見
                </th>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold border-r border-slate-800">
                  低
                </td>
                <td className="p-3 bg-amber-950/40 text-amber-300 font-bold border-r border-slate-800">
                  中
                </td>
                <td className="p-3 bg-orange-950/40 text-orange-300 font-bold border-r border-slate-800">
                  高
                </td>
                <td className="p-3 bg-rose-950/60 text-rose-300 font-bold">重大</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30">
                <th className="p-3 font-bold text-slate-300 bg-slate-800/40 border-r border-slate-700">
                  可能
                </th>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold border-r border-slate-800">
                  低
                </td>
                <td className="p-3 bg-amber-950/40 text-amber-300 font-bold border-r border-slate-800">
                  中
                </td>
                <td className="p-3 bg-orange-950/40 text-orange-300 font-bold border-r border-slate-800">
                  高
                </td>
                <td className="p-3 bg-orange-950/40 text-orange-300 font-bold">高</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/30">
                <th className="p-3 font-bold text-slate-300 bg-slate-800/40 border-r border-slate-700">
                  偶爾
                </th>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold border-r border-slate-800">
                  低
                </td>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold border-r border-slate-800">
                  低
                </td>
                <td className="p-3 bg-amber-950/40 text-amber-300 font-bold border-r border-slate-800">
                  中
                </td>
                <td className="p-3 bg-amber-950/40 text-amber-300 font-bold">中</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <th className="p-3 font-bold text-slate-300 bg-slate-800/40 border-r border-slate-700">
                  罕見
                </th>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold border-r border-slate-800">
                  低
                </td>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold border-r border-slate-800">
                  低
                </td>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold border-r border-slate-800">
                  低
                </td>
                <td className="p-3 bg-emerald-950/40 text-emerald-300 font-bold">低</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 風險等級說明 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3 bg-emerald-950/30 border border-emerald-800/50 rounded-lg text-center">
            <span className="text-emerald-400 font-bold text-sm block">低風險</span>
            <span className="text-[11px] text-slate-400">常規防範與警覺</span>
          </div>
          <div className="p-3 bg-amber-950/30 border border-amber-800/50 rounded-lg text-center">
            <span className="text-amber-400 font-bold text-sm block">中度風險</span>
            <span className="text-[11px] text-slate-400">加強監控與防護</span>
          </div>
          <div className="p-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-center">
            <span className="text-orange-400 font-bold text-sm block">高度風險</span>
            <span className="text-[11px] text-slate-400">需備用計畫與介入</span>
          </div>
          <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-lg text-center">
            <span className="text-rose-400 font-bold text-sm block">重大風險</span>
            <span className="text-[11px] text-slate-400">不可承受 / 終止行程</span>
          </div>
        </div>

        {/* 核心觀念 */}
        <div className="p-5 bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border-l-4 border-amber-500 rounded-r-xl mb-6">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">
            核心觀念
          </h3>
          <p className="text-slate-200 text-base leading-relaxed mb-3">
            同一個危險，會因為<strong>季節</strong>、<strong>天氣</strong>、
            <strong>隊伍能力</strong>而落在不同的風險等級。
          </p>
          <p className="text-lg font-bold text-amber-300">
            矩陣不是答案，而是共同語言。
          </p>
        </div>

        {/* SVG 04 */}
        <Diagram04RiskMatrix />
      </section>

      {/* =========================================================================
          SECTION 05: FMEA 風險分析概念
      ========================================================================= */}
      <section id="s5" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            05 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 05</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          FMEA 風險分析概念
        </h2>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed mb-6">
          <p>
            FMEA 是工業界常見的失效模式分析概念。
          </p>
          <p>
            將這個概念帶入登山：把<strong>「什麼可能出錯」</strong>拆解為不同面向，再逐一對應預防策略。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* 可能失效模式 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-rose-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              可能失效模式
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• 迷路</li>
              <li>• 失溫</li>
              <li>• 落石</li>
              <li>• 受傷</li>
            </ul>
          </div>

          {/* 原因分析 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-orange-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              原因分析
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• 天氣變化</li>
              <li>• 判斷錯誤</li>
              <li>• 裝備不足</li>
            </ul>
          </div>

          {/* 造成後果 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-yellow-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              造成後果
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• 行程延誤</li>
              <li>• 無法撤退</li>
              <li>• 需要救援</li>
            </ul>
          </div>

          {/* 預防措施 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              預防措施
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• 提前規劃</li>
              <li>• 裝備準備</li>
              <li>• 準備替代方案</li>
            </ul>
          </div>
        </div>

        {/* SVG 05 */}
        <Diagram05FMEA />
      </section>

      {/* =========================================================================
          SECTION 06: Swiss Cheese Model 事故分析
      ========================================================================= */}
      <section id="s6" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            06 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 06</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          Swiss Cheese Model 事故分析
        </h2>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed mb-6">
          <p>
            事故通常不是單一原因造成，而是多個小錯誤累積、恰好對齊。
          </p>
          <p>
            每一層防護都有漏洞。安全管理的目的：<strong>增加防護層。</strong>
          </p>
        </div>

        {/* 建立五層防護 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 mb-6">
          <h3 className="text-base sm:text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            建立五層防護體系
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center">
              <span className="text-xs font-mono text-amber-400 block mb-1">第 1 層</span>
              <strong className="text-slate-100 text-base block">行前評估</strong>
              <p className="text-[11px] text-slate-400 mt-1">體能/行程/撤退規劃</p>
            </div>
            <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center">
              <span className="text-xs font-mono text-amber-400 block mb-1">第 2 層</span>
              <strong className="text-slate-100 text-base block">裝備確認</strong>
              <p className="text-[11px] text-slate-400 mt-1">保暖/防水/導航工具</p>
            </div>
            <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center">
              <span className="text-xs font-mono text-amber-400 block mb-1">第 3 層</span>
              <strong className="text-slate-100 text-base block">天氣監控</strong>
              <p className="text-[11px] text-slate-400 mt-1">氣壓/鋒面/降雨機率</p>
            </div>
            <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center">
              <span className="text-xs font-mono text-amber-400 block mb-1">第 4 層</span>
              <strong className="text-slate-100 text-base block">現場決策</strong>
              <p className="text-[11px] text-slate-400 mt-1">配速/折返點/隊況掌握</p>
            </div>
            <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center">
              <span className="text-xs font-mono text-amber-400 block mb-1">第 5 層</span>
              <strong className="text-slate-100 text-base block">緊急應變</strong>
              <p className="text-[11px] text-slate-400 mt-1">迫降/急救/對外求援</p>
            </div>
          </div>
        </div>

        {/* 核心段落 */}
        <div className="p-5 bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border-l-4 border-amber-500 rounded-r-xl mb-6">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">
            核心
          </h3>
          <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed mb-2">
            每一層都可能有漏洞；當所有漏洞恰好對齊，事故才會穿透。
          </p>
          <p className="text-slate-300 text-base font-semibold">
            管理的目的不是消除漏洞，而是：<span className="text-amber-300">增加防護層。</span>
          </p>
        </div>

        {/* SVG 06 */}
        <Diagram06SwissCheese />
      </section>

      {/* =========================================================================
          SECTION 07: 常見登山風險分析
      ========================================================================= */}
      <section id="s7" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            07 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 07</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          常見登山風險分析
        </h2>

        {/* 四個風險卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 1. 失溫 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-sky-400">失溫</h3>
              <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 text-xs font-semibold">
                高山頭號致命威脅
              </span>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="font-bold text-rose-400 block mb-1">【原因】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>低溫</li>
                  <li>強風</li>
                  <li>衣物潮濕</li>
                  <li>停止活動</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">【預防】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>保暖分層</li>
                  <li>防雨外層</li>
                  <li>控制暴露時間</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. 迷途 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-amber-400">迷途</h3>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold">
                搜救案例最高頻率
              </span>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="font-bold text-rose-400 block mb-1">【原因】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>路線不熟</li>
                  <li>視線降低</li>
                  <li>導航不足</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">【預防】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>紙本地圖</li>
                  <li>GPX 離線</li>
                  <li>事前路線研究</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. 疲勞 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-pink-400">疲勞</h3>
              <span className="px-2.5 py-1 rounded bg-pink-500/20 text-pink-300 text-xs font-semibold">
                判斷失誤引爆點
              </span>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="font-bold text-rose-400 block mb-1">【原因】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>行程過長</li>
                  <li>睡眠不足</li>
                  <li>負重過重</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">【預防】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>合理排程</li>
                  <li>控制節奏</li>
                  <li>適當補給</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. 高山症 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-purple-400">高山症</h3>
              <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-semibold">
                低壓低氧急性適應
              </span>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="font-bold text-rose-400 block mb-1">【原因】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>上升速度過快</li>
                  <li>忽略症狀</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">【預防】</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>漸進適應</li>
                  <li>觀察隊員狀況</li>
                  <li>必要時下撤</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SVG 07 */}
        <Diagram07CommonRisks />
      </section>

      {/* =========================================================================
          SECTION 08: 風險控制方法
      ========================================================================= */}
      <section id="s8" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            08 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 08</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          風險控制方法
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* 01 避免 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <span className="text-xs font-mono text-rose-400 block mb-1">STRATEGY 01</span>
            <h3 className="text-lg font-bold text-slate-100 mb-2">01｜避免 Avoid</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              取消或不執行高風險計畫。
            </p>
          </div>

          {/* 02 降低 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <span className="text-xs font-mono text-amber-400 block mb-1">STRATEGY 02</span>
            <h3 className="text-lg font-bold text-slate-100 mb-2">02｜降低 Reduce</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              調整路線、時間、裝備以降低暴露。
            </p>
          </div>

          {/* 03 轉移 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <span className="text-xs font-mono text-sky-400 block mb-1">STRATEGY 03</span>
            <h3 className="text-lg font-bold text-slate-100 mb-2">03｜轉移 Transfer</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              例如通訊、保險、後送、救援系統。
            </p>
          </div>

          {/* 04 接受 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <span className="text-xs font-mono text-emerald-400 block mb-1">STRATEGY 04</span>
            <h3 className="text-lg font-bold text-slate-100 mb-2">04｜接受 Accept</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              了解剩餘風險並做好準備。
            </p>
          </div>
        </div>

        {/* SVG 08 */}
        <Diagram08ControlLadder />
      </section>

      {/* =========================================================================
          SECTION 09: 領隊風險管理流程
      ========================================================================= */}
      <section id="s9" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            09 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 09</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          領隊風險管理流程
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 出發前 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-sky-400 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              出發前
            </h3>
            <ol className="space-y-2.5 text-slate-300 text-sm list-decimal list-inside">
              <li>路線分析</li>
              <li>天氣評估</li>
              <li>隊員評估</li>
              <li>裝備確認</li>
            </ol>
          </div>

          {/* 行程中 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-amber-400 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              行程中
            </h3>
            <ol className="space-y-2.5 text-slate-300 text-sm list-decimal list-inside">
              <li>觀察狀況</li>
              <li>重新評估</li>
              <li>調整決策</li>
            </ol>
          </div>

          {/* 事故前 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-emerald-400 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              事故前
            </h3>
            <ol className="space-y-2.5 text-slate-300 text-sm list-decimal list-inside">
              <li>提前撤退</li>
              <li>避免危機</li>
            </ol>
          </div>
        </div>

        {/* SVG 09 */}
        <Diagram09LeaderLoop />
      </section>

      {/* =========================================================================
          SECTION 10: 登山事故案例分析
      ========================================================================= */}
      <section id="s10" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            10 / 10
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Section 10</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          登山事故案例分析
        </h2>

        <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-xl mb-6">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            案例的目的不是責怪個人。
          </p>
          <p className="text-lg sm:text-xl font-bold text-amber-300 mt-2">
            而是：找出系統問題。
          </p>
        </div>

        {/* 使用三個問題貫穿分析 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <span className="text-xs font-mono text-sky-400 block mb-1">QUESTION 01</span>
            <h3 className="text-lg font-bold text-slate-100 mb-2">1．事件</h3>
            <p className="text-amber-300 font-semibold text-sm mb-2">發生了什麼？</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              依時間軸還原客觀事實。
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <span className="text-xs font-mono text-amber-400 block mb-1">QUESTION 02</span>
            <h3 className="text-lg font-bold text-slate-100 mb-2">2．原因</h3>
            <p className="text-amber-300 font-semibold text-sm mb-2">
              哪些風險沒有被辨識、評估或控制？
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              深掘多維度盲點與未啟動之防護。
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <span className="text-xs font-mono text-emerald-400 block mb-1">QUESTION 03</span>
            <h3 className="text-lg font-bold text-slate-100 mb-2">3．改善</h3>
            <p className="text-amber-300 font-semibold text-sm mb-2">
              未來如何在系統中加入新的防護層？
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              建立可複製傳承的組織安全機制。
            </p>
          </div>
        </div>

        {/* SVG 10 */}
        <Diagram10CaseAnalysis />
      </section>

      {/* =========================================================================
          SECTION 11: 本章重點整理 (Key Takeaways)
      ========================================================================= */}
      <section id="takeaways" className="scroll-mt-24 pt-6 border-t border-slate-800/80">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            SUMMARY
          </span>
          <span className="text-xs text-slate-400 font-medium">Chapter 09 · Key Takeaways</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          本章重點整理
        </h2>

        <div className="space-y-4 mb-8">
          <div className="p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start gap-4">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-sm font-mono font-bold shrink-0">
              01
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-100">
              登山不是消除風險，而是管理風險。
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start gap-4">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-sm font-mono font-bold shrink-0">
              02
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-100">
              事故通常由多個因素累積造成。
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start gap-4">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-sm font-mono font-bold shrink-0">
              03
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-100">
              預防比救援重要。
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start gap-4">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-sm font-mono font-bold shrink-0">
              04
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-100">
              好的領隊會提前看見問題。
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start gap-4">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-sm font-mono font-bold shrink-0">
              05
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-100">
              安全系統比個人英雄能力更可靠。
            </p>
          </div>
        </div>

        {/* SVG 11: 全章閉環總覽 */}
        <Diagram11ClosedLoopSystem />
      </section>

      {/* =========================================================================
          SECTION 12: 章節關聯與導覽
      ========================================================================= */}
      <section id="chapters" className="scroll-mt-24 pt-6 border-t border-slate-800/80">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
            NAVIGATION
          </span>
          <span className="text-xs text-slate-400 font-medium">登山教育教材系列</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6 pb-3 border-b border-slate-800">
          章節關聯
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 第 8 章 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">Chapter 08</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Now / 已完成
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">
                第 8 章 登山隊伍管理與領隊決策系統
              </h3>
              <p className="text-xs text-slate-400">管理人與現場決策</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1">
              <span>← 前一章節</span>
            </div>
          </div>

          {/* 第 9 章 (本章) */}
          <div className="bg-amber-500/10 border-2 border-amber-500/60 rounded-xl p-5 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-400 font-bold">Chapter 09</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500 text-slate-950">
                  Now / 本章
                </span>
              </div>
              <h3 className="text-base font-bold text-amber-200 mb-2">
                第 9 章 登山風險管理
              </h3>
              <p className="text-xs text-slate-300">建立風險管理系統</p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-500/20 text-xs text-amber-300 font-semibold">
              正在研讀此章節
            </div>
          </div>

          {/* 第 10 章 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between opacity-85">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500">Chapter 10</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                  Soon
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-200 mb-2">
                第 10 章 求援與應變
              </h3>
              <p className="text-xs text-slate-400">事故發生後啟動救援</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1">
              <span>即將發布 →</span>
            </div>
          </div>

          {/* 第 11 章 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between opacity-85">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500">Chapter 11</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                  Soon
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-200 mb-2">
                第 11 章 緊急應變與野外求生
              </h3>
              <p className="text-xs text-slate-400">現場維持生命</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-1">
              <span>即將發布 →</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

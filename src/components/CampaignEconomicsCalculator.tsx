import React, { useState, useId } from 'react';
import { Calculator, DollarSign, ArrowRight, RotateCcw, Percent, BarChart2 } from 'lucide-react';

interface Preset {
  name: string;
  spend: number;
  impressions: number;
  ctr: number;
  cvr: number;
  aov: number;
  desc: string;
}

const PRESETS: Preset[] = [
  {
    name: 'E-Commerce DTC Campaign',
    spend: 2500,
    impressions: 125000,
    ctr: 2.4, // 2.4% CTR
    cvr: 3.2, // 3.2% conversion rate
    aov: 65,  // $65 average order value
    desc: 'Typical consumer retail test budget targeting high-intent social shoppers.',
  },
  {
    name: 'B2B Lead Generation',
    spend: 4000,
    impressions: 50000,
    ctr: 1.8, // 1.8% CTR
    cvr: 5.5, // 5.5% opt-in lead rate
    aov: 450, // $450 average contract / lead value
    desc: 'Targeted LinkedIn / Google search campaign capturing enterprise leads.',
  },
  {
    name: 'Local Business Promotion',
    spend: 1200,
    impressions: 60000,
    ctr: 2.8, // 2.8% CTR
    cvr: 4.0, // 4.0% booking rate
    aov: 110, // $110 client service value
    desc: 'Geotargeted customer acquisition for local service providers.',
  },
];

export const CampaignEconomicsCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(2500);
  const [impressions, setImpressions] = useState<number>(125000);
  const [ctr, setCtr] = useState<number>(2.4);
  const [cvr, setCvr] = useState<number>(3.2);
  const [aov, setAov] = useState<number>(65);

  const spendInputId = useId();
  const impressionsInputId = useId();
  const ctrInputId = useId();
  const cvrInputId = useId();
  const aovInputId = useId();

  // Calculations
  const clicks = Math.round((impressions * ctr) / 100);
  const cpc = clicks > 0 ? adSpend / clicks : 0;
  const conversions = Math.round((clicks * cvr) / 100);
  const cpa = conversions > 0 ? adSpend / conversions : 0;
  const grossRevenue = conversions * aov;
  const roas = adSpend > 0 ? grossRevenue / adSpend : 0;
  const netContribution = grossRevenue - adSpend;
  const roiPercentage = adSpend > 0 ? ((grossRevenue - adSpend) / adSpend) * 100 : 0;

  const loadPreset = (preset: Preset) => {
    setAdSpend(preset.spend);
    setImpressions(preset.impressions);
    setCtr(preset.ctr);
    setCvr(preset.cvr);
    setAov(preset.aov);
  };

  const handleReset = () => {
    loadPreset(PRESETS[0]);
  };

  return (
    <section id="calculator" className="py-24 bg-[#0B1220] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span>Interactive Learning Sandbox</span>
            <span aria-hidden="true">·</span>
            <span>Performance Marketing Math</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Campaign Economics & Unit Metrics Simulator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            As part of my digital marketing studies under Sir Ahmad Basit, I built this practical
            calculator to test campaign unit economics. Test how small improvements in CTR or
            Conversion Rate impact ROAS and bottom-line profit.
          </p>
        </div>

        {/* Presets Bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
            Load Scenario:
          </span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => loadPreset(p)}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              {p.name}
            </button>
          ))}
          <button
            type="button"
            onClick={handleReset}
            className="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors ml-auto flex items-center gap-1"
            title="Reset to initial values"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Main Grid: Inputs on Left, Real-Time Unit Metrics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Sliders & Controls */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-blue-400" />
              <span>Campaign Inputs</span>
            </h3>

            {/* Ad Spend */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-1.5">
                <label htmlFor={spendInputId} className="text-slate-300">Total Ad Spend ($)</label>
                <span className="font-mono tabular-nums text-white font-bold">${adSpend.toLocaleString()}</span>
              </div>
              <input
                id={spendInputId}
                type="range"
                min="200"
                max="25000"
                step="100"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>$200</span>
                <span>$25,000</span>
              </div>
            </div>

            {/* Impressions */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-1.5">
                <label htmlFor={impressionsInputId} className="text-slate-300">Audience Impressions</label>
                <span className="font-mono tabular-nums text-white font-bold">{impressions.toLocaleString()}</span>
              </div>
              <input
                id={impressionsInputId}
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={impressions}
                onChange={(e) => setImpressions(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>5,000</span>
                <span>500,000</span>
              </div>
            </div>

            {/* Click-Through Rate (CTR) */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-1.5">
                <label htmlFor={ctrInputId} className="text-slate-300">Click-Through Rate (CTR %)</label>
                <span className="font-mono tabular-nums text-blue-400 font-bold">{ctr.toFixed(1)}%</span>
              </div>
              <input
                id={ctrInputId}
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={ctr}
                onChange={(e) => setCtr(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>0.5% (Conservative)</span>
                <span>8.0% (Exceptional)</span>
              </div>
            </div>

            {/* Conversion Rate (CVR) */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-1.5">
                <label htmlFor={cvrInputId} className="text-slate-300">Landing Page Conversion (CVR %)</label>
                <span className="font-mono tabular-nums text-blue-400 font-bold">{cvr.toFixed(1)}%</span>
              </div>
              <input
                id={cvrInputId}
                type="range"
                min="0.5"
                max="12.0"
                step="0.1"
                value={cvr}
                onChange={(e) => setCvr(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>0.5%</span>
                <span>12.0%</span>
              </div>
            </div>

            {/* Average Order Value / Customer Value */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-1.5">
                <label htmlFor={aovInputId} className="text-slate-300">Average Customer Value / AOV ($)</label>
                <span className="font-mono tabular-nums text-white font-bold">${aov.toLocaleString()}</span>
              </div>
              <input
                id={aovInputId}
                type="range"
                min="10"
                max="1000"
                step="5"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>$10</span>
                <span>$1,000</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Output KPI Dashboard */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Scorecard: ROAS & Net Return */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F172A] border border-blue-900/40 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Target Efficiency
                </span>
                <span className="text-xs text-slate-400">Real-Time Model</span>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Return on Ad Spend (ROAS)</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                    {roas.toFixed(2)}x
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    {roas >= 2.0 ? 'Profitable Scale' : roas >= 1.0 ? 'Breakeven Range' : 'Underperforming'}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1">Net Margin / Return</div>
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold font-mono tabular-nums ${
                      netContribution >= 0 ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {netContribution >= 0 ? `+$${netContribution.toLocaleString()}` : `-$${Math.abs(netContribution).toLocaleString()}`}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    ROI: {roiPercentage.toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Marketing Principle:</strong> In performance
                marketing, ad spend is only effective when unit margins cover Cost Per Acquisition
                (CPA) while maintaining positive customer lifetime value (LTV).
              </div>
            </div>

            {/* Granular Unit Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                <div className="text-[11px] font-medium text-slate-400 mb-1">Estimated Clicks</div>
                <div className="text-xl font-bold text-white font-mono tabular-nums">
                  {clicks.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Traffic volume</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                <div className="text-[11px] font-medium text-slate-400 mb-1">Cost Per Click (CPC)</div>
                <div className="text-xl font-bold text-white font-mono tabular-nums">
                  ${cpc.toFixed(2)}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Per visitor</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                <div className="text-[11px] font-medium text-slate-400 mb-1">Conversions</div>
                <div className="text-xl font-bold text-blue-400 font-mono tabular-nums">
                  {conversions.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Leads / sales</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                <div className="text-[11px] font-medium text-slate-400 mb-1">Cost Per Acq (CPA)</div>
                <div className="text-xl font-bold text-white font-mono tabular-nums">
                  ${cpa.toFixed(2)}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Per acquisition</div>
              </div>
            </div>

            {/* Gross Pipeline Revenue */}
            <div className="p-5 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Estimated Gross Pipeline / Revenue</div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums mt-0.5">
                  ${grossRevenue.toLocaleString()}
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Discuss Campaign Math</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

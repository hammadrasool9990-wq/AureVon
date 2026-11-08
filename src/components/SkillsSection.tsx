import React, { useState } from 'react';
import {
  Megaphone,
  TrendingUp,
  Target,
  Code2,
  Search,
  Sparkles,
  Users,
  BarChart3,
  CheckCircle2,
  Layers,
  HelpCircle,
  Calculator,
  ArrowRight,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CampaignEconomicsCalculator } from './CampaignEconomicsCalculator';
import { SpotlightCard } from './SpotlightCard';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'simulator'>('skills');
  const [filter, setFilter] = useState<'all' | 'marketing' | 'performance' | 'development'>('all');

  const filteredSkills =
    filter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((skill) => skill.category === filter);

  // Map icon names to Lucide components with aqua accent
  const renderIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-cyan-600' };
    switch (name) {
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Target':
        return <Target {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3">
              <span>Page 03 · Skills & Capabilities</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Practical Competence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              What I'm Learning & Exploring
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore the 8 core marketing & development disciplines I study at NeXskill, or test
              real-world campaign unit economics with the interactive simulator below.
            </p>
          </div>

          {/* Primary View Switcher: Skills vs Simulator */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>8 Core Learning Areas</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'simulator'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Live Campaign Sandbox</span>
            </button>
          </div>
        </div>

        {activeTab === 'skills' ? (
          <>
            {/* Domain Filter Sub-bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
              <span className="text-xs text-slate-500 font-medium">
                Showing <span className="text-cyan-700 font-bold">{filteredSkills.length}</span> of 8 verified learning areas
              </span>

              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    filter === 'all'
                      ? 'bg-white text-cyan-800 shadow-sm border border-cyan-200 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('marketing')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    filter === 'marketing'
                      ? 'bg-white text-cyan-800 shadow-sm border border-cyan-200 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Strategy & SEO
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('performance')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    filter === 'performance'
                      ? 'bg-white text-cyan-800 shadow-sm border border-cyan-200 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Performance & Ads
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('development')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    filter === 'development'
                      ? 'bg-white text-cyan-800 shadow-sm border border-cyan-200 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Web Engineering
                </button>
              </div>
            </div>

            {/* 8 Skill & Interest Cards Grid with Interactive Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {filteredSkills.map((skill) => (
                <SpotlightCard
                  key={skill.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Header with Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          {renderIcon(skill.iconName)}
                        </div>
                        <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                        {skill.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {skill.summary}
                      </p>

                      {/* Key Concepts Explored */}
                      <div className="mb-4">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          Key Concepts Explored:
                        </div>
                        <ul className="space-y-1.5">
                          {skill.focusTopics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom: Business Impact */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-700 mb-1">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Business Impact</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {skill.whyItMatters}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Prompt to try Sandbox */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-50 via-teal-50/50 to-white border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Want to see performance marketing math in action?
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Test impressions, CTR, conversion rates, and ROAS calculations with our live simulator.
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('simulator')}
                className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 active:scale-[0.98] rounded-lg transition-all flex items-center gap-2 whitespace-nowrap shadow-md shadow-cyan-600/25 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
              >
                <span>Open Campaign Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-100" />
              </button>
            </div>
          </>
        ) : (
          /* Live Campaign Simulator Sub-view */
          <div className="mt-4">
            <div className="mb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveTab('skills')}
                className="text-xs text-cyan-700 hover:text-cyan-800 flex items-center gap-1.5 font-bold"
              >
                <span>← Back to 8 Learning Areas</span>
              </button>
            </div>
            <CampaignEconomicsCalculator asSubSection={true} />
          </div>
        )}
      </div>
    </section>
  );
};

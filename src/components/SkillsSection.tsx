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

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'simulator'>('skills');
  const [filter, setFilter] = useState<'all' | 'marketing' | 'performance' | 'development'>('all');

  const filteredSkills =
    filter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((skill) => skill.category === filter);

  // Map icon names to Lucide components
  const renderIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-blue-400' };
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
    <section id="skills" className="py-24 bg-[#0B1220] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
              <span>Page 03 · Skills & Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Practical Competence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              What I'm Learning & Exploring
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore the 8 core marketing & development disciplines I study at NeXskill, or test
              real-world campaign unit economics with the interactive simulator below.
            </p>
          </div>

          {/* Primary View Switcher: Skills vs Simulator */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'skills'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>8 Core Learning Areas</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'simulator'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
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
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
              <span className="text-xs text-slate-400 font-medium">
                Showing {filteredSkills.length} of 8 verified learning areas
              </span>

              <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filter === 'all'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('marketing')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filter === 'marketing'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Strategy & SEO
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('performance')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filter === 'performance'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Performance & Ads
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('development')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filter === 'development'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Web Engineering
                </button>
              </div>
            </div>

            {/* 8 Skill & Interest Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                        {renderIcon(skill.iconName)}
                      </div>
                      <span className="text-xs font-medium text-slate-500 capitalize">
                        {skill.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {skill.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {skill.summary}
                    </p>

                    {/* Key Concepts Explored */}
                    <div className="mb-4">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Key Concepts Explored:
                      </div>
                      <ul className="space-y-1.5">
                        {skill.focusTopics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom: Business Impact */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-400 mb-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Business Impact</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.whyItMatters}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Prompt to try Sandbox */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 to-slate-900 border border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">
                  Want to see performance marketing math in action?
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Test impressions, CTR, conversion rates, and ROAS calculations with our live simulator.
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('simulator')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Open Campaign Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1.5 font-medium"
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

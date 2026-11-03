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
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
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
    <section id="skills" className="py-24 bg-[#0B1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
              <span>Curriculum & Exploration</span>
              <span aria-hidden="true">·</span>
              <span>No Fabricated Percentages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              What I'm Learning & Exploring
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              These 8 core pillars represent my active studies at NeXskill and independent practice.
              Instead of assigning artificial skill percentages, I outline the concrete concepts,
              frameworks, and business outcomes I am studying.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button-based segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All (8)
            </button>
            <button
              type="button"
              onClick={() => setFilter('marketing')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'marketing'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Strategy & SEO
            </button>
            <button
              type="button"
              onClick={() => setFilter('performance')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'performance'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Performance & Ads
            </button>
            <button
              type="button"
              onClick={() => setFilter('development')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'development'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Engineering
            </button>
          </div>
        </div>

        {/* 8 Skill & Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  {/* Clean unboxed category label */}
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

              {/* Bottom: Why it matters for business */}
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

        {/* Authenticity Pledge Footnote */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/80 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Ethical Standards Note:</strong> All capabilities
            listed are active learning disciplines and areas of focused study. I do not publish
            unverified claims or synthetic client statistics. My goal is to build deep, verified
            competence.
          </p>
        </div>
      </div>
    </section>
  );
};

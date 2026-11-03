import React from 'react';
import { Compass, Sparkles, Building2, Terminal, Target, ArrowRight } from 'lucide-react';
import workspaceImg from '../assets/images/digital_marketing_workspace_1793684264801.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span>Authentic Storytelling</span>
            <span aria-hidden="true">·</span>
            <span>Zero Exaggeration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My Journey
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            I believe that true professional confidence comes from honesty, disciplined study, and
            genuine curiosity. Here is who I am, what drives my work, and how I am building my
            capabilities.
          </p>
        </div>

        {/* Top Grid: Narrative & Visual Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Who I Am & What I Am Learning</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                My name is <strong className="text-white">Hammad Rasool</strong>. I identify as a{' '}
                <strong className="text-blue-400">Digital Marketing Learner</strong>,{' '}
                <strong className="text-blue-400">Aspiring Professional Marketer</strong>, and{' '}
                <strong className="text-blue-400">Web Developer</strong>.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than claiming years of past commercial accomplishments, I am dedicated to
                mastering the modern mechanics of how businesses grow online: from audience
                segmentation and funnel architecture to performance advertising and technical web
                optimization.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Why I Am Interested in Digital Marketing</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In today's interconnected market, great products and services often struggle simply
                because they cannot bridge the gap between their value and their potential customers.
                Digital marketing is the science and art of bridging that gap. Understanding consumer
                psychology, analyzing campaign data, and optimizing conversion flows excites me because
                every business decision can be tested, measured, and systematically improved.
              </p>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl relative group h-full flex flex-col">
              <div className="relative flex-1 min-h-[280px]">
                <img
                  src={workspaceImg}
                  alt="Digital marketing strategy and performance analytics desk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />
              </div>
              <div className="p-6 bg-[#0F172A]">
                <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
                  Daily Practice
                </div>
                <div className="text-base font-bold text-white">
                  Analytical Rigor Meets Practical Implementation
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Exploring campaign dynamics, performance indicators, and web interfaces from my
                  workspace.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Structured 4-Pillar Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="p-6 rounded-xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-blue-400 mb-1">Pillar 01</div>
              <h4 className="text-lg font-bold text-white mb-2.5">NeXskill Mentorship</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Learning professional marketing at <span className="text-white font-medium">NeXskill – Be Productive</span>{' '}
                under the direct guidance of <span className="text-white font-medium">Sir Ahmad Basit</span>, focusing on
                practical methodologies and real-world strategy.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-400">
              Mentor: Sir Ahmad Basit
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-blue-400 mb-1">Pillar 02</div>
              <h4 className="text-lg font-bold text-white mb-2.5">Arfa Kareem Tower</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Studying inside Arfa Software Technology Park, Lahore. Immersed in an ecosystem
                surrounded by technology founders, engineers, and digital innovators.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-400">
              Location: Lahore, Pakistan
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-blue-400 mb-1">Pillar 03</div>
              <h4 className="text-lg font-bold text-white mb-2.5">Web Development Synergy</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Combining modern web coding skills with marketing knowledge. A marketer who can build
                and refine the web experience can execute faster and eliminate funnel bottlenecks.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-400">
              Tech: React, TypeScript, Tailwind
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-blue-400 mb-1">Pillar 04</div>
              <h4 className="text-lg font-bold text-white mb-2.5">Future Direction</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Evolving into a trusted performance marketer and digital growth collaborator who helps
                enterprises and startups scale sustainably with clear ROI and ethical transparency.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-slate-400">
              Focus: Sustainable Business Growth
            </div>
          </div>
        </div>

        {/* Narrative Callout Block */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-white mb-2">
              Ready to Discuss a Project or Opportunity?
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              I welcome conversations with CEOs, business owners, and marketing teams who value
              integrity, dedication, and technical competence.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

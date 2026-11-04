import React from 'react';
import {
  Compass,
  Building2,
  Terminal,
  Target,
  ArrowRight,
  GraduationCap,
  MapPin,
  Check,
  BookOpen,
} from 'lucide-react';
import workspaceImg from '../assets/images/digital_marketing_workspace_1793684264801.jpg';
import arfaImg from '../assets/images/arfa_technology_park_1793684263737.jpg';
import nexskillImg from '../assets/images/nexskill_learning_hub_1793684265145.jpg';
import { LEARNING_JOURNEY_STAGES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#08080A] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>Page 02 · Authentic Storytelling</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Zero Exaggeration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About My Journey & Education
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            I believe that true professional confidence comes from honesty, disciplined study, and
            genuine curiosity. Here is who I am, what drives my work, and how I am building my
            capabilities under experienced mentorship.
          </p>
        </div>

        {/* Narrative & Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <SpotlightCard className="p-8 rounded-2xl bg-[#101014] border border-neutral-800 shadow-md">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.7)]"></span>
                <span>Who I Am & What I Am Learning</span>
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                My name is <strong className="text-white">Hammad Rasool</strong>. I identify as a{' '}
                <strong className="text-amber-400">Digital Marketing Learner</strong>,{' '}
                <strong className="text-amber-400">Aspiring Professional Marketer</strong>, and{' '}
                <strong className="text-amber-400">Web Developer</strong>.
              </p>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Rather than claiming years of past commercial accomplishments, I am dedicated to
                mastering the modern mechanics of how businesses grow online: from audience
                segmentation and funnel architecture to performance advertising and technical web
                optimization.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl bg-[#101014] border border-neutral-800 shadow-md">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.7)]"></span>
                <span>Why I Am Interested in Digital Marketing</span>
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                In today's interconnected market, great products and services often struggle simply
                because they cannot bridge the gap between their value and their potential customers.
                Digital marketing is the science and art of bridging that gap. Understanding consumer
                psychology, analyzing campaign data, and optimizing conversion flows excites me because
                every business decision can be tested, measured, and systematically improved.
              </p>
            </SpotlightCard>
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-[#101014] shadow-xl relative group h-full flex flex-col">
              <div className="relative flex-1 min-h-[280px]">
                <img
                  src={workspaceImg}
                  alt="Digital marketing strategy and performance analytics desk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent" />
              </div>
              <div className="p-6 bg-[#101014]">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                  Daily Practice
                </div>
                <div className="text-base font-bold text-white">
                  Analytical Rigor Meets Practical Implementation
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Exploring campaign dynamics, performance indicators, and web interfaces from my
                  workspace.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Institutional Pillars with Interactive Spotlight Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Platform */}
          <SpotlightCard className="p-7 rounded-2xl bg-[#101014] border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors shadow-lg">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Learning Platform
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  NeXskill – Be Productive
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Practical marketing education focusing on structured campaigns, conversion strategies,
                  and modern performance marketing principles.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 text-xs text-amber-400 font-semibold">
                Professional Marketing Education
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Mentor (Golden High-Trust Card) */}
          <SpotlightCard
            spotlightColor="rgba(245, 158, 11, 0.28)"
            className="p-7 rounded-2xl bg-gradient-to-b from-[#15151A] to-[#101014] border border-amber-500/35 flex flex-col justify-between relative overflow-hidden shadow-xl"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-5 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                  Teacher & Mentor
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Sir Ahmad Basit
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Learning under the direct mentorship of Sir Ahmad Basit. His focus on strategic
                  discipline, conversion tracking, and ethical transparency guides my growth.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 text-xs text-amber-300 font-semibold flex items-center justify-between">
                <span>Mentorship & Strategy Guidance</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Location */}
          <SpotlightCard
            spotlightColor="rgba(220, 38, 38, 0.2)"
            className="p-7 rounded-2xl bg-[#101014] border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors shadow-lg"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Learning Ecosystem
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Arfa Software Tech Park
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Classes at Arfa Kareem Tower, Lahore. Immersed in Pakistan's iconic IT infrastructure
                  housing tech enterprises, software developers, and startup founders.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 text-xs text-red-400 font-semibold">
                Lahore, Pakistan
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Visual Dual Photo Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-[#101014] shadow-lg group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={arfaImg}
                alt="Arfa Software Technology Park, Lahore"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-red-400 font-semibold mb-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Arfa Kareem Tower</span>
                </div>
                <div className="text-white font-bold text-base">Arfa Software Technology Park</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-[#101014] shadow-lg group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={nexskillImg}
                alt="NeXskill Learning Academy Classroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-0.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>NeXskill Academy</span>
                </div>
                <div className="text-white font-bold text-base">Collaborative Classroom Atmosphere</div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Milestone Progress */}
        <div className="space-y-4 mb-14">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>Milestones in Progress</span>
            <span className="text-xs font-normal text-neutral-400">· Transparent Learning Path</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEARNING_JOURNEY_STAGES.map((stage, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 rounded-xl bg-[#101014] border border-neutral-800 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-md"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                        Phase 0{idx + 1} · {stage.step}
                      </span>
                      <span className="text-[11px] text-neutral-500">{stage.location}</span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{stage.title}</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">{stage.description}</p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 space-y-1.5">
                    {stage.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-1.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Narrative Callout Block: Deep Red & Obsidian with White CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-neutral-900 border border-red-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-white mb-2">
              Ready to Discuss a Project or Opportunity?
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              I welcome conversations with CEOs, business owners, and marketing teams who value
              integrity, dedication, and technical competence.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-lg transition-all whitespace-nowrap shrink-0 inline-flex items-center gap-2 shadow-lg shadow-red-950/60 border border-red-500/20 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-[1.02]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

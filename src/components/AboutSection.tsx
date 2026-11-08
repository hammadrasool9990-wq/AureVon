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
  Sparkles,
} from 'lucide-react';
import aurevonStageImg from '../assets/images/hammad_about_aurevon.png';
import arfaImg from '../assets/images/arfa_technology_park_1793684263737.jpg';
import nexskillImg from '../assets/images/nexskill_learning_hub_1793684265145.jpg';
import { LEARNING_JOURNEY_STAGES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3">
            <span>Page 02 · Authentic Storytelling</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Zero Exaggeration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            About My Journey & Education
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I believe that true professional confidence comes from honesty, disciplined study, and
            genuine curiosity. Here is who I am, what drives my work, and how I am building my
            capabilities under experienced mentorship.
          </p>
        </div>

        {/* Narrative & Stage Presentation Photo Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <SpotlightCard className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cyan-400">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                <span>Who I Am & What I Am Learning</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                My name is <strong className="text-slate-900">Hammad Rasool</strong>. I identify as a{' '}
                <strong className="text-cyan-700">Digital Marketing Learner</strong>,{' '}
                <strong className="text-cyan-700">Aspiring Professional Marketer</strong>, and{' '}
                <strong className="text-cyan-700">Web Developer</strong>.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than claiming years of past commercial accomplishments, I am dedicated to
                mastering the modern mechanics of how businesses grow online: from audience
                segmentation and funnel architecture to performance advertising and technical web
                optimization.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cyan-400">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]"></span>
                <span>Why I Am Interested in Digital Marketing</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In today's interconnected market, great products and services often struggle simply
                because they cannot bridge the gap between their value and their potential customers.
                Digital marketing is the science and art of bridging that gap. Understanding consumer
                psychology, analyzing campaign data, and optimizing conversion flows excites me because
                every business decision can be tested, measured, and systematically improved.
              </p>
            </SpotlightCard>
          </div>

          {/* Right Visual Image Card: Keynote Stage Presentation Photo */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border border-cyan-200 bg-white shadow-xl relative group h-full flex flex-col">
              <div className="relative flex-1 min-h-[320px] bg-slate-950 overflow-hidden">
                <img
                  src={aurevonStageImg}
                  alt="Hammad Rasool presenting AureVon for Marketing framework"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-bold mb-0.5 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AureVon Keynote Session</span>
                  </div>
                  <div className="font-extrabold text-base leading-tight">
                    Audience Strategy & Strategic Brand Growth
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="text-xs text-cyan-700 font-bold uppercase tracking-wider mb-1">
                  Presentation & Strategy
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Sharing the Core Marketing Dynamics
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Focusing on audience discovery, strategic brand development, and performance scaling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Institutional Pillars with Interactive Spotlight Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Platform */}
          <SpotlightCard className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-cyan-300 transition-colors shadow-sm">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Learning Platform
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  NeXskill – Be Productive
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Practical marketing education focusing on structured campaigns, conversion strategies,
                  and modern performance marketing principles.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 text-xs text-cyan-700 font-bold">
                Professional Marketing Education
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Mentor (Sir Ahmad Basit Spotlight) */}
          <SpotlightCard
            spotlightColor="rgba(6, 182, 212, 0.2)"
            className="p-7 rounded-2xl bg-gradient-to-b from-cyan-50/50 to-white border border-cyan-300 flex flex-col justify-between relative overflow-hidden shadow-md"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-700 mb-5 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
                  Teacher & Mentor
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Sir Ahmad Basit
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Learning under the direct mentorship of Sir Ahmad Basit. His focus on strategic
                  discipline, conversion tracking, and ethical transparency guides my growth.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-cyan-100 text-xs text-cyan-800 font-bold flex items-center justify-between">
                <span>Mentorship & Strategy Guidance</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Location */}
          <SpotlightCard
            spotlightColor="rgba(20, 184, 166, 0.18)"
            className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-teal-300 transition-colors shadow-sm"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Learning Ecosystem
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Arfa Software Tech Park
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Classes at Arfa Kareem Tower, Lahore. Immersed in Pakistan's iconic IT infrastructure
                  housing tech enterprises, software developers, and startup founders.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 text-xs text-teal-700 font-bold">
                Lahore, Pakistan
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Visual Dual Photo Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={arfaImg}
                alt="Arfa Software Technology Park, Lahore"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-bold mb-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Arfa Kareem Tower</span>
                </div>
                <div className="text-white font-bold text-base">Arfa Software Technology Park</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={nexskillImg}
                alt="NeXskill Learning Academy Classroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-bold mb-0.5">
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
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span>Milestones in Progress</span>
            <span className="text-xs font-normal text-slate-500">· Transparent Learning Path</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEARNING_JOURNEY_STAGES.map((stage, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 transition-all flex flex-col justify-between shadow-sm"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider">
                        Phase 0{idx + 1} · {stage.step}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{stage.location}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{stage.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{stage.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {stage.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Narrative Callout Block: Crisp White with Aqua Glow & Action Button */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-cyan-900 via-slate-900 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-cyan-800">
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
            className="px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 active:scale-[0.98] rounded-lg transition-all whitespace-nowrap shrink-0 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </div>
    </section>
  );
};

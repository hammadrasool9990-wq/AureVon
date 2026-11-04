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

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span>Page 02 · Authentic Storytelling</span>
            <span aria-hidden="true">·</span>
            <span>Zero Exaggeration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About My Journey & Education
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            I believe that true professional confidence comes from honesty, disciplined study, and
            genuine curiosity. Here is who I am, what drives my work, and how I am building my
            capabilities under experienced mentorship.
          </p>
        </div>

        {/* Narrative & Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
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

        {/* 3 Core Institutional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Platform */}
          <div className="p-7 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Learning Platform
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                NeXskill – Be Productive
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Practical marketing education focusing on structured campaigns, conversion strategies,
                and modern performance marketing principles.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-blue-400 font-medium">
              Professional Marketing Education
            </div>
          </div>

          {/* Card 2: Mentor */}
          <div className="p-7 rounded-2xl bg-[#0F172A] border border-blue-900/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/5 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                Teacher & Mentor
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Sir Ahmad Basit
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Learning under the direct mentorship of Sir Ahmad Basit. His focus on strategic
                discipline, conversion tracking, and ethical transparency guides my growth.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-blue-400 font-medium">
              Mentorship & Strategy Guidance
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="p-7 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Learning Ecosystem
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Arfa Software Tech Park
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Classes at Arfa Kareem Tower, Lahore. Immersed in Pakistan's iconic IT infrastructure
                housing tech enterprises, software developers, and startup founders.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs text-blue-400 font-medium">
              Lahore, Pakistan
            </div>
          </div>
        </div>

        {/* Visual Dual Photo Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={arfaImg}
                alt="Arfa Software Technology Park, Lahore"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold mb-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Arfa Kareem Tower</span>
                </div>
                <div className="text-white font-bold text-base">Arfa Software Technology Park</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={nexskillImg}
                alt="NeXskill Learning Academy Classroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold mb-0.5">
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
            <span className="text-xs font-normal text-slate-400">· Transparent Learning Path</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEARNING_JOURNEY_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0F172A] border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                      Phase 0{idx + 1} · {stage.step}
                    </span>
                    <span className="text-[11px] text-slate-500">{stage.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{stage.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{stage.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  {stage.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

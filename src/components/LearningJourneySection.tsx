import React from 'react';
import { Building2, Compass, GraduationCap, MapPin, Check, BookOpen } from 'lucide-react';
import arfaImg from '../assets/images/arfa_technology_park_1793684263737.jpg';
import nexskillImg from '../assets/images/nexskill_learning_hub_1793684265145.jpg';
import { LEARNING_JOURNEY_STAGES } from '../data/portfolioData';

export const LearningJourneySection: React.FC = () => {
  return (
    <section id="learning" className="py-24 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span>Educational Foundations</span>
            <span aria-hidden="true">·</span>
            <span>NeXskill – Be Productive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Learning to Build Something Meaningful
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Excellence requires a disciplined learning environment, dedicated mentorship, and an
            inspiring community. I am fortunate to pursue my marketing education in the heart of
            Lahore's technology ecosystem.
          </p>
        </div>

        {/* Triple Institutional Cards: The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Platform */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Learning Platform
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                NeXskill – Be Productive
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A premier training institution focused on practical skills, productivity, and modern
                digital marketing competencies tailored for real-world enterprise demands.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-blue-400 font-medium">
              Practical & Career-Focused Training
            </div>
          </div>

          {/* Card 2: Mentor */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-blue-900/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                Teacher & Mentor
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Sir Ahmad Basit
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Learning under the direct mentorship of Sir Ahmad Basit. His focus on structured
                thinking, ethical marketing principles, and performance accountability shapes my
                approach.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-blue-400 font-medium">
              Mentorship & Strategic Direction
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Learning Location
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Arfa Software Tech Park
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Arfa Kareem Tower on Ferozepur Road, Lahore. Pakistan’s iconic technology hub
                housing top technology enterprises, venture-backed startups, and digital innovators.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-blue-400 font-medium">
              Lahore, Pakistan
            </div>
          </div>
        </div>

        {/* Visual Dual-Image Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Arfa Tower Image Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={arfaImg}
                alt="Arfa Software Technology Park, Lahore"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Arfa Kareem Tower, Lahore</span>
                </div>
                <div className="text-white font-bold text-lg">
                  Arfa Software Technology Park
                </div>
              </div>
            </div>
            <div className="p-5 bg-[#0F172A]">
              <p className="text-xs text-slate-300 leading-relaxed">
                Pakistan’s premier IT infrastructure, providing a world-class technology atmosphere
                for classes, workshops, and business discussions.
              </p>
            </div>
          </div>

          {/* NeXskill Hub Image Card */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={nexskillImg}
                alt="NeXskill Learning Academy Classroom and Workshop Environment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>NeXskill Classrooms & Studios</span>
                </div>
                <div className="text-white font-bold text-lg">
                  Collaborative Learning Atmosphere
                </div>
              </div>
            </div>
            <div className="p-5 bg-[#0F172A]">
              <p className="text-xs text-slate-300 leading-relaxed">
                Hands-on practical sessions studying digital campaign wireframing, analytics, and
                strategic marketing decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Milestone Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span>Milestones in Progress</span>
            <span className="text-sm font-normal text-slate-400">· Transparent Learning Path</span>
          </h3>

          <div className="space-y-6">
            {LEARNING_JOURNEY_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                      Phase 0{idx + 1}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <h4 className="text-lg font-bold text-white">
                      {stage.title}
                    </h4>
                  </div>
                  <div className="text-xs text-slate-400">
                    {stage.location}
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-400 mb-4">
                  <span>{stage.institution}</span>
                  <span className="mx-2">·</span>
                  <span className="text-blue-400">{stage.mentorOrLead}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {stage.description}
                </p>

                {/* Key Takeaways */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Insights & Takeaways:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {stage.keyTakeaways.map((takeaway, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800"
                      >
                        <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

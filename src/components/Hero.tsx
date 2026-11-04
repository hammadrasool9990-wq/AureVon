import React from 'react';
import { ArrowRight, MapPin, GraduationCap, Compass } from 'lucide-react';
import portraitImg from '../assets/images/hammad_rasool_actual.jpeg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet Unboxed Kicker */}
            <div className="flex items-center gap-2 text-sm font-medium text-blue-400 mb-4 tracking-wide">
              <span>Personal Brand & Portfolio</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">HAMMAD RASOOL</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Hello, I'm <span className="text-blue-500">Hammad Rasool</span>.
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 mb-6 leading-snug">
              Exploring Digital Marketing. Building Digital Experiences. Creating Opportunities.
            </p>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              I'm Hammad Rasool, an aspiring digital marketing professional and web developer. I am
              developing my skills in professional marketing through{' '}
              <strong className="text-white font-semibold">NeXskill</strong> under the mentorship of{' '}
              <strong className="text-white font-semibold">Sir Ahmad Basit</strong>. I am passionate
              about understanding how businesses grow, connect with customers, and build their
              digital presence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-blue-900/30 inline-flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <span>Explore My Journey</span>
              </a>
            </div>

            {/* Clean Unboxed Trust Markers (No Pill Clutter) */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>NeXskill – Be Productive</span>
              </div>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mentored by Sir Ahmad Basit</span>
              </div>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Gulberg, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer ambient glow matching the image's cyan/blue halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-blue-500/10 blur-xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#060B14] shadow-2xl p-3 sm:p-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#0B1220]">
                  <img
                    src={portraitImg}
                    alt="Hammad Rasool – Official Profile Photo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Subdued info bar below */}
                <div className="pt-4 pb-2 px-3 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                      <span>Hammad Rasool</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
                    </div>
                    <div className="text-xs text-blue-400 font-medium mt-0.5">
                      Digital Marketing Learner & Web Developer
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-slate-400 hidden sm:block">
                    <div className="text-slate-300 font-medium">Gulberg</div>
                    <div className="text-slate-500">Lahore, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

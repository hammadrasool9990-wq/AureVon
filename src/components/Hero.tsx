import React, { useState } from 'react';
import { ArrowRight, MapPin, GraduationCap, Compass, Mail, Sparkles } from 'lucide-react';
import portraitImg from '../assets/images/hammad_rasool_actual.jpeg';

export const Hero: React.FC = () => {
  // 3D Perspective Tilt & Specular Aqua Glare state for Portrait Card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth subtle max 7 degree tilt
    const tiltX = ((y - centerY) / centerY) * -7;
    const tiltY = ((x - centerX) / centerX) * 7;

    setTilt({ x: tiltX, y: tiltY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background ambient dual aqua glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-gradient-to-tr from-cyan-400/20 via-teal-300/15 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 animate-aqua-pulse"
        aria-hidden="true"
      />

      {/* Subtle floating aqua ambient motes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.9)] animate-float-slow" />
        <div className="absolute top-[35%] right-[18%] w-2.5 h-2.5 rounded-full bg-teal-400/50 shadow-[0_0_12px_rgba(20,184,166,0.9)] animate-float-delayed" />
        <div className="absolute bottom-[25%] left-[30%] w-1.5 h-1.5 rounded-full bg-sky-400/60 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-float-slow" />
        <div className="absolute top-[60%] right-[35%] w-2 h-2 rounded-full bg-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet Unboxed Kicker in Aqua Tone */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-700 mb-4 tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-cyan-500 animate-spin" style={{ animationDuration: '14s' }} />
              <span>Personal Brand & Portfolio</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-semibold">HAMMAD RASOOL</span>
            </div>

            {/* Headline with Email */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-3">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-500 to-teal-500">
                  Hammad Rasool
                </span>
                .
              </h1>
              <a
                href="mailto:AureVon9990@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-50/80 border border-cyan-200 hover:border-cyan-400 text-xs sm:text-sm font-semibold text-cyan-800 hover:text-cyan-900 transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:scale-[1.02]"
                title="Send direct email to Hammad Rasool"
              >
                <Mail className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-cyan-400/60 underline-offset-4 font-mono">
                  AureVon9990@gmail.com
                </span>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 leading-snug">
              Exploring Digital Marketing. Building Digital Experiences. Creating Opportunities.
            </p>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              I'm Hammad Rasool, an aspiring digital marketing professional and web developer. I am
              developing my skills in professional marketing through{' '}
              <strong className="text-slate-900 font-bold">NeXskill</strong> under the mentorship of{' '}
              <strong className="text-cyan-700 font-bold">Sir Ahmad Basit</strong>. I am passionate
              about understanding how businesses grow, connect with customers, and build their
              digital presence.
            </p>

            {/* Action Buttons: Vibrant Aqua Gradient Primary & Crisp Light Secondary */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-cyan-600/30 inline-flex items-center gap-2 border border-cyan-400/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:scale-[1.02]"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-cyan-100" />
              </a>

              <a
                href="#about"
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-slate-700 hover:text-cyan-700 bg-white hover:bg-cyan-50/50 border border-slate-300 hover:border-cyan-400 rounded-lg transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:scale-[1.02]"
              >
                <span>Explore My Journey</span>
              </a>
            </div>

            {/* Clean Unboxed Trust Markers in Aqua and Slate Tones */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="text-slate-700 font-semibold">NeXskill – Be Productive</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Mentored by Sir Ahmad Basit</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Gulberg, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Portrait Card with Interactive 3D Perspective Tilt & Specular Aqua Glare */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md mx-auto group cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: '1000px',
              }}
            >
              {/* Dual-layer ambient glow in vibrant aqua tones */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/35 via-teal-300/25 to-sky-300/15 blur-2xl -z-10 group-hover:from-cyan-400/50 group-hover:via-teal-300/35 transition-all duration-500" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-400/30 via-teal-400/15 to-transparent blur-md -z-10" />

              <div
                className="relative rounded-3xl overflow-hidden border border-cyan-200/90 bg-white shadow-2xl shadow-cyan-900/15 p-3 sm:p-4 transition-all duration-200 ease-out will-change-transform"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                }}
              >
                {/* Aqua gradient frame directly wrapping the portrait */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-b from-cyan-400 via-teal-400/30 to-slate-100 shadow-[0_0_25px_rgba(6,182,212,0.2)] overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-950">
                    {/* Radiant aqua backdrop directly behind the image */}
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(6,182,212,0.35)_0%,_rgba(14,116,144,0.25)_40%,_rgba(15,23,42,0.85)_75%,_#0B1220_100%)] pointer-events-none z-0"
                      aria-hidden="true"
                    />

                    <img
                      src={portraitImg}
                      alt="Hammad Rasool – Official Profile Photo"
                      referrerPolicy="no-referrer"
                      className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Specular Aqua Glare that moves with cursor */}
                    <div
                      className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
                      style={{
                        opacity: glare.opacity,
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(6, 182, 212, 0.5) 0%, rgba(34, 211, 238, 0.25) 25%, transparent 60%)`,
                      }}
                    />
                  </div>
                </div>

                {/* Subdued info bar below */}
                <div className="pt-4 pb-2 px-3 flex items-center justify-between">
                  <div>
                    <div className="text-slate-900 font-extrabold text-base sm:text-lg flex items-center gap-2">
                      <span>Hammad Rasool</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.9)] inline-block"></span>
                    </div>
                    <div className="text-xs text-cyan-700 font-bold mt-0.5">
                      Digital Marketing Learner & Web Developer
                    </div>
                    <a
                      href="mailto:AureVon9990@gmail.com"
                      className="text-xs text-slate-600 hover:text-cyan-700 flex items-center gap-1.5 mt-1.5 transition-colors font-mono font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-600" />
                      <span>AureVon9990@gmail.com</span>
                    </a>
                  </div>
                  <div className="text-right text-[11px] text-slate-500 hidden sm:block self-start pt-1">
                    <div className="text-cyan-700 font-bold">Gulberg</div>
                    <div className="text-slate-500 font-medium">Lahore, Pakistan</div>
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

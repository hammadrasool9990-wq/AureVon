import React, { useState } from 'react';
import { ArrowRight, MapPin, GraduationCap, Compass, Mail, Sparkles } from 'lucide-react';
import portraitImg from '../assets/images/hammad_rasool_actual.jpeg';

export const Hero: React.FC = () => {
  // 3D Perspective Tilt & Specular Glare state for Portrait Card
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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#08080A]">
      {/* Background ambient dual glow (Crimson Red & Warm Gold) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-red-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-aura"
        aria-hidden="true"
      />

      {/* Subtle floating golden ambient motes / stardust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-amber-400/50 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-float-slow" />
        <div className="absolute top-[35%] right-[18%] w-2 h-2 rounded-full bg-amber-300/40 shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-float-delayed" />
        <div className="absolute bottom-[25%] left-[30%] w-1 h-1 rounded-full bg-red-500/40 shadow-[0_0_6px_rgba(239,68,68,0.7)] animate-float-slow" />
        <div className="absolute top-[60%] right-[35%] w-1.5 h-1.5 rounded-full bg-amber-400/45 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet Unboxed Kicker in Golden Tone */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-4 tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '14s' }} />
              <span>Personal Brand & Portfolio</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400 font-normal">HAMMAD RASOOL</span>
            </div>

            {/* Headline with Email */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-3">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-amber-200">
                  Hammad Rasool
                </span>
                .
              </h1>
              <a
                href="mailto:AureVon9990@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-amber-500/30 hover:border-amber-400 text-xs sm:text-sm font-semibold text-amber-300 hover:text-white transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:scale-[1.02]"
                title="Send direct email to Hammad Rasool"
              >
                <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-amber-400/40 underline-offset-4 font-mono">
                  AureVon9990@gmail.com
                </span>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-neutral-100 mb-6 leading-snug">
              Exploring Digital Marketing. Building Digital Experiences. Creating Opportunities.
            </p>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
              I'm Hammad Rasool, an aspiring digital marketing professional and web developer. I am
              developing my skills in professional marketing through{' '}
              <strong className="text-white font-semibold">NeXskill</strong> under the mentorship of{' '}
              <strong className="text-amber-300 font-semibold">Sir Ahmad Basit</strong>. I am passionate
              about understanding how businesses grow, connect with customers, and build their
              digital presence.
            </p>

            {/* Action Buttons: Red Primary & Golden-Border Secondary */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-red-950/60 inline-flex items-center gap-2 border border-red-500/30 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:scale-[1.02]"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>

              <a
                href="#about"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-amber-500/30 hover:border-amber-400 rounded-lg transition-all inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:scale-[1.02]"
              >
                <span>Explore My Journey</span>
              </a>
            </div>

            {/* Clean Unboxed Trust Markers in Gold and Neutral Tones */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-neutral-300 font-medium">NeXskill – Be Productive</span>
              </div>
              <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-neutral-300 font-medium">Mentored by Sir Ahmad Basit</span>
              </div>
              <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-neutral-300 font-medium">Gulberg, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Portrait Card with Interactive 3D Perspective Tilt & Specular Golden Glare */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md mx-auto group cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: '1000px',
              }}
            >
              {/* Dual-layer ambient glow in black & golden tones */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/35 via-yellow-500/20 to-black blur-2xl -z-10 group-hover:from-amber-500/50 group-hover:via-yellow-500/30 transition-all duration-500" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-amber-400/40 via-yellow-600/20 to-black blur-md -z-10" />

              <div
                className="relative rounded-3xl overflow-hidden border border-amber-500/35 bg-gradient-to-b from-[#141208] via-[#0A0905] to-black shadow-[0_0_50px_rgba(245,158,11,0.2)] p-3 sm:p-4 transition-all duration-200 ease-out will-change-transform"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                }}
              >
                {/* Black & Golden frame directly wrapping the portrait */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-b from-amber-400/60 via-amber-500/25 to-black shadow-[0_0_30px_rgba(245,158,11,0.25)] overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-square bg-black">
                    {/* Black & Golden radiant backdrop directly behind the image */}
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(245,158,11,0.35)_0%,_rgba(217,119,6,0.15)_40%,_rgba(10,9,5,0.85)_75%,_#000000_100%)] pointer-events-none z-0"
                      aria-hidden="true"
                    />

                    <img
                      src={portraitImg}
                      alt="Hammad Rasool – Official Profile Photo"
                      referrerPolicy="no-referrer"
                      className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Specular Golden Glare that moves with cursor */}
                    <div
                      className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
                      style={{
                        opacity: glare.opacity,
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(245, 158, 11, 0.45) 0%, rgba(251, 191, 36, 0.2) 25%, transparent 60%)`,
                      }}
                    />
                  </div>
                </div>

                {/* Subdued info bar below */}
                <div className="pt-4 pb-2 px-3 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                      <span>Hammad Rasool</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.9)] inline-block"></span>
                    </div>
                    <div className="text-xs text-amber-400 font-semibold mt-0.5">
                      Digital Marketing Learner & Web Developer
                    </div>
                    <a
                      href="mailto:AureVon9990@gmail.com"
                      className="text-xs text-neutral-300 hover:text-amber-300 flex items-center gap-1.5 mt-1.5 transition-colors font-mono"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>AureVon9990@gmail.com</span>
                    </a>
                  </div>
                  <div className="text-right text-[11px] text-neutral-400 hidden sm:block self-start pt-1">
                    <div className="text-amber-300 font-bold">Gulberg</div>
                    <div className="text-neutral-400">Lahore, Pakistan</div>
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

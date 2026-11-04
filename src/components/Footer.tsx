import React from 'react';
import { ArrowUp, Mail, MapPin, Globe, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenVercelGuide: () => void;
  onOpenInquiries: () => void;
  inquiryCount: number;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenVercelGuide,
  onOpenInquiries,
  inquiryCount,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="text-lg font-extrabold text-white hover:text-amber-400 transition-colors inline-flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] inline-block"></span>
              <span>HAMMAD RASOOL</span>
            </a>
            <p className="text-neutral-300 text-xs leading-relaxed max-w-sm">
              Official personal professional brand website of Hammad Rasool. Digital marketing
              learner, aspiring professional marketer, and web developer mentored at NeXskill in Arfa
              Software Technology Park, Lahore.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="text-neutral-300">Gulberg, Lahore, Pakistan</span>
              </span>
              <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">·</span>
              <a
                href="mailto:AureVon9990@gmail.com"
                className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-400 font-bold font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>AureVon9990@gmail.com</span>
              </a>
              <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">·</span>
              <a
                href="mailto:hammadrasool9990@gmail.com"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-neutral-300 font-mono"
              >
                <span>hammadrasool9990@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  01. Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  02. About My Journey
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-400 transition-colors">
                  03. Skills & Focus
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  04. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Integrity & Management Tools */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Authenticity & Site Tools
            </div>
            <p className="text-neutral-400 leading-relaxed text-[11px]">
              Built with genuine information only. No unverified work history, fake client logos, or
              hallucinated statistics.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={onOpenVercelGuide}
                className="text-left text-xs text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1.5 font-medium"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Vercel Deployment Guide (Beginner Friendly)</span>
              </button>
              <button
                type="button"
                onClick={onOpenInquiries}
                className="text-left text-xs text-neutral-300 hover:text-white flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                <span>Website Inquiries Drawer ({inquiryCount} received)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Hammad Rasool. All rights reserved. Built for professional
            credibility and authentic presentation.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs border border-neutral-800"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

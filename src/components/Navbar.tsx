import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenVercelGuide: () => void;
  onOpenInquiries: () => void;
  inquiryCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVercelGuide, onOpenInquiries, inquiryCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills & Focus', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#08080A]/95 backdrop-blur-md border-b border-neutral-800 shadow-xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single Text Element) */}
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] inline-block"></span>
            <span>HAMMAD RASOOL</span>
          </a>

          {/* Zone 2: Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 relative py-1 text-neutral-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Tools */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {inquiryCount > 0 && (
              <button
                type="button"
                onClick={onOpenInquiries}
                className="px-3 py-1.5 text-xs font-semibold text-amber-400 hover:text-white bg-neutral-900 border border-amber-500/30 hover:border-amber-400 rounded-lg transition-colors whitespace-nowrap shrink-0"
                title="View received contact inquiries"
              >
                Inquiries ({inquiryCount})
              </button>
            )}

            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-lg transition-all shadow-md shadow-red-950/60 whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 border border-red-500/20"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08080A]/98 backdrop-blur-xl border-b border-neutral-800 px-5 pt-3 pb-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-md"
            >
              Let's Connect
            </a>
            <div className="flex items-center justify-between text-xs text-neutral-400 px-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVercelGuide();
                }}
                className="hover:text-amber-400 underline underline-offset-4"
              >
                Vercel Deploy Guide
              </button>
              {inquiryCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiries();
                  }}
                  className="hover:text-amber-400 font-semibold"
                >
                  Inquiries ({inquiryCount})
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

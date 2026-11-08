import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VercelGuideModal } from './components/VercelGuideModal';
import { InquiryManagerModal } from './components/InquiryManagerModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AmbientCursorGlow } from './components/AmbientCursorGlow';
import { ContactSubmission } from './types';

export default function App() {
  const [isVercelGuideOpen, setIsVercelGuideOpen] = useState(false);
  const [isInquiriesOpen, setIsInquiriesOpen] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(0);

  const refreshInquiryCount = () => {
    try {
      const raw = localStorage.getItem('hr_contact_submissions');
      if (raw) {
        const list: ContactSubmission[] = JSON.parse(raw);
        setInquiryCount(list.length);
      } else {
        setInquiryCount(0);
      }
    } catch {
      setInquiryCount(0);
    }
  };

  useEffect(() => {
    refreshInquiryCount();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-white relative">
      {/* Advanced Global Visual Effects: Aqua Scroll Progress & Aqua Ambient Cursor Glow */}
      <ScrollProgressBar />
      <AmbientCursorGlow />

      {/* Top Navigation */}
      <Navbar
        onOpenVercelGuide={() => setIsVercelGuideOpen(true)}
        onOpenInquiries={() => setIsInquiriesOpen(true)}
        inquiryCount={inquiryCount}
      />

      {/* Main Content: Exactly 4 Streamlined Pages */}
      <main className="flex-1">
        {/* Page 1: Home / Hero */}
        <Hero />

        {/* Page 2: About Me / My Journey & Education */}
        <AboutSection />

        {/* Page 3: Skills, Strategy & Campaign Sandbox */}
        <SkillsSection />

        {/* Page 4: Contact & Collaboration */}
        <ContactSection onSubmissionSuccess={refreshInquiryCount} />
      </main>

      {/* Professional Footer */}
      <Footer
        onOpenVercelGuide={() => setIsVercelGuideOpen(true)}
        onOpenInquiries={() => setIsInquiriesOpen(true)}
        inquiryCount={inquiryCount}
      />

      {/* Beginner Vercel Deployment Guide Modal */}
      <VercelGuideModal
        isOpen={isVercelGuideOpen}
        onClose={() => setIsVercelGuideOpen(false)}
      />

      {/* Inquiry Management Modal */}
      <InquiryManagerModal
        isOpen={isInquiriesOpen}
        onClose={() => setIsInquiriesOpen(false)}
        onInquiriesUpdated={refreshInquiryCount}
      />
    </div>
  );
}

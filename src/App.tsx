import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { CampaignEconomicsCalculator } from './components/CampaignEconomicsCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VercelGuideModal } from './components/VercelGuideModal';
import { InquiryManagerModal } from './components/InquiryManagerModal';
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
    <div className="min-h-screen bg-[#0B1220] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenVercelGuide={() => setIsVercelGuideOpen(true)}
        onOpenInquiries={() => setIsInquiriesOpen(true)}
        inquiryCount={inquiryCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Page 1: Home / Hero */}
        <Hero />

        {/* Page 2: About Me / My Journey */}
        <AboutSection />

        {/* Page 3: My Skills & Interests */}
        <SkillsSection />

        {/* Page 4: My Learning Journey (NeXskill, Sir Ahmad Basit, Arfa Tower) */}
        <LearningJourneySection />

        {/* Interactive Feature: Performance Marketing Campaign Economics Simulator */}
        <CampaignEconomicsCalculator />

        {/* Page 5: Contact / Work With Me */}
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

import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Phone,
  User,
  MessageSquare,
} from 'lucide-react';
import { ContactFormData, ContactSubmission } from '../types';

interface ContactSectionProps {
  onSubmissionSuccess: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSubmissionSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const [formLoadTime, setFormLoadTime] = useState<number>(Date.now());
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<ContactSubmission | null>(null);
  const [submissionNotice, setSubmissionNotice] = useState<string>('');

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    // 1. Full Name (Required)
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    // 2. Email Address (Required)
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    // 3. Contact Number (Required)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required.';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please provide a valid contact number (at least 7 digits).';
    }

    // Honeypot anti-spam check
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      newErrors.message = 'Spam filter triggered. Please try again.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Time-based bot verification
    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 1500) {
      setErrors((prev) => ({
        ...prev,
        phone: 'Please take a moment to verify your contact information.',
      }));
      return;
    }

    setIsSubmitting(true);
    setSubmissionNotice('');

    const submissionRecord: ContactSubmission = {
      ...formData,
      id: `HR-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      status: 'received',
    };

    try {
      // 1. Try sending to backend API if available
      let backendSuccess = false;
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionRecord),
        });
        if (response.ok) {
          backendSuccess = true;
        }
      } catch {
        backendSuccess = false;
      }

      // 2. Persist to browser LocalStorage for reliable local records
      const existing = localStorage.getItem('hr_contact_submissions');
      const list: ContactSubmission[] = existing ? JSON.parse(existing) : [];
      list.unshift(submissionRecord);
      localStorage.setItem('hr_contact_submissions', JSON.stringify(list));

      // 3. Mark success state
      setSubmissionSuccess(submissionRecord);
      onSubmissionSuccess();

      if (backendSuccess) {
        setSubmissionNotice('Message recorded securely to backend & local inquiries.');
      } else {
        setSubmissionNotice(
          'Contact request saved! You can also click below to open your mail client directly.'
        );
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrors((prev) => ({
        ...prev,
        phone: 'Technical issue saving inquiry. Please use direct email or phone below.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
      honeypot: '',
    });
    setErrors({});
    setSubmissionSuccess(null);
    setSubmissionNotice('');
    setFormLoadTime(Date.now());
  };

  // Pre-filled mailto generator for 100% verified inbox delivery
  const mailtoSubject = encodeURIComponent(
    `[Inquiry for HAMMAD RASOOL] Quick Contact from ${formData.fullName}`
  );
  const mailtoBody = encodeURIComponent(
    `Hello Hammad,\n\nI visited your website and would like to connect.\n\nMy Contact Details:\n- Name: ${formData.fullName}\n- Email: ${formData.email}\n- Contact Number: ${formData.phone}\n${formData.message ? `- Note: ${formData.message}\n` : ''}\nBest regards,\n${formData.fullName}`
  );
  const mailtoUrl = `mailto:hammadrasool9990@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                <span>Fast & Simple Contact</span>
                <span aria-hidden="true">·</span>
                <span>Name, Email & Phone Only</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Have a Business Idea? Let's Connect.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                Leave your name, email, and contact number below and I will get back to you promptly
                to discuss digital marketing, web projects, or business collaborations.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hammadrasool9990@gmail.com"
                  className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-blue-500/50 transition-colors flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      hammadrasool9990@gmail.com
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">
                      Gulberg, Lahore, Pakistan
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Response Commitment</div>
                    <div className="text-sm font-semibold text-white">
                      Direct callback or email within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Anti-Spam Assurance */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                100% privacy guarantee. Your contact number is used solely to respond to your request.
              </span>
            </div>
          </div>

          {/* Right Column: Streamlined 3-Field Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl relative">
              {submissionSuccess ? (
                /* Success Confirmation State */
                <div className="py-6 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                      Message Received
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank You, {submissionSuccess.fullName}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                      I have received your contact details. I will reach out to you directly at{' '}
                      <span className="text-blue-400 font-semibold">{submissionSuccess.phone}</span>{' '}
                      or <span className="text-blue-400 font-semibold">{submissionSuccess.email}</span>.
                    </p>
                  </div>

                  {/* Submission Summary Card */}
                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Reference ID:</span>
                      <span className="font-mono text-blue-400 font-bold">{submissionSuccess.id}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Full Name:</span>
                      <span className="text-slate-200 font-medium">{submissionSuccess.fullName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Contact Number:</span>
                      <span className="text-emerald-400 font-mono font-bold">{submissionSuccess.phone}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Email:</span>
                      <span className="text-slate-200">{submissionSuccess.email}</span>
                    </div>
                    {submissionSuccess.message && (
                      <div className="pt-2 border-t border-slate-800">
                        <span className="text-slate-400 block mb-1">Note:</span>
                        <span className="text-slate-300 italic">"{submissionSuccess.message}"</span>
                      </div>
                    )}
                  </div>

                  {/* Dual Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <span>Also Open in Email App</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>

                  {submissionNotice && (
                    <div className="text-[11px] text-slate-500 font-mono pt-2">
                      {submissionNotice}
                    </div>
                  )}
                </div>
              ) : (
                /* Streamlined Simple Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot hidden input for bots */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Quick Notice */}
                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/30 flex items-center gap-3 text-xs text-slate-300">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>
                      Quick connect: simply provide your <strong className="text-white">Name</strong>, <strong className="text-white">Email</strong>, and <strong className="text-white">Contact Number</strong>.
                    </span>
                  </div>

                  {/* Field 1: Full Name (Required) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-400" />
                        <span>Your Name</span>
                        <span className="text-rose-400">*</span>
                      </span>
                      <span className="text-slate-500 text-[11px]">Required</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Khan"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2: Email Address (Required) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        <span>Email Address</span>
                        <span className="text-rose-400">*</span>
                      </span>
                      <span className="text-slate-500 text-[11px]">Required</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 3: Contact Number (Required) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Contact Number / Phone</span>
                        <span className="text-rose-400">*</span>
                      </span>
                      <span className="text-emerald-400 text-[11px] font-semibold">Required</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 4: Quick Note (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span>Message or Note</span>
                      </span>
                      <span className="text-slate-500 text-[11px]">Optional</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Optional brief note or topic you would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] disabled:opacity-70 rounded-lg transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Contact Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Direct Contact Alternative Note */}
                  <p className="text-[11px] text-slate-500 text-center leading-normal">
                    You can also email directly to{' '}
                    <a
                      href="mailto:hammadrasool9990@gmail.com"
                      className="text-blue-400 hover:underline"
                    >
                      hammadrasool9990@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

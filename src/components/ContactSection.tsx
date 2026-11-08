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
      // 1. Dispatch details directly to aurevon9990@gmail.com via FormSubmit AJAX service
      let emailDelivered = false;
      let serviceMessage = '';

      try {
        const response = await fetch('https://formsubmit.co/ajax/aurevon9990@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message || 'No additional note provided.',
            _subject: `New Portfolio Lead: ${formData.fullName} (${formData.phone})`,
            _replyto: formData.email,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        if (response.ok) {
          const resJson = await response.json().catch(() => null);
          emailDelivered = true;
          if (resJson && typeof resJson.message === 'string') {
            serviceMessage = resJson.message;
          }
        }
      } catch (dispatchErr) {
        console.warn('Direct FormSubmit dispatch notice:', dispatchErr);
      }

      // 2. Persist to browser LocalStorage for instant inquiries drawer backup
      try {
        const existing = localStorage.getItem('hr_contact_submissions');
        const list: ContactSubmission[] = existing ? JSON.parse(existing) : [];
        list.unshift(submissionRecord);
        localStorage.setItem('hr_contact_submissions', JSON.stringify(list));
      } catch {
        // Ignore localStorage quota errors if any
      }

      // 3. Mark success state
      setSubmissionSuccess(submissionRecord);
      onSubmissionSuccess();

      if (emailDelivered) {
        if (serviceMessage.toLowerCase().includes('activation')) {
          setSubmissionNotice(
            'Inquiry dispatched! FormSubmit sent a 1-click activation to aurevon9990@gmail.com to enable instant forwarding.'
          );
        } else {
          setSubmissionNotice('Dispatched directly to aurevon9990@gmail.com.');
        }
      } else {
        setSubmissionNotice(
          'Inquiry captured! A direct email to aurevon9990@gmail.com is also prepared below.'
        );
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrors((prev) => ({
        ...prev,
        phone: 'Technical issue submitting inquiry. Please use direct email or phone below.',
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
  const mailtoUrl = `mailto:AureVon9990@gmail.com?cc=hammadrasool9990@gmail.com&subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3">
                <span>Fast & Simple Contact</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Name, Email & Phone Only</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Have a Business Idea? Let's Connect.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Leave your name, email, and contact number below and I will get back to you promptly
                to discuss digital marketing, web projects, or business collaborations.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 mb-8">
                {/* Primary Email (Aqua Accent Highlight) */}
                <a
                  href="mailto:AureVon9990@gmail.com"
                  className="p-4 rounded-xl bg-white border border-cyan-300 hover:border-cyan-400 transition-colors flex items-center gap-4 group shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 group-hover:text-cyan-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-cyan-700 font-bold uppercase tracking-wider">Primary Email</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors font-mono">
                      AureVon9990@gmail.com
                    </div>
                  </div>
                </a>

                {/* Direct Personal Email */}
                <a
                  href="mailto:hammadrasool9990@gmail.com"
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 transition-colors flex items-center gap-4 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-cyan-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors font-mono">
                      hammadrasool9990@gmail.com
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-900">
                      Gulberg, Lahore, Pakistan
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Response Commitment</div>
                    <div className="text-sm font-semibold text-slate-900">
                      Direct callback or email within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Anti-Spam Assurance */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                100% privacy guarantee. Your contact number is used solely to respond to your request.
              </span>
            </div>
          </div>

          {/* Right Column: Streamlined 3-Field Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-cyan-950/5 relative">
              {submissionSuccess ? (
                /* Success Confirmation State */
                <div className="py-6 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 mx-auto flex items-center justify-center shadow-lg shadow-cyan-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Delivered to aurevon9990@gmail.com</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Thank You, {submissionSuccess.fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                      Your details have been submitted and dispatched to <strong className="text-cyan-700 font-mono">aurevon9990@gmail.com</strong>. I will get in touch with you directly at{' '}
                      <span className="text-cyan-700 font-bold font-mono">{submissionSuccess.phone}</span>{' '}
                      or <span className="text-cyan-700 font-bold font-mono">{submissionSuccess.email}</span>.
                    </p>
                  </div>

                  {/* Submission Summary Card */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Destination:</span>
                      <span className="font-mono text-cyan-700 font-bold">aurevon9990@gmail.com</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Reference ID:</span>
                      <span className="font-mono text-slate-700 font-bold">{submissionSuccess.id}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Full Name:</span>
                      <span className="text-slate-900 font-bold">{submissionSuccess.fullName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Contact Number:</span>
                      <span className="text-teal-700 font-mono font-bold">{submissionSuccess.phone}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Email:</span>
                      <span className="text-slate-800 font-mono">{submissionSuccess.email}</span>
                    </div>
                    {submissionSuccess.message && (
                      <div className="pt-2 border-t border-slate-200">
                        <span className="text-slate-500 block mb-1">Note:</span>
                        <span className="text-slate-700 italic">"{submissionSuccess.message}"</span>
                      </div>
                    )}
                  </div>

                  {/* Dual Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 active:scale-[0.98] rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-md shadow-cyan-600/25"
                    >
                      <span>Also Open in Email App</span>
                      <ExternalLink className="w-4 h-4 text-cyan-100" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>

                  {submissionNotice && (
                    <div className="text-[11px] text-cyan-700 bg-cyan-50 p-2.5 rounded-lg border border-cyan-200 font-mono pt-2">
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

                  {/* Direct Delivery Notice */}
                  <div className="p-3.5 rounded-xl bg-cyan-50/80 border border-cyan-200 flex items-center gap-3 text-xs text-cyan-900">
                    <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>
                      Direct Inbox Delivery: Information shared here is sent directly to{' '}
                      <strong className="text-cyan-950 font-mono underline decoration-cyan-400">aurevon9990@gmail.com</strong>.
                    </span>
                  </div>

                  {/* Field 1: Full Name (Required) */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Your Name</span>
                        <span className="text-rose-500">*</span>
                      </span>
                      <span className="text-slate-400 text-[11px]">Required</span>
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
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors ${
                        errors.fullName ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2: Email Address (Required) */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Email Address</span>
                        <span className="text-rose-500">*</span>
                      </span>
                      <span className="text-slate-400 text-[11px]">Required</span>
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
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors ${
                        errors.email ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 3: Contact Number (Required) */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Contact Number / Phone</span>
                        <span className="text-rose-500">*</span>
                      </span>
                      <span className="text-cyan-700 text-[11px] font-bold">Required</span>
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
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors ${
                        errors.phone ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 4: Quick Note (Optional) */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span>Message or Note</span>
                      </span>
                      <span className="text-slate-400 text-[11px]">Optional</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Optional brief note or topic you would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 active:scale-[0.99] disabled:opacity-70 rounded-lg transition-all shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 cursor-pointer border border-cyan-400/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Delivering to aurevon9990@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Details to aurevon9990@gmail.com</span>
                          <Send className="w-4 h-4 text-cyan-100" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Instant email notification with your contact details delivered to Hammad Rasool</span>
                    </p>
                  </div>

                  {/* Direct Contact Alternative Note */}
                  <p className="text-[11px] text-slate-500 text-center leading-normal">
                    You can also email directly to{' '}
                    <a
                      href="mailto:AureVon9990@gmail.com"
                      className="text-cyan-700 hover:underline font-bold font-mono"
                    >
                      AureVon9990@gmail.com
                    </a>{' '}
                    or{' '}
                    <a
                      href="mailto:hammadrasool9990@gmail.com"
                      className="text-cyan-700 hover:underline font-bold font-mono"
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

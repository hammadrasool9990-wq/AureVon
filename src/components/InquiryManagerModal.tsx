import React, { useState, useEffect } from 'react';
import { X, Mail, Download, Trash2, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import { ContactSubmission } from '../types';

interface InquiryManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquiriesUpdated: () => void;
}

export const InquiryManagerModal: React.FC<InquiryManagerModalProps> = ({
  isOpen,
  onClose,
  onInquiriesUpdated,
}) => {
  const [inquiries, setInquiries] = useState<ContactSubmission[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadInquiries = () => {
    const raw = localStorage.getItem('hr_contact_submissions');
    if (raw) {
      try {
        setInquiries(JSON.parse(raw));
      } catch {
        setInquiries([]);
      }
    } else {
      setInquiries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyInquiry = (inquiry: ContactSubmission) => {
    const text = `Contact Lead:\n- Name: ${inquiry.fullName}\n- Email: ${inquiry.email}\n- Contact Number: ${inquiry.phone}${inquiry.message ? `\n- Message: ${inquiry.message}` : ''}`;
    navigator.clipboard.writeText(text);
    setCopiedId(inquiry.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Date', 'Name', 'Email', 'Phone', 'Message'];
    const rows = inquiries.map((item) => [
      item.id,
      new Date(item.createdAt).toLocaleString(),
      `"${item.fullName.replace(/"/g, '""')}"`,
      `"${item.email.replace(/"/g, '""')}"`,
      `"${(item.phone || '').replace(/"/g, '""')}"`,
      `"${(item.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `hammadrasool_inquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear stored inquiries from your browser?')) {
      localStorage.removeItem('hr_contact_submissions');
      setInquiries([]);
      onInquiriesUpdated();
    }
  };

  const handleAddSample = () => {
    const sample: ContactSubmission = {
      id: `HR-SAMPLE-${Date.now().toString(36).toUpperCase()}`,
      fullName: 'Ahmad Basit (Demo Test)',
      companyName: 'NeXskill Strategy Group',
      email: 'ahmadbasit.mentor@example.com',
      phone: '+92 300 1234567',
      website: 'https://nexskill.com',
      interest: 'Performance Marketing',
      message: 'Excellent work on the personal professional branding site, Hammad! Keep maintaining this standard of integrity and discipline.',
      createdAt: new Date().toISOString(),
      status: 'received',
    };
    const updated = [sample, ...inquiries];
    localStorage.setItem('hr_contact_submissions', JSON.stringify(updated));
    setInquiries(updated);
    onInquiriesUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Inquiry Records & Leads
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              Received Website Inquiries ({inquiries.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400">
            Messages submitted via the contact form on <span className="text-slate-200">HAMMADRASOOL.com</span>
          </div>
          <div className="flex items-center gap-2">
            {inquiries.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="px-3 py-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="px-3 py-1.5 text-rose-400 hover:text-rose-300 bg-rose-950/40 hover:bg-rose-950/60 border border-rose-900/40 rounded-md transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </>
            )}
            <button
              type="button"
              onClick={handleAddSample}
              className="px-3 py-1.5 text-blue-400 hover:text-blue-300 bg-blue-950/40 hover:bg-blue-950/60 border border-blue-900/40 rounded-md transition-colors"
            >
              + Add Test Inquiry
            </button>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {inquiries.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <MessageSquare className="w-12 h-12 text-slate-600 mx-auto" />
              <div className="text-base font-semibold text-slate-300">
                No inquiries submitted yet
              </div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Fill out the contact form on the home page or click "+ Add Test Inquiry" to test how
                messages appear.
              </p>
            </div>
          ) : (
            inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <span className="font-mono text-xs text-blue-400 font-bold mr-2">
                      {inquiry.id}
                    </span>
                    <span className="text-sm font-bold text-white">{inquiry.fullName}</span>
                    {inquiry.companyName && (
                      <span className="text-xs text-slate-400 ml-2">
                        ({inquiry.companyName})
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {new Date(inquiry.createdAt).toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500">Contact Number: </span>
                    <a
                      href={`tel:${inquiry.phone}`}
                      className="text-emerald-400 font-mono font-bold hover:underline"
                    >
                      {inquiry.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500">Email: </span>
                    <a
                      href={`mailto:${inquiry.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      {inquiry.email}
                    </a>
                  </div>
                </div>

                {inquiry.message && (
                  <div className="p-3 rounded-lg bg-slate-950 text-xs text-slate-300 leading-relaxed font-sans">
                    "{inquiry.message}"
                  </div>
                )}

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleCopyInquiry(inquiry)}
                    className="px-2.5 py-1 text-[11px] text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors inline-flex items-center gap-1"
                  >
                    {copiedId === inquiry.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${inquiry.email}?subject=${encodeURIComponent(
                      `Re: Your inquiry on HAMMADRASOOL.com - ${inquiry.interest}`
                    )}`}
                    className="px-2.5 py-1 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors inline-flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Reply via Email</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

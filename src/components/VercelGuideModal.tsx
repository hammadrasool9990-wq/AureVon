import React, { useState } from 'react';
import { X, Globe, CheckCircle2, Copy, Check, ExternalLink, ArrowRight, Server, Shield } from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const steps = [
    {
      number: '01',
      title: 'Push Code to GitHub',
      detail:
        'Create a free repository on github.com (e.g. "hammadrasool-portfolio") and push your project code.',
      command: 'git init\ngit add .\ngit commit -m "Launch HAMMAD RASOOL Website"\ngit branch -M main\ngit remote add origin https://github.com/<your-username>/hammadrasool-portfolio.git\ngit push -u origin main',
    },
    {
      number: '02',
      title: 'Import Repository into Vercel',
      detail:
        'Go to vercel.com, log in with GitHub, and click "Add New..." -> "Project". Select your repository from the list.',
      command: null,
    },
    {
      number: '03',
      title: 'Automatic Build Configuration',
      detail:
        'Vercel automatically recognizes Vite! Leave default settings untouched:\n- Framework Preset: Vite\n- Build Command: npm run build\n- Output Directory: dist\nClick "Deploy". Your site is live on a free vercel.app link in ~30 seconds.',
      command: null,
    },
    {
      number: '04',
      title: 'Attach Custom Domain (Optional)',
      detail:
        'In your Vercel project dashboard, go to Settings -> Domains if you wish to attach your own custom branded domain.',
      command: null,
    },
    {
      number: '05',
      title: 'Configure DNS Records at Your Registrar',
      detail:
        'Log in to where you purchased your domain (Namecheap, GoDaddy, Hostinger, Cloudflare) and set these DNS records:',
      dnsRecords: [
        { type: 'A', name: '@', value: '76.76.21.21' },
        { type: 'CNAME', name: 'www', value: 'cname.vercel-dns.com' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-[#0E0E12] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Beginner Deployment Manual
              </div>
              <h3 className="text-xl font-bold text-white">
                How to Deploy HAMMAD RASOOL to Vercel
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-neutral-300">
          <p className="text-sm text-neutral-300 leading-relaxed bg-black p-4 rounded-xl border border-neutral-800">
            Deploying this website to <strong className="text-white">Vercel</strong> is 100% free,
            takes less than 3 minutes, and requires no server administration. Follow these 5 simple
            steps:
          </p>

          <div className="space-y-5">
            {steps.map((s) => (
              <div
                key={s.number}
                className="p-5 rounded-xl bg-black border border-neutral-800 space-y-3"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-amber-400 bg-neutral-900 px-2 py-0.5 rounded border border-amber-500/30">
                    Step {s.number}
                  </span>
                  <h4 className="text-base font-bold text-white">{s.title}</h4>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line">
                  {s.detail}
                </p>

                {s.command && (
                  <div className="relative">
                    <pre className="p-3 rounded-lg bg-[#141418] text-[11px] font-mono text-neutral-200 overflow-x-auto border border-neutral-800">
                      {s.command}
                    </pre>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(s.command, s.number)}
                      className="absolute top-2 right-2 px-2 py-1 text-[10px] text-neutral-400 hover:text-white bg-neutral-900 rounded flex items-center gap-1 border border-neutral-700"
                    >
                      {copiedText === s.number ? (
                        <>
                          <Check className="w-3 h-3 text-amber-400" />
                          <span className="text-amber-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {s.dnsRecords && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border border-neutral-800 rounded-lg">
                      <thead className="bg-[#141418] text-neutral-400 font-semibold border-b border-neutral-800">
                        <tr>
                          <th className="px-3 py-2">Type</th>
                          <th className="px-3 py-2">Host / Name</th>
                          <th className="px-3 py-2">Target / Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800 font-mono">
                        {s.dnsRecords.map((dns, idx) => (
                          <tr key={idx} className="bg-black">
                            <td className="px-3 py-2 text-amber-400 font-bold">{dns.type}</td>
                            <td className="px-3 py-2 text-neutral-200">{dns.name}</td>
                            <td className="px-3 py-2 text-amber-300">{dns.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Value note */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-start gap-3 text-xs text-neutral-300">
            <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Free Automatic SSL & Global CDN:</strong>
              Vercel automatically provisions a free SSL certificate (HTTPS padlock) for
              your website and serves the site via worldwide edge servers for sub-second loading
              speeds.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-black border-t border-neutral-800 flex items-center justify-between">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-medium"
          >
            <span>Visit vercel.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-md"
          >
            Got It, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

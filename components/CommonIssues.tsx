"use client"
import React from 'react';
import Link from 'next/link';
import { 
  AlertCircle, 
  Wifi, 
  XOctagon, 
  Tv, 
  Share2, 
  Radio, 
  Cpu, 
  Smartphone,
  PhoneCall,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const hardwareIssues = [
  { text: "Printer won't print / Stuck queues", icon: <XOctagon className="w-4 h-4 text-rose-500" /> },
  { text: "Printer showing offline status", icon: <AlertCircle className="w-4 h-4 text-rose-500" /> },
  { text: "Computer cannot find local printer", icon: <Tv className="w-4 h-4 text-rose-500" /> },
  { text: "Driver installation & update errors", icon: <Cpu className="w-4 h-4 text-rose-500" /> },
  { text: "Mobile printing setup issues (iOS/Android)", icon: <Smartphone className="w-4 h-4 text-rose-500" /> }
];

const networkIssues = [
  { text: "Cannot connect printer to local Wi-Fi", icon: <Wifi className="w-4 h-4 text-amber-500" /> },
  { text: "Network printer not accessible by devices", icon: <Share2 className="w-4 h-4 text-amber-500" /> },
  { text: "Static & DHCP IP address conflicts", icon: <AlertCircle className="w-4 h-4 text-amber-500" /> },
  { text: "Router configuration & firewall blockages", icon: <Radio className="w-4 h-4 text-amber-500" /> },
  { text: "Intermittent wireless connectivity drops", icon: <Wifi className="w-4 h-4 text-amber-500" /> }
];


    const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

export default function IssuesAndContact() {
  return (
    <section className="py-15 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* ================= SECTION 1: COMMON ISSUES ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
            Troubleshooting Index
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
            Common Issues We Resolve
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg">
            Is your device throwing error codes or dropping from the network? We diagnose and systematically clear all of these daily roadblocks.
          </p>
        </div>

        {/* Two-Column Structured Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          
          {/* Column 1: Hardware & System Issues */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              Hardware & Device Faults
            </h3>
            <div className="space-y-4">
              {hardwareIssues.map((issue, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3.5 bg-slate-50/50 rounded-xl border border-slate-100/60 hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                    {issue.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{issue.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Network & Infrastructure Issues */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              Network & Topology Errors
            </h3>
            <div className="space-y-4">
              {networkIssues.map((issue, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3.5 bg-slate-50/50 rounded-xl border border-slate-100/60 hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                    {issue.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{issue.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= SECTION 2: CONTACT CTA BANNER ================= */}
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden group">
          {/* Radial Decorative Background Glow */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-110" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <PhoneCall className="w-3.5 h-3.5" /> Direct Support Pipeline
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight mb-3">
                Need assistance with your printer or network?
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Our certified technicians provide professional support for residential and business customers, helping keep printers and networks running smoothly and efficiently.
              </p>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" /> Encrypted Remote Link
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" /> Vetted IT Engineers
                </div>
              </div>
            </div>

            {/* Action buttons stack */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link 
                href="/ContactUs"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/20 active:scale-98 group/btn text-center"
              >
                Contact Printer Service LLC
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => openChat()}
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700/60 font-semibold text-sm transition-all active:scale-98 text-center"
              >
                Chat Support Live
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import { useState } from 'react';
import { 
  Download, 
  Monitor, 
  Terminal, 
  CheckCircle, 
  AlertTriangle,
  RefreshCw,
  Cpu,
  Wifi
} from 'lucide-react';
import Contact from '@/components/Contact';

// Brand helper configs
const brandPartners = [
  { name: "HP", portal: "123.hp.com", logoText: "HP Smart Setup" },
  { name: "Epson", portal: "epson.com/support", logoText: "Epson Connect" },
  { name: "Brother", portal: "setup.brother.com", logoText: "Brother iPrint" },
  { name: "Canon", portal: "ij.start.canon", logoText: "Canon IJ Start" }
];

export default function PrinterSetupPage() {
  const [selectedOS, setSelectedOS] = useState<'windows' | 'mac'>('windows');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* --- HERO / SEARCH REGION --- */}
      <section className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-500/30">
            Support Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Printer Setup & <span className="text-blue-500">Driver Installation</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed">
            Configure wireless networking, download matching utilities, or request automated assistance from a certified Printer Service LLC expert.
          </p>

          {/* Interactive Portal Lookup Bar */}
          <div >
            <a href="/DownloadDrivers" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-xs font-black uppercase transition-all tracking-wider whitespace-nowrap">
                Download Printer Drivers
            </a>
          </div>
        </div>
      </section>

      {/* --- INSTALLATION WIZARD (OS DEPENDENT) --- */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          
          {/* Tabs for OS choice */}
          <div className="bg-slate-900/5 border-b border-slate-100 p-4 flex justify-center gap-4">
            <button 
              onClick={() => setSelectedOS('windows')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${selectedOS === 'windows' ? 'bg-white text-blue-600 shadow-md shadow-slate-200/80' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Monitor size={16} /> Windows Configuration
            </button>
            <button 
              onClick={() => setSelectedOS('mac')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${selectedOS === 'mac' ? 'bg-white text-blue-600 shadow-md shadow-slate-200/80' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Terminal size={16} /> macOS Configuration
            </button>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Download className="text-blue-600" /> 
              Step-by-Step {selectedOS === 'windows' ? 'Windows' : 'macOS'} Setup Guide
            </h2>

            {selectedOS === 'windows' ? (
              /* --- WINDOWS CONTENT --- */
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 text-blue-600 font-black px-3.5 py-1.5 rounded-xl border border-blue-100 text-sm">01</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Turn On & Prepare Connection</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Power on your hardware deployment framework. Verify that your USB cabling is disconnected or that the local enterprise wireless broadcasting channel is fully active.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 text-blue-600 font-black px-3.5 py-1.5 rounded-xl border border-blue-100 text-sm">02</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Initialize Official Executable Download</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Navigate using the official manufacturer links above to download the correct driver bundle corresponding to your target platform configuration (e.g., Windows 11/10 64-bit architecture).</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 text-blue-600 font-black px-3.5 py-1.5 rounded-xl border border-blue-100 text-sm">03</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Execute Installation Setup Wizard</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Double-click your download package. Accept the formal licensing terms, assign connection definitions (Wireless, Network Ethernet, or Local USB), and click finish to verify registration benchmarks.</p>
                  </div>
                </div>
              </div>
            ) : (
              /* --- MAC CONTENT --- */
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 text-blue-600 font-black px-3.5 py-1.5 rounded-xl border border-blue-100 text-sm">01</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Mount Disk Image (.dmg) Container</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Download and initialize the proprietary installation file from your machine vendor. Accept standard system dialogues to mount the driver installer payload package container volume.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 text-blue-600 font-black px-3.5 py-1.5 rounded-xl border border-blue-100 text-sm">02</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Authorize Security Permissions</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">When prompted, navigate inside your Mac Finder directories into Applications to grant necessary printing/scanning privileges for proper background communications.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 text-blue-600 font-black px-3.5 py-1.5 rounded-xl border border-blue-100 text-sm">03</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Register Endpoint in System Settings</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Open Apple menu Systems Settings &gt; Printers &amp; Scanners. Hit the (+) modifier sign element to safely bind your newly configured driver parameters into active operations.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- TROUBLESHOOTING & MEDIA RECONGESTION ZONE --- */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Media Object Slot */}
          <div className="h-80 md:h-96 bg-white rounded-[2.5rem] overflow-hidden p-6 border border-slate-200/60 shadow-lg flex items-center justify-center">
            <img 
              src="/service1.png" 
              alt="Printer Setup Instruction Diagram" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Troubleshooting List */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Common Installation Bottlenecks</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              If system processes drop communication lines or throw unreadable offline failure alerts during initialization procedures, cross-reference these checkmarks:
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-amber-50 text-amber-500 rounded-xl border border-amber-100"><AlertTriangle size={18} /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Printer Driver Conflicts</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Older components or corrupted software frameworks can lock active channels. Clear cache dependencies and execute a hard system restart prior to installing matching revisions.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-blue-50 text-blue-500 rounded-xl border border-blue-100"><Wifi size={18} /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Wireless Network Isolations</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Dual-band routing nodes operating separate 2.4GHz/5GHz bands frequently block cross-layer messaging. Sync client hardware onto matching subnet fields.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-emerald-50 text-emerald-50 rounded-xl border border-emerald-100"><CheckCircle size={18} /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Full OEM Packaging Packages</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Generic operating system drivers only support essential print triggers. Install full software packages to access hardware diagnostics, clean cycles, and cloud scanner utilities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ADDED SERVICE VALUE INCENTIVE BANNER --- */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <RefreshCw className="mx-auto mb-6 animate-spin duration-1000" size={40} />
          <h2 className="text-3xl font-black mb-4">Remote Direct Deployment Support</h2>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-8">
            Stuck in an installation infinite loop or can't bypass custom firewall security permissions? Avoid structural configuration risks—let our dedicated IT technicians connect securely and repair issues remotely right now.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-black tracking-widest bg-slate-900 px-8 py-4 rounded-xl border border-white/10 shadow-lg">
            <span className="flex items-center gap-2 text-blue-400"><Cpu size={16}/> Certified Tech Support</span>
          </div>
        </div>
      </section>

      {/* --- CONTACT COMPONENT --- */}
      <div className="pt-24 bg-white">
        <Contact />
      </div>

    </main>
  );
}
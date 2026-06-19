import React, { useRef } from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  Settings, 
  MonitorSmartphone, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

const categorizedServices = [
  {
    category: "Printer Installation & Setup",
    tagline: "Out-of-the-box configuration and deployment",
    icon: <Settings className="w-6 h-6" />,
    link: "/services/installation-setup",
    items: [
      "New printer setup",
      "Wireless printer configuration",
      "USB and network printer installation",
      "Driver installation and updates",
      "Mobile printing setup"
    ]
  },
  {
    category: "Printer Troubleshooting",
    tagline: "Fast diagnostics and hardware/software repair",
    icon: <Wrench className="w-6 h-6" />,
    link: "/services/troubleshooting",
    items: [
      "Printer offline issues",
      "Wireless connection problems",
      "Printing errors and error codes",
      "Paper jam assistance",
      "Slow printing performance",
      "Scan and copy function issues"
    ]
  },
  {
    category: "Remote Technical Support",
    tagline: "Instant, secure over-the-air digital diagnostics",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    link: "/services/remote-support",
    items: [
      "Secure remote assistance",
      "Driver and software troubleshooting",
      "Printer diagnostics",
      "Device connectivity troubleshooting",
      "General technical guidance"
    ]
  },
  {
    category: "Home Network & IP Services",
    tagline: "Complete local Wi-Fi and structural routing configuration",
    icon: <Network className="w-6 h-6" />,
    link: "/services/network-configuration",
    items: [
      "Home Wi-Fi Setup & router configuration",
      "Wi-Fi optimization & security settings",
      "Static IP configuration & DHCP setups",
      "Printer network integration (Wi-Fi/Shared)",
      "Multi-device access (Windows, Mac, Mobile)"
    ]
  }
];

export default function CategorizedServicesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Adjust the jump distance based on card layout widths
      const offset = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollContainerRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-15 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Module with Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
              What We Do
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4 tracking-tight md:text-4xl">
              Printer Services we offer
            </h2>
            <div className="h-1.5 w-16 bg-blue-600 rounded-full mb-4"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Reliable technical solutions tailored for homes and businesses. Use the slider controls to browse our explicit capability sets.
            </p>
          </div>
          
          {/* Slider Arrow Navigation Controls */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2 px-2 -mx-2"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {categorizedServices.map((cat, idx) => (
            <div 
              key={idx}
              className="min-w-[310px] sm:min-w-[400px] max-w-[420px] snap-start bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header Element */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-semibold shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <hr className="border-slate-100 mb-6" />

                {/* Sub-Items Feature Checklist */}
                <ul className="space-y-3.5 mb-8">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
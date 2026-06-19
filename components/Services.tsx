"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Settings, 
  ShoppingCart, 
  ArrowRight, 
  Wrench, 
  MonitorSmartphone, 
  Network, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

const services = [
  {
    title: "Printer Repair",
    description: "Expert diagnostic and repair services for all major brands. We fix hardware failures, paper jams, and connectivity issues on-site.",
    image: "/service1.png", 
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    link: "/Services",
  },
  {
    title: "Printer Selling",
    description: "Premium selection of laser, inkjet, and multifunction printers tailored for home offices and large enterprise environments.",
    image: "/service2.png", 
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    link: "/BuyPrinters",
  }
];

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

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const offset = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollContainerRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Standard Service Cards Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Professional Services
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Reliable printer repair and sales solutions tailored for businesses across the USA. 
              We ensure your workflow never stops.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Area */}
                <div className="p-8 relative">
                  <div className="absolute -top-10 left-8 bg-white p-4 rounded-2xl shadow-lg z-20 group-hover:rotate-6 transition-transform">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <Link href={service.link} className="flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/btn">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Categorized Carousel Slider */}
      <section className="py-15 mt-10 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header Module with Slider Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
                What We Do
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4 tracking-tight md:text-4xl">
                Our Printer Services
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
                  <ul className="space-y-3.5 mb-4">
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
    </>
  );
}
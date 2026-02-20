"use client";

import React from "react";
import Image from "next/image";
import {
  Wrench,
  ShoppingBag,
  Truck,
  ShieldCheck,
  BarChart,
  Clock,
  ChevronRight,
  Settings2,
} from "lucide-react";
import Contact from "@/components/Contact"; // Your fixed high-contrast contact component

const mainServices = [
  {
    title: "Expert Printer Repair",
    tag: "Maintenance",
    description:
      "From laser fuser errors to complex motherboard diagnostics, our certified technicians handle it all. We specialize in enterprise-grade hardware and high-volume office machines.",
    features: [
      "On-site emergency repairs",
      "Genuine OEM parts",
      "24-hour diagnostic reports",
      "Fuser & Roller replacements",
    ],
    image: "/servicespage1.png",
    color: "blue",
  },
  {
    title: "Enterprise Sales",
    tag: "Equipment",
    description:
      "Upgrade your office with the latest in printing technology. We don't just sell machines; we audit your workflow to provide the most cost-effective printing solution.",
    features: [
      "Managed Print Services (MPS)",
      "Leasing & Rental options",
      "Bulk equipment discounts",
      "Setup & Network integration",
    ],
    image: "/servicespage2.png",
    color: "slate",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* --- PAGE HEADER --- */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Specialized</span> Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive printer solutions designed to eliminate downtime and
            maximize productivity for American businesses.
          </p>
        </div>
      </section>

      {/* --- FEATURED SERVICES (Detailed) --- */}
      <section className="py-24 space-y-32">
        {mainServices.map((service, idx) => (
          <div key={idx} className="max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-500" />
                  <div className="relative rounded-4xl overflow-hidden shadow-2xl border border-slate-100">
                    {/* [Insert Service Image Here] */}
                    <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt="HP Printer Technician at work"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2">
                <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
                  {service.tag}
                </span>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        <ChevronRight size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2">
                  Contact Us to Know More <Settings2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- THE REPAIR PROCESS (Timeline UI) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-slate-400">
              Streamlined repair process to get you back to work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnostic",
                desc: "We run full hardware & software tests.",
                icon: <Wrench />,
              },
              {
                step: "02",
                title: "Quote",
                desc: "Fixed price estimate provided upfront.",
                icon: <ShieldCheck />,
              },
              {
                step: "03",
                title: "Repair",
                desc: "Certified techs fix and clean your unit.",
                icon: <Settings2 />,
              },
              {
                step: "04",
                title: "Testing",
                desc: "Post-repair stress tests for quality.",
                icon: <BarChart />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="text-blue-500 mb-6">{item.icon}</div>
                <span className="absolute top-8 right-8 text-5xl font-black text-white/5">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOGO CLOUD (Brands we service) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
            Authorized to Service & Sell
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Replace with actual SVGs or Logos */}
            <span className="text-2xl font-bold text-slate-800 tracking-tighter italic">
              HP Enterprise
            </span>
            <span className="text-2xl font-bold text-slate-800 tracking-tighter italic">
              CANON
            </span>
            <span className="text-2xl font-bold text-slate-800 tracking-tighter italic">
              BROTHER
            </span>
            <span className="text-2xl font-bold text-slate-800 tracking-tighter italic">
              EPSON
            </span>
          </div>
        </div>
      </section>

      {/* --- CONTACT COMPONENT --- */}
      <Contact />
    </main>
  );
}

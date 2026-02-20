"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
  ArrowRight,
  Settings,
} from "lucide-react";
import Contact from "@/components/Contact";

const brands = [
  {
    name: "HP",
    series: "LaserJet & PageWide Enterprise",
    description:
      "Industry-leading security and high-speed performance for demanding office workflows.",
    features: [
      "Wolf Security Integration",
      "High-Yield Cartridges",
      "Touchscreen Interface",
    ],
    image: "/hp.png",
  },
  {
    name: "Epson",
    series: "WorkForce Pro & EcoTank",
    description:
      "Eco-friendly, heat-free technology that reduces energy costs and minimizes waste.",
    features: [
      "PrecisionCore Technology",
      "Replaceable Ink Packs",
      "Lowest Energy Usage",
    ],
    image: "/epson.png",
  },
  {
    name: "Brother",
    series: "Business Color Laser & Monochrome",
    description:
      "Reliable, durable machines known for low total cost of ownership and ease of use.",
    features: [
      "Compact Design",
      "Built-in Networking",
      "Award-Winning Reliability",
    ],
    image: "/bother.png",
  },
  {
    name: "Canon",
    series: "imageRUNNER & MAXIFY",
    description:
      "Superior color quality and advanced document handling for creative and legal firms.",
    features: [
      "V2 Color Technology",
      "Mobile Printing",
      "Seamless Cloud Integration",
    ],
    image: "/canon.png",
  },
];

export default function BrandsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-light uppercase tracking-widest text-sm mb-4 block">
            Reseller Of
          </span>
          <h1 className="text-xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The World's Best Brands.
            <br />
            <span className="text-blue-600">Tailored to Your Office.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just buy a printer from a box store. Get a hardware solution
            backed by Printer Service LLC's expert setup, maintenance, and
            lifetime support.
          </p>
        </div>
      </section>

      {/* --- BRAND GRID --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 relative overflow-hidden flex items-center justify-center p-12">
                  {/* [Insert Brand Logo/Image Here] */}
                  <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={brand.image}
                      alt="HP Printer Technician at work"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>

                <div className="p-10 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-black text-slate-900">
                      {brand.name}
                    </h2>
                    
                  </div>
                  <p className="text-blue-600 font-bold mb-4">{brand.series}</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {brand.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {brand.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <BadgeCheck className="text-blue-500" size={18} />{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-colors">
                    Request Pricing for {brand.name} <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY BUY FROM US SECTION --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The Printer Service LLC Advantage
            </h2>
            <p className="text-slate-400">
              Buying hardware is just the beginning of our partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                <Settings className="text-white" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">Pre-Configured Setup</h3>
              <p className="text-slate-400 text-sm">
                We don't just drop off boxes. Every printer is network-tested
                and configured for your specific office security protocols
                before it arrives.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                <Truck className="text-white" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">Express Deployment</h3>
              <p className="text-slate-400 text-sm">
                As local experts, we offer white-glove delivery and installation
                across the USA, ensuring your team is ready to print in hours,
                not days.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                <ShieldCheck className="text-white" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">On-Site Warranty</h3>
              <p className="text-slate-400 text-sm">
                If your machine has an issue, you call us, not a generic 1-800
                number. We provide on-site warranty service for every brand we
                sell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT COMPONENT --- */}
      <Contact />
    </main>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Users, Trophy, Zap, Award, Target } from "lucide-react";
import Contact from "@/components/Contact"; // Import your fixed Contact component

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 ">
          <div>
            <h1 className="text-xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              We Keep the <span className="text-blue-600">Printing</span>{" "}
              without Interruption.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Printer Service LLC, we understand that a broken printer isn't
              just a technical glitch—it's a halted workflow. We've spent over a
              decade perfecting the art of rapid repair and strategic sales.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <CheckCircle2 className="text-blue-600" /> Top Quality Printers
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <CheckCircle2 className="text-blue-600" /> Certified Technicians
              </div>
            </div>
          </div>
          <div className="relative">
            {/* PLACEHOLDER FOR IMAGE: A high-tech printer or your team workshop */}
            <div className="w-full rounded-[3rem] overflow-hidden transition-transform duration-500">
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about1.png"
                  alt="HP Printer Technician at work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-black">15+</p>
              <p className="text-sm font-bold uppercase tracking-tighter">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Printers Repaired", value: "25k+", icon: <Zap /> },
              { label: "Happy Clients", value: "10k+", icon: <Users /> },
              { label: "Expert Staff", value: "50+", icon: <Trophy /> },
              { label: "States Served", value: "50", icon: <Award /> },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex p-4 bg-slate-50 rounded-2xl text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {stat.icon}
                </div>
                <p className="text-3xl font-black text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-500 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR MISSION (Alternating Layout) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              {/* PLACEHOLDER FOR IMAGE: Modern office with printers */}
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about2.png"
                  alt="HP Printer Technician at work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Target className="w-12 h-12 text-blue-500 mb-6" />
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-400 text-lg mb-6">
                Our goal is simple: to provide the most reliable printer sales
                and repair infrastructure in the United States. We don't just
                sell hardware; we sell peace of mind.
              </p>
              <ul className="space-y-4">
                {[
                  "Standard 24-hour diagnostic turnaround",
                  "Direct partnerships with HP, Canon, and Brother",
                  "Transparent pricing with no hidden diagnostic fees",
                  "Eco-friendly cartridge recycling programs",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16">
            The Values That Drive Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Integrity",
                desc: "If it doesn't need fixing, we won't charge you for it. Period.",
              },
              {
                title: "Precision",
                desc: "Every gear, belt, and sensor is tested to factory standards.",
              },
              {
                title: "Speed",
                desc: "We know time is money. Our logistics are built for fast delivery.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 rounded-3xl hover:shadow-xl transition-shadow border border-transparent hover:border-blue-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT COMPONENT --- */}
      {/* This pulls in the Contact form you already have */}
      <Contact />
    </main>
  );
}

"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ShieldCheck,
  Globe,
  Zap,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              We're Here to Keep Your{" "}
              <span className="text-blue-500">Business Moving.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have a question about a specific printer model or need an
              emergency repair? Our USA-based technical team is standing by to
              assist you.
            </p>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT: FORM & INFO --- */}
      <section className="py-20 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 group hover:border-blue-500 transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Call Us
                </h3>
                <p className="text-slate-500 mb-4">
                  Immediate assistance for urgent repairs.
                </p>
                <a
                  href="tel:1800PRINTER"
                  className="text-lg font-bold text-blue-600"
                >
                  +1 (800) PRINTER-LLC
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 group hover:border-blue-500 transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Email Us
                </h3>
                <p className="text-slate-500 mb-4">
                  Send us your specs for a bulk quote.
                </p>
                <a
                  href="mailto:support@printerservicellc.com"
                  className="text-lg font-bold text-blue-600"
                >
                  support@printerservicellc.com
                </a>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                  <div className="space-y-4 text-slate-300">
                    <p className="flex items-center gap-3">
                      <MapPin className="text-blue-500" size={18} /> Printer
                      Service LLC 30 N GOULD ST STER, SHERIDAN WY, 82801
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="text-blue-500" size={18} /> Mon-Fri: 8am
                      - 6pm
                    </p>
                  </div>
                </div>
                <Zap className="absolute bottom-[-20px] right-[-20px] w-32 h-32 text-white/5 rotate-12" />
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-50">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Send a Request
              </h2>
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 focus:ring-2 ring-blue-500 outline-none text-black"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 focus:ring-2 ring-blue-500 outline-none text-black"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 focus:ring-2 ring-blue-500 outline-none text-black"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">
                    Service Required
                  </label>
                  <select className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 focus:ring-2 ring-blue-500 outline-none text-black">
                    <option>Printer Repair (Urgent)</option>
                    <option>Product Sales / Inquiry</option>
                    <option>Maintenance Contract</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold text-slate-700">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Include your printer model number for faster service..."
                    className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 focus:ring-2 ring-blue-500 outline-none text-black"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full md:w-auto bg-blue-600 hover:bg-slate-900 text-white font-black uppercase tracking-widest px-12 py-5 rounded-2xl transition-all flex items-center justify-center gap-3">
                    Submit Request <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST SECTION --- */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck size={48} className="text-blue-600 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-black">Certified Techs</h4>
            <p className="text-slate-500">
              All repair staff are factory certified for major brands.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Globe size={48} className="text-blue-600 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-black">Nationwide Sales</h4>
            <p className="text-slate-500">
              We ship printers and parts to all 50 states.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Zap size={48} className="text-blue-600 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-black">Fast Turnaround</h4>
            <p className="text-slate-500">
              24-hour diagnostic reports for all repair drop-offs.
            </p>
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAPS PLACEHOLDER --- */}
      <section className="h-[450px] w-full bg-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.137810350!2d-97.743060!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAxLjciTiA5N8KwNDQnMzUuMCJX!5e0!3m2!1sen!2sus!4v1625500000000!5m2!1sen!2sus"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}

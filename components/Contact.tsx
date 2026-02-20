import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Info & Engagement */}
          <div className="lg:w-2/5 text-white">
            <h2 className="text-4xl font-bold mb-6">Let's Get Your Business Printing Again</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Whether you need an urgent repair or are looking to upgrade your office fleet, 
              our experts in the USA are ready to help. Most repairs are completed within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600 transition-colors">
                  <Clock className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Business Hours</p>
                  <p className="text-xl font-medium">Mon - Fri: 8am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Email Us</p>
                  <p className="text-xl font-medium">billing@printerservicellc.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:w-3/5 w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Service Type</label>
                  <select className="w-auto bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option>Printer Repair</option>
                    <option>Buy a Printer</option>
                    <option>Maintenance Contract</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">How can we help?</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your printer model and the issue..."
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  ></textarea>
                </div>
                <button className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-blue-600/20">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
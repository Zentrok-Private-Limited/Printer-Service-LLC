import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  MonitorSmartphone, 
  Award, 
  Scale,
  ArrowRight 
} from 'lucide-react';

const coreValues = [
  {
    title: "Support for Home & Business Users",
    description: "Tailored IT workflows configured specifically for your environment—whether it's a critical office network or a simple residential home configuration.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Remote Assistance Available",
    description: "Skip the dispatch wait times. Secure, cloud-encrypted remote screen-sharing links bring live support straight to your machine instantly.",
    icon: <MonitorSmartphone className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Experienced Technical Specialists",
    description: "Your hardware is managed exclusively by vetted, certified technical engineers deeply fluent in legacy mechanics and modern cloud firmware.",
    icon: <Award className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Fast Issue Resolution",
    description: "We respect your production cycles. Our optimized diagnostic checklists isolate connectivity issues and hardware blocks with speed.",
    icon: <Clock className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Secure Service Process",
    description: "Strict privacy safeguards mean your operational integrity, local parameters, data registries, and network configurations are kept completely secure.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Transparent Service Fees",
    description: "No hidden diagnostic processing layers, unexpected structural fees, or upcharging. Clear upfront metrics keep your deployment budget safe.",
    icon: <Scale className="w-6 h-6 text-blue-600" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-15 bg-white relative overflow-hidden">
      {/* Background Subtle Accent Graphic */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
            The Service Advantage
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4 tracking-tight md:text-4xl">
            Why Choose Printer Service LLC?
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            We deliver reliable technical support built on secure diagnostics, absolute cost transparency, and rapid issue resolution.
          </p>
        </div>

        {/* Benefits Grid Module */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div 
              key={idx}
              className="group bg-slate-50/60 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Micro Icon Wrap */}
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>

                {/* Content Block */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl shadow-lg">
            <span className="text-sm font-medium text-slate-300">
              Ready to experience friction-free technical assistance?
            </span>
            <Link 
              href="/ContactUs"
              className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Get Started Now
              <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
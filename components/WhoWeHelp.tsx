"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Briefcase, 
  GraduationCap, 
  Laptop, 
  Users, 
  Building2, 
  ShoppingBag, 
  Stethoscope, 
  School,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const segments = [
  {
    title: "Home Users",
    description: "Reliable, residential technical care ensuring your personal networks and home devices stay online and secure.",
    mainIcon: <Home className="w-8 h-8 text-blue-600" />,
    bgGradient: "from-blue-50 to-indigo-50/30",
    borderFocus: "group-hover:border-blue-200",
    ctaLink: "/contact?type=home",
    audiences: [
      { name: "Families", desc: "Keep multi-device households safely synced and print ready.", icon: <Users className="w-5 h-5 text-blue-500" /> },
      { name: "Students", desc: "Ensure continuous connectivity for critical class assignments and exams.", icon: <GraduationCap className="w-5 h-5 text-blue-500" /> },
      { name: "Personal Computer Users", desc: "Optimize personal desktops and clean system software issues.", icon: <Laptop className="w-5 h-5 text-blue-500" /> },
      { name: "Home Office Users", desc: "Get robust desktop performance and direct wireless printing pipelines.", icon: <Home className="w-5 h-5 text-blue-500" /> },
      { name: "Remote Workers", desc: "Secure enterprise-level connections for sensitive workplace workflows.", icon: <Briefcase className="w-5 h-5 text-blue-500" /> }
    ]
  },
  {
    title: "Business Users",
    description: "SLA-driven corporate technology maintenance to reduce infrastructure downtime and maximize operational revenue.",
    mainIcon: <Building2 className="w-8 h-8 text-emerald-600" />,
    bgGradient: "from-emerald-50 to-teal-50/30",
    borderFocus: "group-hover:border-emerald-200",
    ctaLink: "/contact?type=business",
    audiences: [
      { name: "Small Businesses", desc: "Cost-effective, comprehensive technical support tailored for growth.", icon: <Building2 className="w-5 h-5 text-emerald-500" /> },
      { name: "Professional Offices", desc: "Keep critical legal, accounting, and consulting desks humming.", icon: <Briefcase className="w-5 h-5 text-emerald-500" /> },
      { name: "Retail Stores", desc: "Protect Point-of-Sale networks, labels, and local printer hardware.", icon: <ShoppingBag className="w-5 h-5 text-emerald-500" /> },
      { name: "Clinics", desc: "HIPAA-conscious workflow optimization for local medical facilities.", icon: <Stethoscope className="w-5 h-5 text-emerald-500" /> },
      { name: "Educational Organizations", desc: "Reliable structural setups for schools, academies, and learning labs.", icon: <School className="w-5 h-5 text-emerald-500" /> }
    ]
  }
];

const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

export default function WhoWeHelp() {
  return (
    <section className="py-15 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
            Targeted Tech Support
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4 tracking-tight md:text-4xl">
            Who We Help
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you are running a busy corporate network or trying to get a home printer back online before a school project is due—we have dedicated workflows configured specifically for your environment.
          </p>
        </div>

        {/* Core Profiles Grid Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {segments.map((segment, idx) => (
            <div 
              key={idx} 
              className={`group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${segment.borderFocus}`}
            >
              {/* Profile Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${segment.bgGradient} flex items-center justify-center shrink-0 shadow-inner`}>
                  {segment.mainIcon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {segment.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </div>

              <hr className="border-slate-100 mb-8" />

              {/* Explicit Inner Audience Rows */}
              <div className="space-y-4 mb-10">
                {segment.audiences.map((audience, audIdx) => (
                  <div 
                    key={audIdx}
                    className="flex gap-4 p-4 rounded-xl hover:bg-slate-50/80 border border-transparent hover:border-slate-100 transition-all duration-200"
                  >
                    <div className="mt-0.5 shrink-0 p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                      {audience.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 tracking-tight">
                        {audience.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {audience.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <button
                  onClick={openChat}
                  className={`inline-flex items-center justify-center w-full px-6 py-4 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm
                    ${idx === 0 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-100' 
                      : 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-100'
                    }
                  `}
                >
                  Request {segment.title} Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
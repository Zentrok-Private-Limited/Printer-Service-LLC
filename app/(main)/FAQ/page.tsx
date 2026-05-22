"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import { 
  HelpCircle, 
  Plus, 
  Minus, 
  Search, 
  Wrench, 
  ShoppingBag, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';
import Contact from '@/components/Contact';

const faqData = [
  {
    category: "Repair Services",
    icon: <Wrench size={20} />,
    questions: [
      {
        q: "How fast can you repair my printer?",
        a: "Most repairs are diagnosed within 24 hours. For on-site emergency services at your office, we typically arrive within 4-6 business hours depending on your location in the USA."
      },
      {
        q: "Do you provide a warranty on repairs?",
        a: "Yes! All repairs come with a 90-day warranty on labor and a manufacturer warranty on any genuine OEM parts we install."
      }
    ]
  },
  {
    category: "Sales & Products",
    icon: <ShoppingBag size={20} />,
    questions: [
      {
        q: "Which brand is best for a small office?",
        a: "For small teams, we highly recommend the Brother Business Series or HP LaserJet Pro. They offer the best balance of initial cost and toner efficiency."
      },
      {
        q: "Do you offer leasing or monthly payments?",
        a: "Absolutely. We offer flexible leasing structures for enterprise-grade machines (like the Canon imageRUNNER series) to help keep your capital expenditures low."
      }
    ]
  },
  {
    category: "Maintenance Plans",
    icon: <ShieldCheck size={20} />,
    questions: [
      {
        q: "What is included in a maintenance contract?",
        a: "Our contracts include regular cleaning, sensor calibration, firmware updates, and priority emergency response. It effectively eliminates 'surprise' repair bills."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* --- HEADER --- */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-xl md:text-5xl font-black text-white mb-8">
            Frequently Asked  <span className="text-blue-500">Questions</span>
          </h1>
        </div>
      </section>

      {/* --- FAQ ACCORDION SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Sidebar Navigation (Visible on Desktop) */}
            <div className="hidden lg:block space-y-4 text-left">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Categories</h3>
              {faqData.map((section, idx) => (
                <button 
                  key={idx}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-50 font-bold text-slate-700 transition-colors"
                >
                  <span className="text-blue-600">{section.icon}</span>
                  {section.category}
                </button>
              ))}
              <div className="mt-12 p-6 bg-blue-600 rounded-3xl text-white">
                <MessageCircle className="mb-4" />
                <p className="font-bold mb-2">Still need help?</p>
                <p className="text-xs text-blue-100 mb-4">Our technicians are available via live chat during business hours.</p>
                <button className="text-xs bg-white text-blue-600 px-4 py-2 rounded-lg font-bold">Contact Us</button>
              </div>
            </div>

            {/* Accordion List */}
            <div className="lg:col-span-3 space-y-8">
              {faqData.map((section, sIdx) => (
                <div key={sIdx}>
                  <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                    {section.category}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((faq, qIdx) => {
                      const id = `${sIdx}-${qIdx}`;
                      const isOpen = openIndex === id;
                      
                      return (
                        <div 
                          key={id} 
                          className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-blue-500 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                        >
                          <button 
                            onClick={() => toggleFAQ(id)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <span className={`font-bold text-lg ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                              {faq.q}
                            </span>
                            <div className={`p-1 rounded-full transition-transform ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </button>
                          
                          <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-slate-600 leading-relaxed border-t border-blue-100 pt-4">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- IMAGE BREAK SECTION --- */}
      <section>
          <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden">
                                <Image
                                  src="/CustomerSupport.png"
                                  alt="HP Printer Technician at work"
                                  fill
                                  className="object-contain"
                                  priority
                                />
                              </div>
      </section>

      {/* --- CONTACT COMPONENT --- */}
      <Contact />
    </main>
  );
}
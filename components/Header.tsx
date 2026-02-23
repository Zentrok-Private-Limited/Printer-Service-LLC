"use client";

import { useState } from 'react';
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Products", href: "/Product" },
    { name: "Faq", href: "/FAQ" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-slate-900 text-white py-2 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors">
              <Mail size={14} className="text-blue-500" />billing@printerservicellc.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-500" /> 
            <span>Serving Businesses Across the USA</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">
              PRINTER SERVICE <span className="text-blue-600 group-hover:text-slate-900">LLC</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Sales & Expert Repair</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm uppercase text-slate-700">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            
            <Link 
              href="/ContactUs" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="flex justify-between items-center text-lg font-bold text-slate-800 border-b border-slate-50 pb-2"
              >
                {link.name} <ChevronRight size={18} className="text-blue-600" />
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4">
              {/* <Link 
                className="flex items-center justify-center gap-2 w-full py-4 bg-slate-100 rounded-xl font-bold text-slate-900"
              >
                <Phone size={20} /> Call Now
              </Link> */}
              <Link 
                href="/ContactUs" 
                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-200"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
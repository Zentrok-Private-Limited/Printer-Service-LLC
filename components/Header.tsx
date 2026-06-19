"use client";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Menu,
  X,
  Mail,
  MapPin,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Buy Printers", href: "/BuyPrinters" },
    { name: "Products", href: "/Product" },
    { name: "Faq", href: "/FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-slate-900 text-white py-2 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors">
              <Mail size={14} className="text-blue-500" />
              billing@printerservicellc.com
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
        <div className=" mx-auto px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">
              PRINTER SERVICE{" "}
              <span className="text-blue-600 group-hover:text-slate-900">
                LLC
              </span>
            </span>
            <span className="text-[10px] uppercase tracking-normal font-bold text-slate-500">
              Printer Support • Technical Assistance • IP Network Configuration
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm uppercase text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 pb-2 transition-colors relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              <ShoppingCart size={22} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[11px] font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

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
              <button
                onClick={openChat}
                className="flex items-center justify-center gap-2 w-full py-4 bg-slate-100 rounded-xl font-bold text-slate-900"
              >
                <MessageCircle size={20} /> Chat Now
              </button>
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

import { ShoppingCart, User, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white">
      {/* Utility Bar */}
      <div className="bg-blue-600 text-white py-1.5 px-4 text-[11px] font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={12}/> 1-800-CART-RIDGE</span>
            <span className="hidden md:inline flex items-center gap-1"><Mail size={12}/> support@printerscartridge.com</span>
          </div>
          <div className="flex gap-4">
            <Link href="#">My Account</Link>
            <Link href="#">Order Status</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">PRINTERS</span>
          <span className="text-blue-600 font-bold text-xs tracking-[0.3em] ml-1">CARTRIDGE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 font-bold text-sm uppercase text-slate-700">
          <Link href="#" className="hover:text-blue-600">Ink</Link>
          <Link href="#" className="hover:text-blue-600">Toner</Link>
          <Link href="#" className="hover:text-blue-600">Drums</Link>
          <Link href="#" className="hover:text-blue-600 text-red-600 underline decoration-2">Deals</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <User size={24} className="text-slate-600" />
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800">
            <ShoppingCart size={20} />
            <span className="text-sm font-bold">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
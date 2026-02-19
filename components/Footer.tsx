import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react"; // Optional: if you have lucide-react installed

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        
        {/* Column 1: Brand & Address */}
        <div className="lg:col-span-1">
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Office</h4>
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
              <p>
                Printer Service LLC<br />
                30 N GOULD ST STER,<br />
                SHERIDAN WY, 82801
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <p>+1 (800) PRINTER-LLC</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <p>support@printerservicellc.com</p>
            </div>
          </div>
        </div>

        {/* Column 2: Core Services */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services/repair" className="hover:text-blue-400 transition-colors">Printer Repair</Link></li>
            <li><Link href="/services/selling" className="hover:text-blue-400 transition-colors">Buy New Printers</Link></li>
            <li><Link href="/services/maintenance" className="hover:text-blue-400 transition-colors">Maintenance Plans</Link></li>
            <li><Link href="/services/onsite" className="hover:text-blue-400 transition-colors">On-Site Support</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Request a Quote</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 4 & 5: Newsletter */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Stay Connected</h4>
          <p className="text-sm mb-4 italic text-slate-500">
            Expert printer tips and exclusive offers for your office.
          </p>
          <div className="flex mb-6">
            <input 
              type="email" 
              placeholder="Your business email" 
              className="bg-slate-800 border-none px-4 py-3 w-full focus:ring-2 ring-blue-600 rounded-l-xl outline-none text-white text-sm" 
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-r-xl font-bold uppercase text-[10px] tracking-widest transition-all">
              Join
            </button>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">🌍 SERVING in USA</span>
             
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 text-[11px] text-center uppercase tracking-[0.2em] text-slate-500">
        &copy; {new Date().getFullYear()} Printer Service LLC. Your Local Expert for Sales & Repair.
      </div>
    </footer>
  );
}
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Shop By Brand</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white">HP Cartridges</Link></li>
            <li><Link href="#" className="hover:text-white">Canon Ink</Link></li>
            <li><Link href="#" className="hover:text-white">Brother Toner</Link></li>
            <li><Link href="#" className="hover:text-white">Epson Cartridges</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white">Shipping Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Returns & Exchanges</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Newsletter</h4>
          <p className="text-sm mb-4 italic">Get coupons and printing tips delivered to your inbox.</p>
          <div className="flex">
            <input type="email" placeholder="Enter email" className="bg-slate-800 border-none px-4 py-2 w-full focus:ring-1 ring-blue-500 rounded-l-md" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md font-bold uppercase text-xs">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 text-[11px] text-center uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} PrintersCartridge. Designed for performance.
      </div>
    </footer>
  );
}
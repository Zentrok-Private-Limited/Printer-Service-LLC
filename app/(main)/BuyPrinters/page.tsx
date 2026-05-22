"use client";

import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, X, CheckCircle, ArrowRight } from 'lucide-react';
import Contact from '@/components/Contact';

// --- PRODUCT DATA ---
const printerProducts = [
  { id: 1, brand: "HP", name: "LaserJet Pro M404n Printer", price: 299, image: "/hp1.png", category: "Laser" },
  { id: 2, brand: "Epson", name: "EcoTank ET-3850 Printer", price: 399, image: "/epson1.webp", category: "Ink Tank" },
  { id: 3, brand: "Brother", name: "HL-L2350DW Mono Printer", price: 159, image: "/brother1.webp", category: "Compact" },
  { id: 4, brand: "Canon", name: "imageCLASS MF445dw Printer", price: 449, image: "/canon1.jpeg", category: "All-in-One" },
  { id: 5, brand: "HP", name: "Color LaserJet Pro 4001n Printer", price: 199, image: "/hp2.webp", category: "Color Laser" },
  { 
    id: 6, 
    brand: "Canon", 
    name: "MAXIFY GX7021 GX Series Printer", 
    price: 799, 
    image: "/canon2.jpg", 
    category: "MegaTank Business" 
  },
  { 
    id: 7, 
    brand: "Brother", 
    name: "MFC-L8900CDW Business Printer", 
    price: 649, 
    image: "/brother2.webp", 
    category: "Enterprise Color" 
  },
  { id: 8, brand: "Epson", name: "WorkForce Pro WF-4830 Printer", price: 249, image: "/epson2.jpg", category: "Office" },
];

export default function BuyPrintersPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- CART LOGIC ---
  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setIsCartOpen(true);
  };

  const updateQty = (id: number, delta: number) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeItem = (id: number) => setCart(cart.filter(item => item.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* --- FLOATING CART TRIGGER --- */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3"
      >
        <ShoppingCart size={24} />
        <span className="bg-white text-blue-600 font-bold px-2 rounded-lg text-sm">{cart.length}</span>
      </button>

      {/* --- HERO --- */}
      <section className="bg-blue-100 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-4 italic">BUY PRINTERS</h1>
          <p className="text-slate-500 font-medium">Genuine Hardware from HP, Epson, Brother & Canon</p>
        </div>
      </section>

      {/* --- PRODUCT GRID (3 PER ROW) --- */}
      <section className="py-16 max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {printerProducts.map((product) => (
      <div key={product.id} className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all group">
        
        {/* --- THE IMAGE CONTAINER --- */}
        <div className="h-64 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden p-8">
          {/* This is the Image Tag. 
              The 'src' looks for the path we defined in our printerProducts data.
          */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
          
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase">
            {product.category}
          </div>
        </div>
        
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xs font-bold text-blue-600 uppercase">{product.brand}</h3>
            <h2 className="text-xl font-bold text-slate-900">{product.name}</h2>
          </div>
          <p className="text-xl font-black text-blue-600">${product.price}</p>
        </div>

        <p className="text-slate-500 text-sm mb-6">Commercial grade printer with 1-year Printer Service LLC warranty.</p>
        
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
        >
          Add to Cart <Plus size={18} />
        </button>
      </div>
    ))}
  </div>
</section>

      {/* --- CART SIDEBAR --- */}
{isCartOpen && (
  <div className="fixed inset-0 z-[100] flex justify-end">
    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
    <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2"><ShoppingCart /> YOUR CART</h2>
        <button onClick={() => setIsCartOpen(false)} className="p-2 text-slate-900 hover:bg-slate-200 rounded-full"><X /></button>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-6">
        {cart.length === 0 ? (
          <div className="text-center py-20 text-slate-400 font-medium">Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex gap-4 border-b border-slate-50 pb-6">
              
              {/* --- ADDED IMAGE TAG HERE --- */}
              <div className="w-20 h-20 bg-slate-100 rounded-xl flex-shrink-0 overflow-hidden p-2 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-grow">
                <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                <p className="text-sm text-blue-600 font-bold">${item.price}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center border rounded-lg bg-white">
                    <button onClick={() => updateQty(item.id, -1)} className="p-1 px-2 text-blue-600 transition-colors"><Minus size={14}/></button>
                    <span className="px-2 text-slate-900 font-bold text-xs">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="p-1 px-2 text-blue-600 transition-colors"><Plus size={14}/></button>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)} 
                    className="text-red-500 transition-colors"
                  >
                    <Trash2 size={18}/>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-6 bg-slate-50 border-t">
        <div className="flex justify-between text-2xl font-semibold mb-6">
          <span className="text-slate-900">TOTAL:</span>
          <span className="text-blue-600">${subtotal}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-lg shadow-blue-200">
          CHECKOUT NOW <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </div>
)}

      {/* --- CONTACT COMPONENT --- */}
      <Contact />
    </main>
  );
}
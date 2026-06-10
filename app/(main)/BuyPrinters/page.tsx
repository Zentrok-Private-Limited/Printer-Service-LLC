"use client";

import React, { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  X,
  ArrowRight,
} from "lucide-react";
import Contact from "@/components/Contact";

const printerProducts = [
  { id: 1, brand: "HP", name: "LaserJet Pro M404n Printer", price: 299, image: "/hp1.png", category: "Laser" },
  { id: 2, brand: "Epson", name: "EcoTank ET-3850 Printer", price: 399, image: "/epson1.webp", category: "Ink Tank" },
  { id: 3, brand: "Brother", name: "HL-L2350DW Mono Printer", price: 159, image: "/brother1.webp", category: "Compact" },
  { id: 4, brand: "Canon", name: "imageCLASS MF445dw Printer", price: 449, image: "/canon1.jpeg", category: "All-in-One" },
  { id: 5, brand: "HP", name: "Color LaserJet Pro 4001n Printer", price: 199, image: "/hp2.webp", category: "Color Laser" },
  { id: 6, brand: "Canon", name: "MAXIFY GX7021 GX Series Printer", price: 799, image: "/canon2.jpg", category: "MegaTank Business" },
  { id: 7, brand: "Brother", name: "MFC-L8900CDW Business Printer", price: 649, image: "/brother2.webp", category: "Enterprise Color" },
  { id: 8, brand: "Epson", name: "WorkForce Pro WF-4830 Printer", price: 249, image: "/epson2.jpg", category: "Office" },
];

export default function BuyPrintersPage() {
  // Pull functions directly from Global App State Engine
  const { cart, addToCart, updateQty, removeItem, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  // Helper calculation for floating bubble total items count
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCartAction = (product: any) => {
    addToCart(product);
    setIsCartOpen(true); // Fire sidebar workflow notification panel
  };

  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      
      {/* FLOATING CART TRIGGER */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-5 rounded-full shadow-2xl hover:scale-105 hover:bg-slate-900 transition-all flex items-center gap-3"
      >
        <ShoppingCart size={24} />
        {totalItemsCount > 0 && (
          <span className="bg-white text-blue-600 font-black px-2 py-0.5 rounded-lg text-xs min-w-[20px] text-center">
            {totalItemsCount}
          </span>
        )}
      </button>

      {/* HERO HEROICS */}
      <section className="bg-blue-50 py-20 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Authorized Hardware Node
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase">
            BUY <span className="text-blue-600">PRINTERS</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Genuine enterprise deployment components from Tier-1 manufacturers: HP, Epson, Brother & Canon.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printerProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[2rem] p-6 border border-slate-200/60 hover:shadow-xl hover:shadow-slate-100 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Wrap */}
                <div className="h-64 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden p-8 border border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black text-slate-500 border uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest">
                      {product.brand}
                    </h3>
                    <h2 className="text-xl font-bold text-slate-900 mt-0.5 line-clamp-1">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-xl font-black text-slate-900">
                    ${product.price}
                  </p>
                </div>

                <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6">
                  Commercial grade system configuration provisioning with premium unified 1-year functional service array protection architecture.
                </p>
              </div>

              <button
                onClick={() => handleAddToCartAction(product)}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                Add to Cart <Plus size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CART POPUP DRAWERS SYSTEM */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            
            {/* Drawer Heading */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <ShoppingCart className="text-blue-600" size={20} /> STAGED EQUIPMENT
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick List Window */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-24 text-slate-400 font-medium text-sm">
                  Active hardware layout list is unpopulated.
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-slate-100 pb-4 items-center last:border-b-0"
                  >
                    <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-xl flex-shrink-0 overflow-hidden p-2 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-blue-600 font-extrabold mt-0.5">
                        ${item.price} each
                      </p>
                      
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50/50">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="p-1 px-2 text-slate-400 hover:text-blue-600 transition"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-1 text-slate-900 font-black text-xs min-w-[14px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="p-1 px-2 text-slate-400 hover:text-blue-600 transition"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Actions Panel Bottom */}
            <div className="p-6 bg-slate-50/80 border-t border-slate-100 space-y-3">
              <div className="flex justify-between items-baseline text-slate-900 mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subtotal Valuation</span>
                <span className="text-2xl font-black text-blue-600">${totalPrice.toFixed(2)}</span>
              </div>
              
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  router.push("/cart");
                }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all border border-transparent flex items-center justify-center gap-2"
              >
                Expand Comprehensive Cart View
              </button>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full bg-blue-600 text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-900 transition-all shadow-lg shadow-blue-100"
              >
                Checkout Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL DISPATCH CONTACT LAYER */}
      <Contact />
    </main>
  );
}
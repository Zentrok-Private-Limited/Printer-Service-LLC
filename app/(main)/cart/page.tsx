"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DedicatedCartPage() {
  const { cart, updateQty, removeItem, totalPrice } = useCart();
  const router = useRouter();

  
  const grandTotal = totalPrice;

  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-blue-100">
              Your Cart
            </span>
            <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase">
              Shopping <span className="text-blue-600">Cart</span>
            </h1>
          </div>
          <Link 
            href="/BuyPrinters" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition group self-start md:self-auto"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Link>
        </div>

        {cart.length === 0 ? (
          /* EMPTY STATE CARD */
          <div className="bg-white border border-slate-200/60 rounded-4xl p-16 text-center max-w-2xl mx-auto shadow-xl shadow-slate-100">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={36} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Your Cart is Currently Empty</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Looks like you haven't added any printers to your cart yet.
            </p>
            <Link 
              href="/buy-printers"
              className="bg-blue-600 hover:bg-slate-900 text-white font-black px-8 py-4 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-blue-100 transition inline-block"
            >
              Browse Printers
            </Link>
          </div>
        ) : (
          /* TWO COLUMN ACTIVE CART COMPONENT */
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
            
            {/* LEFT COLUMN: PRODUCT INVENTORY LIST */}
            <div className="bg-white rounded-4xl p-6 md:p-8 border border-slate-200/60 shadow-xl shadow-slate-100 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-100">
                Cart Items ({cart.length})
              </h2>

              <div className="divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-6 py-6 first:pt-0 last:pb-0 items-center sm:items-start">
                    {/* Hardware Image Base */}
                    <div className="w-28 h-28 bg-slate-50 border border-slate-100 rounded-2xl shrink-0 overflow-hidden p-3 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    {/* Metadata & Quantities */}
                    <div className="grow text-center sm:text-left space-y-1">
                      <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest bg-blue-50/80 px-2 py-0.5 rounded-md border border-blue-100">
                        {item.brand || "Hardware"}
                      </span>
                      <h3 className="font-bold text-slate-900 text-lg pt-1">{item.name}</h3>
                      <p className="text-xs font-medium text-slate-400">Category: {item.category || "Commercial"}</p>
                      
                      {/* Action Interface Bar */}
                      <div className="flex items-center justify-center sm:justify-start gap-6 pt-4">
                        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50/50 p-1">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg transition"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center text-slate-900 font-black text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg transition"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-xl transition"
                          title="Remove Item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Cost Accounting Matrix */}
                    <div className="text-center sm:text-right flex flex-col justify-between sm:h-28">
                      <p className="text-xs font-bold text-slate-400">Unit: ${item.price}</p>
                      <p className="text-xl font-black text-slate-900 pt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: PRICING LOGISTICS & LEDGER */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200/60 shadow-xl shadow-slate-100 space-y-6 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-100">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm font-medium text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-blue-600 font-black tracking-wider uppercase text-xs bg-blue-50 px-2 py-0.5 rounded-md">
                    Complimentary
                  </span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-slate-900">
                  <span className="font-bold text-base">Total</span>
                  <span className="text-2xl font-black text-blue-600">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex gap-3 text-xs text-slate-500 leading-relaxed">
                <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={16} />
                <p>
                  Taxes and shipping charges may vary based on your location and order details.
                </p>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-100 text-xs uppercase tracking-widest mt-4"
              >
                Proceed to Checkout <ArrowRight size={18} />
              </button>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}
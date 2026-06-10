"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import countryList from "react-select-country-list";
import { ShoppingBag, Tag, CreditCard, ShieldCheck, Info, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();
  const [showCoupon, setShowCoupon] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "United States",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState<any>({});

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  // VALIDATION
  const validateForm = () => {
    let newErrors: any = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.address1.trim()) newErrors.address1 = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State selection is required";

    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^\d{4,10}$/.test(formData.zip)) {
      newErrors.zip = "Invalid ZIP code format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+() \s-]{10,20}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const submitOrder = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/Checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          total: totalPrice,
          cartItems: cart
            .map((item) => `${item.name} x${item.quantity}`)
            .join(", "),
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Order submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          country: "United States",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          email: "",
          notes: "",
        });
        setErrors({});
      } else {
        alert("Failed to submit corporate order request.");
      }
    } catch (error) {
      console.log(error);
      alert("An unexpected network error occurred.");
    }
  };

  // CSS HOOK STYLES
  const inputStyle =
    "w-full h-12 bg-slate-50 text-slate-900 px-4 rounded-xl outline-none text-[14px] border transition-all font-medium focus:bg-white";
  const errorInputStyle = "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500";
  const normalInputStyle = "border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600";

  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-10">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-blue-100">
            Secure Checkout
          </span>
          <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter">
            CHECKOUT
          </h1>
        </div>

        {/* --- COUPON ALERTS --- */}
        <div className="bg-white border border-slate-200/60 rounded-2xl p-5 mb-8 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Tag className="text-blue-600" size={18} />
            <p className="text-sm text-slate-600 font-medium">
              Have a discount coupon?{" "}
              <button
                onClick={() => setShowCoupon(!showCoupon)}
                className="text-blue-600 font-bold underline hover:text-blue-700 transition"
              >
                Click here to apply code
              </button>
            </p>
          </div>

          {showCoupon && (
            <div className="flex items-center gap-3 flex-wrap animate-in fade-in duration-200 pt-2 border-t border-slate-100">
              <input
                type="text"
                placeholder="Enter promo or voucher code"
                className="w-64 h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-[14px] outline-none text-slate-900 focus:bg-white focus:border-blue-600"
              />
              <button className="bg-slate-900 hover:bg-blue-600 transition text-white font-bold px-6 h-11 rounded-xl text-xs uppercase tracking-wider shadow-sm">
                Apply Code
              </button>
            </div>
          )}
        </div>

        {/* --- SYSTEM FLEX-GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          
          {/* LEFT: SHIPPING / BILLING CONFIGS */}
          <div className="bg-white rounded-4xl p-8 md:p-10 border border-slate-200/60 shadow-xl shadow-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              Billing Details
            </h2>

            {/* FLUID FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${inputStyle} ${errors.firstName ? errorInputStyle : normalInputStyle}`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${inputStyle} ${errors.lastName ? errorInputStyle : normalInputStyle}`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                Country / Region *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`${inputStyle} ${normalInputStyle}`}
              >
                {countryList()
                  .getData()
                  .map((country: { label: string; value: string }) => (
                    <option key={country.value} value={country.label}>
                      {country.label}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                Street Address *
              </label>
              <input
                type="text"
                name="address1"
                placeholder="House number and street name"
                value={formData.address1}
                onChange={handleChange}
                className={`${inputStyle} mb-3 ${errors.address1 ? errorInputStyle : normalInputStyle}`}
              />
              {errors.address1 && (
                <p className="text-red-500 text-xs mb-3 font-medium">{errors.address1}</p>
              )}
              <input
                type="text"
                name="address2"
                placeholder="Apartment, suite, unit, etc. (optional)"
                value={formData.address2}
                onChange={handleChange}
                className={`${inputStyle} ${normalInputStyle}`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-1">
                <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                  Town / City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${inputStyle} ${errors.city ? errorInputStyle : normalInputStyle}`}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                  State *
                </label>
                <input 
                  type="text"
                  name="state"
                  placeholder="e.g. California"
                  value={formData.state}
                  onChange={handleChange}
                  className={`${inputStyle} ${errors.state ? errorInputStyle : normalInputStyle}`}
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`${inputStyle} ${errors.zip ? errorInputStyle : normalInputStyle}`}
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.zip}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputStyle} ${errors.phone ? errorInputStyle : normalInputStyle}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputStyle} ${errors.email ? errorInputStyle : normalInputStyle}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-slate-500 font-bold mb-2 text-xs uppercase tracking-wider">
                Order Notes (Optional)
              </label>
              <textarea
                rows={4}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Special delivery instructions or additional information..."
                className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-xl outline-none resize-none text-[14px] border border-slate-200 transition-all focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              ></textarea>
            </div>
          </div>

          {/* RIGHT: ORDER MANIFEST SUMMARY */}
          <div className="space-y-6">
            <div className="bg-white rounded-4xl p-6 md:p-8 border border-slate-200/60 shadow-xl shadow-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b">
                <ShoppingBag size={20} className="text-blue-600" /> Order Summary
              </h2>

              {/* PRODUCTS LIST */}
              <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                {cart.map((item) => {
                  const rawPrice = String(item.price || '');
                  const numericPrice = typeof item.price === "number" 
                    ? item.price 
                    : Number(rawPrice.replace(/[^0-9.-]+/g, "")) || 0;
                  const itemTotal = numericPrice * item.quantity;

                  return (
                    <div key={item.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between gap-4 items-center">
                      <div>
                        <p className="text-sm font-bold text-slate-900 line-clamp-1">{item.name}</p>
                        <p className="text-xs font-semibold text-blue-600 mt-0.5">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-black text-slate-900">${itemTotal.toFixed(2)}</p>
                    </div>
                  );
                })}
              </div>

              {/* OVERALL SUMMARY */}
              <div className="flex items-center justify-between py-4 mt-4 border-t border-b border-slate-100 text-slate-900">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Order Total</p>
                <p className="text-2xl font-black text-blue-600">${totalPrice.toFixed(2)}</p>
              </div>

              {/* SYSTEM PAYMENT LOGISTICS NOTICE */}
              <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 mt-6 flex gap-3">
                <Info className="text-blue-600 shrink-0 mt-0.5" size={16} />
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong>Secure Checkout:</strong> Your personal information is protected and will only be used to process your order and provide customer support.
                </p>
              </div>

              {/* LEGALESE */}
              <p className="text-slate-400 text-[11px] leading-relaxed mt-6">
                Your personal information will be used to process your order and support your experience on our website. Please review our privacy policy for more details.{" "}
                <a href="/privacy-policy" className="text-blue-600 font-bold hover:underline">
                  privacy policy
                </a>.
              </p>

              {/* DISPATCH ACTION CAP */}
              <button
                onClick={submitOrder}
                className="w-full mt-6 bg-blue-600 hover:bg-slate-900 transition text-white font-black h-14 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
              >
                <ShieldCheck size={16} /> Complete Order Placement
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
'use client';

import React from 'react';
import {
  ShieldCheck,
  Cookie,
  UserCheck,
  Lock,
  HelpCircle,
  AlertCircle,
  Database,
  ExternalLink,
  Scale,
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-20 px-6">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
            Legal Transparency
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            We value your trust. This policy outlines how we protect your data
            while providing world-class printer support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-10 max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
          {/* Quick Disclaimer Card */}
          <div className="flex items-start gap-4 border-b border-amber-100 bg-amber-50 p-6">
            <AlertCircle className="mt-1 h-6 w-6 shrink-0 text-amber-600" />

            <div>
              <h3 className="font-bold text-amber-900">
                Independent Provider Notice
              </h3>

              <p className="text-sm text-amber-800/80">
                We are an independent third-party technical support provider.
                Brand names and trademarks are used for identification purposes
                only.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden border-r border-slate-100 bg-slate-50 p-8 md:block">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Sections
                </div>

                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Introduction
                  </li>
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Information Collection
                  </li>
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Use of Information
                  </li>
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Cookies Policy
                  </li>
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Third Party Services
                  </li>
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Service Disclosure
                  </li>
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Data Security
                  </li>
                  <li className="cursor-pointer transition hover:text-blue-600">
                    User Rights
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Policy Text */}
            <div className="space-y-12 p-8 md:col-span-2 md:p-12">
              {/* Introduction */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                    <ShieldCheck size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Introduction
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  At printerservicellc.com (“we”, “our”, “us”), we value
                  your privacy and are committed to protecting your personal
                  data. This Privacy Policy outlines how we collect, use, store,
                  and share your information when you visit our website
                  printerservicellc.com (“Website”) or purchase products
                  from us.
                  <br />
                  <br />
                  This Policy complies with the Information Technology Act,
                  2000, and the Information Technology (Reasonable Security
                  Practices and Procedures and Sensitive Personal Data or
                  Information) Rules, 2011.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                    <UserCheck size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Information We Collect
                  </h2>
                </div>

                <p className="mb-4 text-slate-600">
                  We collect data to provide a seamless support experience:
                </p>

                <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="mb-1 block font-bold text-slate-900">
                      Personal Info
                    </span>

                    <ul className="list-inside list-disc text-slate-500">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Billing and Shipping Address</li>
                      <li>
                        Payment Information (processed securely via third-party
                        payment gateways)
                      </li>
                      <li>GST Number (if applicable)</li>
                      <li>Purchase History</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="mb-1 block font-bold text-slate-900">
                      Non-Personal Information
                    </span>

                    <ul className="list-inside list-disc text-slate-500">
                      <li>IP Address</li>
                      <li>Browser Type</li>
                      <li>Device Information</li>
                      <li>Cookies and Usage Data</li>
                      <li>Location Data (with your permission)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Use of Information */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-100 p-2 text-cyan-600">
                    <Database size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Use of Information
                  </h2>
                </div>

                <p className="mb-1 block font-bold text-slate-900">
                  We use your information for:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>Process and deliver your orders</li>
                  <li>
                    Communicate with you regarding purchases, offers, or support
                  </li>
                  <li>Improve our Website, products, and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and abuse</li>
                </ul>
              </section>

              {/* Cookies Policy */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                    <Cookie size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Cookies Policy
                  </h2>
                </div>

                <p className="mb-1 block font-bold text-slate-700">
                  We use cookies and similar technologies to:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>Improve your browsing experience</li>
                  <li>Remember your preferences</li>
                  <li>Analyze traffic and performance</li>
                </ul>

                <p className="mt-2 block font-bold text-slate-700">
                  You can manage cookie preferences through your browser
                  settings.
                </p>
              </section>

              {/* Sharing of Information */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-rose-100 p-2 text-rose-600">
                    <ExternalLink size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Sharing of Information
                  </h2>
                </div>

                <p className="mb-1 block font-bold text-slate-700">
                  We do not sell or rent your personal data. We may share
                  information with:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>Logistics and delivery partners</li>
                  <li>Payment gateways and financial institutions</li>
                  <li>Customer support service providers</li>
                  <li>Government authorities when required by law</li>
                </ul>

                <p className="mt-2 block font-bold text-slate-700">
                  All third parties are bound by confidentiality and data
                  protection agreements.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                    <Lock size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Data Security
                  </h2>
                </div>

                <p className="mb-1 block font-bold text-slate-700">
                  We follow industry-standard security practices to protect your
                  data. These include:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>SSL encryption</li>
                  <li>Secure server infrastructure</li>
                  <li>Role-based access controls</li>
                  <li>Regular audits and monitoring</li>
                </ul>

                <p className="mt-2 block font-bold text-slate-700">
                  However, no online platform is 100% secure. We encourage you
                  to use strong passwords and take appropriate measures to
                  protect your own data.
                </p>
              </section>

              {/* User Rights */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-violet-100 p-2 text-violet-600">
                    <Scale size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    User Rights
                  </h2>
                </div>

                <p className="mb-1 block font-bold text-slate-700">
                  As per Indian law, you have the right to:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>Review and correct your personal data</li>
                  <li>
                    Withdraw consent (subject to terms of service)
                  </li>
                  <li>Opt-out of marketing communications</li>
                  <li>
                    Request data deletion, unless retained for legal reasons
                  </li>
                </ul>

                <p className="mt-2 block font-bold text-slate-700">
                  To exercise these rights, contact us at :
                  <br />
                  <br />
                  info@printerservicellc.com
                  <br />
                  contact@printerservicellc.com
                  <br />
                  billing@printerservicellc.com
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                    <ShieldCheck size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Children’s Privacy
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  Our Website is not intended for children under 18. We do not
                  knowingly collect personal data from minors.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                    <ShieldCheck size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Third-Party Links
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  Our Website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of those
                  sites.
                </p>
              </section>

              {/* Policy Updates */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                    <ShieldCheck size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Policy Updates
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with the revised date.
                </p>
              </section>

              {/* Contact Section */}
              <section className="border-t border-slate-100 pt-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
                    <HelpCircle size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Contact Us
                  </h2>
                </div>

                <p className="mb-6 text-slate-600">
                  For privacy-related inquiries, users may contact the company
                  via website contact details.
                </p>

                <button
                  onClick={openChat}
                  type="button"
                  className="w-full rounded-xl bg-slate-900 px-8 py-3 font-bold text-white shadow-lg shadow-slate-200 transition hover:bg-blue-600 active:scale-95 sm:w-auto"
                >
                  Live Chat Support
                </button>
              </section>

              <p className="mb-6 font-bold text-slate-900">
                By using our Website, you consent to the terms of this Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
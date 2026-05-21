"use client";

import React from "react";
import {
  Users,
  UserCircle,
  ShoppingBag,
  Truck,
  Slash,
  Copyright,
  ShieldAlert,
  Mail,
  CheckSquare,
} from "lucide-react";

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans text-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 px-6 py-20">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
            User Agreement
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Terms of Use
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            These terms govern your access to printerservicellc.com By using our
            platform, you agree to the rules outlined below.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-10 max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
          {/* Acceptance Banner */}
          <div className="flex items-start gap-4 border-b border-blue-100 bg-blue-50 p-6">
            <CheckSquare className="mt-1 h-6 w-6 shrink-0 text-blue-600" />

            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Acceptance of Terms
              </h3>

              <p className="text-sm leading-relaxed text-blue-800/80">
                By accessing printerservicellc.com, you agree to be bound by
                these Terms. If you do not agree, please discontinue use
                immediately. These terms apply to all visitors, vendors, and
                customers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden border-r border-slate-100 bg-slate-50 p-8 md:block">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  On This Page
                </div>

                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="cursor-pointer transition hover:text-blue-600">
                    Eligibility & Accounts
                  </li>

                  <li className="cursor-pointer transition hover:text-blue-600">
                    Products & Pricing
                  </li>

                  <li className="cursor-pointer transition hover:text-blue-600">
                    Orders & Delivery
                  </li>

                  <li className="cursor-pointer transition hover:text-blue-600">
                    Prohibited Conduct
                  </li>

                  <li className="cursor-pointer transition hover:text-blue-600">
                    Intellectual Property
                  </li>

                  <li className="cursor-pointer transition hover:text-blue-600">
                    Legal Jurisdiction
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Terms Details */}
            <div className="space-y-12 p-8 md:col-span-2 md:p-12">
              {/* Eligibility & Accounts */}
              <section className="grid grid-cols-1 gap-8">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                      <Users size={22} />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      Eligibility
                    </h2>
                  </div>

                  <p className="text-slate-600">
                    You must be at least <strong>18 years old</strong> or
                    accessing under the supervision of a parent/guardian to use
                    this website.
                  </p>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                      <UserCircle size={22} />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      User Account and Registration
                    </h2>
                  </div>

                  <ul className="ml-4 list-inside list-disc space-y-2 text-slate-500">
                    <li>
                      To make purchases, you may need to create an account by
                      providing accurate personal information.
                    </li>

                    <li>
                      You are responsible for maintaining the confidentiality of
                      your login credentials.
                    </li>

                    <li>
                      You agree to accept responsibility for all activities
                      under your account.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Products, Pricing & Orders */}
              <section className="space-y-8">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                      <ShoppingBag size={22} />
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                      Products and Pricing
                    </h2>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600">
                    {/* <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Prices are in <strong>Indian Rupees (INR)</strong> and
                        include applicable taxes.
                      </span>
                    </li> */}

                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        All products listed on the Website are subject to
                        availability.
                      </span>
                    </li>

                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        We reserve the right to modify or discontinue any
                        product or pricing at any time without prior notice.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
                    <Truck size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Shipping and Delivery
                    </h2>
                  </div>
                </div>

                <ul className="ml-4 list-inside list-disc space-y-2 text-slate-500">
                  <li>
                    Shipping timelines are estimates and not guaranteed. Delays
                    may occur due to logistics or external factors.
                  </li>

                  <li>Risk of loss or damage passes to you upon delivery.</li>
                </ul>
              </section>

              {/* Refunds */}
              <section>
                <div className="flex items-start gap-4">
                  <CheckSquare className="mt-1 h-7 w-7 shrink-0 text-blue-600" />

                  <div>
                    <h3 className="text-xl font-bold text-black">
                      Returns, Refunds, and Cancellations
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      Please refer to our Refund & Cancellation Policy for
                      details on returns, refunds, and cancellations.
                    </p>
                  </div>
                </div>
              </section>

              {/* User Conduct */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-rose-100 p-2 text-rose-600">
                    <Slash size={20} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    User Conduct
                  </h2>
                </div>

                <div className="space-y-3 text-slate-500">
                  <p>You agree not to:</p>

                  <ul className="ml-4 list-inside list-disc space-y-2">
                    <li>
                      Use the Website for unlawful, abusive, or fraudulent
                      purposes
                    </li>

                    <li>Upload or transmit viruses or malicious code</li>

                    <li>
                      Attempt to gain unauthorized access to any portion of the
                      Website or its servers
                    </li>

                    <li>
                      Interfere with the Website’s security or functionality
                    </li>
                  </ul>

                  <p>
                    Violation of these rules may result in suspension or
                    termination of your access.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                    <Copyright size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Intellectual Property
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  All content, including logos, text, and software, is the
                  property of <strong>printerservicellc.com</strong>.
                  Unauthorized reproduction or distribution is strictly
                  prohibited.
                </p>
              </section>

              {/* Liability */}
              <section className="rounded-2xl bg-slate-900 p-6 text-slate-300">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldAlert className="text-blue-400" size={24} />

                  <h2 className="text-xl font-bold text-white">
                    Liability & Indemnification
                  </h2>
                </div>

                <p className="mb-4 text-sm leading-relaxed">
                  We are not liable for incidental or consequential damages
                  arising from site use.
                  <br />
                  <br />
                  You agree to indemnify printerservicellc.com against claims
                  arising from your violation of these terms.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <div className="flex items-start gap-4">
                  <CheckSquare className="mt-1 h-7 w-7 shrink-0 text-blue-600" />

                  <div>
                    <h3 className="text-xl font-bold text-black">
                      Third-Party Links
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      Our Website may contain links to third-party websites. We
                      are not responsible for the content, accuracy, or privacy
                      practices of those sites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Privacy */}
              <section>
                <div className="flex items-start gap-4">
                  <CheckSquare className="mt-1 h-7 w-7 shrink-0 text-blue-600" />

                  <div>
                    <h3 className="text-xl font-bold text-black">Privacy</h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      Your use of the Website is also governed by our Privacy
                      Policy, which outlines how your personal data is
                      collected, used, and protected.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section>
                <div className="flex items-start gap-4">
                  <CheckSquare className="mt-1 h-7 w-7 shrink-0 text-blue-600" />

                  <div>
                    <h3 className="text-xl font-bold text-black">
                      Termination
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      We reserve the right to terminate your access to the
                      Website at any time, without notice, for conduct that
                      violates these Terms or is harmful to other users or the
                      business.
                    </p>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <div className="flex items-start gap-4">
                  <CheckSquare className="mt-1 h-7 w-7 shrink-0 text-blue-600" />

                  <div>
                    <h3 className="text-xl font-bold text-black">
                      Governing Law and Jurisdiction
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      These Terms are governed by the laws of India. Any
                      disputes shall be subject to the exclusive jurisdiction of
                      the courts of Delhi, India.
                    </p>
                  </div>
                </div>
              </section>

              {/* Amendments */}
              <section>
                <div className="flex items-start gap-4">
                  <CheckSquare className="mt-1 h-7 w-7 shrink-0 text-blue-600" />

                  <div>
                    <h3 className="text-xl font-bold text-black">Amendments</h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      We may revise these Terms from time to time. Any changes
                      will be posted on this page with the updated date.
                      Continued use of the Website signifies acceptance of the
                      revised Terms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="border-t border-slate-100 pt-8">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Contact Us
                </h2>

                <div>
                  <div className="flex items-center gap-4 rounded-xl border border-transparent p-2 transition hover:border-slate-100 hover:bg-slate-50">
                    <Mail className="text-blue-500" size={20} />
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400">
                        Email
                      </p>

                      <p className="text-slate-700">
                        info@printerservicellc.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-transparent p-2 transition hover:border-slate-100 hover:bg-slate-50">
                    <Mail className="text-blue-500" size={20} />
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400">
                        Email
                      </p>

                      <p className="text-slate-700">
                        contact@printerservicellc.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-transparent p-2 transition hover:border-slate-100 hover:bg-slate-50">
                    <Mail className="text-blue-500" size={20} />
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400">
                        Email
                      </p>

                      <p className="text-slate-700">
                        billing@printerservicellc.com
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

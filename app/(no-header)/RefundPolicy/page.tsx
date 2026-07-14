"use client";

import React from "react";
import {
  RefreshCcw,
  PackageX,
  Truck,
  CheckCircle2,
  CreditCard,
  Gavel,
  Mail,
} from "lucide-react";

const RefundPolicy: React.FC = () => {
  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white font-sans text-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 px-6 py-20">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            Customer Assurance
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Refund & Return Policy
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Your satisfaction is our priority. We ensure a transparent process
            for cancellations, returns, and refunds under the Consumer
            Protection Act, 2019.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-10 max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
          {/* Overview Banner */}
          <div className="flex items-start gap-4 border-b border-emerald-100 bg-emerald-50 p-6">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />

            <div>
              <h3 className="text-lg font-bold text-emerald-900">Overview</h3>

              <p className="text-sm leading-relaxed text-emerald-800/80">
                At printerservicellc.com, customer satisfaction is our top
                priority. This policy outlines the terms for cancellations and
                returns in compliance with applicable Indian laws.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden border-r border-slate-100 bg-slate-50 p-8 md:block">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Policy Sections
                </div>

                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="cursor-pointer transition hover:text-emerald-600">
                    Order Cancellation
                  </li>

                  <li className="cursor-pointer transition hover:text-emerald-600">
                    Return & Replacement
                  </li>

                  <li className="cursor-pointer transition hover:text-emerald-600">
                    Eligibility Criteria
                  </li>

                  <li className="cursor-pointer transition hover:text-emerald-600">
                    Non-Returnable Items
                  </li>

                  <li className="cursor-pointer transition hover:text-emerald-600">
                    Refund Timeline
                  </li>

                  <li className="cursor-pointer transition hover:text-emerald-600">
                    Shipping & Disputes
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Policy Details */}
            <div className="space-y-12 p-8 md:col-span-2 md:p-12">
              {/* Order Cancellation */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-rose-100 p-2 text-rose-600">
                    <PackageX size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Order Cancellation Policy
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600">
                  <div className="rounded-lg border-l-4 border-rose-400 bg-slate-50 p-4">
                    <p className="mb-1 font-bold text-slate-900">
                      Before Shipment:
                    </p>

                    <ul className="list-inside list-disc">
                      <li className="pb-2">
                        You may cancel your order before it is shipped by
                        contacting our support team at :
                        <br />
                        info@printerservicellc.com 
                        <br />
                        contact@printerservicellc.com
                        <br />
                        billing@printerservicellc.com or via live chat support.
                      </li>

                      <li>
                        If the order is cancelled before shipment, you will
                        receive a full refund within 5–7 business days to your
                        original payment method.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-slate-300 bg-slate-50 p-4">
                    <p className="mb-1 font-bold text-slate-900">
                      After Shipment:
                    </p>

                    <ul className="list-inside list-disc">
                      <li className="pb-2">
                        Once an order is shipped, cancellation is not possible.
                      </li>

                      <li>
                        You may choose to reject the delivery, in which case the
                        item will be returned to us, and a refund will be
                        initiated after we receive the product in its original
                        condition (see Refund Terms below).
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Return & Replacement */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                    <RefreshCcw size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Return & Replacement Policy
                  </h2>
                </div>

                <p className="mb-1 block text-lg font-bold text-slate-700">
                  Eligibility
                </p>

                <p className="font-bold text-slate-500">
                  We accept returns and offer replacements only under the
                  following conditions:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>
                    You received a damaged, defective, or incorrect product.
                  </li>

                  <li>
                    The product is unopened, unused, and returned in its
                    original packaging with all accessories, manuals, and
                    invoices.
                  </li>
                </ul>

                <p className="mt-4 mb-1 block text-lg font-bold text-slate-700">
                  Timeframe
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>
                    You must raise a return request within 7 days of delivery.
                  </li>

                  <li>
                    To initiate a return or replacement, contact our support
                    team with your Order ID, product photos, and reason for
                    return.
                  </li>
                </ul>

                <p className="mt-4 mb-1 block text-lg font-bold text-slate-700">
                  Non-Returnable Items
                </p>

                <p className="font-bold text-slate-500">
                  The following items are not eligible for return:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>Products damaged due to misuse or improper handling</li>

                  <li>Software products, downloaded drivers, and licenses.</li>

                  <li>Ink/toner cartridges once opened or used</li>

                  <li>Customized or special-order items</li>
                </ul>

                <p className="mt-4 mb-1 block text-lg font-bold text-slate-700">
                  Non-Refundable Services
                </p>

                <p className="font-bold text-slate-500">
                  Due to the nature of digital and remote technical services, all services rendered are final and non-refundable once work has commenced. This includes, but is not limited to:
                </p>

                <ul className="list-inside list-disc text-slate-500">
                  <li>Remote printer troubleshooting and diagnostics</li>

                  <li>Printer setup and configuration</li>

                  <li>Network and wireless printer configuration</li>

                  <li>Operating system and device connectivity support</li>

                  <li>Technical consultation and support sessions</li>
                </ul>
                <p className="text-slate-500 font-semibold mt-2">Once a technician has begun diagnosing, troubleshooting, configuring, or providing technical assistance, the service is considered rendered and is not eligible for a refund, regardless of the outcome, change of mind, or if the service is no longer required.</p>
              
                <p className="mt-4 mb-1 block text-lg font-bold text-slate-700">
                  Cancellation
                </p>

                <p className=" text-slate-500">
                  If you wish to cancel your service before any work has started, please contact us immediately. Cancellation requests received before service begins may be reviewed at our sole discretion.
                </p>

                <p className="mt-4 mb-1 block text-lg font-bold text-slate-700">
                  Chargebacks
                </p>

                <p className=" text-slate-500">
                  If you believe there has been an error with your payment, please contact Printer Service LLC before initiating a dispute or chargeback. We will make every reasonable effort to resolve billing concerns promptly. Chargebacks filed for services that have already been provided may be contested with supporting service records and documentation.
                </p>

                <p className="mt-4 mb-1 block text-lg font-bold text-slate-700">
                  Contact
                </p>

                <p className=" text-slate-500">
                  For questions regarding this Refund Policy or your purchase, please contact our customer support team before purchasing any services.
                </p>
              </section>

              {/* Refund Method */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                    <CreditCard size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Refund Policy
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="mb-1 block text-lg font-bold text-slate-700">
                    Refund Method
                  </p>

                  <p className="font-bold text-slate-500">
                    Once your return is approved and the product is received and
                    inspected, the refund will be processed via:
                  </p>

                  <ul className="list-inside list-disc text-slate-500">
                    <li>
                      Original mode of payment (Credit/Debit Card, UPI, Net
                      Banking, etc.)
                    </li>

                    <li>
                      Refunds are typically processed within 7–10 business days
                      after product inspection.
                    </li>
                  </ul>

                  <p className="mt-4 mb-1 block text-lg font-bold text-slate-700">
                    Deductions
                  </p>

                  <ul className="list-inside list-disc text-slate-500">
                    <li>
                      If any product is returned without original packaging,
                      accessories, or has signs of use, a partial refund or
                      restocking fee may apply.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Shipping for Returns */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                    <Truck size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Shipping for Returns
                  </h2>
                </div>

                <ul className="list-inside list-disc text-slate-500">
                  <li>
                    We offer free reverse pickup for eligible return cases.
                  </li>

                  <li>
                    In locations where reverse pickup is not available,
                    customers may need to ship the item to our return center. We
                    will reimburse reasonable shipping charges on verified cases
                    of defective/damaged products.
                  </li>
                </ul>
              </section>

              {/* Dispute Resolution */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                    <Truck size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Dispute Resolution
                  </h2>
                </div>

                <ul className="list-inside list-disc text-slate-500">
                  <li>
                    We aim to resolve disputes in accordance with applicable
                    consumer protection laws in India.
                  </li>
                </ul>
              </section>

              {/* Contact */}
              <section className="border-t border-slate-100 pt-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
                    <Gavel size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail size={18} className="text-emerald-500" />
                      <span>info@printerservicellc.com</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail size={18} className="text-emerald-500" />
                      <span>contact@printerservicellc.com</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail size={18} className="text-emerald-500" />
                      <span>billing@printerservicellc.com</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={openChat}
                  type="button"
                  className="mt-8 w-full rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-slate-900 active:scale-95"
                >
                  Initiate Return Request
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

'use client';

import React from 'react';
import {
  AlertTriangle,
  Tag,
  UserMinus,
  CheckCircle,
  MousePointer2,
  ShieldX,
  Info,
} from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans text-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 px-6 py-20">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Legal Disclosures
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Disclaimer
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Please read this document carefully to understand the limitations of
            our services and our independent status.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-10 max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
          {/* Critical Warning Banner */}
          <div className="flex items-start gap-4 border-b border-amber-100 bg-amber-50 p-6">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-600" />

            <div>
              <h3 className="font-bold text-amber-900">
                Important Notice
              </h3>

              <p className="text-sm text-amber-800/80">
                The information provided on this site is "as-is." Use of our
                technical support services implies your acknowledgment of these
                limitations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Navigation */}
            <aside className="hidden border-r border-slate-100 bg-slate-50 p-8 md:block">
              <nav className="sticky top-8 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Quick Links
                </div>

                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="cursor-pointer transition hover:text-amber-600">
                    General Disclaimer
                  </li>

                  <li className="cursor-pointer transition hover:text-amber-600">
                    Trademark Notice
                  </li>

                  <li className="cursor-pointer transition hover:text-amber-600">
                    No Affiliation
                  </li>

                  <li className="cursor-pointer transition hover:text-amber-600">
                    Service Accuracy
                  </li>

                  <li className="cursor-pointer transition hover:text-amber-600">
                    Remote Consent
                  </li>

                  <li className="cursor-pointer transition hover:text-amber-600">
                    Responsibility
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Disclaimer Text */}
            <div className="space-y-12 p-8 md:col-span-2 md:p-12">
              {/* General Disclaimer */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
                    <Info size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    General Disclaimer
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  Information and services provided on this website are for
                  general technical assistance purposes only and are offered
                  without warranties of any kind, either express or implied.
                </p>
              </section>

              {/* Brand & Trademark Notice */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                    <Tag size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Brand & Trademark Notice
                  </h2>
                </div>

                <p className="mb-4 leading-relaxed text-slate-600">
                  All trademarks, logos, and brand names such as{' '}
                  <strong>HP®, Canon®, Epson®, Brother®</strong>, and others
                  belong to their respective owners.
                </p>

                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                  Reference to these brands is used strictly for identification
                  purposes and does not imply that the brand owners have
                  endorsed our services.
                </div>
              </section>

              {/* No Affiliation Statement */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-red-100 p-2 text-red-600">
                    <UserMinus size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    No Affiliation Statement
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  We are an <strong>independent third-party support provider</strong>{' '}
                  and do not represent any official printer brand unless
                  explicitly stated. We do not claim any direct partnership with
                  original equipment manufacturers (OEMs).
                </p>
              </section>

              {/* Service Accuracy Disclaimer */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                    <CheckCircle size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Service Accuracy Disclaimer
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  While we strive to provide accurate and effective solutions,
                  we do not guarantee uninterrupted, error-free, or permanent
                  fixes for all technical issues due to the complex nature of
                  hardware and software environments.
                </p>
              </section>

              {/* Remote Support Consent */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                    <MousePointer2 size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Remote Support Consent
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  By requesting remote assistance, users voluntarily grant our
                  technicians temporary access to their systems solely for
                  troubleshooting and service delivery. Users are encouraged to
                  remain present at their computer during the entire remote
                  session.
                </p>
              </section>

              {/* Limitation of Responsibility */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-rose-100 p-2 text-rose-600">
                    <ShieldX size={22} />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Limitation of Responsibility
                  </h2>
                </div>

                <p className="leading-relaxed text-slate-600">
                  The company shall not be responsible for:
                </p>

                <ul className="mt-2 ml-6 list-disc space-y-2 text-slate-600">
                  <li>
                    Data loss or corruption during the repair process.
                  </li>

                  <li>
                    System issues arising from third-party software or drivers.
                  </li>

                  <li>
                    Pre-existing technical problems or hardware failures.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
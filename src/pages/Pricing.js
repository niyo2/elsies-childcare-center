import React from "react";

export default function Pricing() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Tuition & Fees
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          We believe in transparent, predictable pricing that helps families plan
          with confidence.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
            Standard Rate
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            $220 / week
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Per child, full-time care, Monday–Friday.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
            Sibling Rate
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            $200 / week
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Discounted rate for each additional sibling.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
            Annual Enrollment Discount
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            - $20 / week
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Savings for families who commit to year-round care.
          </p>
        </div>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Payment details</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tuition is billed weekly and due at the beginning of the week.</li>
          <li>We accept common electronic payment methods and checks.</li>
          <li>Late pick-up fees apply after closing time.</li>
          <li>Holiday and closure policies are outlined in the Parent Handbook.</li>
        </ul>
      </section>
    </div>
  );
}

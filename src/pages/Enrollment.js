import React from "react";

export default function Enrollment() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Enrollment
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          We’re excited you’re considering Elsie’s for your family. Follow the
          steps below to begin enrollment or join our interest list.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3 text-sm">
        {[
          ["1. Schedule a tour", "Visit our classrooms, meet teachers, and ask questions."],
          ["2. Complete forms", "We’ll provide registration and health forms to fill out."],
          ["3. Secure your spot", "Submit forms and pay the registration fee if applicable."],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
          >
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              {title}
            </p>
            <p className="mt-1 text-slate-700">{desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Enrollment interest form
        </h2>
        <p>
          This is a simple interest form. After submitting, our team will contact
          you to confirm availability and next steps.
        </p>

        <form className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-700">
              Parent / Guardian Name
            </label>
            <input
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-700">Email</label>
            <input
              type="email"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-700">
              Phone Number
            </label>
            <input
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="(xxx) xxx-xxxx"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-700">
              Child’s Age
            </label>
            <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
              <option>6–17 months</option>
              <option>18–35 months</option>
              <option>3–5 years</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-700">
              Preferred Start Date
            </label>
            <input
              type="date"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Submit Interest
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

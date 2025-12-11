import React from "react";

const OPENINGS = [
  {
    title: "Assistant Teacher",
    type: "Full-Time",
    desc: "Support lead teachers with daily routines, activities, and ensuring a safe and nurturing environment.",
  },
  {
    title: "Preschool Lead Teacher",
    type: "Full-Time",
    desc: "Plan lessons, lead classroom activities, and guide children through early learning milestones.",
  },
];

export default function Careers() {
  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Careers</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Join our caring, passionate team dedicated to supporting young children and their families.
        </p>
      </header>

      <section className="space-y-4">
        {OPENINGS.map((job) => (
          <div
            key={job.title}
            className="rounded-xl bg-slate-50 border border-slate-200 p-5"
          >
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              {job.type}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">{job.title}</h2>
            <p className="text-sm text-slate-700 mt-1">{job.desc}</p>

            <button className="mt-3 rounded-full bg-sky-600 text-white px-4 py-2 text-sm hover:bg-sky-700">
              Apply Now
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

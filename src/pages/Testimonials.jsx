import React from "react";

const TESTIMONIALS = [
  {
    quote:
      "My daughter absolutely loves coming here every day. The teachers are patient and caring.",
    author: "Parent of a 3-year-old",
  },
  {
    quote:
      "Elsie’s Childcare has given our family stability and trust. We know our kids are in good hands.",
    author: "Parent of siblings, age 2 and 4",
  },
  {
    quote:
      "The communication is excellent — I always know how my child is doing.",
    author: "Parent Review",
  },
];

export default function Testimonials() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Testimonials</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Families trust us with their children — here’s what they say about our care.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm"
          >
            <p className="italic text-slate-700">“{t.quote}”</p>
            <p className="mt-3 text-sm font-semibold text-slate-900">— {t.author}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

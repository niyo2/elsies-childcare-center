import React from "react";

const FACILITIES = [
  {
    title: "Bright Classrooms",
    desc: "Our rooms are designed with natural light, organized learning centers, and age-appropriate materials.",
  },
  {
    title: "Safe Outdoor Play Area",
    desc: "Children enjoy daily outdoor time in a secure, fenced play space with climbing structures and ride-on toys.",
  },
  {
    title: "Reading & Literacy Corner",
    desc: "Cozy reading nooks encourage early literacy and a love for stories.",
  },
  {
    title: "Nap & Rest Area",
    desc: "Clean, calm spaces allow children to rest comfortably with supervised quiet time.",
  },
];

export default function Facilities() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Our Facilities
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Designed for safety, comfort, and exploration — our facility supports 
          early learning and joyful play every day.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {FACILITIES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
          >
            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

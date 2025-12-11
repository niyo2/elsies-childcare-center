import React from "react";
import {
  UserGroupIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const PROGRAMS = [
  {
    icon: UserGroupIcon,
    name: "Infant Care",
    age: "6 – 17 months",
    focus: "Attachment, sensory exploration, tummy time, and early communication.",
  },
  {
    icon: PuzzlePieceIcon,
    name: "Toddler Program",
    age: "18 – 35 months",
    focus: "Language bursts, large motor skills, social play, and simple routines.",
  },
  {
    icon: SparklesIcon,
    name: "Preschool Program",
    age: "3 – 5 years",
    focus: "Early literacy, math, social-emotional learning, and kindergarten readiness.",
  },
];

export default function Programs() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 animate-slideUp">
          Our Programs
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Age-specific classrooms that nurture your child’s growth.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {PROGRAMS.map((p, index) => (
          <div
            key={p.name}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-soft animate-slideUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <p.icon className="w-10 h-10 text-brandBlue mb-3" />
            <p className="text-xs font-semibold text-brandBlue uppercase tracking-wide">
              {p.age}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">{p.name}</h2>
            <p className="mt-2 text-sm text-slate-700">{p.focus}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

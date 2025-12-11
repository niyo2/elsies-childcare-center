import React from "react";
import { Link } from "react-router-dom";

const STAFF = [
  { id: 1, name: "Irene Uwitonze", position: "Director" },
  { id: 2, name: "Lead Teacher", position: "Preschool Lead" },
  { id: 3, name: "Assistant Teacher", position: "Toddler Room" },
];

export default function Staff() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Meet the Staff</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A dedicated team of caregivers and educators who ensure each child feels 
          safe, supported, and encouraged to grow.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {STAFF.map((s) => (
          <Link
            key={s.id}
            to={`/staff/${s.id}`}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 hover:shadow-lg transition"
          >
            <div className="w-20 h-20 bg-sky-200 rounded-full mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold text-center text-slate-900">{s.name}</h2>
            <p className="text-sm text-center text-sky-700">{s.position}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

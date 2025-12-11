import React from "react";

export default function ParentHandbook() {
  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Parent Handbook
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Our Parent Handbook contains policies, expectations, and important 
          information to help families prepare for a successful childcare experience.
        </p>
      </header>

      <section className="space-y-4 text-sm text-slate-700">
        <p>• Daily routines and check-in procedures</p>
        <p>• Tuition payments and due dates</p>
        <p>• Illness policy and required documentation</p>
        <p>• Emergency contacts and authorized pick-up</p>
        <p>• Behavior guidance and positive discipline</p>
        <p>• Holiday schedule and closure policies</p>
      </section>

      <a
        href="#"
        className="inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-2 text-sm hover:bg-sky-700"
      >
        Download Handbook (PDF)
      </a>
    </div>
  );
}

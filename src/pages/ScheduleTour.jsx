import React from "react";

export default function ScheduleTour() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Schedule a Tour</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          We invite you and your family to visit our center, meet our staff, 
          and see our classrooms in action.
        </p>
      </header>

      <form className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-700">Your Name</label>
          <input
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            placeholder="Full name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-700">Email</label>
          <input
            type="email"
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-700">Phone</label>
          <input
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
          <input type="date" className="border border-slate-300 rounded-lg px-3 py-2 text-sm" />
        </div>

        <div className="md:col-span-2 flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-700">Message (optional)</label>
          <textarea
            rows="3"
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            placeholder="Any specific questions or needs?"
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            className="rounded-full bg-sky-600 text-white px-5 py-2 text-sm hover:bg-sky-700"
          >
            Request Tour
          </button>
        </div>
      </form>
    </div>
  );
}

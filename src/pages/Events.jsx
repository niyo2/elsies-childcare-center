import React from "react";

const EVENTS = [
  {
    date: "March 10",
    title: "Spring Family Day",
    desc: "Parents are invited to join us for outdoor games, snacks, and family fun!",
  },
  {
    date: "April 5",
    title: "Picture Day",
    desc: "Professional photos will be taken. Dress your child in their best!",
  },
  {
    date: "May 20",
    title: "Preschool Graduation",
    desc: "A special celebration for our little graduates heading to kindergarten.",
  },
];

export default function Events() {
  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Events</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Stay updated with important dates, special activities, and parent events.
        </p>
      </header>

      <section className="space-y-4">
        {EVENTS.map((event) => (
          <div
            key={event.title}
            className="rounded-xl bg-slate-50 border border-slate-200 p-5"
          >
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              {event.date}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">{event.title}</h2>
            <p className="text-sm text-slate-700 mt-1">{event.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

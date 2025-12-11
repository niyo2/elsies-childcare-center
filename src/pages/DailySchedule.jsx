import React from "react";

const SCHEDULE = [
  ["6:00 – 8:30 AM", "Arrival, quiet play, breakfast"],
  ["9:00 – 11:00 AM", "Circle time, learning centers, outdoor play"],
  ["11:30 AM – 1:30 PM", "Lunch, nap/rest time"],
  ["2:00 – 4:00 PM", "Small group activities, art, music"],
  ["4:00 – 6:00 PM", "Snack, calm activities, pick-up"],
];

export default function DailySchedule() {
  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Daily Schedule</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Children thrive with gentle structure. Our daily routine provides 
          consistency while allowing flexibility based on age and individual needs.
        </p>
      </header>

      <section className="space-y-4">
        {SCHEDULE.map(([time, activity]) => (
          <div
            key={time}
            className="flex items-start gap-4 rounded-xl bg-slate-50 border border-slate-200 p-4"
          >
            <div className="h-2 w-2 bg-sky-600 rounded-full mt-2"></div>
            <div>
              <p className="font-semibold text-slate-900">{time}</p>
              <p className="text-sm text-slate-700">{activity}</p>
            </div>
          </div>
        ))}
      </section>

      <p className="text-sm text-slate-600">
        *Schedules may vary by classroom and individual needs.*
      </p>
    </div>
  );
}

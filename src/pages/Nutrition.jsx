import React from "react";

const MENU = [
  {
    meal: "Breakfast",
    items: "Oatmeal, fruit slices, whole grain toast, milk.",
  },
  {
    meal: "Morning Snack",
    items: "Yogurt, crackers, fruit cups.",
  },
  {
    meal: "Lunch",
    items: "Grilled chicken, rice, veggies, fruit, milk.",
  },
  {
    meal: "Afternoon Snack",
    items: "Cheese sticks, applesauce, pretzels.",
  },
];

export default function Nutrition() {
  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Nutrition</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Healthy meals and snacks are an important part of your child’s day.
          We provide balanced options that support growth and energy.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {MENU.map((item) => (
          <div
            key={item.meal}
            className="rounded-2xl bg-slate-50 border border-slate-200 p-5"
          >
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              {item.meal}
            </p>
            <p className="mt-1 text-sm text-slate-700">{item.items}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-slate-600">
        *Menu may vary weekly. Please notify us of any allergies or dietary needs.*
      </p>
    </div>
  );
}

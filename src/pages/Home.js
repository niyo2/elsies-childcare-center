// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white">
        {/* subtle overlay pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-sky-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur">
              🌙 Guiding little minds with gentle hands, from daylight to moonlight
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Elsie’s Childcare & Learning Center
            </h1>

            <p className="text-sm sm:text-base text-sky-100 max-w-xl">
              A safe, nurturing, and educational home-away-from-home for children
              ages 6 months to 5 years in Midland, Texas. Flexible care designed for
              working families who need someone they can truly trust.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/enroll"
                className="inline-flex items-center justify-center rounded-full bg-white text-sky-700 px-6 py-3 text-sm font-semibold shadow-lg hover:bg-slate-100 transition transform hover:-translate-y-0.5"
              >
                Start Enrollment
              </Link>
              <Link
                to="/schedule-tour"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition transform hover:-translate-y-0.5"
              >
                Schedule a Tour
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="border-l-2 border-sky-200/70 pl-3">
                <p className="uppercase tracking-wide text-sky-100">
                  Hours
                </p>
                <p className="font-semibold text-white">
                  Mon–Fri · 6:00 AM – 6:00 PM
                </p>
              </div>
              <div className="border-l-2 border-sky-200/70 pl-3">
                <p className="uppercase tracking-wide text-sky-100">
                  Age Groups
                </p>
                <p className="font-semibold text-white">
                  6 months – 5 years
                </p>
              </div>
              <div className="border-l-2 border-sky-200/70 pl-3">
                <p className="uppercase tracking-wide text-sky-100">
                  Location
                </p>
                <p className="font-semibold text-white">
                  Midland, Texas
                </p>
              </div>
            </div>
          </div>

          {/* Right side “card” – similar to BK style */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-100 overflow-hidden">
              <div className="px-5 pt-5 pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                    Your child’s second home
                  </p>
                  <p className="text-base font-bold">
                    Safe, loving & learning-focused
                  </p>
                </div>
                <div className="flex items-center justify-center rounded-full bg-sky-100 w-10 h-10 text-sky-700 text-lg">
                  🧸
                </div>
              </div>

              {/* Placeholder image area – replace with real image if you have one */}
              <div className="h-40 sm:h-48 bg-sky-50 flex items-center justify-center">
                {/* Example: <img src="/images/classroom.jpg" alt="Happy children" className="w-full h-full object-cover" /> */}
                <div className="text-center px-6">
                  <p className="text-sm font-semibold text-slate-800">
                    Bright, child-friendly classrooms
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Montessori-inspired spaces with cozy corners, reading nooks, and
                    safe play areas.
                  </p>
                </div>
              </div>

              <div className="px-5 py-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Weekly Tuition</span>
                  <span className="font-semibold text-slate-900">
                    From $220/week
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Sibling Discount</span>
                  <span className="font-semibold text-emerald-600">
                    $200/week per sibling
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Enrollment</span>
                  <span className="font-semibold text-sky-700">
                    Open now ✔
                  </span>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-sky-700 transition"
                >
                  Talk to the Director
                </Link>
                <p className="mt-2 text-[0.7rem] text-slate-400 text-center">
                  We’ll help you find the best schedule and classroom for your child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTION CARDS (similar to BK product/shortcut strip) */}
      <section className="-mt-8 mb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Book a Tour",
              desc: "Visit our classrooms, meet the teachers, and see if Elsie’s is the right fit.",
              to: "/schedule-tour",
            },
            {
              title: "View Programs",
              desc: "Explore age-based classrooms from infants to preschoolers.",
              to: "/programs",
            },
            {
              title: "Tuition & Fees",
              desc: "Transparent weekly tuition with sibling discounts and flexible options.",
              to: "/pricing",
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group rounded-2xl bg-white shadow-md border border-slate-100 px-5 py-4 hover:-translate-y-1 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
              <span className="mt-3 inline-flex items-center text-xs font-semibold text-sky-700 group-hover:text-sky-800">
                Learn more
                <span className="ml-1 group-hover:translate-x-0.5 transition">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Programs for every stage of growth
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Each classroom is tailored to your child’s age and developmental
                needs, with a balance of play, learning, and rest.
              </p>
            </div>
            <Link
              to="/programs"
              className="text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              Explore all programs →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Infant Care",
                age: "6 – 17 months",
                desc: "Gentle routines, lots of cuddles, and sensory exploration in a calm environment.",
              },
              {
                label: "Toddlers",
                age: "18 – 35 months",
                desc: "Language-building, music, story time, and active play to support big milestones.",
              },
              {
                label: "Preschool",
                age: "3 – 5 years",
                desc: "Kindergarten readiness through early math, literacy, and social-emotional learning.",
              },
            ].map((program) => (
              <div
                key={program.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-6 shadow-sm hover:shadow-md hover:bg-slate-50 transition"
              >
                <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                  {program.age}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {program.label}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ELSIE'S (BANK-LIKE BENEFITS GRID) */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why families trust Elsie’s
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Like a trusted bank for your finances, Elsie’s is a trusted home
              for your child. We combine structure, security, and care to give
              your little one the best start.
            </p>

            <ul className="mt-5 space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-slate-900">
                    Licensed & safety-focused
                  </p>
                  <p>
                    Follows Texas DFPS standards with secure entry, childproofed
                    spaces, and emergency procedures.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-slate-900">
                    Consistent, loving teachers
                  </p>
                  <p>
                    Caregivers who build stable, warm relationships so your child
                    feels known and valued.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-slate-900">
                    Strong parent communication
                  </p>
                  <p>
                    Daily conversations, clear policies, and upcoming parent app
                    for photo and activity updates.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* "Dashboard" style card to mimic BK corporate feel */}
          <div className="rounded-3xl bg-white shadow-xl border border-slate-100 p-5 sm:p-6 space-y-4">
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              A day at Elsie’s
            </p>
            <div className="space-y-3 text-sm">
              {[
                ["6:00 – 8:30 AM", "Arrival, breakfast, and gentle morning play"],
                ["9:00 – 11:00 AM", "Circle time, centers, and outdoor play"],
                ["11:30 AM – 1:30 PM", "Lunch and nap/rest time"],
                ["2:00 – 4:00 PM", "Small group learning, art, and music"],
                ["4:00 – 6:00 PM", "Snack, calm activities, and pick-up"],
              ].map(([time, activity]) => (
                <div
                  key={time}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 px-3 py-2"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-sky-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{time}</p>
                    <p className="text-slate-600">{activity}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[0.7rem] text-slate-400">
              Schedules are flexible and adjusted to age groups and individual
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* PARENT TOOLS / DIGITAL FEEL SECTION */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Designed for busy parents
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Just like modern banking tools make life easier, we’re building
                tools that keep you informed and supported every day.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-5 text-sm">
              <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                Daily updates
              </p>
              <p className="mt-1 text-slate-700">
                Stay in the loop with notes about naps, meals, and milestones.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-5 text-sm">
              <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                Flexible schedules
              </p>
              <p className="mt-1 text-slate-700">
                Weekly full-time care with options for siblings and extended
                support.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-5 text-sm">
              <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                Open-door communication
              </p>
              <p className="mt-1 text-slate-700">
                We’re available to talk through concerns, transitions, and
                questions as your child grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-indigo-700 px-6 py-8 sm:px-10 sm:py-10 text-white shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Ready to visit Elsie’s Childcare & Learning Center?
              </h2>
              <p className="mt-1 text-sm sm:text-base text-sky-100 max-w-xl">
                Schedule a tour to see our classrooms, meet the team, and ask any
                questions you have about enrollment, tuition, or daily routines.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/schedule-tour"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 hover:bg-slate-100 transition"
              >
                Book a Tour
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/80 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Contact the Director
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

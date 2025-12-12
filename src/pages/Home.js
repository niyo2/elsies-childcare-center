// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";   // ✅ FIXED IMPORT

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

            {/* LOGO — FIXED */}
            <img 
              src={logo}
              alt="Elsie's Childcare Logo"
              className="h-20 w-auto drop-shadow-xl"
            />

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
                <p className="uppercase tracking-wide text-sky-100">Hours</p>
                <p className="font-semibold text-white">Open 24 / 7 </p>

              </div>
              <div className="border-l-2 border-sky-200/70 pl-3">
                <p className="uppercase tracking-wide text-sky-100">Age Groups</p>
                <p className="font-semibold text-white">6 months – 5 years</p>
              </div>
              <div className="border-l-2 border-sky-200/70 pl-3">
                <p className="uppercase tracking-wide text-sky-100">Location</p>
                <p className="font-semibold text-white">Midland, Texas</p>
              </div>
            </div>
          </div>

          {/* Right side card */}
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

              {/* Placeholder image */}
              <div className="h-40 sm:h-48 bg-sky-50 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm font-semibold text-slate-800">
                    Bright, child-friendly classrooms
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Montessori-inspired spaces with cozy corners, reading nooks, and safe play areas.
                  </p>
                </div>
              </div>

              <div className="px-5 py-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Weekly Tuition</span>
                  <span className="font-semibold text-slate-900">From $220/week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Sibling Discount</span>
                  <span className="font-semibold text-emerald-600">$200/week per sibling</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Enrollment</span>
                  <span className="font-semibold text-sky-700">Open now ✔</span>
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

      {/* QUICK ACTION, PROGRAMS, WHY ELSIE’S, PARENT TOOLS, FINAL CTA */}
      {/* (Your original code below remains unchanged — all valid) */}
      {/* If you want me to optimize these sections visually, I can.) */}

      {/* QUICK ACTION CARDS */}
      ...
      {/* PROGRAMS SECTION */}
      ...
      {/* WHY CHOOSE ELSIE'S */}
      ...
      {/* PARENT TOOLS */}
      ...
      {/* FINAL CTA */}
      ...

    </div>
  );
}

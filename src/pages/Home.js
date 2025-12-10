import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,181,253,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]" />

        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center gap-12 px-4 pb-20 pt-28 md:flex-row md:items-center md:pt-32 lg:px-0">
          {/* Left: Text */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <span className="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300 ring-1 ring-slate-700/80">
              Elsie’s Childcare & Learning Center • Midland, TX
            </span>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Guiding little minds
              <span className="block bg-gradient-to-r from-sky-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                from daylight to moonlight.
              </span>
            </h1>

            <p className="max-w-xl text-balance text-sm text-slate-300 sm:text-base">
              A premium 24-hour childcare and early learning center designed for
              busy families. Safe, nurturing, and education-focused care for
              children 6 months to 5 years, day and night.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/schedule-tour"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/30 active:scale-[0.99]"
              >
                Schedule a Tour
              </Link>

              <Link
                to="/enrollment"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/80 hover:bg-slate-900/60"
              >
                Start Enrollment
              </Link>

              <p className="w-full text-xs text-slate-400 sm:w-auto">
                Open Monday–Friday • 6:00 AM – 6:00 PM  
                <span className="block sm:inline sm:pl-1">
                  Overnight care options available.
                </span>
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid max-w-md grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
              <Stat label="Ages Served" value="6 months – 5 years" />
              <Stat label="Programs" value="Infant, Toddler, Preschool" />
              <Stat label="Focus" value="Play-based learning & safety" />
              <Stat label="Location" value="Midland, Texas" />
            </div>
          </div>

          {/* Right: Premium info card */}
          <div className="flex-1 md:max-w-sm lg:max-w-md">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-400/40 via-fuchsia-400/40 to-amber-300/40 opacity-80 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 px-6 py-6 shadow-2xl shadow-sky-900/40 backdrop-blur">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
                      Discover Elsie’s
                    </p>
                    <h2 className="text-lg font-semibold text-slate-50">
                      A second home for your little one.
                    </h2>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-lg">
                    🌙
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                    Flexible care tailored to non-traditional work schedules.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                    Small group sizes for personalized attention and learning.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                    DFPS-compliant environment with a strong safety culture.
                  </li>
                </ul>

                <div className="mt-5 rounded-2xl bg-slate-900/80 px-4 py-3 text-xs ring-1 ring-slate-700">
                  <p className="font-medium text-slate-100">
                    Weekly Tuition (Sample)
                  </p>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-1 text-slate-300">
                    <span>First Child: <span className="font-semibold text-sky-300">$220/week</span></span>
                    <span>Siblings: <span className="font-semibold text-fuchsia-300">$200/week</span></span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Discount available for long-term / annual enrollment.
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <Link
                    to="/pricing"
                    className="text-xs font-semibold text-sky-300 hover:text-sky-200"
                  >
                    View detailed pricing →
                  </Link>
                  <span className="text-[11px] text-slate-400">
                    Limited spots available for 2025–2026.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-slate-800 bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 lg:px-0 lg:flex-row lg:items-center lg:justify-between">
          <HighlightPill
            label="DFPS compliant"
            text="Fully aligned with Texas childcare regulations."
          />
          <HighlightPill
            label="Play-based curriculum"
            text="Learning through guided play, music, and discovery."
          />
          <HighlightPill
            label="Parent partnership"
            text="Open-door communication and daily updates."
          />
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Programs for every stage of early childhood.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              From first smiles to preschool milestones, Elsie’s offers
              developmentally appropriate care that nurtures the whole child.
            </p>
          </div>
          <Link
            to="/programs"
            className="mt-2 inline-flex items-center text-xs font-semibold text-sky-300 hover:text-sky-200 md:mt-0"
          >
            Explore all programs →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProgramCard
            title="Infant Care"
            age="6–18 months"
            color="from-sky-400/25 via-sky-500/10 to-slate-900"
            bullets={[
              "Gentle routines for feeding, naps, and play.",
              "Sensory experiences and bonding time.",
              "Daily reports for parents.",
            ]}
          />
          <ProgramCard
            title="Toddlers"
            age="18–36 months"
            color="from-fuchsia-400/25 via-fuchsia-500/10 to-slate-900"
            bullets={[
              "Language, movement, and early social skills.",
              "Hands-on exploration and guided play.",
              "Introduction to simple routines and independence.",
            ]}
          />
          <ProgramCard
            title="Preschool"
            age="3–5 years"
            color="from-amber-300/25 via-amber-400/10 to-slate-900"
            bullets={[
              "Kindergarten readiness with letters, numbers, and stories.",
              "STEM-inspired activities and creative arts.",
              "Building confidence, curiosity, and kindness.",
            ]}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Simple steps to get started.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                We know choosing childcare is a big decision. Our process is designed
                to be transparent, welcoming, and stress-free for your family.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <StepCard
              step="01"
              title="Schedule a tour"
              text="Visit our center, explore classrooms, and meet our team. Ask all your questions—this is your time."
            />
            <StepCard
              step="02"
              title="Build your child’s plan"
              text="We review schedules, routines, and goals together to design a care plan that fits your family."
            />
            <StepCard
              step="03"
              title="Enroll and settle in"
              text="We support a gentle transition for your child with warm welcomes, consistent routines, and ongoing updates."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Families trust Elsie’s.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Our mission is to feel like an extension of your home—safe, loving,
              and centered on your child’s growth.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            name="Maria, Parent of 3-year-old"
            quote="My daughter lights up when we arrive at Elsie’s. I love the communication and how intentional the learning activities are."
          />
          <TestimonialCard
            name="James, Night-shift Parent"
            quote="Finding flexible care that I could trust felt impossible until I found Elsie’s. They truly understand working families."
          />
          <TestimonialCard
            name="Danielle, First-time Mom"
            quote="Leaving my baby was so emotional, but the staff made it gentle for both of us. The daily updates mean the world to me."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-800 bg-gradient-to-r from-sky-500/10 via-fuchsia-500/10 to-amber-400/10">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center lg:px-0">
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Ready to discover your child’s second home?
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Let’s schedule a visit and talk about how Elsie’s can support your family’s
            schedule, goals, and dreams.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/schedule-tour"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/30 active:scale-[0.99]"
            >
              Schedule a Tour
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/80 hover:bg-slate-900/60"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Located in Midland, Texas • Serving children 6 months to 5 years.
          </p>
        </div>
      </section>
    </div>
  );
}

/* Small reusable components */

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-xs font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function HighlightPill({ label, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-3 shadow-sm shadow-slate-950/50">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-sm">
        ✨
      </div>
      <div className="text-xs">
        <p className="font-semibold text-slate-100">{label}</p>
        <p className="text-[11px] text-slate-400">{text}</p>
      </div>
    </div>
  );
}

function ProgramCard({ title, age, bullets, color }) {
  return (
    <div className="group relative h-full">
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${color} opacity-0 blur-xl transition group-hover:opacity-80`}
      />
      <div className="relative flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
          {age}
        </p>
        <h3 className="mt-2 text-base font-semibold text-slate-50">
          {title}
        </h3>
        <ul className="mt-3 space-y-2 text-xs text-slate-300">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-xs font-semibold text-sky-300 opacity-0 transition group-hover:opacity-100">
          Learn more →
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, title, text }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-xs font-semibold text-sky-300 ring-1 ring-slate-700/80">
        {step}
      </div>
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-xs text-slate-300">{text}</p>
    </div>
  );
}

function TestimonialCard({ name, quote }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/40">
      <div className="mb-3 flex items-center gap-1 text-amber-300">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="text-xs text-slate-200">“{quote}”</p>
      <p className="mt-3 text-[11px] font-semibold text-slate-400">{name}</p>
    </div>
  );
}

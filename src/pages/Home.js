// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function SectionCard({ children, className = "" }) {
  return (
    <section
      className={
        "rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 " + className
      }
    >
      {children}
    </section>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/90 ring-1 ring-white/40 px-4 py-3">
      <div className="text-xs text-slate-600">{label}</div>
      <div className="text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function QuickLinkCard({ title, desc, to }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-5 hover:shadow-md transition"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-base font-semibold text-slate-900">{title}</div>
        <div className="text-slate-400 group-hover:text-slate-700 transition">
          →
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-transparent">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative px-6 py-12 md:px-12 md:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm ring-1 ring-white/25">
              Guiding Little Minds with Gentle Hands, from Daylight to Moonlight.
            </p>

            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight">
              Elsie’s Childcare & Learning Center
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/90">
              Safe, joyful, and learning-focused childcare for ages{" "}
              <span className="font-semibold">6 months to 5 years</span> in
              Midland, Texas.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                to="/enroll"
                className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/95"
              >
                Enroll Now
              </Link>
              <Link
                to="/programs"
                className="inline-flex justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
              >
                Explore Programs
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              <StatPill label="Hours" value="Mon–Fri · 6:00 AM – 6:00 PM" />
              <StatPill label="Tuition" value="$220/week · Siblings $200" />
              <StatPill label="Contact" value="(432) 215-8560" />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS (I&M style row of blocks) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <QuickLinkCard
          title="Programs"
          desc="Play-based learning, early literacy, and social growth."
          to="/programs"
        />
        <QuickLinkCard
          title="Pricing"
          desc="Simple weekly tuition and sibling savings."
          to="/pricing"
        />
        <QuickLinkCard
          title="Schedule a Tour"
          desc="Come see our classrooms and meet our team."
          to="/schedule-tour"
        />
      </div>

      {/* ABOUT + IMAGE BLOCK */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            A Home Away From Home
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            We provide a warm, structured environment where children learn
            through play, build confidence, and develop strong routines—while
            parents feel supported with clear communication and a welcoming
            open-door policy.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/about"
              className="inline-flex justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </SectionCard>

        {/* Placeholder image panel (no external image needed) */}
        <SectionCard className="p-0 overflow-hidden">
          <div className="relative h-full min-h-[260px] bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-10 left-8 h-56 w-56 rounded-full bg-rose-200 blur-3xl" />
              <div className="absolute top-10 right-10 h-56 w-56 rounded-full bg-emerald-200 blur-3xl" />
            </div>
            <div className="relative p-6 md:p-8">
              <div className="text-sm font-semibold text-slate-800">
                Clean, calm learning spaces
              </div>
              <p className="mt-2 text-sm text-slate-600 max-w-md">
                A welcoming environment designed for play, discovery, rest, and age-appropriate learning.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
                <div className="rounded-2xl bg-white/80 ring-1 ring-slate-200 p-4">
                  <div className="text-xs text-slate-600">Learning</div>
                  <div className="text-sm font-semibold text-slate-900">
                    Play-Based Curriculum
                  </div>
                </div>
                <div className="rounded-2xl bg-white/80 ring-1 ring-slate-200 p-4">
                  <div className="text-xs text-slate-600">Care</div>
                  <div className="text-sm font-semibold text-slate-900">
                    Safety-Focused Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* PROGRAMS PREVIEW */}
      <div className="mt-8">
        <SectionCard className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Programs for Every Stage
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Age-appropriate activities that support growth in language,
                movement, and social-emotional skills.
              </p>
            </div>
            <Link
              to="/programs"
              className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              View All Programs
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Infants (6–17 months)",
                desc: "Gentle care, sensory play, and secure routines.",
              },
              {
                title: "Toddlers (18–35 months)",
                desc: "Language growth, movement, and social play.",
              },
              {
                title: "Preschool (3–5 years)",
                desc: "Early literacy, creativity, and school readiness.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-5"
              >
                <div className="text-base font-semibold text-slate-900">
                  {x.title}
                </div>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* TESTIMONIAL STRIP */}
      <div className="mt-8">
        <SectionCard className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                What Parents Say
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Trust, safety, and a welcoming environment matter.
              </p>
              <Link
                to="/testimonials"
                className="mt-4 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Read Testimonials
              </Link>
            </div>

            {[
              {
                quote:
                  "The staff is caring and communication is excellent. My child loves going every morning.",
                name: "Parent Review",
              },
              {
                quote:
                  "Clean space, safe routines, and learning through play—exactly what we wanted.",
                name: "Parent Review",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-5"
              >
                <p className="text-sm text-slate-700 leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-3 text-xs font-semibold text-slate-900">
                  — {t.name}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* CONTACT CTA */}
      <div className="mt-8">
        <SectionCard className="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Ready to visit?
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Email us at <span className="font-semibold">info@elsieschildcarecenter.com</span>{" "}
                or call <span className="font-semibold">(432) 215-8560</span>.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Business hours: <span className="font-semibold">Mon–Fri, 6:00 AM – 6:00 PM</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/schedule-tour"
                className="inline-flex justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Schedule a Tour
              </Link>
              <Link
                to="/enroll"
                className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Start Enrollment
              </Link>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="h-10" />
    </div>
  );
}

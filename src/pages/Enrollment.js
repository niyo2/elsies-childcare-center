import React from "react";

export default function Enrollment() {
  return (
    <div className="bg-slate-50">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Enrollment & Pricing
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Clear, simple enrollment steps and transparent pricing—designed to
            support families with confidence and peace of mind.
          </p>
        </div>
      </section>

      {/* ============================================================
          ENROLLMENT PROCESS
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
            How to Enroll
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-center">
            Our enrollment process is designed to be simple and supportive. We’re
            here to guide you every step of the way.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "Step 1",
                title: "Contact Us",
                desc: "Reach out to learn more about availability and program options.",
              },
              {
                step: "Step 2",
                title: "Schedule a Tour",
                desc: "Visit our center, meet our team, and see our environment firsthand.",
              },
              {
                step: "Step 3",
                title: "Complete Enrollment",
                desc: "Submit enrollment forms and required documentation.",
              },
              {
                step: "Step 4",
                title: "Start Care",
                desc: "Welcome your child into a safe, nurturing learning environment.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-white shadow p-7 text-center"
              >
                <p className="text-sm font-semibold text-sky-600">
                  {item.step}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PRICING
          ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
            Tuition & Payment Information
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-center">
            We offer competitive pricing that reflects the quality, safety, and
            flexibility of our childcare services.
          </p>

          <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-semibold text-slate-900">
                Weekly Tuition (per child)
              </span>
              <span className="text-xl font-bold text-slate-900">
                $250
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Tuition is due at the beginning of each week</li>
              <li>• A brief grace period may be offered when needed</li>
              <li>• A $20 late fee applies to overdue payments</li>
              <li>• Payment methods will be clearly explained during enrollment</li>
            </ul>

            <p className="mt-6 text-sm text-slate-600">
              Our pricing supports low child-to-staff ratios, experienced
              caregivers, and a safe, engaging learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT’S INCLUDED
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              What Tuition Includes
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Families enrolled at Elsie’s Childcare & Learning Center receive
              more than just supervision. Tuition includes comprehensive care
              designed to support your child’s development and your peace of
              mind.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow p-8">
            <ul className="space-y-3 text-slate-700">
              <li>• Safe and secure daily care</li>
              <li>• Age-appropriate learning activities</li>
              <li>• Structured routines and supervision</li>
              <li>• Ongoing parent communication</li>
              <li>• Inclusive and supportive care environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white p-10 md:p-12 shadow text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Ready to Begin Enrollment?
            </h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Contact us today to check availability, schedule a tour, or ask any
              questions about enrollment.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="rounded-full bg-pink-400 hover:bg-pink-500 px-7 py-3 font-semibold transition"
              >
                Contact Us
              </a>
              <a
                href="/schedule-tour"
                className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-7 py-3 font-semibold transition"
              >
                Schedule a Tour
              </a>
            </div>

            <div className="mt-6 text-sm text-white/90">
              <span className="font-semibold">info@elsieschildcarecenter.com</span>{" "}
              • <span className="font-semibold">(432) 215-8560</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

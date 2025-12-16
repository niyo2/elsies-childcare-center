import React from "react";

export default function Contact() {
  return (
    <div className="bg-slate-50">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            We’re here to answer your questions, schedule a tour, and support your
            family every step of the way.
          </p>
        </div>
      </section>

      {/* ============================================================
          CONTACT DETAILS
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Choosing the right childcare center is an important decision.
              Whether you’d like to learn more about our programs, check
              availability, or schedule a visit, we’re happy to help.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-600">Email</p>
                <p className="text-lg font-bold text-slate-900">
                  info@elsieschildcarecenter.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-600">Phone</p>
                <p className="text-lg font-bold text-slate-900">
                  (432) 215-8560
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-600">Hours</p>
                <p className="text-slate-900">
                  Monday – SUNDAY<br />
                  OPEN DAY AND NIGHT
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-600">Location</p>
                <p className="text-slate-900">
                  Midland, Texas
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-3xl bg-white shadow p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Send Us a Message
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Fill out the form below and we’ll get back to you as soon as possible.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(xxx) xxx-xxxx"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 transition"
              >
                Send Message
              </button>
            </form>
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
              Schedule a Tour of Our Center
            </h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Seeing our environment in person is the best way to learn more
              about our care and programs.
            </p>

            <div className="mt-7 flex justify-center">
              <a
                href="/schedule-tour"
                className="rounded-full bg-pink-400 hover:bg-pink-500 px-7 py-3 font-semibold transition"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Have questions? We’re here to help. Reach out anytime!
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 text-sm">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Center Information</h2>
          <p className="text-slate-700">
            <strong>Address:</strong> Midland, Texas  
          </p>
          <p className="text-slate-700">
            <strong>Phone:</strong> (Add your number)
          </p>
          <p className="text-slate-700">
            <strong>Email:</strong> (Add your email)
          </p>
          <p className="text-slate-700">
            <strong>Hours:</strong> Monday–Friday, 6 AM – 6 PM
          </p>
        </div>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-700">Your Name</label>
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Full Name" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-700">Email</label>
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-700">Message</label>
            <textarea className="border rounded-lg px-3 py-2 text-sm" rows="4" />
          </div>

          <button
            type="button"
            className="rounded-full bg-sky-600 text-white px-5 py-2 text-sm hover:bg-sky-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

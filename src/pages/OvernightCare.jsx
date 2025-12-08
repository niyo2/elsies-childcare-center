import React from "react";

export default function OvernightCare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-sky-900 to-indigo-900 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Overnight Care Program
        </h1>
        <p className="text-center text-indigo-100 mb-2">
          Guiding Little Minds with Gentle Hands,
        </p>
        <p className="text-center text-amber-200 font-semibold mb-8">
          from Daylight to Moonlight.
        </p>

        <div className="bg-white/10 backdrop-blur rounded-3xl p-6 md:p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-3">Why Overnight Care?</h2>
          <p className="text-indigo-100 mb-3">
            Many parents in Midland work night shifts, long shifts, or
            rotating schedules. At Elsie’s, we provide a safe, licensed, and
            nurturing overnight option so you never have to choose between your
            job and your child’s wellbeing.
          </p>
          <p className="text-indigo-100">
            Our overnight program is designed to feel like a{" "}
            <span className="font-semibold">second home</span> — calm, cozy, and
            predictable — with consistent caregivers and age-appropriate
            routines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">Overnight Schedule</h3>
            <ul className="space-y-1 text-indigo-100 text-sm">
              <li>🕕 6:00–8:00 PM — Arrival, dinner, & calm play</li>
              <li>🛁 8:00–8:30 PM — Bath-time (if requested) & pajamas</li>
              <li>📖 8:30–9:00 PM — Storytime & night routine</li>
              <li>🌙 9:00 PM — Lights dimmed, soft music, sleep</li>
              <li>🌅 5:30–6:30 AM — Gentle wake-up & breakfast</li>
              <li>🧸 6:30–7:00 AM — Pick-up & daily recap for parents</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">
              Safety & Comfort at Night
            </h3>
            <ul className="space-y-1 text-indigo-100 text-sm">
              <li>✔️ Small group sizes for individualized attention</li>
              <li>✔️ Cribs and cots with clean bedding</li>
              <li>✔️ Night lights & quiet, soothing sound environment</li>
              <li>✔️ Strict check-in/check-out procedures</li>
              <li>✔️ Real-time parent communication if needed</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-400 text-slate-900 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Overnight Spaces Are Limited
          </h3>
          <p className="mb-4 text-sm">
            To keep our environment calm and safe, we accept a limited number of
            children per night. Reserve your spot in advance.
          </p>
          <p className="font-semibold">
            Call us or submit an Overnight Care Inquiry on the Enrollment page.
          </p>
        </div>
      </div>
    </div>
  );
}


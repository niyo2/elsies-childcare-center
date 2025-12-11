import React from "react";

export default function OvernightCare() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Overnight Care
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          We understand that families often work non-traditional hours. Our overnight
          care program provides a safe and nurturing environment for your child beyond
          typical daycare hours.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 text-sm">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-900">Comfortable Sleep Spaces</h2>
          <p className="mt-2 text-slate-700">
            Children sleep in clean, supervised areas with comfortable bedding and
            soft lighting. We maintain quiet, peaceful environments to support healthy rest.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-900">Safe & Secure</h2>
          <p className="mt-2 text-slate-700">
            Overnight caregivers are trained in nighttime supervision, emergency
            procedures, and safety monitoring. Parents can rest knowing their children
            are safe.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-900">Bedtime Routine Support</h2>
          <p className="mt-2 text-slate-700">
            We follow your child’s existing bedtime routine—snack, brushing teeth,
            stories, or calming time—to help them feel at home.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-900">Early Morning Transition</h2>
          <p className="mt-2 text-slate-700">
            When children wake up, they gently transition into daytime activities with
            breakfast and age-appropriate engagement.
          </p>
        </div>
      </section>

      <p className="text-sm text-slate-600">
        Overnight care availability varies. Please contact us in advance to check open slots
        and scheduling requirements.
      </p>
    </div>
  );
}

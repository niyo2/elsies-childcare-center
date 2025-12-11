import React from "react";

export default function About() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          About Elsie’s Childcare & Learning Center
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Elsie’s Childcare & Learning Center in Midland, Texas, was created to
          support hardworking families with nurturing, high-quality early care
          and education for children ages 6 months to 5 years.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
          <p className="text-slate-600">
            Our mission is to provide a warm, safe, and enriching environment
            where children feel loved, respected, and inspired to learn. We
            partner closely with parents to support each child’s individual
            journey—socially, emotionally, and academically.
          </p>
          <p className="text-slate-600">
            We believe quality childcare should feel like a second home:
            consistent, reliable, and full of gentle guidance.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Our Philosophy</h2>
          <p className="text-slate-600">
            We blend play-based learning with age-appropriate structure. Children
            explore through hands-on activities, guided play, music, stories, and
            movement. Teachers act as co-learners, gently scaffolding skills and
            encouraging curiosity.
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
            <li>Respect for each child’s pace and personality</li>
            <li>Strong routines that make children feel secure</li>
            <li>Culturally responsive and inclusive environment</li>
            <li>Open, honest communication with families</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          ["Licensed in Texas", "Operating in line with Texas DFPS standards and regulations."],
          ["Small Group Sizes", "More personalized attention and connection with each child."],
          ["Family-Centered", "We welcome questions, feedback, and collaboration from parents."],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm"
          >
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
              {title}
            </p>
            <p className="mt-1 text-slate-700">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

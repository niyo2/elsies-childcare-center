import React from "react";

export default function About() {
  return (
    <div className="bg-slate-50">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About Elsie’s Childcare & Learning Center
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            A mission-driven childcare center built to support working families
            through safe, inclusive, and compassionate care.
          </p>
        </div>
      </section>

      {/* ============================================================
          OUR STORY
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Story
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Elsie’s Childcare & Learning Center was founded from a deeply personal
              experience and a clear need within the Midland community. The vision
              began after witnessing how difficult it was for families—especially
              working parents—to find reliable, high-quality childcare that truly
              meets their needs.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              The turning point came when a child in our own family was repeatedly
              turned away from childcare centers due to medical conditions and
              developmental delays. This experience revealed a critical gap in
              compassionate, inclusive childcare and inspired the creation of a
              center where every child is welcomed, supported, and valued.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              At Elsie’s, we believe childcare should never be a barrier to a parent’s
              ability to work, provide, and grow. Our center exists to support
              families with dependable care, thoughtful education, and a nurturing
              environment where children can thrive.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Built With Purpose
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                Created to meet real childcare challenges faced by working families
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                Designed with inclusion, safety, and compassion at the core
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                Focused on both child development and parent peace of mind
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          MISSION & VALUES
          ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Our Mission & Values
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Everything we do at Elsie’s is guided by a commitment to children,
            families, and the community we serve.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Compassion",
                desc: "We treat every child with care, patience, and respect—just as we would our own.",
              },
              {
                title: "Safety",
                desc: "We prioritize secure routines, clean environments, and attentive supervision at all times.",
              },
              {
                title: "Education",
                desc: "We support early learning through age-appropriate activities that encourage growth and curiosity.",
              },
              {
                title: "Inclusion",
                desc: "We welcome children of all abilities and work to meet individual needs with understanding.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-7 text-left"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-slate-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Leadership
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Elsie’s Childcare & Learning Center is owned and led by Irene Uwitonze,
              who serves as the Director and primary owner of the center. Irene
              brings a strong background in business, leadership, and operations,
              ensuring that the center is managed with professionalism, integrity,
              and care.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              As a hands-on leader, Irene oversees daily operations, staff
              coordination, curriculum planning, and parent communication. Her
              leadership approach emphasizes accountability, continuous
              improvement, and a family-oriented culture that supports both staff
              and children.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Our Commitment to Families
            </h3>
            <p className="mt-3 text-slate-700">
              We understand that choosing childcare is one of the most important
              decisions a family makes. Our leadership team is committed to
              transparency, open communication, and creating a trusted partnership
              with every parent we serve.
            </p>
            <p className="mt-4 text-slate-700">
              At Elsie’s, families are not just clients—they are part of a supportive
              community built around shared values and mutual trust.
            </p>
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
              Learn More About Our Programs
            </h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Discover how our programs are designed to support your child’s
              growth while fitting your family’s schedule.
            </p>
            <div className="mt-7 flex justify-center">
              <a
                href="/programs"
                className="rounded-full bg-pink-400 hover:bg-pink-500 px-7 py-3 font-semibold transition"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

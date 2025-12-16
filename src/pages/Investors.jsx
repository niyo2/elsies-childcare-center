import React from "react";

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-white shadow p-6">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="mt-2 text-2xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h2>
      <div className="mt-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function Investors() {
  return (
    <div className="bg-slate-50">
      {/* Top header section (uses videograph-like rhythm: hero -> metrics -> sections) */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-pink-300 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-14">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <p className="text-sm font-semibold text-sky-700">
                Private Investor / Grant Brief
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                Elsie’s Childcare & Learning Center
              </h1>
              <p className="mt-3 max-w-2xl text-slate-700">
                A flexible, inclusive childcare solution designed to support Midland’s working
                families—especially shift-based industries—while maintaining strong compliance
                and quality standards.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow p-5 w-full md:w-[340px]">
              <div className="text-sm text-slate-600">Contact</div>
              <div className="mt-2 text-slate-900 font-semibold">
                info@elsieschildcarecenter.com
              </div>
              <div className="text-slate-900 font-semibold">(432) 215-8560</div>
              <div className="mt-3 text-xs text-slate-500">
                (Replace or expand with your preferred investor email later.)
              </div>
            </div>
          </div>

          {/* Key metrics (you can edit these anytime) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Metric label="Location" value="Midland, TX" />
            <Metric label="Target Ages" value="6 months – 5 years" />
            <Metric label="Model" value="Day + Overnight Options" />
            <Metric label="Focus" value="Inclusive, Safety-first Care" />
          </div>

          <Section title="The Need We Solve">
            <p>
              Midland’s workforce includes oil & gas, healthcare, emergency services, and other
              shift-based roles. A key gap is the lack of dependable late-night and overnight care,
              which forces families into unsafe or unstable arrangements and limits employment
              flexibility for parents. This is a core problem Elsie’s is designed to address.
            </p>
          </Section>

          <Section title="Our Solution">
            <p>
              Elsie’s Childcare & Learning Center is designed to provide flexible scheduling with
              daytime care and scalable overnight options as demand supports, while maintaining
              a high standard of education, safety, and compassion for every child—including
              children with medical conditions or developmental delays.
            </p>
          </Section>

          <Section title="Operations & Facility Plan">
            <ul className="list-disc pl-5 space-y-2">
              <li>Strategic Midland location with high visibility and easy access.</li>
              <li>
                Facility plan includes multiple classrooms, kitchen support, and secure outdoor play
                space.
              </li>
              <li>
                Technology-forward operations: billing, attendance, secure check-in/out, and parent
                communications.
              </li>
            </ul>
          </Section>

          <Section title="Leadership & Ownership">
            <p>
              The center is owned and led by Irene Uwitonze, supported by a co-owner partnership.
              Leadership and staffing plans are structured to maintain quality while scaling responsibly.
            </p>
          </Section>

          <Section title="Funding Ask & Use of Funds">
            <p>
              The business plan outlines a funding request intended to cover essential startup needs
              such as facility preparation, equipment, staffing & training, licensing, and early operating
              expenses. The goal is sustainable growth with responsible stewardship and strong community
              impact.
            </p>
          </Section>

          <div className="mt-12 rounded-3xl bg-white shadow p-8">
            <h3 className="text-lg font-bold text-slate-900">Next Steps</h3>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-slate-700">
              <li>Add a “Download Business Plan PDF” button (optional/private).</li>
              <li>Replace metrics with your preferred highlights (tuition, hours, capacity, etc.).</li>
              <li>Upgrade to Firebase Auth later if you want user-based access control.</li>
            </ol>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            Content and positioning are derived from the official Elsie’s Childcare & Learning Center
            Business Plan. :contentReference[oaicite:1]{index=1}
          </p>
        </div>
      </div>
    </div>
  );
}

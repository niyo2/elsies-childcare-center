import React, { useEffect, useState } from "react";

export default function Home() {
  // ----- Photo carousel (edit these paths to match your assets) -----
  const images = [
    "/assets/classroom.jpg",
    "/assets/playtime.jpg",
    "/assets/learning.jpg",
    "/assets/outdoor.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="bg-slate-50">
      {/* ============================================================
          HERO (Animated gradient video - calm, Montessori-friendly)
          ============================================================ */}
      <section className="relative h-[90vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            // Soft animated gradient (placeholder)
            src="https://cdn.coverr.co/videos/coverr-soft-gradient-motion-1600.mp4"
            type="video/mp4"
          />
        </video>

        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="text-sm md:text-base font-semibold tracking-wide text-white/90">
              Elsie’s Childcare & Learning Center
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Caring, Love and Nurturing
            </h1>

            <p className="mt-5 text-base md:text-xl text-white/90">
              A safe, inclusive, and flexible childcare solution for working families
              in Midland, Texas—focused on compassionate care, early learning, and
              strong standards.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enrollment"
                className="inline-flex items-center justify-center rounded-full bg-pink-400 hover:bg-pink-500 px-7 py-3 font-semibold transition"
              >
                Enroll Now
              </a>
              <a
                href="/schedule-tour"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-100 px-7 py-3 font-semibold transition"
              >
                Schedule a Tour
              </a>
            </div>

            <div className="mt-8 text-xs md:text-sm text-white/80">
              Email: <span className="font-semibold">info@elsieschildcarecenter.com</span>{" "}
              • Phone: <span className="font-semibold">(432) 215-8560</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PHOTO CAROUSEL (Visual story)
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              A Loving Environment for Every Child
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
              Our space is designed to support children’s development through safe,
              engaging activities and nurturing routines.
            </p>
          </div>

          <div className="mt-10 relative overflow-hidden rounded-3xl shadow bg-white">
            <img
              src={images[index]}
              alt="Elsie’s Childcare activities"
              className="w-full h-[420px] object-cover"
            />

            {/* dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            Tip: replace the images in <span className="font-semibold">/public/assets/</span>
          </p>
        </div>
      </section>

      {/* ============================================================
          PROBLEM WE SOLVE
          ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              The Need We Solve in Midland
            </h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Many working parents face childcare shortages and limited hours. Families
              with shift-based schedules—especially in healthcare, oil & gas, and emergency
              services—often struggle to find consistent care beyond traditional daytime options.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Elsie’s is designed to support families with flexible care options, helping parents
              work with peace of mind while children receive safe, educational, and nurturing care.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
            <h4 className="text-lg font-bold text-slate-900">Built for Working Families</h4>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                Designed around real schedules (including evening/overnight options as needed)
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                Inclusive care with compassion and individualized support
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                Strong standards and safety-first routines
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR SOLUTION
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Our Solution</h3>
            <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
              Compassionate care meets early learning—built to help children thrive and parents feel supported.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-3xl bg-white shadow p-7">
              <h4 className="text-lg font-bold text-slate-900">Safe & Nurturing Care</h4>
              <p className="mt-2 text-slate-700">
                A warm environment where every child is welcomed, valued, and supported.
              </p>
            </div>

            <div className="rounded-3xl bg-white shadow p-7">
              <h4 className="text-lg font-bold text-slate-900">Early Learning Focus</h4>
              <p className="mt-2 text-slate-700">
                Age-appropriate activities that support growth across physical, cognitive, and social development.
              </p>
            </div>

            <div className="rounded-3xl bg-white shadow p-7">
              <h4 className="text-lg font-bold text-slate-900">Flexible Options</h4>
              <p className="mt-2 text-slate-700">
                Designed for working parents, with scheduling options that can expand to meet demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROGRAMS PREVIEW (Grid inspired by template tiles)
          ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-col md:flex-row">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Programs & Care</h3>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Supportive care for infants through preschool—designed around safety, learning, and family needs.
              </p>
            </div>
            <a
              href="/programs"
              className="rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 transition"
            >
              View All Programs
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Infant Care", desc: "6 months+ nurturing routines and safe development support." },
              { title: "Toddler Program", desc: "Play-based learning, language growth, and social skills." },
              { title: "Preschool Learning", desc: "Early education foundation through guided activities." },
              { title: "Extended Care", desc: "Flexible options designed for working parent schedules." },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl bg-slate-50 border border-slate-200 p-7">
                <h4 className="text-lg font-bold text-slate-900">{card.title}</h4>
                <p className="mt-2 text-slate-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white p-10 md:p-12 shadow">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Ready to join Elsie’s Childcare & Learning Center?
            </h3>
            <p className="mt-3 text-white/90 max-w-3xl">
              Every child deserves a safe place to grow, learn, and thrive—while parents feel supported and confident.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="/enrollment"
                className="inline-flex items-center justify-center rounded-full bg-pink-400 hover:bg-pink-500 px-7 py-3 font-semibold transition"
              >
                Start Enrollment
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-100 px-7 py-3 font-semibold transition"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-6 text-sm text-white/90">
              <span className="font-semibold">info@elsieschildcarecenter.com</span> •{" "}
              <span className="font-semibold">(432) 215-8560</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

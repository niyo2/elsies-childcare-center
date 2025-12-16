import React from "react";

export default function Programs() {
  return (
    <div className="bg-slate-50">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our Programs & Care
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Thoughtfully designed programs that support children’s development
            while meeting the needs of working families.
          </p>
        </div>
      </section>

      {/* ============================================================
          PROGRAM INTRO
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Care Designed Around Children & Families
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Elsie’s Childcare & Learning Center offers age-appropriate care and
            early learning experiences in a safe, nurturing environment. Our
            programs are built to support physical, cognitive, social, and
            emotional development while providing families with dependable and
            flexible childcare options.
          </p>
        </div>
      </section>

      {/* ============================================================
          PROGRAMS GRID
          ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Infant Care */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Infant Care
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Ages: 6 months+
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Our infant care program focuses on providing a calm, safe, and
              nurturing environment where babies receive individualized
              attention. Daily routines are designed to support early development
              while honoring each child’s unique needs.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Safe sleep and feeding routines</li>
              <li>• Sensory exploration and motor development</li>
              <li>• Consistent caregiver relationships</li>
            </ul>
          </div>

          {/* Toddler Program */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Toddler Program
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Ages: 1 – 2 years
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Our toddler program encourages curiosity, language development,
              and social interaction through play-based learning. Children are
              supported as they explore independence in a structured and caring
              environment.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Play-based learning activities</li>
              <li>• Language and social skill development</li>
              <li>• Fine and gross motor skill growth</li>
            </ul>
          </div>

          {/* Preschool Program */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Preschool Learning
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Ages: 3 – 5 years
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Our preschool program provides a strong foundation for school
              readiness through structured learning and creative exploration.
              Activities are designed to foster confidence, problem-solving, and
              early academic skills.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Early literacy and numeracy activities</li>
              <li>• Creative arts and imaginative play</li>
              <li>• Social-emotional development</li>
            </ul>
          </div>

          {/* Extended & Flexible Care */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Extended & Flexible Care
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Daytime, evening, and overnight options (as demand supports)
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Designed with working parents in mind, our extended care options
              provide flexibility beyond traditional childcare hours. These
              services support families with non-traditional schedules while
              maintaining the same high standards of care and safety.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Support for shift-based work schedules</li>
              <li>• Safe evening and overnight routines</li>
              <li>• Consistent care standards at all hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROGRAM PHILOSOPHY
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Approach to Learning
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              At Elsie’s, learning is guided by play, exploration, and positive
              relationships. Our programs are designed to support children’s
              development across all areas while creating a sense of security and
              belonging.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We focus on age-appropriate activities that promote curiosity,
              independence, and confidence—helping children build a strong
              foundation for future learning.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow p-8">
            <h3 className="text-lg font-bold text-slate-900">
              What Families Can Expect
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• A safe, clean, and welcoming environment</li>
              <li>• Experienced and attentive caregivers</li>
              <li>• Open communication with parents</li>
              <li>• Consistent routines and daily structure</li>
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
              Ready to Enroll or Learn More?
            </h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              We’re here to answer your questions and help you choose the right
              program for your child.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enrollment"
                className="rounded-full bg-pink-400 hover:bg-pink-500 px-7 py-3 font-semibold transition"
              >
                Start Enrollment
              </a>
              <a
                href="/contact"
                className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-7 py-3 font-semibold transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

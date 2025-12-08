// src/pages/Careers.jsx
import React from "react";
import PageContainer from "../components/PageContainer";

export default function Careers() {
  return (
    <PageContainer>
      <section className="text-center mb-12">
        <h1 className="text-pink-700">Careers at Elsie’s</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Join a childcare center that values warmth, professionalism, and
          meaningful relationships with children and families. We’re always
          looking for caring, dependable team members.
        </p>
      </section>

      <section className="bg-brand-2/50 rounded-2xl p-8 mb-12 shadow-sm">
        <h2 className="text-pink-700 mb-3">Why Work With Us?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Supportive, family-like environment</li>
          <li>Opportunities for training and growth</li>
          <li>Focus on quality care and safety</li>
          <li>Purpose-driven work that makes a difference</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-pink-700 mb-3">Current & Future Positions</h2>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Lead Infant Teacher (6–18 months)
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            Full-time • Experience with infants preferred
          </p>
          <p className="text-gray-600 text-sm">
            Supports nurturing routines, communication with families, and safe,
            developmentally appropriate sensory play.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Assistant Toddler Teacher
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            Part-time or full-time • Great for those starting in early childhood
          </p>
          <p className="text-gray-600 text-sm">
            Helps create a playful, structured environment for curious toddlers.
          </p>
        </div>

        <p className="mt-6 text-gray-600 text-sm">
          To express interest, please email your resume to{" "}
          <a
            href="mailto:elsieschildcarecenter@gmail.com"
            className="text-pink-600 underline"
          >
            elsieschildcarecenter@gmail.com
          </a>{" "}
          with the subject line <strong>“Career Opportunity – [Position]”</strong>.
        </p>
      </section>
    </PageContainer>
  );
}


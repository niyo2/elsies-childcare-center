// src/pages/ParentHandbook.jsx
import React from "react";
import PageContainer from "../components/PageContainer";

export default function ParentHandbook() {
  return (
    <PageContainer>
      <section className="text-center mb-12">
        <h1 className="text-pink-700">Parent Handbook</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Our Parent Handbook outlines our policies, communication practices,
          safety procedures, and what families can expect from Elsie’s Childcare
          & Learning Center.
        </p>
      </section>

      <section className="bg-brand-2/50 rounded-2xl p-8 mb-12 shadow-sm">
        <h2 className="text-pink-700 mb-3">What’s Inside</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Hours of operation and holiday schedule</li>
          <li>Arrival, pick-up, and late policies</li>
          <li>Tuition, payments, and fees</li>
          <li>Health, illness, and medication procedures</li>
          <li>Behavior guidance and communication with families</li>
        </ul>
      </section>

      <section className="text-center">
        <p className="mb-4 text-gray-600">
          A full PDF version of the handbook will be available for download.
        </p>
        {/* Replace # with real PDF URL when ready */}
        <a
          href="#"
          className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
        >
          Download Handbook (PDF)
        </a>
      </section>
    </PageContainer>
  );
}

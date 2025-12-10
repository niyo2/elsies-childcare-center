import React from "react";
import PageContainer from "../components/PageContainer";

export default function DailySchedule() {
  return (
    <PageContainer>
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-pink-700">Daily Schedule</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Our daily routine is designed to support healthy development, 
          independence, and joyful learning. Each age group follows 
          a flexible, developmentally appropriate schedule.
        </p>
      </section>

      {/* Overview */}
      <section className="bg-brand-2/50 rounded-2xl p-8 mb-16 shadow-sm">
        <h2 className="text-pink-700 mb-4">Why We Use Structured Routines</h2>
        <p>
          Children thrive when they know what to expect. Our routines create 
          a sense of security while allowing flexibility for individual needs, 
          exploration, and creative play. Each classroom adapts the schedule 
          to fit the developmental needs of the children.
        </p>
      </section>

      {/* Age-Based Schedules */}
      <section className="grid md:grid-cols-3 gap-8">

        {/* Infants */}
        <div className="bg-brand-1 p-6 rounded-2xl shadow-sm">
          <h3 className="text-pink-700 mb-3">Infants (6 months – 1 year)</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Flexible feeding & nap schedule tailored to each child</li>
            <li>Tummy time & sensory activities</li>
            <li>Quiet music and visual stimulation</li>
            <li>Outdoor stroll (weather permitting)</li>
          </ul>
        </div>

        {/* Toddlers */}
        <div className="bg-brand-2 p-6 rounded-2xl shadow-sm">
          <h3 className="text-pink-700 mb-3">Toddlers (1 – 3 years)</h3>
          <ul className="space-y-3 text-gray-600">
            <li>8:00 AM — Arrival & Free Play</li>
            <li>9:00 AM — Circle Time & Songs</li>
            <li>9:30 AM — Learning Centers & Fine Motor Play</li>
            <li>11:30 AM — Lunch</li>
            <li>12:30 PM — Nap / Quiet Rest</li>
            <li>2:30 PM — Outdoor Play</li>
            <li>3:30 PM — Snack</li>
            <li>4:00 PM — Story Time & Dismissal</li>
          </ul>
        </div>

        {/* Preschool */}
        <div className="bg-pink-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-pink-700 mb-3">Preschool (3 – 5 years)</h3>
          <ul className="space-y-3 text-gray-600">
            <li>8:00 AM — Arrival & Morning Work Cycle</li>
            <li>9:00 AM — Montessori-Inspired Lessons</li>
            <li>10:00 AM — STEM & Creative Exploration</li>
            <li>11:30 AM — Lunch</li>
            <li>12:30 PM — Nap / Quiet Time</li>
            <li>1:30 PM — Arts, Music & Imagination Play</li>
            <li>2:30 PM — Outdoor Play</li>
            <li>3:30 PM — Snack & Closing Circle</li>
            <li>4:00 PM — Dismissal</li>
          </ul>
        </div>

      </section>

      {/* Closing */}
      <section className="mt-16 text-center">
        <p className="max-w-2xl mx-auto">
          We adjust schedules as needed to match the developmental stage, 
          energy levels, and individual needs of each child. Communication 
          with families ensures each day runs smoothly.
        </p>
      </section>

    </PageContainer>
  );
}

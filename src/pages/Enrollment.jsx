import React from "react";
import EnrollmentForm from "../components/forms/EnrollmentForm";


export default function Enrollment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 text-center mb-6">
          Enrollment & Tuition
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We’re excited that you’re considering Elsie’s Childcare & Learning
          Center for your family. Below is a quick overview of enrollment steps
          and tuition for our programs.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-sky-900 mb-3">
              Simple Enrollment Steps
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
              <li>Schedule a tour (in-person or virtual).</li>
              <li>Meet with the Director to discuss your child’s needs.</li>
              <li>Complete enrollment forms and required DFPS paperwork.</li>
              <li>Submit immunization & health records.</li>
              <li>Secure your child’s spot with the registration fee.</li>
            </ol>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-sky-900 mb-3">
              Weekly Tuition (Midland, TX)
            </h2>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>💵 <span className="font-semibold">$220/week</span> per child</li>
              <li>👨‍👩‍👧‍👦 <span className="font-semibold">$200/week</span> per sibling</li>
              <li>🎁 <span className="font-semibold">$20/week discount</span> for annual enrollment commitment</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              Tuition includes meals, snacks, curriculum materials, and daily
              updates. Overnight care fees may vary depending on schedule and
              frequency.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-sky-900 mb-3">
            Programs & Ages Served
          </h2>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>👶 Infants: 6–18 months</li>
            <li>🧸 Toddlers: 18–36 months</li>
            <li>🎨 Preschool: 3–5 years</li>
            <li>🌙 Overnight care: Limited spots available (varies by age)</li>
          </ul>
        </div>

        <div className="bg-sky-900 text-white rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Ready to Enroll?</h2>
          <p className="text-sm mb-3">
            In the next step, we’ll connect this page to an online enrollment
            form that saves directly to our secure database.
          </p>
          <p className="font-semibold">
            For now, you can call, email, or visit us to begin enrollment.
          </p>
        </div>
      </div>
    </div>
   <div className="max-w-3xl mx-auto mt-12">
  <EnrollmentForm />
</div>

  );
}


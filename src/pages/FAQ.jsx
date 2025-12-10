import React from "react";

const faqs = [
  {
    q: "What ages do you accept?",
    a: "We currently serve children from 6 months to 5 years old, with age-appropriate classrooms and routines for each group.",
  },
  {
    q: "What are your hours of operation?",
    a: "We offer care Monday through Friday, 6:00 AM to 6:00 PM, with additional overnight care options for families who work non-traditional shifts.",
  },
  {
    q: "Are you licensed?",
    a: "Yes. Elsie’s Childcare & Learning Center operates in compliance with Texas DFPS childcare licensing regulations.",
  },
  {
    q: "Do you provide meals and snacks?",
    a: "Yes, we provide nutritious meals and snacks that follow state guidelines and accommodate common allergies.",
  },
  {
    q: "How do you communicate with parents?",
    a: "We maintain an open-door policy, plus daily updates at pickup, phone, and digital communication. Our goal is to partner with you.",
  },
  {
    q: "Is there a sibling discount?",
    a: "Yes. Siblings receive a discounted weekly rate of $200 per child when enrolled together.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 text-center mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Have questions about Elsie’s Childcare & Learning Center? Here are
          answers to some of the most common things parents ask us.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 group"
            >
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="font-semibold text-sky-900 text-sm md:text-base">
                  {item.q}
                </span>
                <span className="ml-3 text-sky-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Don’t see your question here?{" "}
          <span className="font-semibold text-sky-800">
            Reach out through our Contact page and we’ll be happy to help.
          </span>
        </p>
      </div>
    </div>
  );
}


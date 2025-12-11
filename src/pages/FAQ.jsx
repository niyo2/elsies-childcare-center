import React from "react";

const FAQS = [
  {
    q: "What ages do you accept?",
    a: "We enroll children ages 6 months to 5 years.",
  },
  {
    q: "What are your operating hours?",
    a: "We are open Monday to Friday, 6 AM – 6 PM, with overnight care available for select families.",
  },
  {
    q: "Do you provide meals?",
    a: "Yes, we provide nutritious meals and snacks depending on the child's schedule.",
  },
  {
    q: "How do I enroll my child?",
    a: "You can schedule a tour and submit an enrollment interest form through our Enrollment page.",
  },
  {
    q: "Is there a sibling discount?",
    a: "Yes, we offer reduced tuition for siblings.",
  },
];

export default function FAQ() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Here are answers to the most common questions families ask us.
        </p>
      </header>

      <section className="space-y-4">
        {FAQS.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-slate-50 border border-slate-200 p-4"
          >
            <p className="font-semibold text-slate-900">{item.q}</p>
            <p className="mt-1 text-sm text-slate-700">{item.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

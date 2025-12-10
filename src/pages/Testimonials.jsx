import React from "react";

const testimonials = [
  {
    name: "Jessica R.",
    role: "Parent of a 3-year-old",
    quote:
      "Elsie’s Childcare & Learning Center has been a blessing for our family. My daughter comes home happy, fed, and full of stories every day.",
  },
  {
    name: "Michael & Ana T.",
    role: "Parents of siblings (2 & 5)",
    quote:
      "We love the flexible hours and the nurturing environment. The teachers truly care and keep us updated on everything.",
  },
  {
    name: "Sarah M.",
    role: "Nurse & Night Shift Mom",
    quote:
      "Finding safe overnight childcare in Midland felt impossible until we found Elsie’s. I can finally work nights with peace of mind.",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 text-center mb-6">
          Parent Testimonials
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          At Elsie’s Childcare & Learning Center, we partner with families. Here
          are a few words from parents who trust us with their little ones every
          day.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full"
            >
              <p className="text-gray-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-sky-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-2">
            Want to see it for yourself?
          </p>
          <p className="text-sky-800 font-semibold">
            Schedule a tour and experience Elsie’s in person.
          </p>
        </div>
      </div>
    </div>
  );
}


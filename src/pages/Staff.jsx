// src/pages/Staff.jsx
import React from "react";
import { Link } from "react-router-dom";

const staff = [
  {
    id: "irene",
    name: "Irene Uwitonze",
    title: "Owner & Director",
    image: "/staff/irene.jpg",
    bio: "Irene brings a deep passion for early childhood education and a heart for serving working families in Midland, Texas. She leads Elsie’s with a focus on safety, love, and learning.",
  },
  {
    id: "maria",
    name: "Ms. Maria",
    title: "Lead Infant Teacher (6–18 months)",
    image: "/staff/maria.jpg",
    bio: "Specializes in nurturing routines, tummy-time, and early sensory play, ensuring our youngest babies feel safe and loved.",
  },
  {
    id: "grace",
    name: "Ms. Grace",
    title: "Toddler Teacher (18–36 months)",
    image: "/staff/grace.jpg",
    bio: "Creates fun, hands-on learning experiences that help toddlers explore, communicate, and grow in confidence.",
  },
  {
    id: "daniel",
    name: "Mr. Daniel",
    title: "Preschool Teacher (3–5 years)",
    image: "/staff/daniel.jpg",
    bio: "Focuses on school readiness, early literacy, and positive social skills through play-based learning.",
  },
];

export default function Staff() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-emerald-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 text-center mb-6">
          Meet Our Team
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Our teachers and caregivers are carefully selected, trained, and
          background-checked. We believe children thrive when they are surrounded
          by patient, loving, and consistent adults.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {staff.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-48 object-cover rounded-xl mb-4 shadow"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-sky-900 mb-1">
                  {person.name}
                </h2>

                <p className="text-sm text-amber-700 font-medium mb-3">
                  {person.title}
                </p>

                <p className="text-gray-700 text-sm">{person.bio}</p>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                CPR & First Aid Certified • Background Checked • Ongoing Training
              </p>

              <Link
                to={`/staff/${person.id}`}
                className="mt-4 inline-block bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

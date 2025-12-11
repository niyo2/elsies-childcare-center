import React from "react";

const TEAM = [
  {
    name: "Irene Uwitonze",
    role: "Owner & Director",
    bio: "Dedicated to providing high-quality childcare with a focus on safety, emotional care, and strong family communication.",
  },
  {
    name: "Lead Teacher",
    role: "Preschool Lead",
    bio: "Experienced in early childhood education with a passion for guiding children through early literacy, math, and social skills.",
  },
  {
    name: "Assistant Teacher",
    role: "Toddler Classroom",
    bio: "Supports toddlers through active learning, sensory play, and communication development.",
  },
];

export default function Team() {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Team</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Our experienced caregivers and educators work together to create a 
          warm, nurturing, and safe environment for every child.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {TEAM.map((staff) => (
          <div
            key={staff.name}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm"
          >
            <div className="w-20 h-20 bg-sky-200 rounded-full mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold text-slate-900 text-center">{staff.name}</h2>
            <p className="text-sm text-sky-700 font-semibold text-center">{staff.role}</p>
            <p className="mt-2 text-sm text-slate-700 text-center">{staff.bio}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

import React from "react";
import { useParams, Link } from "react-router-dom";

const STAFF = {
  1: {
    name: "Irene Uwitonze",
    position: "Owner & Director",
    bio: "Irene brings years of childcare experience and a passion for supporting families in Midland. She ensures high safety, loving care, and a positive family partnership approach.",
  },
  2: {
    name: "Lead Teacher",
    position: "Preschool Lead",
    bio: "Specializes in preparing children for kindergarten with engaging activities in early literacy, math, and social development.",
  },
  3: {
    name: "Assistant Teacher",
    position: "Toddler Classroom Assistant",
    bio: "Loves working with toddlers and supporting independence, communication skills, and emotional growth.",
  },
};

export default function StaffDetail() {
  const { id } = useParams();
  const staff = STAFF[id];

  if (!staff)
    return (
      <div className="text-center">
        <p>Staff member not found.</p>
        <Link to="/staff" className="text-sky-600 underline">
          Back to Staff Page
        </Link>
      </div>
    );

  return (
    <div className="space-y-6">
      <Link to="/staff" className="text-sky-600 hover:underline text-sm">
        ← Back to Staff
      </Link>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-32 h-32 bg-sky-200 rounded-full"></div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">{staff.name}</h1>
          <p className="text-sky-700 font-semibold">{staff.position}</p>
          <p className="mt-3 text-slate-700 text-sm">{staff.bio}</p>
        </div>
      </div>
    </div>
  );
}

// src/components/MeetTheDirector.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function MeetTheDirector() {
  return (
    <section className="bg-pink-50 rounded-3xl px-6 md:px-10 py-10 md:py-12 mt-16 flex flex-col md:flex-row items-center gap-8 shadow-sm">
      <img
        src="/staff/irene.jpg"
        alt="Irene Uwitonze"
        className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl shadow-md"
      />
      <div>
        <h2 className="text-pink-700 mb-3">Meet the Director</h2>
        <p className="text-gray-600 mb-4">
          Irene Uwitonze founded Elsie’s Childcare & Learning Center with a dream
          to support working families by providing safe, flexible, and loving care.
          Her vision is to create a second home where children feel seen, heard,
          and nurtured while building strong foundations for learning.
        </p>
        <Link
          to="/staff/irene"
          className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
        >
          View Director Profile
        </Link>
      </div>
    </section>
  );
}

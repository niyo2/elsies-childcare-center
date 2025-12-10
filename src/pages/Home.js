import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero1.jpg";
import Contact from "./Contact";


export default function Home() {
  return (
    <>
      <section className="container py-12">
        <div className="bg-gradient-to-r from-[#FFF4E6] to-[#FFDDE1] rounded-lg p-8 shadow">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Elsie's Childcare & Learning Center
          </h1>

          <p className="mb-4">
            Revolutionizing childcare in Midland, TX — inclusive, compassionate,
            and open to families who need flexible hours, including overnight care.
          </p>

          <div className="flex gap-3">
            <Link
              to="/enrollment"
              className="px-4 py-2 bg-[#7C3AED] text-white rounded"
            >
              Enroll Now
            </Link>

            <Link to="/schedule-tour" className="px-4 py-2 border rounded">
              Schedule a Tour
            </Link>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded">
            <h3 className="font-bold">24/7 & Overnight Care</h3>
            <p className="text-sm">
              We offer daytime, evening, and overnight care tailored to shift
              workers — oil & gas, healthcare, first responders.
            </p>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-bold">Inclusive Programs</h3>
            <p className="text-sm">
              We welcome children of all abilities and provide supportive,
              individualized care and learning.
            </p>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-bold">Play-based Curriculum</h3>
            <p className="text-sm">
              Developmentally appropriate activities that support language,
              motor, and social-emotional growth.
            </p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-3">Why Elsie's?</h2>
          <p>
            Founded by Irene Uwitonze, Elsie's was born from a personal mission
            to provide safe, reliable childcare for families who work long or
            irregular hours. Our center offers a warm, structured, learning-rich
            environment where every child is nurtured and valued.
          </p>
        </section>
      </section>

      {/* HERO IMAGE BELOW MAIN CONTENT */}
      <img
        src={hero}
        alt="happy kids"
        className="w-full rounded-xl mt-10 shadow-md"
      />
    </>
  );
}


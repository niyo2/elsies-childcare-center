// src/pages/StaffDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const staffData = {
  irene: {
    name: "Irene Uwitonze",
    role: "Owner & Director",
    image: "/staff/irene.jpg",
    bio: "Irene is the founder of Elsie’s Childcare & Learning Center and has dedicated her life to creating a safe, nurturing environment for children. With experience caring for children of working families, she combines compassionate care with structured learning and strong safety practices.",
    certifications: [
      "Texas Director Certification (in progress / planned)",
      "CPR & First Aid Certified",
      "Early Childhood Development Training",
    ],
  },
  maria: {
    name: "Ms. Maria",
    role: "Lead Infant Teacher (6–18 months)",
    image: "/staff/maria.jpg",
    bio: "Maria specializes in nurturing routines, gentle caregiving, and early sensory experiences. She creates a peaceful, loving environment where babies feel secure and supported.",
    certifications: [
      "Infant & Toddler Care Training",
      "CPR & First Aid Certified",
    ],
  },
  grace: {
    name: "Ms. Grace",
    role: "Toddler Teacher (18–36 months)",
    image: "/staff/grace.jpg",
    bio: "Grace brings energy and patience to the toddler classroom, guiding little ones through big emotions, early language, and independent play.",
    certifications: [
      "Early Childhood Development Coursework",
      "CPR & First Aid Certified",
    ],
  },
  daniel: {
    name: "Mr. Daniel",
    role: "Preschool Teacher (3–5 years)",
    image: "/staff/daniel.jpg",
    bio: "Daniel focuses on school readiness, early literacy, and positive social skills, using play-based learning to prepare children for kindergarten and beyond.",
    certifications: [
      "Preschool Curriculum Training",
      "CPR & First Aid Certified",
    ],
  },
};

export default function StaffDetail() {
  const { id } = useParams();
  const staff = staffData[id];

  if (!staff) {
    return (
      <PageContainer>
        <h1 className="text-center text-pink-700">Staff Member Not Found</h1>
        <p className="text-center mt-4">
          Please check the link or return to the staff page.
        </p>
        <div className="text-center mt-6">
          <Link
            to="/staff"
            className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
          >
            Back to Staff
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <section className="text-center mb-10">
        <h1 className="text-pink-700">{staff.name}</h1>
        <p className="text-lg text-gray-600">{staff.role}</p>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-10 bg-brand-2/50 p-8 rounded-2xl shadow-sm mb-16">
        <img
          src={staff.image}
          alt={staff.name}
          className="w-60 h-60 object-cover rounded-2xl shadow-md"
        />
        <div>
          <h2 className="text-pink-700 mb-4">About {staff.name.split(" ")[0]}</h2>
          <p className="text-gray-600 leading-relaxed">{staff.bio}</p>
        </div>
      </section>

      <section>
        <h2 className="text-pink-700 mb-6 text-center">Certifications</h2>
        <ul className="max-w-xl mx-auto bg-pink-50 p-8 rounded-2xl shadow-sm space-y-3">
          {staff.certifications.map((item, index) => (
            <li key={index} className="text-gray-700">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="text-center mt-10">
        <Link
          to="/staff"
          className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
        >
          Back to All Staff
        </Link>
      </div>
    </PageContainer>
  );
}

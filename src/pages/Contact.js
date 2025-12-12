// src/pages/Contact.jsx
import React from "react";
import logo from "../assets/logo.png";

export default function Contact() {
  return (
    <div className="space-y-6">
      <img src={logo} alt="Logo" className="h-20 w-auto mx-auto mb-4" />

      <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
      <p className="text-slate-700 mb-4">
        We're here to help you with enrollment, tours, or any questions about your child's care.
      </p>

      <div className="space-y-3 text-slate-800">
        <p>
          <strong>📍 Location:</strong> Midland, Texas
        </p>

        <p>
          <strong>📞 Phone:</strong>{" "}
          <a href="tel:4322158560" className="text-sky-700 underline">
            (432) 215-8560
          </a>
        </p>

        <p>
          <strong>📧 Email:</strong>{" "}
          <a href="mailto:info@elsieschildcarecenter.com" className="text-sky-700 underline">
            info@elsieschildcarecenter.com
          </a>
        </p>
      </div>
    </div>
  );
}

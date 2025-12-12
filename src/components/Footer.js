// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-700 to-indigo-700 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        {/* LOGO + BRAND */}
        <div className="space-y-3">
          <img
            src={logo}
            alt="Elsie's Logo"
            className="h-16 w-auto drop-shadow"
          />
          <p className="text-sm text-white/80">
            Guiding little minds with gentle hands.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-brandBlueLight">About</Link></li>
            <li><Link to="/programs" className="hover:text-brandBlueLight">Programs</Link></li>
            <li><Link to="/curriculum" className="hover:text-brandBlueLight">Curriculum</Link></li>
            <li><Link to="/pricing" className="hover:text-brandBlueLight">Pricing</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/faq" className="hover:text-brandBlueLight">FAQ</Link></li>
            <li><Link to="/events" className="hover:text-brandBlueLight">Events</Link></li>
            <li><Link to="/handbook" className="hover:text-brandBlueLight">Parent Handbook</Link></li>
            <li><Link to="/careers" className="hover:text-brandBlueLight">Careers</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>

          <p className="text-sm text-white/80">Midland, Texas</p>

          {/* PHONE */}
          <p className="text-sm text-white/80">
            Phone:{" "}
            <a href="tel:4322158560" className="underline hover:text-brandBlueLight">
              (432) 215-8560
            </a>
          </p>

          {/* EMAIL */}
          <p className="text-sm text-white/80">
            Email:{" "}
            <a href="mailto:info@elsieschildcarecenter.com" className="underline hover:text-brandBlueLight">
              info@elsieschildcarecenter.com
            </a>
          </p>
          <p className="text-sm font-semibold mt-2">
            🕒 Open 24 / 7
          </p>
        </div>
      </div>

      <div className="text-center text-white/70 text-xs mt-10">
        © {new Date().getFullYear()} Elsie’s Childcare & Learning Center — All Rights Reserved.
      </div>
    </footer>
  );
}

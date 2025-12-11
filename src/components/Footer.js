import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-xl text-white py-12 mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Elsie’s Childcare</h2>
          <p className="text-sm text-white/80">
            Guiding Little Minds With Gentle Hands.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-brandBlueLight">About</Link></li>
            <li><Link to="/programs" className="hover:text-brandBlueLight">Programs</Link></li>
            <li><Link to="/curriculum" className="hover:text-brandBlueLight">Curriculum</Link></li>
            <li><Link to="/pricing" className="hover:text-brandBlueLight">Pricing</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/faq" className="hover:text-brandBlueLight">FAQ</Link></li>
            <li><Link to="/events" className="hover:text-brandBlueLight">Events</Link></li>
            <li><Link to="/handbook" className="hover:text-brandBlueLight">Parent Handbook</Link></li>
            <li><Link to="/careers" className="hover:text-brandBlueLight">Careers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm text-white/80">Midland, Texas</p>
          <p className="text-sm text-white/80">Phone: (Add Phone)</p>
          <p className="text-sm text-white/80">Email: (Add Email)</p>
        </div>
      </div>

      <div className="text-center text-white/70 text-xs mt-10">
        © {new Date().getFullYear()} Elsie’s Childcare & Learning Center — All Rights Reserved.
      </div>
    </footer>
  );
}

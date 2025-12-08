import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-pink-50 mt-20 py-10 border-t border-pink-100">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Column 1 — Business Info */}
        <div>
          <h3 className="font-semibold text-xl mb-3 text-pink-700">
            Elsie's Childcare & Learning Center
          </h3>
          <p className="text-gray-600">
            79701 S Lamesa Street,<br />
            Block 4, Unit Second Floor,<br />
            Midland, TX
          </p>

          <p className="text-gray-600 mt-3">
            <span className="font-medium">Hours:</span><br />
            Mon–Fri: 6:00 AM – 6:00 PM
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-3 text-pink-700">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link to="/programs" className="hover:text-pink-600">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-pink-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-pink-600">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/enroll" className="hover:text-pink-600">
                Enroll
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 — Contact Info */}
        <div>
          <h3 className="font-semibold text-xl mb-3 text-pink-700">Contact</h3>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="mailto:elsieschildcarecenter@gmail.com"
              className="text-pink-600 hover:underline"
            >
              elsieschildcarecenter@gmail.com
            </a>
          </p>

          <p className="text-gray-600 mt-2">
            Phone:{" "}
            <a
              href="tel:123-456-7890"
              className="text-pink-600 hover:underline"
            >
              (Your number here)
            </a>
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Elsie’s Childcare & Learning Center. All rights reserved.
      </p>
    </footer>
  );
}

import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 w-full z-50 transition-shadow ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Elsie's Childcare
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-700 font-medium hidden md:block">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600"
                : "hover:text-pink-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/programs"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600"
                : "hover:text-pink-500"
            }
          >
            Programs
          </NavLink>
          <NavLink to="/curriculum">Curriculum</NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600"
                : "hover:text-pink-500"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/enroll"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600"
                : "hover:text-pink-500"
            }
          >
            Enroll
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600"
                : "hover:text-pink-500"
            }
          >
            Gallery
          </NavLink>
          <NavLink to="/daily-schedule">Daily Schedule</NavLink>
          <NavLink to="/events">Events</NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 border-b-2 border-pink-600"
                : "hover:text-pink-500"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

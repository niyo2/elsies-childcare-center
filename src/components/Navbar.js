// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-sky-700 to-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Elsie's Logo"
            className="h-12 w-auto object-contain drop-shadow"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <Link to="/" className="hover:text-brandBlueLight">Home</Link>
          <Link to="/about" className="hover:text-brandBlueLight">About</Link>
          <Link to="/programs" className="hover:text-brandBlueLight">Programs</Link>
          <Link to="/curriculum" className="hover:text-brandBlueLight">Curriculum</Link>
          <Link to="/pricing" className="hover:text-brandBlueLight">Pricing</Link>
          <Link to="/gallery" className="hover:text-brandBlueLight">Gallery</Link>
          <Link to="/contact" className="hover:text-brandBlueLight">Contact</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <nav className="md:hidden bg-white text-sky-700 shadow-lg px-6 py-4 space-y-3 font-semibold">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/programs" onClick={() => setOpen(false)}>Programs</Link>
          <Link to="/curriculum" onClick={() => setOpen(false)}>Curriculum</Link>
          <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

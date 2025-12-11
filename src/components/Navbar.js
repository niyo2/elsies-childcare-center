import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/10 backdrop-blur-lg shadow-soft sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide hover:text-brandBlueLight transition"
        >
          Elsie’s Childcare
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/about" className="hover:text-brandBlueLight">About</Link>
          <Link to="/programs" className="hover:text-brandBlueLight">Programs</Link>
          <Link to="/curriculum" className="hover:text-brandBlueLight">Curriculum</Link>
          <Link to="/pricing" className="hover:text-brandBlueLight">Pricing</Link>
          <Link to="/gallery" className="hover:text-brandBlueLight">Gallery</Link>
          <Link to="/contact" className="hover:text-brandBlueLight">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav className="md:hidden bg-white/90 backdrop-blur-lg px-6 py-4 space-y-3 text-brandBlue font-semibold shadow-lg animate-fadeIn">
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

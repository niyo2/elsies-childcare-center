import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Pricing from './pages/Pricing';
import Enrollment from './pages/Enrollment';
import Team from './pages/Team';
import Facilities from './pages/Facilities';
import Footer from './components/Footer';
import Testimonials from "./pages/Testimonials";
import Staff from "./pages/Staff";
import OvernightCare from "./pages/OvernightCare";
import FAQ from "./pages/FAQ";
import ScheduleTour from "./pages/ScheduleTour";
import ContactPage from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Curriculum from "./pages/Curriculum";
import Nutrition from "./pages/Nutrition";
import DailySchedule from "./pages/DailySchedule";
import Events from "./pages/Events";
import StaffDetail from "./pages/StaffDetail";
import ParentHandbook from "./pages/ParentHandbook";
import Careers from "./pages/Careers";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/enroll" element={<Enrollment />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/facilities" element={<Facilities />} />

          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Additional Pages */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/:id" element={<StaffDetail />} />
          <Route path="/overnight-care" element={<OvernightCare />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/schedule-tour" element={<ScheduleTour />} />

          {/* New Pages */}
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/daily-schedule" element={<DailySchedule />} />          
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/events" element={<Events />} />
          <Route path="/handbook" element={<ParentHandbook />} />
          <Route path="/careers" element={<Careers />} />

          {/* Fallback — ALWAYS LAST */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

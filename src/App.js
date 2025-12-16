import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Investors from "./pages/Investors";
import InvestorGate from "./components/InvestorGate";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageWrapper from "./components/PageWrapper";

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Pricing from './pages/Pricing';
import Enrollment from './pages/Enrollment';
import Team from './pages/Team';
import Facilities from './pages/Facilities';
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
    <div className="min-h-screen flex flex-col bg-[#0b0c10] text-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/programs" element={<PageWrapper><Programs /></PageWrapper>} />
          <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
          <Route path="/enroll" element={<PageWrapper><Enrollment /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/facilities" element={<PageWrapper><Facilities /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />

          <Route
            path="/investors"
            element={
              <InvestorGate>
                <PageWrapper>
                  <Investors />
                </PageWrapper>
              </InvestorGate>
            }
          />

          <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/staff" element={<PageWrapper><Staff /></PageWrapper>} />
          <Route path="/staff/:id" element={<PageWrapper><StaffDetail /></PageWrapper>} />
          <Route path="/overnight-care" element={<PageWrapper><OvernightCare /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/schedule-tour" element={<PageWrapper><ScheduleTour /></PageWrapper>} />
          <Route path="/nutrition" element={<PageWrapper><Nutrition /></PageWrapper>} />
          <Route path="/daily-schedule" element={<PageWrapper><DailySchedule /></PageWrapper>} />
          <Route path="/curriculum" element={<PageWrapper><Curriculum /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
          <Route path="/handbook" element={<PageWrapper><ParentHandbook /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

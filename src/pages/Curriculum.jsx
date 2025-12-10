import React from "react";
import PageContainer from "../components/PageContainer";

export default function Curriculum() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-pink-700">Our Curriculum</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          At Elsie’s Childcare & Learning Center, we blend a play-based learning 
          philosophy with Montessori-inspired activities that encourage 
          independence, creativity, and confidence in every child.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="bg-brand-2/50 rounded-2xl p-8 mb-16 shadow-sm">
        <h2 className="text-pink-700 mb-4">Our Learning Philosophy</h2>
        <p>
          We believe children learn best through hands-on exploration, guided 
          curiosity, and meaningful interaction. Our curriculum focuses on 
          social-emotional growth, early literacy, language development, 
          creative expression, and sensory-based learning.
        </p>
      </section>

      {/* Age-Based Curriculum */}
      <section className="grid md:grid-cols-3 gap-8">

        {/* Infants */}
        <div className="bg-brand-1 p-6 rounded-2xl shadow-sm">
          <h3 className="text-pink-700 mb-3">Infants (6 months – 1 year)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Safe, nurturing environment for early development</li>
            <li>Soft sensory toys and textures</li>
            <li>Music, tummy time, and visual stimulation</li>
            <li>Daily communication with parents</li>
          </ul>
        </div>

        {/* Toddlers */}
        <div className="bg-brand-2 p-6 rounded-2xl shadow-sm">
          <h3 className="text-pink-700 mb-3">Toddlers (1 – 3 years)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Exploratory play and imaginative activities</li>
            <li>Early language development</li>
            <li>Gross & fine motor skill building</li>
            <li>Introduction to shapes, colors, numbers</li>
          </ul>
        </div>

        {/* Preschool */}
        <div className="bg-pink-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-pink-700 mb-3">Preschool (3 – 5 years)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Montessori-inspired independence</li>
            <li>Early literacy & pre-writing readiness</li>
            <li>STEM discovery through play</li>
            <li>Creative arts & problem solving</li>
          </ul>
        </div>

      </section>

      {/* Closing */}
      <section className="mt-16 text-center">
        <p className="max-w-2xl mx-auto">
          Our curriculum is designed to nurture the whole child — socially, 
          emotionally, physically, and intellectually — preparing them for a 
          bright future filled with confidence and curiosity.
        </p>
      </section>
    </PageContainer>
  );
}

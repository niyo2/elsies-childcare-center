import React from "react";
import PageContainer from "../components/PageContainer";

export default function Events() {
  return (
    <PageContainer>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-pink-700">Upcoming Events</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          At Elsie’s Childcare & Learning Center, we celebrate learning, 
          creativity, and community through fun and meaningful events. 
          Families are always welcome to join!
        </p>
      </section>

      {/* Why Events Matter */}
      <section className="bg-brand-2/50 rounded-2xl p-8 mb-16 shadow-sm">
        <h2 className="text-pink-700 mb-4">Why We Host Events</h2>
        <p>
          Events help strengthen the bond between families, children, and 
          caregivers. They support social development, build confidence,
          and create joyful memories that enrich the childcare experience.
        </p>
      </section>

      {/* Events Grid */}
      <section>
        <h2 className="text-center text-pink-700 mb-10">This Month’s Highlights</h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Event 1 */}
          <div className="bg-brand-1 p-6 rounded-2xl shadow-sm">
            <div className="text-pink-700 font-semibold mb-2">February 14</div>
            <h3 className="text-pink-700 mb-3">Valentine’s Day Party</h3>
            <p className="text-gray-600">
              Children will enjoy making Valentine crafts,
              sharing treats, and celebrating kindness and friendship.
            </p>
          </div>

          {/* Event 2 */}
          <div className="bg-brand-2 p-6 rounded-2xl shadow-sm">
            <div className="text-pink-700 font-semibold mb-2">February 28</div>
            <h3 className="text-pink-700 mb-3">Family Reading Night</h3>
            <p className="text-gray-600">
              Parents are invited to join us for story time, 
              early literacy activities, and cozy reading corners.
            </p>
          </div>

          {/* Event 3 */}
          <div className="bg-pink-50 p-6 rounded-2xl shadow-sm">
            <div className="text-pink-700 font-semibold mb-2">March 5</div>
            <h3 className="text-pink-700 mb-3">Art & Creativity Showcase</h3>
            <p className="text-gray-600">
              Children will display their artwork and enjoy
              hands-on creative stations. Families welcome!
            </p>
          </div>

        </div>
      </section>

      {/* Closing */}
      <section className="mt-16 text-center">
        <p className="max-w-2xl mx-auto">
          We update our events regularly. Check back often to stay informed 
          on upcoming celebrations, learning activities, and family events.
        </p>
      </section>
      
    </PageContainer>
  );
}

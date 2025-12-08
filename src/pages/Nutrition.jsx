import React from "react";
import PageContainer from "../components/PageContainer";

export default function Nutrition() {
  return (
    <PageContainer>
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-pink-700">Meals & Nutrition</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          We provide healthy, balanced meals that support growing bodies and 
          curious minds. Our menu is created with children’s wellness, 
          energy levels, and dietary needs in mind.
        </p>
      </section>

      {/* Nutrition Philosophy */}
      <section className="bg-brand-2/50 rounded-2xl p-8 mb-16 shadow-sm">
        <h2 className="text-pink-700 mb-4">Our Nutrition Philosophy</h2>
        <p>
          At Elsie’s Childcare & Learning Center, we believe nutritious meals 
          are essential to learning and development. We offer fresh fruits, 
          whole grains, lean proteins, and child-friendly meals designed to 
          promote healthy eating habits from a young age.
        </p>
      </section>

      {/* Weekly Sample Menu */}
      <section className="mb-10">
        <h2 className="text-pink-700 mb-8 text-center">Weekly Sample Menu</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Monday */}
          <div className="bg-brand-1 p-6 rounded-2xl shadow-sm">
            <h3 className="text-pink-700 mb-3">Monday</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Breakfast: Oatmeal + Fresh Berries</li>
              <li>Lunch: Grilled Chicken, Rice & Veggies</li>
              <li>Snack: Apple Slices & Crackers</li>
            </ul>
          </div>

          {/* Tuesday */}
          <div className="bg-brand-2 p-6 rounded-2xl shadow-sm">
            <h3 className="text-pink-700 mb-3">Tuesday</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Breakfast: Scrambled Eggs + Toast</li>
              <li>Lunch: Pasta with Meat Sauce & Salad</li>
              <li>Snack: Yogurt & Fruit</li>
            </ul>
          </div>

          {/* Wednesday */}
          <div className="bg-pink-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-pink-700 mb-3">Wednesday</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Breakfast: Whole Grain Cereal + Milk</li>
              <li>Lunch: Turkey Sandwich & Carrot Sticks</li>
              <li>Snack: Cheese Cubes & Crackers</li>
            </ul>
          </div>

          {/* Thursday */}
          <div className="bg-brand-1 p-6 rounded-2xl shadow-sm">
            <h3 className="text-pink-700 mb-3">Thursday</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Breakfast: Pancakes + Banana Slices</li>
              <li>Lunch: Beef Stew & Rice</li>
              <li>Snack: Fruit Cup</li>
            </ul>
          </div>

          {/* Friday */}
          <div className="bg-brand-2 p-6 rounded-2xl shadow-sm">
            <h3 className="text-pink-700 mb-3">Friday</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Breakfast: Waffles + Strawberries</li>
              <li>Lunch: Baked Fish, Mashed Potatoes, Mixed Veggies</li>
              <li>Snack: Granola Bar</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Closing */}
      <section className="mt-16 text-center">
        <p className="max-w-2xl mx-auto">
          We accommodate dietary restrictions and allergies. Please discuss 
          your child’s needs with our staff so we can ensure safe, nutritious meals.
        </p>
      </section>

    </PageContainer>
  );
}

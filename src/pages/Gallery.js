import React from "react";

const PHOTOS = [
  "/images/classroom1.jpg",
  "/images/classroom2.jpg",
  "/images/playground.jpg",
  "/images/reading.jpg",
];

export default function Gallery() {
  return (
    <div className="space-y-8">
      <header className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Gallery</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A look inside our classrooms, play areas, and daily activities.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PHOTOS.map((src, idx) => (
          <div
            key={idx}
            className="aspect-square bg-slate-200 rounded-xl overflow-hidden"
          >
            <img src={src} className="w-full h-full object-cover" alt="Gallery" />
          </div>
        ))}
      </section>
    </div>
  );
}

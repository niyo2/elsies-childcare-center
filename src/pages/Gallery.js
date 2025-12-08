// src/pages/Gallery.jsx
import React, { useState } from "react";
import PageContainer from "../components/PageContainer";

const photos = [
  { src: "/gallery/photo1.jpg", title: "Play & Learning" },
  { src: "/gallery/photo2.jpg", title: "Story Time" },
  { src: "/gallery/photo3.jpg", title: "Creative Art" },
  // add more...
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <PageContainer>
      <section className="text-center mb-10">
        <h1 className="text-pink-700">Our Photo Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Take a peek inside Elsie’s Childcare & Learning Center. Our spaces are
          designed to be warm, safe, and engaging for every child.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <button
            key={idx}
            onClick={() => setActivePhoto(photo)}
            className="text-left focus:outline-none"
          >
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {photo.title}
            </p>
          </button>
        ))}
      </section>

      {/* Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-2xl p-4 max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />
            <p className="mt-3 text-center text-gray-700">
              {activePhoto.title}
            </p>
            <button
              className="mt-4 mx-auto block bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
              onClick={() => setActivePhoto(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

import React, { useEffect, useState } from "react";

const existing = [
  { src: "/images/classroom1.jpg", category: "Classrooms & Facilities", alt: "Classroom" },
  { src: "/images/classroom2.jpg", category: "Classrooms & Facilities", alt: "Classroom learning space" },
  { src: "/images/playground.jpg", category: "Playtime", alt: "Playground" },
  { src: "/images/reading.jpg", category: "Learning Activities", alt: "Reading area" },
];
const newPhotos = [
  ["01", "Classrooms & Facilities", "Daycare building exterior"],
  ["02", "Classrooms & Facilities", "Classroom play kitchen"],
  ["03", "Classrooms & Facilities", "Large classroom"],
  ["04", "Classrooms & Facilities", "Colorful learning rug"],
  ["05", "Classrooms & Facilities", "Dramatic play area"],
  ["06", "Classrooms & Facilities", "Classroom activity stations"],
  ["07", "Classrooms & Facilities", "Learning table and chairs"],
  ["08", "Learning Activities", "Creative classroom display"],
  ["09", "Learning Activities", "Drawing activity"],
  ["10", "Learning Activities", "Group learning time"],
  ["11", "Events & Celebrations", "Group classroom celebration"],
  ["12", "Learning Activities", "Hands-on learning activity"],
  ["13", "Learning Activities", "Coloring activity"],
  ["14", "Classrooms & Facilities", "Learning space with colorful rug"],
  ["15", "Events & Celebrations", "Holiday craft celebration"],
  ["16", "Learning Activities", "Music circle activity"],
  ["17", "Events & Celebrations", "Group activity at classroom tables"],
  ["18", "Playtime", "Children playing on classroom rug"],
  ["19", "Learning Activities", "Creative coloring at the activity table"],
  ["20", "Classrooms & Facilities", "Indoor activity room"],
  ["21", "Playtime", "Children enjoying a group activity"],
  ["22", "Events & Celebrations", "Children in themed costumes"],
  ["23", "Learning Activities", "Hands-on classroom learning"],
  ["24", "Learning Activities", "Children working together on a floor activity"],
  ["25", "Classrooms & Facilities", "Daycare building and parking area"],
  ["26", "Events & Celebrations", "Group staff photo"],
  ["27", "Playtime", "Children enjoying outdoor play"],
  ["28", "Learning Activities", "Drawing and coloring at the table"],
  ["29", "Classrooms & Facilities", "Classroom seating and learning area"],
].map(([id, category, alt]) => ({ src: `/images/gallery/photo-${id}.jpg`, category, alt }));
const photos = [...existing, ...newPhotos];
const categories = ["All Photos", "Classrooms & Facilities", "Learning Activities", "Playtime", "Events & Celebrations"];

export default function Gallery() {
  const [category, setCategory] = useState("All Photos");
  const [selected, setSelected] = useState(null);
  const visible = category === "All Photos" ? photos : photos.filter(photo => photo.category === category);
  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = event => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900">Our Photo Gallery</h1>
        <p className="mt-2 text-slate-600">Explore our classrooms, learning activities, play spaces, and special moments.</p>
      </header>
      <nav aria-label="Gallery categories" className="flex flex-wrap gap-2">
        {categories.map(item => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full px-4 py-2 text-sm font-medium transition ${category === item ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>{item}</button>)}
      </nav>
      <section aria-label="Gallery photos" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5">
        {visible.map(photo => <button type="button" key={photo.src} onClick={() => setSelected(photo)} className="group overflow-hidden rounded-xl bg-slate-100 text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300" aria-label={`Enlarge ${photo.alt}`}>
          <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105" />
          <span className="block px-3 py-2 text-xs text-slate-700 sm:text-sm">{photo.alt}</span>
        </button>)}
      </section>
      {selected && <div role="dialog" aria-modal="true" aria-label={selected.alt} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" onClick={() => setSelected(null)}>
        <div className="relative max-h-full max-w-5xl" onClick={event => event.stopPropagation()}>
          <button type="button" onClick={() => setSelected(null)} className="absolute right-2 top-2 rounded-full bg-white px-3 py-2 font-bold text-slate-900" aria-label="Close photo">✕</button>
          <img src={selected.src} alt={selected.alt} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
          <p className="mt-3 text-center text-white">{selected.alt}</p>
        </div>
      </div>}
    </main>
  );
}

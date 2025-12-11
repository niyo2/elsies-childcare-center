import React from "react";
import {
  BookOpenIcon,
  CalculatorIcon,
  HeartIcon,
  PencilSquareIcon,
  CubeIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const AREAS = [
  {
    icon: BookOpenIcon,
    title: "Language & Literacy",
    desc: "Storytelling, vocabulary, name recognition, letter awareness.",
  },
  {
    icon: CalculatorIcon,
    title: "Math & Problem Solving",
    desc: "Counting, shapes, patterns, sorting, reasoning.",
  },
  {
    icon: HeartIcon,
    title: "Social-Emotional Learning",
    desc: "Sharing, regulating emotions, teamwork, confidence.",
  },
  {
    icon: PencilSquareIcon,
    title: "Creative Arts",
    desc: "Painting, drawing, dramatic play, music, dancing.",
  },
  {
    icon: CubeIcon,
    title: "Fine & Gross Motor Skills",
    desc: "Climbing, balancing, hand strength, coordination.",
  },
  {
    icon: BeakerIcon,
    title: "Science & Discovery",
    desc: "Nature, water play, sensory tables, exploration.",
  },
];

export default function Curriculum() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 animate-slideUp">
          Curriculum
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Our curriculum blends play-based learning with structured activities that support
          early development and prepare children for kindergarten.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {AREAS.map((area, index) => (
          <div
            key={area.title}
            className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex gap-4 animate-slideUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <area.icon className="w-10 h-10 text-brandBlue" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{area.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// src/components/PageWrapper.jsx
import React from "react";

export default function PageWrapper({ children }) {
  return (
    // Very light background (not gray, not dark)
    <div className="bg-[#F8FAFC] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* White content card */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}


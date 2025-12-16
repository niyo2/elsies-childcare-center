import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="bg-[#0b0c10] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

// src/components/PageWrapper.jsx
import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10">
        {children}
      </div>
    </div>
  );
}

import React from "react";

export default function PageContainer({ children }) {
  return (
    <div className="animate-fadeIn min-h-screen px-4 md:px-12 py-8">
      {children}
    </div>
  );
}


import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button {...props} className="flex justify-center items-center gap-4 py-3 rounded-lg bg-orange text-white hover:opacity-80 transition-opacity font-bold w-full">
      {children}
    </button>
  );
}

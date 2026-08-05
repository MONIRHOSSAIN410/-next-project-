"use client";

import React from "react";

const categories = ["সবগুলো", "ওয়েব ডেভেলপমেন্ট", "ডিজাইন", "মার্কেটিং", "ডাটা সাইন্স", "বিজনেস"];

export default function CategoryFilter({ active, setActive }: { active: string; setActive: (cat: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 py-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
            active === category
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 dark:bg-slate-800 dark:text-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
"use client";

import React from "react";

const creators = [
  { name: "তানভির আহমেদ", role: "ফুলস্ট্যাক ডেভেলপার", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
  { name: "সুলতানা পারভীন", role: "UI/UX লিড", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80" },
  { name: "রাকিবুল ইসলাম", role: "মার্কেটিং কনসালটেন্ট", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
  { name: "ড. হাসান আলী", role: "ডাটা সায়েন্টিস্ট", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
];

export default function Creators() {
  return (
    <section id="creators" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl">আমাদের সেরা মেন্টরবৃন্দ</h2>
          <p className="mt-1 text-xs text-muted-foreground">দক্ষ এবং অভিজ্ঞ টিচারদের সরাসরি নির্দেশনায় শিখুন</p>
        </div>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
          {creators.map((c, i) => (
            <div key={i} className="flex flex-col items-center rounded-xl border border-emerald-100 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
              <img src={c.image} alt={c.name} className="h-20 w-20 rounded-full object-cover border-2 border-emerald-500" />
              <h3 className="mt-3 font-bold text-sm">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
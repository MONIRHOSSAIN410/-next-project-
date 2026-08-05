"use client";

import React from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Flame } from "lucide-react";

const trendingCourses = [
  { id: 101, title: "Next.js & Tailwind CSS দিয়ে ফুলস্ট্যাক অ্যাপস", price: "৳২,২০০", oldPrice: "৳৪,০০০", badge: "হট" },
  { id: 102, title: "Figma UI/UX ডিজাইন স্পেশাল কোর্স", price: "৳১,৮০০", oldPrice: "৳৩,২০০", badge: "জনপ্রিয়" },
  { id: 103, title: "ডিজিটাল মার্কেটিং ও সোশ্যাল মিডিয়া গ্রোথ", price: "৳১,৫০০", oldPrice: "৳৩,০০০", badge: "নতুন" },
];

export default function Trending() {
  return (
    <section id="trending" className="py-12 border-t border-emerald-100 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="h-6 w-6 text-emerald-600" />
          <h2 className="text-2xl font-bold">সর্বাধিক জনপ্রিয় কোর্স (Top Learning)</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trendingCourses.map((item) => (
            <Card key={item.id} className="p-5 flex flex-col justify-between bg-emerald-50/50 dark:bg-slate-900">
              <div>
                <span className="inline-block rounded bg-emerald-600 px-2 py-0.5 text-[10px] text-white font-bold mb-2">
                  {item.badge}
                </span>
                <h3 className="text-base font-bold">{item.title}</h3>
              </div>
              <div className="mt-4 flex items-center justify-between border-t pt-3 border-emerald-200 dark:border-slate-800">
                <div>
                  <span className="text-base font-bold text-emerald-600">{item.price}</span>
                  <span className="ml-2 text-xs text-muted-foreground line-through">{item.oldPrice}</span>
                </div>
                <Button size="sm">এনরোল করুন</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { BookOpen, Users, Award, ShieldCheck } from "lucide-react";

const features = [
  { icon: BookOpen, title: "প্রজেক্ট বেসড লার্নিং", desc: "বাস্তব ভিত্তিক কোডিং ও প্রজেক্টের সাথে শিখুন" },
  { icon: Users, title: "লাইভ সাপোর্টিং মেন্টর", desc: "যেকোনো সমস্যায় বিশেষজ্ঞদের দ্রুত সাপোর্ট" },
  { icon: Award, title: "সার্টিফিকেশন", desc: "সফলভাবে কোর্স শেষ করার পর ই-সার্টিফিকেট" },
  { icon: ShieldCheck, title: "লাইফটাইম এক্সেস", desc: "একবার এনরোল করে আজীবন ক্লাস করার সুবিধা" },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-emerald-50/60 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl">কেন আমাদের নির্বাচন করবেন?</h2>
          <p className="mt-1 text-xs text-muted-foreground">আমরা নিশ্চিত করি আপনার ক্যারিয়ারের সর্বোচ্চ শেখার মান</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-emerald-100 shadow-sm dark:bg-slate-950 dark:border-slate-800">
              <div className="mb-4 rounded-full bg-emerald-100 p-3 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
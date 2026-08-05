"use client";

import React from "react";
import { Smartphone } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function MobileBanner() {
  return (
    <section className="bg-emerald-600 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">মোবাইল অ্যাপ নামিয়ে শিখুন যে কোনো স্থানে!</h2>
          <p className="mt-1 text-xs text-emerald-100 sm:text-sm">প্লে-স্টোর ও অ্যাপ-স্টোর থেকে সহজ ডাউনলোডের মাধ্যমে এক্সেস নিন প্রতিদিন।</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="bg-slate-950 text-white hover:bg-slate-900 border-none">
            <Smartphone className="mr-2 h-4 w-4" /> Play Store
          </Button>
          <Button variant="secondary" className="bg-slate-950 text-white hover:bg-slate-900 border-none">
            <Smartphone className="mr-2 h-4 w-4" /> App Store
          </Button>
        </div>
      </div>
    </section>
  );
}
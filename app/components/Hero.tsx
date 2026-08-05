"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PlayCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-emerald-50/40 py-12 md:py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-5"
          >
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              শিক্ষা হোক আনন্দদায়ক ও ক্যারিয়ারমুখী 🚀
            </span>
            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl">
              সব কোর্স একসাথে <br />
              <span className="text-emerald-600 dark:text-emerald-400">নিজের সুবিধামতো শিখুন</span>
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              দেশসেরা ইন্ডাস্ট্রি এক্সপার্টদের সাথে রিয়েল-ওয়ার্ল্ড প্রজেক্টভিত্তিক লার্নিং এর মাধ্যমে নিজেকে গড়ে তুলুন নতুন দিনের চ্যালেঞ্জ মোকাবেলায়।
            </p>

            {/* Search Box */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="আপনার পছন্দের কোর্সটি সার্চ করুন..."
                className="w-full rounded-xl border border-emerald-200 bg-white py-3 pl-4 pr-12 text-sm shadow-sm focus:border-emerald-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
              />
              <Button size="icon" className="absolute right-1.5 top-1.5 h-8 w-8 rounded-lg">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Banner Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white dark:border-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
              alt="Students Learning"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-emerald-700 shadow-lg backdrop-blur">
                <PlayCircle className="h-5 w-5 text-emerald-600" />
                <span>ফ্রি ট্রায়াল দেখুন</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
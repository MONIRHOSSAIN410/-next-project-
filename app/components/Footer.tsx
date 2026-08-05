"use client";

import React from "react";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-emerald-400">
              <GraduationCap className="h-6 w-6" />
              <span>EduMaster</span>
            </div>
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
              দেশজুড়ে সহজ ও প্রাঞ্জল শিক্ষাব্যবস্থা পৌঁছে দেওয়াই আমাদের মূল অঙ্গীকার।
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-3">কুইক লিঙ্ক</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#courses" className="hover:text-white">কোর্সসমূহ</a></li>
              <li><a href="#creators" className="hover:text-white">মেন্টরগণ</a></li>
              <li><a href="#features" className="hover:text-white">সুবিধাসমূহ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-3">লিগ্যাল</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-white">টার্মস ও কন্ডিশন</a></li>
              <li><a href="#" className="hover:text-white">রিফান্ড পলিসি</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-3">যোগাযোগ</h4>
            <p className="text-xs text-gray-400">ইমেইল: support@edumaster.com</p>
            <p className="text-xs text-gray-400 mt-1">হটলাইন: +880 1800-000000</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-gray-500">
          © 2026 EduMaster Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Search, Moon, Sun, Menu, X, GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      {/* Top Discount Banner */}
      <div className="bg-emerald-600 px-4 py-1.5 text-center text-xs font-semibold text-white">
        🎉 যেকোনো কোর্সে ভর্তি হতে ব্যবহার করুন কুপন: <span className="underline">EDU2026</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-emerald-600 dark:text-emerald-400">
            <GraduationCap className="h-7 w-7" />
            <span>EduMaster</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#courses" className="hover:text-emerald-600 transition-colors">কোর্সসমূহ</a>
            <a href="#trending" className="hover:text-emerald-600 transition-colors">ট্রেন্ডিং</a>
            <a href="#features" className="hover:text-emerald-600 transition-colors">সুবিধাসমূহ</a>
            <a href="#creators" className="hover:text-emerald-600 transition-colors">মেন্টরগণ</a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">প্রশ্নোত্তর</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button variant="default" className="hidden sm:inline-flex">
            লগইন / রেজিস্টার
          </Button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 md:hidden">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-3 border-t p-4 md:hidden bg-white dark:bg-slate-950">
          <a href="#courses" onClick={() => setMobileOpen(false)}>কোর্সসমূহ</a>
          <a href="#trending" onClick={() => setMobileOpen(false)}>ট্রেন্ডিং</a>
          <a href="#features" onClick={() => setMobileOpen(false)}>সুবিধাসমূহ</a>
          <a href="#creators" onClick={() => setMobileOpen(false)}>মেন্টরগণ</a>
          <a href="#faq" onClick={() => setMobileOpen(false)}>প্রশ্নোত্তর</a>
          <Button variant="default" className="w-full mt-2">লগইন / রেজিস্টার</Button>
        </nav>
      )}
    </header>
  );
}
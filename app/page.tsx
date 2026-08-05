"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import CategoryFilter from "@/app/components/CategoryFilter";
import CourseCard, { Course } from "@/app/components/CourseCard";
import Trending from "@/app/components/Tranding";
import Features from "@/app/components/Features";
import Creators from "@/app/components/Creators";
import FAQ from "@/app/components/FAQ";
import MobileBanner from "@/app/components/MobileBanner";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const allCourses: Course[] = [
  { id: 1, title: "Full Stack Web Development (React & Node.js)", instructor: "তানভির আহমেদ", rating: 4.8, reviews: 120, price: "৳২,৫০৩", oldPrice: "৳৫,০০৩", badge: "জনপ্রিয়", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80" },
  { id: 2, title: "Mastering UI/UX Design with Figma", instructor: "সুলতানা পারভীন", rating: 4.9, reviews: 85, price: "৳১,৮০৩", oldPrice: "৳৩,৫০৩", badge: "ট্রেন্ডিং", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=80" },
  { id: 3, title: "Digital Marketing Mastery for Growth", instructor: "রাকিবুল ইসলাম", rating: 4.7, reviews: 62, price: "৳১,৫০৩", oldPrice: "৳৩,০০৩", badge: "বেস্টসেলার", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80" },
  { id: 4, title: "Data Science & Machine Learning", instructor: "ড. হাসান আলী", rating: 4.9, reviews: 210, price: "৳৩,২০০", oldPrice: "৳৬,০০০", badge: "টপ রেটেড", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80" }
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("সবগুলো");

  return (
    <div className="min-h-screen dark:text-white">
      <Navbar />
      <Hero />

      {/* Main Course Section */}
      <section id="courses" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">আমাদের সকল কোর্সসমূহ</h2>
              <p className="text-xs text-muted-foreground">আপনার পছন্দের বিষয়ে দক্ষতার উন্নয়ন করুন</p>
            </div>
            <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        </div>
      </section>

      <Trending />
      <Features />
      <Creators />
      <FAQ />
      <MobileBanner />
      <Footer />
    </div>
  );
}
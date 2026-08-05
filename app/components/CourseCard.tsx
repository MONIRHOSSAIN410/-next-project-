"use client";

import React from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Star } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: string;
  oldPrice: string;
  badge: string;
  image: string;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="group overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative">
        <img src={course.image} alt={course.title} className="h-44 w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white shadow">
          {course.badge}
        </span>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-bold text-foreground group-hover:text-emerald-600 transition-colors">
          {course.title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">মেন্টর: {course.instructor}</p>

        <div className="mt-2 flex items-center gap-1 text-xs text-amber-500">
          <Star className="h-3.5 w-3.5 fill-amber-500" />
          <span className="font-bold">{course.rating}</span>
          <span className="text-muted-foreground">({course.reviews})</span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-emerald-50 pt-3 dark:border-slate-800">
          <div>
            <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{course.price}</span>
            <span className="ml-1.5 text-xs text-muted-foreground line-through">{course.oldPrice}</span>
          </div>
          <Button size="sm" variant="secondary">
            বিস্তারিত
          </Button>
        </div>
      </div>
    </Card>
  );
}
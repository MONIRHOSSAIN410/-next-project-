"use client";

import React, { useState } from "react";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/app/components/ui/accordion";

const faqs = [
  { q: "কীভাবে কোর্সে এনরোল করবেন?", a: "আপনার পছন্দমতো কোর্সে গিয়ে 'বিস্তারিত' দেখুন এবং সরাসরি পেমেন্ট গেটওয়ের মাধ্যমে ভর্তি সম্পন্ন করুন।" },
  { q: "কোর্সের মেয়াদ কতদিন থাকবে?", a: "প্রতিটি কোর্স একবার কেনা হলে সেটির আজীবন (Lifetime Access) এক্সেস পাবেন।" },
  { q: "কোর্স শেষে সার্টিফিকেট দেওয়া হবে?", a: "হ্যাঁ, সকল কুইজ ও অ্যাসাইনমেন্ট জমা দিয়ে কোর্স সফলভাবে সম্পন্ন করলে সার্টিফিকেট মিলবে।" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-emerald-50/30 dark:bg-slate-900/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold sm:text-3xl mb-8">সাধারণ জিজ্ঞাসা (FAQ)</h2>
        <div className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          {faqs.map((faq, i) => (
            <AccordionItem key={i}>
              <AccordionTrigger isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent isOpen={openIndex === i}>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
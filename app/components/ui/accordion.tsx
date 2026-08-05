"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils";

export const AccordionItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("border-b border-emerald-100 dark:border-slate-800 py-3", className)}>{children}</div>
);

export const AccordionTrigger = ({ children, isOpen, onClick }: { children: React.ReactNode; isOpen: boolean; onClick: () => void }) => (
  <button onClick={onClick} className="flex w-full items-center justify-between py-2 text-left font-semibold text-foreground transition-all">
    {children}
    <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200 text-emerald-600", isOpen && "rotate-180")} />
  </button>
);

export const AccordionContent = ({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) => (
  isOpen ? <div className="pt-2 pb-4 text-sm text-muted-foreground leading-relaxed">{children}</div> : null
);
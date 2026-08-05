import * as React from "react";
import { cn } from "@/app/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-xl border border-emerald-100 bg-card text-card-foreground shadow-sm dark:border-slate-800", className)} {...props} />
  )
);
Card.displayName = "Card";

export { Card };
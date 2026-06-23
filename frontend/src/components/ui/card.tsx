import * as React from "react";

import { cn } from "@/lib/utils/cn";


export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "surface-blur rounded-[1.8rem] border border-white/10 bg-card/80 text-card-foreground shadow-[0_30px_90px_rgba(0,0,0,0.28)]",
        className,
      )}
      {...props}
    />
  );
}

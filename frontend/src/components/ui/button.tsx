import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";


const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary px-5 py-3 text-primary-foreground shadow-[0_18px_60px_rgba(60,205,255,0.24)] hover:-translate-y-0.5 hover:shadow-[0_26px_80px_rgba(60,205,255,0.3)]",
        secondary:
          "bg-secondary px-5 py-3 text-secondary-foreground shadow-[0_18px_60px_rgba(244,185,94,0.18)] hover:-translate-y-0.5",
        outline:
          "border border-white/15 bg-white/5 px-5 py-3 text-white hover:border-primary/60 hover:bg-primary/10",
        ghost: "bg-transparent px-4 py-3 text-white/78 hover:bg-white/6 hover:text-white",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4",
        lg: "h-14 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };


export function Button({
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants(props), className)} {...props}>
      {children}
    </Comp>
  );
}

export { buttonVariants };

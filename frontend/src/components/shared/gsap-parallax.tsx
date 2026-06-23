"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils/cn";


export function GsapParallax({
  children,
  className,
  yPercent = -12,
}: {
  children: React.ReactNode;
  className?: string;
  yPercent?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to("[data-parallax-inner]", {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [yPercent]);

  return (
    <div ref={wrapperRef} className={cn(className)}>
      <div data-parallax-inner>{children}</div>
    </div>
  );
}


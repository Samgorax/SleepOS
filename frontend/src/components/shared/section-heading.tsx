import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";


type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};


export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-white/68">{description}</p>
    </div>
  );
}


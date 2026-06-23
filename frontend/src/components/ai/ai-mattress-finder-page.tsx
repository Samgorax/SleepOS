import { BrainCircuit, Gauge, HeartPulse, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  "Body profile, sleep posture, and comfort preference",
  "Pain points, mobility concerns, and climate conditions",
  "Budget band, family composition, and durability expectation",
];

const recommendations = [
  { title: "Support match", value: "91%" },
  { title: "Cooling alignment", value: "84%" },
  { title: "Budget fit", value: "93%" },
];

export function AIMattressFinderPage() {
  return (
    <div className="section-space">
      <div className="page-shell space-y-10">
        <MotionReveal>
          <SectionHeading
            eyebrow="AI mattress finder"
            title="A guided recommendation flow that feels consultative, modern, and trustworthy."
            description="Designed as a conversational yet highly structured interface, this module turns subjective comfort questions into a visually clear recommendation and purchase path."
          />
        </MotionReveal>

        <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <MotionReveal>
            <Card className="space-y-5 p-8">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-primary">
                <BrainCircuit className="h-4 w-4" />
                Input Stages
              </div>
              {steps.map((step, index) => (
                <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-7 text-white/72">{step}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full">Start Assessment</Button>
            </Card>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <Card className="overflow-hidden p-8">
              <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
                <div className="space-y-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(96,219,163,0.18),transparent_40%),rgba(255,255,255,0.03)] p-6">
                    <div className="flex items-center gap-3 text-primary">
                      <Sparkles className="h-5 w-5" />
                      <p className="text-sm uppercase tracking-[0.22em]">Recommendation</p>
                    </div>
                    <h3 className="mt-5 font-[var(--font-space-grotesk)] text-3xl font-bold text-white">
                      SleepOS Ortho Restore
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/66">
                      Ideal for mixed sleeping positions, recurring lower-back discomfort, and customers who need a more
                      supportive premium feel.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                    {recommendations.map((item) => (
                      <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/4 p-5">
                        <p className="text-sm text-white/58">{item.title}</p>
                        <p className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  {[
                    { icon: HeartPulse, title: "Pain-aware rationale", copy: "Explains why the mattress improves posture and pressure distribution." },
                    { icon: Gauge, title: "Confidence visualization", copy: "Shows fit confidence, budget alignment, and material suitability." },
                    { icon: BrainCircuit, title: "AI upsell logic", copy: "Suggests pillow, protector, and warranty bundles only when context supports it." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                      <item.icon className="h-5 w-5 text-primary" />
                      <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-white/66">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </MotionReveal>
        </div>
      </div>
    </div>
  );
}


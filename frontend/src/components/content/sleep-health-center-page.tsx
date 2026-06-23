import { ArrowUpRight, PlayCircle, Stethoscope } from "lucide-react";

import { sleepHealthArticles } from "@/lib/constants/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function SleepHealthCenterPage() {
  return (
    <div className="section-space">
      <div className="page-shell space-y-10">
        <MotionReveal>
          <SectionHeading
            eyebrow="Sleep health center"
            title="Content, recovery guidance, and care pathways designed to feel clinically credible and emotionally calm."
            description="This experience blends editorial storytelling, expert guidance, and AI-assisted learning paths so visitors can move from education into confidence."
          />
        </MotionReveal>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <MotionReveal>
            <Card className="noise overflow-hidden p-8">
              <div className="rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(73,201,240,0.16),transparent_40%),rgba(255,255,255,0.03)] p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Featured Program</p>
                <h3 className="mt-5 font-[var(--font-space-grotesk)] text-4xl font-bold text-white">
                  21-day posture and sleep reset
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/66">
                  Guide users through mattress suitability, sleep timing, pressure relief, and environment tuning with a
                  guided program that can branch by pain level and sleep goals.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button>Start Program</Button>
                  <Button variant="outline">Talk To Sleep Consultant</Button>
                </div>
              </div>
            </Card>
          </MotionReveal>

          <div className="grid gap-5">
            {sleepHealthArticles.map((article, index) => (
              <MotionReveal key={article.title} delay={index * 0.05}>
                <Card className="flex items-start justify-between gap-6 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-primary">{article.category}</p>
                    <h3 className="mt-3 font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/54">{article.readTime}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 flex-none text-white/44" />
                </Card>
              </MotionReveal>
            ))}
            <MotionReveal delay={0.18}>
              <Card className="grid gap-4 p-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/5 p-5">
                  <Stethoscope className="h-5 w-5 text-accent" />
                  <h4 className="mt-4 text-lg font-semibold text-white">Consultation Pathway</h4>
                  <p className="mt-2 text-sm leading-7 text-white/64">Route higher-need users to AI or human consultation based on urgency and pain profile.</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/5 p-5">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  <h4 className="mt-4 text-lg font-semibold text-white">Video Modules</h4>
                  <p className="mt-2 text-sm leading-7 text-white/64">Support calmer learning through short-form guided recovery and sleep hygiene content.</p>
                </div>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}


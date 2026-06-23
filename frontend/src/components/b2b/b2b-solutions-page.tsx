import { Building2, Calculator, ClipboardCheck, RotateCcw, ShieldCheck, Truck } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/shared/metric-card";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const sectors = ["Hotels", "Hostels", "Hospitals", "Builders", "Government", "Institutions"];

const b2bMetrics = [
  { label: "Asset visibility", value: "Per mattress", trend: "QR enabled" },
  { label: "Bulk pricing logic", value: "Dynamic", trend: "Margin aware" },
  { label: "Replacement signals", value: "Predictive", trend: "Lifecycle tracked" },
];

export function B2BSolutionsPage() {
  return (
    <div className="section-space">
      <div className="page-shell space-y-12">
        <MotionReveal>
          <SectionHeading
            eyebrow="B2B solutions"
            title="Procurement, lifecycle visibility, and hospitality-grade presentation for institutional buyers."
            description="This surface is designed to reassure procurement teams, make pricing logic legible, and help enterprise buyers understand ROI, replacement planning, and after-sales service."
          />
        </MotionReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {b2bMetrics.map((metric, index) => (
            <MotionReveal key={metric.label} delay={index * 0.05}>
              <MetricCard {...metric} />
            </MotionReveal>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <MotionReveal>
            <Card className="p-8">
              <div className="flex items-center gap-3 text-primary">
                <Building2 className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.24em]">Verticals</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <div key={sector} className="rounded-[1.4rem] border border-white/10 bg-white/4 p-4 text-sm text-white/72">
                    {sector}
                  </div>
                ))}
              </div>
            </Card>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <Card className="p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { icon: Calculator, title: "Bulk calculator", copy: "Translate room counts and mattress mix into transparent landed pricing." },
                  { icon: ShieldCheck, title: "Warranty controls", copy: "Track claim state, QR registration, and coverage visibility by asset." },
                  { icon: RotateCcw, title: "Replacement prediction", copy: "Estimate replacement timing using occupancy, use pattern, and category." },
                  { icon: Truck, title: "Fulfillment planning", copy: "Clarify dispatch windows, site delivery, and phased installations." },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                    <item.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/66">{item.copy}</p>
                  </div>
                ))}
              </div>
            </Card>
          </MotionReveal>
        </div>

        <MotionReveal>
          <Card className="p-8">
            <div className="flex items-center gap-3 text-primary">
              <ClipboardCheck className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.24em]">Procurement flow</p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {[
                "Requirement intake and site profile",
                "Solution mix with pricing and discounts",
                "Asset, warranty, and service plan generation",
                "Lifecycle dashboard after deployment",
              ].map((step, index) => (
                <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/46">Step 0{index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-white/72">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </MotionReveal>
      </div>
    </div>
  );
}


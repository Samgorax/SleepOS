"use client";


import Link from "next/link";
import { ArrowRight, BrainCircuit, Building2, ClipboardList, ShieldCheck, Stars, Wallet } from "lucide-react";

import { products } from "@/lib/constants/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";

const MattressCanvas = dynamic(
  () =>
    import("@/components/three/mattress-canvas").then(
      (mod) => mod.MattressCanvas
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] md:h-[560px] rounded-[2rem] border border-white/10 bg-white/5 animate-pulse" />
    ),
  }
);
import { GsapParallax } from "@/components/shared/gsap-parallax";
import { MetricCard } from "@/components/shared/metric-card";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const platformStats = [
  { label: "AI workflows", value: "07", trend: "+2 new models" },
  { label: "Procurement visibility", value: "360 deg", trend: "Enterprise ready" },
  { label: "Warranty intelligence", value: "100%", trend: "QR-enabled" },
  { label: "Customer lifetime loops", value: "Coins + Referral", trend: "Retention-first" },
];

const capabilityCards = [
  {
    icon: BrainCircuit,
    title: "AI-guided buying",
    body: "Translate body profile, sleep habits, pain points, and budget into confident product recommendations.",
  },
  {
    icon: Wallet,
    title: "Commerce acceleration",
    body: "Blend premium product storytelling with EMI, bundles, reviews, and loyalty hooks that improve conversion.",
  },
  {
    icon: Building2,
    title: "B2B procurement OS",
    body: "Give hotels, hospitals, hostels, and builders a single place to quote, track, and replace sleep assets.",
  },
  {
    icon: ClipboardList,
    title: "Tender intelligence",
    body: "Analyze tender scope, flag risk, validate eligibility, and operationalize bid preparation from one workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Trust infrastructure",
    body: "Use QR Mattress Passports, digital warranty vaults, and claim visibility to improve retention and service.",
  },
  {
    icon: Stars,
    title: "Executive visibility",
    body: "Surface demand forecasting, inventory health, lead scoring, and referral performance in one modern command center.",
  },
];

export function LandingPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative section-space overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="page-shell relative grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <MotionReveal>
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Premium Mattress Intelligence Platform
              </span>
            </MotionReveal>
            <MotionReveal delay={0.05}>
              <h1 className="mt-6 max-w-5xl font-[var(--font-space-grotesk)] text-5xl font-bold tracking-[-0.06em] text-white md:text-7xl">
                A luxury-grade digital experience for sleep commerce, AI consultation, and enterprise operations.
              </h1>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/68">
                SleepOS combines premium retail storytelling with Apple/Tesla-style product presentation, AI-led
                discovery, and back-office workflows for procurement, tenders, loyalty, warranty, and analytics.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.14} className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Explore Catalog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ai-mattress-finder">Launch AI Mattress Finder</Link>
              </Button>
            </MotionReveal>
            <MotionReveal delay={0.18} className="mt-10 grid gap-4 md:grid-cols-2">
              {platformStats.map((stat) => (
                <MetricCard key={stat.label} {...stat} />
              ))}
            </MotionReveal>
          </div>

          <GsapParallax className="lg:pl-4" yPercent={-8}>
            <MotionReveal delay={0.1}>
              <MattressCanvas />
            </MotionReveal>
          </GsapParallax>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <MotionReveal>
            <SectionHeading
              eyebrow="Platform architecture"
              title="Every surface is designed to look premium and operate like enterprise software."
              description="Instead of splitting commerce, customer service, and procurement into disconnected tools, SleepOS creates one connected system with consistent trust, motion, and clarity."
            />
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <Card className="aurora-border h-full p-6">
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-6 font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Product experience"
              title="A catalog that sells emotionally and informs rationally."
              description="Premium card rhythm, clearer hierarchy, and rich detail blocks help customers buy with more certainty while supporting B2C and institutional contexts."
            />
          </MotionReveal>
          <div className="grid gap-5 md:grid-cols-2">
            {products.slice(0, 4).map((product, index) => (
              <MotionReveal key={product.slug} delay={index * 0.05}>
                <Card className="h-full p-6">
                  <div className="rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(73,201,240,0.18),transparent_44%),rgba(255,255,255,0.02)] p-5">
                    <div className="flex items-center justify-between text-sm text-white/58">
                      <span>{product.mattressType}</span>
                      <span>{product.rating} / 5</span>
                    </div>
                    <h3 className="mt-6 font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{product.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.highlights.slice(0, 2).map((highlight) => (
                        <span key={highlight} className="rounded-full bg-white/6 px-3 py-1 text-xs text-white/72">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/52">{product.emi}</p>
                        <p className="mt-1 text-2xl font-bold text-white">{product.price}</p>
                      </div>
                      <Button asChild variant="outline">
                        <Link href={`/products/${product.slug}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <MotionReveal>
            <Card className="noise overflow-hidden p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-primary">Connected value loop</p>
                  <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold text-white">
                    Design the journey beyond checkout.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    "Loyalty system with Sleep Coins and milestone nudges.",
                    "Referral activation designed to feel premium instead of transactional.",
                    "Warranty vault and QR passport woven directly into ownership.",
                  ].map((text) => (
                    <div key={text} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 text-sm leading-7 text-white/68">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}


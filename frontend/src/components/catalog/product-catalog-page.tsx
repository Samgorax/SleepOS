import { Search, SlidersHorizontal, Star } from "lucide-react";

import { products } from "@/lib/constants/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProductCatalogPage() {
  return (
    <div className="section-space">
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            eyebrow="Product catalog"
            title="Premium mattress discovery with high-clarity filters, comparison, and conversion surfaces."
            description="The catalog UI is structured to support search, facet filters, reviews, finance visibility, and fast jumps into AI-assisted recommendations."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[320px_1fr]">
          <MotionReveal>
            <Card className="sticky top-24 space-y-6 p-6">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Search className="h-4 w-4 text-white/54" />
                <span className="text-sm text-white/54">Search by type, need, or comfort profile</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <SlidersHorizontal className="h-4 w-4 text-primary" />
                  Smart Filters
                </div>
                {[
                  "Mattress type",
                  "Firmness and posture match",
                  "Budget and EMI band",
                  "Back pain / pressure relief",
                  "Hospitality and institutional use",
                ].map((filter) => (
                  <div key={filter} className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/70">
                    {filter}
                  </div>
                ))}
              </div>
              <Button className="w-full">Open AI Finder</Button>
            </Card>
          </MotionReveal>

          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {products.map((product, index) => (
              <MotionReveal key={product.slug} delay={index * 0.04}>
                <Card className="h-full p-6">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(73,201,240,0.18),transparent_38%),rgba(255,255,255,0.02)] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.24em] text-white/48">{product.mattressType}</span>
                      <div className="flex items-center gap-1 text-sm text-white/70">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        {product.rating}
                      </div>
                    </div>
                    <h3 className="mt-5 font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">{product.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{product.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.materials.map((material) => (
                        <span key={material} className="rounded-full bg-white/6 px-3 py-1 text-xs text-white/72">
                          {material}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/50">{product.emi}</p>
                        <p className="mt-1 text-2xl font-bold text-white">{product.price}</p>
                      </div>
                      <Button variant="outline">Compare</Button>
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


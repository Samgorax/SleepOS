import { CheckCircle2, Shield, ShoppingBag, Sparkles, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type ProductDetailsPageProps = {
  product: {
    name: string;
    description: string;
    mattressType: string;
    price: string;
    emi: string;
    firmness: string;
    warrantyMonths: number;
    materials: readonly string[];
    highlights: readonly string[];
    rating: string;
  };
};

export function ProductDetailsPage({ product }: ProductDetailsPageProps) {
  return (
    <div className="section-space">
      <div className="page-shell space-y-10">
        <MotionReveal>
          <SectionHeading
            eyebrow={product.mattressType}
            title={product.name}
            description={product.description}
          />
        </MotionReveal>

        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <MotionReveal>
            <Card className="overflow-hidden p-6">
              <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(73,201,240,0.18),transparent_42%),rgba(255,255,255,0.02)] p-8">
                  <div className="h-[420px] rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {["Comfort", "Support", "Durability"].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/6 p-4 text-sm text-white/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Sparkles, label: `${product.rating}/5 customer satisfaction` },
                    { icon: Shield, label: `${product.warrantyMonths} month warranty` },
                    { icon: Truck, label: "White-glove delivery options" },
                    { icon: ShoppingBag, label: "EMI and bundle-ready" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                      <item.icon className="h-5 w-5 text-primary" />
                      <p className="mt-4 text-sm text-white/72">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <Card className="space-y-6 p-8">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/4 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/42">Price</p>
                <p className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-bold text-white">{product.price}</p>
                <p className="mt-2 text-white/58">{product.emi}</p>
                <div className="mt-6 grid gap-3">
                  <Button className="w-full">Add To Cart</Button>
                  <Button variant="outline" className="w-full">
                    Compare Mattress
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">Highlights</h3>
                <div className="mt-4 space-y-3">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 rounded-2xl bg-white/4 p-4 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">Material stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <span key={material} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72">
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5 text-sm text-white/72">
                Best for customers seeking {product.firmness} support with premium post-purchase warranty and AI-led
                sleep guidance.
              </div>
            </Card>
          </MotionReveal>
        </div>
      </div>
    </div>
  );
}


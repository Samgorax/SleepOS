import { BarChart3, Boxes, CircleDollarSign, MessageSquareMore, ShieldAlert, Users } from "lucide-react";

import { adminModules } from "@/lib/constants/mock-data";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/shared/motion-reveal";

export function AdminDashboardPage() {
  return (
    <DashboardShell
      badge="Admin command center"
      title="A dense but elegant operations surface for commerce, service, and enterprise growth."
      description="The admin experience is designed as a modern operating system: clear KPI rhythm, fast decision pathways, and room for CRM, inventory, loyalty, content, analytics, and tender management."
      primaryActionLabel="Create Campaign"
      navItems={["Overview", "CRM", "Catalog", "Orders", "Inventory", "Analytics"]}
      stats={[
        { label: "Revenue MTD", value: "Rs 18.6L" },
        { label: "Open leads", value: "143" },
        { label: "Active orders", value: "62" },
        { label: "Low stock alerts", value: "11" },
      ]}
    >
      <div className="grid gap-6 2xl:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal>
          <Card className="p-6">
            <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">Operational Modules</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {adminModules.map((module) => (
                <div key={module} className="rounded-[1.4rem] border border-white/10 bg-white/4 p-4 text-sm text-white/68">
                  {module}
                </div>
              ))}
            </div>
          </Card>
        </MotionReveal>

        <MotionReveal delay={0.06}>
          <Card className="grid gap-4 p-6">
            {[
              { icon: Users, title: "CRM & customer intelligence", copy: "Lead scoring, segmentation, and follow-up orchestration in one view." },
              { icon: Boxes, title: "Inventory & forecasting", copy: "Track low-stock risk, procurement timing, and SKU health." },
              { icon: CircleDollarSign, title: "Payments & loyalty", copy: "Monitor revenue, refunds, coins liability, and referral rewards." },
              { icon: ShieldAlert, title: "Warranty & claims", copy: "Surface aging assets, open claims, and service bottlenecks." },
              { icon: MessageSquareMore, title: "Content & campaigns", copy: "Coordinate blogs, announcements, and lifecycle communications." },
              { icon: BarChart3, title: "Executive analytics", copy: "Summarize performance across D2C, B2B, and tender channels." },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                <item.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/64">{item.copy}</p>
              </div>
            ))}
          </Card>
        </MotionReveal>
      </div>
    </DashboardShell>
  );
}


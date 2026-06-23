import { Bell, Gift, ShieldCheck, Wallet2 } from "lucide-react";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/shared/motion-reveal";

export function CustomerDashboardPage() {
  return (
    <DashboardShell
      badge="Customer workspace"
      title="An ownership experience that feels high-touch, intelligent, and rewarding."
      description="This dashboard gives customers elegant visibility into orders, delivery, Sleep Coins, referrals, AI support, and warranty documents without feeling dense or transactional."
      primaryActionLabel="Book Sleep Consult"
      navItems={["Overview", "Orders", "Referrals", "Warranty Vault", "AI Support"]}
      stats={[
        { label: "Active orders", value: "04" },
        { label: "Sleep Coins", value: "3,250" },
        { label: "Referral invites", value: "12" },
        { label: "Warranty documents", value: "02" },
      ]}
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <MotionReveal>
          <Card className="p-6">
            <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-white">Recent Activity</h2>
            <div className="mt-6 space-y-4">
              {[
                "Ortho Restore order is ready for dispatch confirmation.",
                "New referral milestone unlocked 500 Sleep Coins.",
                "Mattress Passport registration completed for QR-SLP-8842.",
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/4 p-4 text-sm text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </MotionReveal>

        <MotionReveal delay={0.05}>
          <Card className="grid gap-4 p-6">
            {[
              { icon: Wallet2, title: "Sleep Coins Wallet", copy: "Track earnings, redemptions, and tier unlocks." },
              { icon: Gift, title: "Referral Program", copy: "Monitor referred customers, pending rewards, and campaign status." },
              { icon: ShieldCheck, title: "Warranty Vault", copy: "Access registration, claim status, and QR mattress passports." },
              { icon: Bell, title: "Concierge Alerts", copy: "Get delivery, care, and support nudges in one calm feed." },
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


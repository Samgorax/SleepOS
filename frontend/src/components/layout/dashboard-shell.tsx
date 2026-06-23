import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type DashboardShellProps = {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  children: React.ReactNode;
  badge?: string;
  navItems?: string[];
  primaryActionLabel?: string;
};

export function DashboardShell({
  title,
  description,
  stats,
  children,
  badge = "Workspace",
  navItems = ["Overview", "Insights", "Orders", "Assets", "Settings"],
  primaryActionLabel = "Create Report",
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#040915_0%,#07101f_50%,#06111c_100%)] py-10">
      <div className="page-shell grid gap-8 xl:grid-cols-[260px_1fr]">
        <aside className="hidden xl:block">
          <Card className="sticky top-24 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/42">Navigation</p>
            <div className="mt-6 space-y-2">
              {navItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm ${
                    index === 0 ? "bg-primary text-primary-foreground" : "bg-white/4 text-white/66"
                  }`}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </div>
              ))}
            </div>
          </Card>
        </aside>

        <div className="space-y-8">
          <Card className="aurora-border overflow-hidden p-8 md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge>{badge}</Badge>
                <h1 className="mt-5 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.05em] text-white md:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-white/64">{description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">Export</Button>
                <Button>{primaryActionLabel}</Button>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-5">
                <p className="text-sm text-white/50">{stat.label}</p>
                <p className="mt-3 font-[var(--font-space-grotesk)] text-3xl font-bold text-white">{stat.value}</p>
              </Card>
            ))}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}


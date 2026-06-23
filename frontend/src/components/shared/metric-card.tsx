import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";


export function MetricCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend?: string;
}) {
  return (
    <Card className="aurora-border relative overflow-hidden p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(73,201,240,0.12),transparent_30%)]" />
      <div className="relative">
        <p className="text-sm text-white/56">{label}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="font-[var(--font-space-grotesk)] text-3xl font-bold text-white">{value}</p>
          {trend ? (
            <div className="flex items-center gap-1 rounded-full bg-white/6 px-2 py-1 text-xs text-white/72">
              <ArrowUpRight className="h-3.5 w-3.5" />
              {trend}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}


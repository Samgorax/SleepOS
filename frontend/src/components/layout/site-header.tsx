import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

import { navigationItems } from "@/lib/constants/nav";
import { Button } from "@/components/ui/button";


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(5,8,22,0.65)] backdrop-blur-2xl">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#49c9f0,#6ee7b7)] text-[#041018]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-[-0.03em] text-white">SHREE RAM MATTRESS</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Sleep Intelligence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/64 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Sign In</Button>
          <Button>Book Demo</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}


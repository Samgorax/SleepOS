import Link from "next/link";


export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#040915] py-14">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-[var(--font-space-grotesk)] text-3xl font-bold text-white">SHREE RAM MATTRESS</p>
          <p className="mt-4 max-w-xl text-white/58">
            A premium mattress and sleep operations platform spanning discovery, AI guidance, procurement, loyalty,
            warranty, and post-purchase intelligence.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-white/58 md:grid-cols-2">
          <Link href="/products" className="hover:text-white">
            Product Catalog
          </Link>
          <Link href="/ai-mattress-finder" className="hover:text-white">
            AI Mattress Finder
          </Link>
          <Link href="/b2b-solutions" className="hover:text-white">
            B2B Solutions
          </Link>
          <Link href="/sleep-health-center" className="hover:text-white">
            Sleep Health Center
          </Link>
        </div>
      </div>
    </footer>
  );
}


export const products = [
  {
    slug: "sleepos-ortho-restore",
    name: "SleepOS Ortho Restore",
    description:
      "Orthopedic mattress tuned for posture correction, zoned support, thermal balance, and premium recovery.",
    mattressType: "orthopedic",
    firmness: "medium-firm",
    warrantyMonths: 84,
    price: "Rs 21,999",
    emi: "Rs 1,833/mo",
    rating: "4.9",
    materials: ["Adaptive foam", "Pocketed springs", "Cooling knit"],
    highlights: ["Back pain relief", "Posture alignment", "Low motion transfer"],
  },
  {
    slug: "sleepos-serene-memory",
    name: "SleepOS Serene Memory",
    description:
      "Contour-focused memory foam mattress crafted for pressure relief, luxury feel, and calmer sleep transitions.",
    mattressType: "memory foam",
    firmness: "medium",
    warrantyMonths: 72,
    price: "Rs 18,499",
    emi: "Rs 1,542/mo",
    rating: "4.8",
    materials: ["Open-cell memory foam", "Support core", "Breathable cover"],
    highlights: ["Pressure relief", "Cocoon comfort", "Couple-friendly isolation"],
  },
  {
    slug: "sleepos-hotel-signature",
    name: "SleepOS Hotel Signature",
    description:
      "Hospitality-grade mattress balancing plush hand-feel, long-term durability, and high-turnover guest performance.",
    mattressType: "hospitality",
    firmness: "plush-medium",
    warrantyMonths: 60,
    price: "Rs 28,999",
    emi: "Rs 2,417/mo",
    rating: "4.9",
    materials: ["Euro top comfort", "Reinforced edge frame", "Commercial core"],
    highlights: ["Premium guest experience", "Durable edge support", "B2B lifecycle optimized"],
  },
  {
    slug: "sleepos-clinical-care",
    name: "SleepOS Clinical Care",
    description:
      "Medical and institutional mattress system designed for hygiene, resilience, and predictable replacement cycles.",
    mattressType: "medical",
    firmness: "firm",
    warrantyMonths: 48,
    price: "Rs 24,499",
    emi: "Rs 2,041/mo",
    rating: "4.7",
    materials: ["Medical-grade foam", "Fluid-resistant cover", "Dense support base"],
    highlights: ["Institution ready", "Easy sanitation", "Long-term asset control"],
  },
] as const;

export const sleepHealthArticles = [
  {
    title: "Back Pain Recovery Through Mattress Selection",
    category: "Recovery",
    readTime: "8 min read",
  },
  {
    title: "Sleep Routine Design For High-Performance Teams",
    category: "Performance",
    readTime: "6 min read",
  },
  {
    title: "Hospitality Sleep Standards That Guests Notice",
    category: "B2B",
    readTime: "9 min read",
  },
] as const;

export const adminModules = [
  "CRM pipeline and lead scoring",
  "Catalog and inventory intelligence",
  "Warranty claims and QR passport lifecycle",
  "Loyalty, referral, and Sleep Coins governance",
  "Tender operations and risk monitoring",
  "Revenue, retention, and demand analytics",
] as const;


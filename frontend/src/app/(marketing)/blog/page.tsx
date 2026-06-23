import { InsightPage } from "@/components/marketing/insight-page";


export default function BlogPage() {
  return (
    <InsightPage
      title="Blog"
      description="A CMS-ready content hub for mattress education, procurement guides, and sleep science thought leadership."
      cards={[
        "Category and tag-based blog architecture",
        "Featured articles, author metadata, and SEO blocks",
        "Cross-links into products, calculators, and AI tools",
      ]}
    />
  );
}


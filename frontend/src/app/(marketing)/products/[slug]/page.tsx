import { notFound } from "next/navigation";

import { ProductDetailsPage } from "@/components/catalog/product-details-page";
import { products } from "@/lib/constants/mock-data";

export default async function ProductDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailsPage product={product} />;
}


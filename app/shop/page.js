import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Shop",
};

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  const categorySlug = typeof params.category === "string" ? params.category : "";
  const activeCategory = getCategory(categorySlug);
  const visibleProducts = getProductsByCategory(categorySlug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-[11px] tracking-[0.28em] text-gold uppercase">The shop</p>
      <h1 className="serif mt-3 text-4xl text-ink md:text-5xl">
        {activeCategory ? activeCategory.name : "All gifts"}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">
        Handmade pieces, packed to order. Prices show as ₹XXX until the studio list is confirmed.
      </p>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        <Link
          href="/shop"
          className={`whitespace-nowrap border px-3 py-2 text-[11px] tracking-[0.14em] uppercase ${
            !categorySlug ? "border-burgundy bg-burgundy text-ivory" : "border-beige hover:border-burgundy"
          }`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/shop?category=${category.slug}`}
            className={`whitespace-nowrap border px-3 py-2 text-[11px] tracking-[0.14em] uppercase ${
              categorySlug === category.slug
                ? "border-burgundy bg-burgundy text-ivory"
                : "border-beige hover:border-burgundy"
            }`}
          >
            {category.shortName}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {visibleProducts.length === 0 ? (
        <p className="mt-10 text-sm text-ink/70">No pieces in this category yet. Add them in data/products.js.</p>
      ) : null}
    </div>
  );
}

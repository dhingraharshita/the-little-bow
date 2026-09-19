import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Product Categories",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Browse by type</p>
      <h1 className="serif mt-3 text-4xl text-ink md:text-5xl">Product Categories</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">
        From handmade bouquets to personalized hampers — pick a family of gifts, then open the
        pieces inside.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}

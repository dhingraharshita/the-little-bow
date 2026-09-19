import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";
import InstagramSection from "@/components/InstagramSection";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { getFeaturedCategories } from "@/data/categories";
import { getBestSellers } from "@/data/products";
import { reasons, reviews } from "@/data/reviews";
import BuildYourOwnHamper from "@/components/BuildYourOwnHamper";

export default function HomePage() {
  const featuredCategories = getFeaturedCategories();
  const bestSellers = getBestSellers();

  return (
    <>
      <Hero />
      

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">The collection</p>
        <h2 className="serif mt-3 text-4xl text-ink">Featured Categories</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-ink/70">
          Bouquets, chocolate wraps, hampers, and the small notes that make a gift feel finished.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="border-y border-beige bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Most asked for</p>
          <h2 className="serif mt-3 text-4xl text-ink">Best Sellers</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">The studio promise</p>
        <h2 className="serif mt-3 max-w-lg text-4xl text-ink">Why Choose The Little Bow?</h2>
        <div className="mt-10 grid gap-px bg-beige sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <article key={reason.title} className="bg-ivory px-5 py-8">
              <div className="mb-4 h-px w-10 bg-gold" />
              <h3 className="serif text-2xl text-ink">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-beige">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Kind words</p>
          <h2 className="serif mt-3 text-4xl text-ink">Customer reviews</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <InstagramSection />
    </>
  );
}

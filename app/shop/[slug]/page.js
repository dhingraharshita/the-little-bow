import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { getCategory } from "@/data/categories";
import { getProduct, getRelatedProducts, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  return {
    title: product ? product.name : "Gift",
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const category = getCategory(product.category);
  const related = getRelatedProducts(product.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-xs text-ink/50">
        <Link href="/shop" className="hover:text-burgundy">
          Shop
        </Link>
        {category ? (
          <>
            <span className="mx-2">/</span>
            <Link href={`/shop?category=${category.slug}`} className="hover:text-burgundy">
              {category.shortName}
            </Link>
          </>
        ) : null}
      </p>

      <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
        <ProductImage src={product.image} alt={product.name} className="aspect-[4/5] border border-beige" />
        <div>
          <p className="text-[11px] tracking-[0.18em] text-burgundy uppercase">
            {category?.name || product.category}
          </p>
          <h1 className="serif mt-3 text-4xl text-ink md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg text-ink/80">{product.price}</p>
          <p className="mt-6 max-w-md text-sm leading-7 text-ink/70">{product.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/contact?product=${product.slug}`}
              className="bg-burgundy px-6 py-3.5 text-center text-xs tracking-[0.22em] text-ivory uppercase hover:bg-wine"
            >
              Order Now
            </Link>
            <Link
              href="/customize"
              className="border border-ink px-6 py-3.5 text-center text-xs tracking-[0.22em] uppercase hover:bg-ink hover:text-ivory"
            >
              Customize
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="serif text-3xl text-ink">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

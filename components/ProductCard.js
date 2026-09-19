import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { getCategory } from "@/data/categories";

export default function ProductCard({ product }) {
  const category = getCategory(product.category);

  return (
    <article className="flex h-full flex-col border border-beige bg-ivory">
      <Link href={`/shop/${product.slug}`} className="block">
        <ProductImage src={product.image} alt={product.name} className="aspect-[4/5]" />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] tracking-[0.18em] text-burgundy uppercase">
          {category?.shortName || product.category}
        </p>
        <h3 className="serif mt-2 text-xl leading-snug text-ink">
          <Link href={`/shop/${product.slug}`} className="hover:text-burgundy">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-ink/70">{product.price}</p>
        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
          <Link
            href={`/shop/${product.slug}`}
            className="flex-1 border border-ink px-3 py-2.5 text-center text-[11px] tracking-[0.16em] uppercase hover:bg-ink hover:text-ivory"
          >
            View Details
          </Link>
          <Link
            href={`/contact?product=${product.slug}`}
            className="flex-1 bg-burgundy px-3 py-2.5 text-center text-[11px] tracking-[0.16em] text-ivory uppercase hover:bg-wine"
          >
            Order Now
          </Link>
        </div>
      </div>
    </article>
  );
}

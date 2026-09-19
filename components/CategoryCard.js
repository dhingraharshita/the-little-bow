import Link from "next/link";
import ProductImage from "@/components/ProductImage";

export default function CategoryCard({ category }) {
  return (
    <Link href={`/shop?category=${category.slug}`} className="group block">
      <ProductImage
        src={category.image}
        alt={category.name}
        className="aspect-[4/5] border border-beige"
      />
      <div className="mt-4">
        <p className="serif text-2xl text-ink group-hover:text-burgundy">{category.shortName}</p>
        <p className="mt-1 text-sm leading-6 text-ink/65">{category.description}</p>
      </div>
    </Link>
  );
}

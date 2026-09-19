import Link from "next/link";
import ProductImage from "@/components/ProductImage";

export default function Hero() {
  return (
    <section className="border-b border-beige">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Handmade gifting studio</p>
          <h1 className="serif mt-4 text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.6rem]">
            Thoughtful Gifts, Made With Love 🎀
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-ink/75">
            Handmade bouquets, personalized hampers & little things made extra special for the
            people you love.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="bg-burgundy px-6 py-3.5 text-center text-xs tracking-[0.22em] text-ivory uppercase hover:bg-wine"
            >
              Shop Now
            </Link>
            <Link
              href="/customize"
              className="border border-ink px-6 py-3.5 text-center text-xs tracking-[0.22em] uppercase hover:bg-ink hover:text-ivory"
            >
              Customize Your Gift
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-3 -left-3 hidden h-full w-full border border-gold/50 md:block" />
          <ProductImage
            src="/images/hero/zero-main.png"
            alt="The Little Bow handmade gift arrangement"
            className="aspect-[4/5] border border-beige md:aspect-[5/6]"
          />
          <p className="mt-3 text-xs tracking-[0.16em] text-ink/50 uppercase">
            Studio photograph
          </p>
        </div>
      </div>
    </section>
  );
}

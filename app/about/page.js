import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-12 md:grid-cols-2 md:py-16">
      <div className="relative aspect-[4/5] overflow-hidden border border-beige bg-cream">
        <Image
          src="/images/about/about.png"
          alt="The Little Bow studio placeholder"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 45vw, 100vw"
        />
      </div>
      <div>
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">The studio</p>
        <h1 className="serif mt-3 text-4xl text-ink md:text-5xl">About The Little Bow</h1>
        <div className="mt-6 space-y-5 text-sm leading-7 text-ink/75">
          <p>
            The Little Bow is a handmade gifting studio for people who still like the pause of
            unwrapping something made with care.
          </p>
          <p>
            We make bouquets that last, chocolate wraps that feel like flowers, hampers that are
            actually chosen, and cards that do not look like an afterthought.
          </p>
          <p>
            The look is warm and a little romantic — cream paper, wine ribbon, gold in small
            amounts — because gifts should feel special without becoming costume.
          </p>
          <p>
            If you have a colour, a name, or an occasion in mind, we would rather build around that
            than hand you a generic box.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/shop"
            className="bg-burgundy px-6 py-3.5 text-center text-xs tracking-[0.22em] text-ivory uppercase hover:bg-wine"
          >
            Shop the collection
          </Link>
          <Link
            href="/contact"
            className="border border-ink px-6 py-3.5 text-center text-xs tracking-[0.22em] uppercase hover:bg-ink hover:text-ivory"
          >
            Say hello
          </Link>
        </div>
      </div>
    </div>
  );
}

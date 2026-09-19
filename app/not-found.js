import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Missing page</p>
      <h1 className="serif mt-4 text-4xl text-ink">This gift is not on the shelf yet.</h1>
      <Link
        href="/shop"
        className="mt-8 inline-block bg-burgundy px-6 py-3.5 text-xs tracking-[0.22em] text-ivory uppercase"
      >
        Back to shop
      </Link>
    </div>
  );
}

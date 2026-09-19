import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const productSlug = typeof params.product === "string" ? params.product : "";

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-2 md:py-16">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Enquiries</p>
        <h1 className="serif mt-3 text-4xl text-ink md:text-5xl">Contact</h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-ink/75">
          Tell us the occasion, the person, and the kind of gift you are imagining. We read every
          note. For a quicker reply, Instagram is often easiest.
        </p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm text-burgundy hover:text-wine"
        >
          Or message {site.handle} on Instagram
        </a>
      </div>
      <ContactForm productSlug={productSlug} />
    </div>
  );
}

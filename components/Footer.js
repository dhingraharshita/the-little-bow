import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-beige bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="serif text-2xl text-ink">{site.name} 🎀</p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-ink/70">{site.description}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.22em] text-burgundy uppercase">Visit</p>
          <div className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-ink/80 hover:text-burgundy">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.22em] text-burgundy uppercase">Studio notes</p>
          <p className="mt-4 text-sm leading-7 text-ink/70">
            Handmade gifts, packed to order. For custom colours, names, and hampers, write to us or
            send a note on Instagram.
          </p>
          <a
            href={site.instagramUrl}
            className="mt-4 inline-block text-sm text-burgundy hover:text-wine"
            target="_blank"
            rel="noreferrer"
          >
            Follow {site.handle}
          </a>
        </div>
      </div>
      <div className="hairline" />
      <p className="px-5 py-5 text-center text-xs tracking-[0.14em] text-ink/50 uppercase">
        {site.name} · Handmade gifting
      </p>
    </footer>
  );
}

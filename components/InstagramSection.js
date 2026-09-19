import Image from "next/image";
import { site } from "@/data/site";

const posts = [1, 2, 3, 4, 5, 6];

export default function InstagramSection() {
  return (
    <section className="border-t border-beige bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-center text-[11px] tracking-[0.28em] text-gold uppercase">Studio diary</p>
        <h2 className="serif mt-3 text-center text-4xl text-ink">Follow {site.handle}</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-7 text-ink/70">
          New wraps, hamper details, and the little bows we tie at the end. Swap these frames for
          your real Instagram photos whenever you are ready.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {posts.map((index) => (
            <a
              key={index}
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden border border-beige"
            >
              <Image
                src={`/images/instagram/post-${index}.png`}
                alt={`${site.name} Instagram placeholder ${index}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 50vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

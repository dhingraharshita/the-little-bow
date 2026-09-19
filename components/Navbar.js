"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/site";


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-beige/60 bg-ivory/90 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-burgundy" aria-hidden="true">
            🎀
          </span>
          <span className="serif text-xl font-semibold tracking-wide text-ink md:text-2xl">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.16em] uppercase ${
                  active ? "text-burgundy" : "text-ink/70 hover:text-burgundy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/customize"
            className="border border-burgundy bg-burgundy px-4 py-2 text-xs tracking-[0.18em] text-ivory uppercase hover:bg-wine"
          >
            Customize
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center border border-beige px-3 py-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-[10px] tracking-[0.16em] uppercase">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-beige px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.16em] text-ink uppercase"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/customize"
              className="border border-burgundy bg-burgundy px-4 py-3 text-center text-xs tracking-[0.18em] text-ivory uppercase"
              onClick={() => setOpen(false)}
            >
              Customize your gift
            </Link>
            <Link href="/build-your-own-hamper">
               BUILD YOUR OWN HAMPER
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

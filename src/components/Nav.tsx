"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Trivara Consulting Services"
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
            priority
          />
          <span className="font-serif text-2xl font-semibold tracking-wide text-forest">
            TRIVARA
          </span>
        </Link>

        {/* Desktop: nav links + CTA grouped inside a dark pod that expands to fill the row */}
        <div className="hidden flex-1 items-center justify-between rounded-full bg-forest py-2 pl-8 pr-2 md:flex">
          <nav className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ivory/80 transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-ivory px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-white"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile: hamburger toggle + standalone CTA */}
        <div className="ml-auto flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-forest-mid"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="border-t border-black/5 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-charcoal transition-colors hover:bg-forest/5 hover:text-forest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

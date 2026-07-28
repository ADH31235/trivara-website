import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
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

        {/* Desktop: nav links + CTA grouped inside a dark pod */}
        <div className="hidden items-center gap-1 rounded-full bg-forest p-2 md:flex">
          <nav className="flex items-center gap-7 px-5">
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

        {/* Mobile: simple standalone CTA since the pod nav is hidden */}
        <Link
          href="/contact"
          className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-forest-mid md:hidden"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}

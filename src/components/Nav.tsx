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
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
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

        <nav className="hidden gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-charcoal transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-forest px-6 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-mid"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}

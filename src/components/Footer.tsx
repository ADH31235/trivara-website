import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-ivory/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Trivara Consulting Services"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-serif text-base font-semibold tracking-wide text-ivory">
                TRIVARA
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Strategic and operational advisory for growing businesses
              across Europe, the Middle East, and Asia.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-ivory">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-ivory">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-ivory">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-ivory">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-ivory">Contact</h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                3906, 39/F, The Center
                <br />
                99 Queen&apos;s Road Central
                <br />
                Hong Kong
              </li>
              <li>
                <a href="mailto:info@trivaraservices.com" className="hover:text-ivory">
                  info@trivaraservices.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-ivory">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-ivory">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ivory">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ivory/10 pt-6 text-xs text-ivory/60">
          © {new Date().getFullYear()} Trivara Consulting Services. All
          rights reserved. Incorporated in Hong Kong.
        </div>
      </div>
    </footer>
  );
}

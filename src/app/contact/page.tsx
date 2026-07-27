import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Trivara Consulting Services",
  description:
    "Get in touch with Trivara Consulting Services for strategic and operational advisory support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
        Contact Us
      </p>
      <h1 className="font-serif text-4xl font-semibold text-forest md:text-5xl">
        Tell us what you&apos;re working on.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
        Share a few details and we&apos;ll respond within one business day.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <ContactForm />

        <div className="space-y-6 text-sm text-charcoal/80">
          <div>
            <h2 className="mb-1 font-semibold text-forest">Office</h2>
            <p className="leading-relaxed">
              3906, 39/F, The Center
              <br />
              99 Queen&apos;s Road Central
              <br />
              Hong Kong
            </p>
          </div>
          <div>
            <h2 className="mb-1 font-semibold text-forest">Email</h2>
            <a
              href="mailto:info@trivaraservices.com"
              className="hover:text-forest"
            >
              info@trivaraservices.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

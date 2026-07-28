import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

const pillars = [
  {
    title: "Strategic Consulting",
    description:
      "Clear-eyed strategy work for leadership teams navigating growth, market entry, or operating-model change.",
  },
  {
    title: "Regulatory Implementation",
    description:
      "Turning new regulatory or compliance requirements into practical, working processes — without slowing the business down.",
  },
  {
    title: "Technology Adoption",
    description:
      "Guiding teams through platform changes, from vendor selection to rollout, so new tools actually get used.",
  },
  {
    title: "Market Expansion",
    description:
      "Structured support for entering or scaling across Europe, the Middle East, and Asia.",
  },
];

const differentiators = [
  {
    title: "Global Reach, Local Grounding",
    description:
      "Hong Kong-based, working with clients across Europe, the Middle East, and Asia.",
  },
  {
    title: "Practical, Not Generic",
    description:
      "We speak the language of the teams we work with — not boilerplate management-speak.",
  },
  {
    title: "Senior-Led Delivery",
    description:
      "Every engagement is led by senior consultants directly, not handed off to junior teams after the pitch.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Image
            src="/watermark-hero.png"
            alt=""
            width={498}
            height={472}
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 hidden w-[380px] -translate-y-1/2 md:block lg:right-8 lg:w-[520px]"
          />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
            Hong Kong · Europe · Middle East · Asia
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-forest md:text-6xl">
            Strategic and operational advisory, built for how your business
            actually runs.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
            Trivara Consulting Services helps businesses streamline
            operations, implement regulatory change, and grow into new
            markets across Europe, the Middle East, and Asia — without the
            consulting-speak.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-forest px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-mid"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-forest/30 px-7 py-3 text-sm font-medium text-forest transition-colors hover:border-forest"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section className="border-t border-forest/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 font-serif text-2xl font-semibold text-forest md:text-3xl">
            Where we help
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <ServiceCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Trivara */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 font-serif text-2xl font-semibold text-forest md:text-3xl">
          Why Trivara
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {differentiators.map((item, i) => (
            <div key={item.title}>
              <span className="mb-3 block font-serif text-3xl text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-forest">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Global reach */}
      <section className="border-t border-forest/10 bg-forest text-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 font-serif text-2xl font-semibold md:text-3xl">
            Where we work
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-ivory/15 p-8">
              <h3 className="mb-2 font-serif text-xl font-semibold">
                Europe
              </h3>
              <p className="text-sm leading-relaxed text-ivory/80">
                Supporting companies expanding operations and navigating
                regulatory change across European markets.
              </p>
            </div>
            <div className="rounded-2xl border border-ivory/15 p-8">
              <h3 className="mb-2 font-serif text-xl font-semibold">
                Middle East
              </h3>
              <p className="text-sm leading-relaxed text-ivory/80">
                Advisory support for businesses establishing or scaling a
                presence across the region.
              </p>
            </div>
            <div className="rounded-2xl border border-ivory/15 p-8">
              <h3 className="mb-2 font-serif text-xl font-semibold">Asia</h3>
              <p className="text-sm leading-relaxed text-ivory/80">
                Based in Hong Kong, with hands-on experience supporting
                growth across the wider region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold text-forest md:text-4xl">
          Let&apos;s talk about what your business needs next.
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-forest px-8 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-forest-mid"
        >
          Book a Consultation
        </Link>
      </section>
    </>
  );
}

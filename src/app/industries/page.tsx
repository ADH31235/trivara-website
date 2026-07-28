import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Trivara Consulting Services",
  description:
    "Trivara Consulting Services advises financial services, private equity, retail and consumer products, technology, and real estate clients across Europe, the Middle East, and Asia.",
};

const industries = [
  {
    title: "Financial Services",
    description:
      "Banks, asset managers, and financial institutions navigating regulatory change, operational transformation, and expansion across new markets.",
  },
  {
    title: "Private Equity",
    description:
      "Deal teams and portfolio companies requiring valuation support, operational due diligence, and post-acquisition efficiency improvements.",
  },
  {
    title: "Retail & Consumer Products",
    description:
      "Brands scaling operations, entering new markets, or restructuring supply chains and client relationships to support growth.",
  },
  {
    title: "Technology",
    description:
      "Fintech and technology companies adopting new platforms and building the operational groundwork that lets fast-growing teams scale without losing control of their processes.",
  },
  {
    title: "Real Estate",
    description:
      "Property owners, developers, and investment managers navigating market expansion, valuations, and operational efficiency across regional portfolios.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
        Industries
      </p>
      <h1 className="max-w-2xl font-serif text-4xl font-semibold text-forest md:text-5xl">
        Focused expertise, broad reach.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
        We work across a defined set of sectors where regulatory complexity,
        growth pressure, or operational change make senior-led advisory
        genuinely useful.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {industries.map((industry) => (
          <div
            key={industry.title}
            className="rounded-2xl border border-forest/10 bg-white/50 p-8"
          >
            <h2 className="mb-3 font-serif text-2xl font-semibold text-forest">
              {industry.title}
            </h2>
            <p className="text-base leading-relaxed text-charcoal/80">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

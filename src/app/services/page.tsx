import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Trivara Consulting Services",
  description:
    "Business development, strategic consulting, regulatory implementation, technology adoption, company valuations, and operational advisory for growing businesses.",
};

const services = [
  {
    id: "business-development",
    title: "Business Development",
    who: "Companies expanding client relationships or entering new verticals",
    description:
      "We identify and structure new growth opportunities, from partnership development to go-to-market planning, grounded in your actual operating capacity.",
  },
  {
    id: "strategic-consulting",
    title: "Strategic Consulting",
    who: "Leadership teams facing a major strategic decision",
    description:
      "Clear, evidence-based strategy work — market positioning, competitive analysis, and operating-model design — built around decisions you actually need to make.",
  },
  {
    id: "project-management",
    title: "Project Management",
    who: "Teams running complex, cross-functional initiatives",
    description:
      "Hands-on delivery leadership for time-sensitive projects, keeping scope, budget, and stakeholders aligned from kickoff to close.",
  },
  {
    id: "client-relationship-management",
    title: "Client Relationship Management",
    who: "Businesses formalizing how they manage key accounts",
    description:
      "Practical frameworks and processes for account management, client communication, and retention — built to be used, not filed away.",
  },
  {
    id: "operational-support",
    title: "Operational Support",
    who: "Growing companies whose processes haven't kept pace",
    description:
      "Day-to-day operational advisory that closes the gap between how your business runs today and how it needs to run at the next stage.",
  },
  {
    id: "market-expansion",
    title: "Market Expansion",
    who: "Companies entering new markets across Europe, the Middle East, or Asia — including retail expansion and real estate portfolio growth",
    description:
      "On-the-ground guidance for market entry — local landscape, partnerships, and the operational groundwork expansion requires.",
  },
  {
    id: "regulatory-implementation",
    title: "Regulatory Implementation Support",
    who: "Organizations facing new regulatory or compliance requirements",
    description:
      "Turning regulatory requirements into working policies, controls, and reporting — implemented in a way your teams can actually sustain.",
  },
  {
    id: "technology-adoption",
    title: "Technology Adoption",
    who: "Organizations selecting or rolling out new platforms",
    description:
      "Independent guidance through vendor evaluation, implementation planning, and change management for new technology systems.",
  },
  {
    id: "organisational-efficiency",
    title: "Organisational Efficiency",
    who: "Businesses looking to do more with the resources they already have",
    description:
      "Process and resourcing review to identify where time, budget, and effort are being lost — and a practical plan to fix it.",
  },
  {
    id: "company-valuations",
    title: "Company Valuations",
    who: "Private equity deal teams, businesses raising capital, planning an exit, or reporting for regulatory purposes",
    description:
      "Independent valuation and operational due diligence support for fundraising, M&A, shareholder disputes, and financial reporting — grounded in a clear view of the business, not just the model.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
        Services
      </p>
      <h1 className="max-w-2xl font-serif text-4xl font-semibold text-forest md:text-5xl">
        Consulting support built around what your business needs to do next.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
        Every engagement starts with the problem, not the service menu. Below
        are the areas we work in most often.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-24 rounded-2xl border border-forest/10 bg-white/50 p-8"
          >
            <h2 className="mb-2 font-serif text-xl font-semibold text-forest">
              {service.title}
            </h2>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-sage">
              For: {service.who}
            </p>
            <p className="text-sm leading-relaxed text-charcoal/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

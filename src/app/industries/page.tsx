import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Trivara Consulting Services",
  description:
    "Trivara Consulting Services advises growing businesses and technology companies across Europe, the Middle East, and Asia.",
};

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
        Industries
      </p>
      <h1 className="font-serif text-4xl font-semibold text-forest md:text-5xl">
        Focused expertise, broad reach.
      </h1>

      <div className="mt-14 space-y-10">
        <div className="rounded-2xl border border-forest/10 bg-white/50 p-8">
          <h2 className="mb-3 font-serif text-2xl font-semibold text-forest">
            Technology
          </h2>
          <p className="text-base leading-relaxed text-charcoal/80">
            We work with technology companies on organisational efficiency,
            technology adoption, and the operational groundwork that lets
            fast-growing teams scale without losing control of their
            processes.
          </p>
        </div>

        <div className="rounded-2xl border border-forest/10 bg-white/50 p-8">
          <h2 className="mb-3 font-serif text-2xl font-semibold text-forest">
            Business &amp; Professional Services
          </h2>
          <p className="text-base leading-relaxed text-charcoal/80">
            From strategic consulting to regulatory implementation and
            market expansion, we support businesses across a range of
            sectors that need practical, senior-led advisory — not a
            one-size-fits-all playbook.
          </p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Trivara Consulting Services",
  description:
    "Trivara Consulting Services is a Hong Kong-based advisory firm serving growing businesses across Europe, the Middle East, and Asia.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
        About Us
      </p>
      <h1 className="font-serif text-4xl font-semibold text-forest md:text-5xl">
        Based in Hong Kong. Working across Europe, the Middle East, and
        Asia.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-charcoal/80">
        <p>
          Trivara Consulting Services was founded to close a specific gap:
          growing businesses need advisors who understand both the practical
          realities of scaling operations and the regulatory landscape they
          operate in — not one or the other.
        </p>
        <p>
          We work as an extension of your team, not a detached advisory
          layer. Every engagement is led by senior consultants directly,
          which means faster decisions, fewer handoffs, and advice grounded
          in how your business actually operates.
        </p>
      </div>

      <div className="mt-16 rounded-2xl border border-forest/10 bg-white/50 p-8">
        <h2 className="mb-3 font-serif text-2xl font-semibold text-forest">
          Global Reach
        </h2>
        <p className="text-sm leading-relaxed text-charcoal/80">
          Based in Hong Kong, Trivara Consulting Services supports clients
          expanding across Europe, the Middle East, and Asia — as well as
          international businesses establishing a presence in Hong Kong for
          the first time.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

const services = [
  "Business Development",
  "Strategic Consulting",
  "Project Management",
  "Client Relationship Management",
  "Operational Support",
  "Market Expansion",
  "Regulatory Implementation Support",
  "Technology Adoption",
  "Organisational Efficiency",
  "Company Valuations",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      service: data.get("service"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-forest/10 bg-white/50 p-8 text-sm text-charcoal/80">
        Thank you — your message has been received. We&apos;ll be in touch
        within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-charcoal">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-charcoal">
            Company
          </label>
          <input
            type="text"
            name="company"
            className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-charcoal">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-charcoal">
          Service of Interest
        </label>
        <select
          name="service"
          className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest"
        >
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={4}
          className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please try again, or
          email us directly at{" "}
          <a href="mailto:info@trivaraservices.com" className="underline">
            info@trivaraservices.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-forest px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-mid disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

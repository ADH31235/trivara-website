import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Trivara Consulting Services",
  description: "Terms of Use for Trivara Consulting Services.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-3xl font-semibold text-forest">
        Terms of Use
      </h1>
      <p className="mt-2 text-sm text-charcoal/60">
        Last updated: [Insert Date]
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal/80">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            1. Acceptance of These Terms
          </h2>
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your access to and
            use of trivaraservices.com (the &quot;Website&quot;), operated by
            Trivara Consulting Services (&quot;Trivara&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), of 3906, 39/F, The Center, 99
            Queen&apos;s Road Central, Hong Kong. By accessing or using the
            Website, you agree to be bound by these Terms. If you do not
            agree, please do not use the Website.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            2. Use of the Website
          </h2>
          <p>
            You may use the Website only for lawful purposes and in
            accordance with these Terms. You agree not to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Use the Website in any way that violates applicable local,
              national, or international law
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the Website
              or its underlying systems
            </li>
            <li>
              Introduce viruses, malware, or other harmful material to the
              Website
            </li>
            <li>
              Use any automated system to extract data from the Website
              (scraping) without our prior written consent
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            3. No Professional Advice or Client Relationship
          </h2>
          <p>
            The content on this Website is provided for general
            informational purposes only and does not constitute business,
            legal, financial, or other professional advice. No
            consultant-client relationship is formed between you and Trivara
            through your use of the Website or submission of an enquiry.
            Such a relationship is only established once a separate written
            engagement agreement has been signed by both parties.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            4. Intellectual Property
          </h2>
          <p>
            All content on this Website, including text, graphics, logos,
            and the Trivara name and mark, is the property of Trivara or its
            licensors and is protected by applicable intellectual property
            laws. You may not reproduce, distribute, or create derivative
            works from this content without our prior written permission.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            5. Third-Party Links
          </h2>
          <p>
            The Website may contain links to third-party websites. We do not
            control and are not responsible for the content, privacy
            practices, or availability of any third-party website. Inclusion
            of a link does not imply endorsement.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            6. Disclaimer of Warranties
          </h2>
          <p>
            The Website and its content are provided &quot;as is&quot; and
            &quot;as available&quot; without warranties of any kind, whether
            express or implied. We do not warrant that the Website will be
            uninterrupted, error-free, or free from harmful components.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            7. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Trivara shall
            not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or relating to
            your use of, or inability to use, the Website.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            8. Governing Law
          </h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of Hong Kong Special Administrative Region, without regard
            to its conflict of law principles. Any disputes arising from
            these Terms shall be subject to the exclusive jurisdiction of
            the courts of Hong Kong.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            9. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Any changes will
            be posted on this page with an updated &quot;Last updated&quot;
            date. Continued use of the Website after changes are posted
            constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            10. Contact Us
          </h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="mt-3">
            Trivara Consulting Services
            <br />
            3906, 39/F, The Center, 99 Queen&apos;s Road Central, Hong Kong
            <br />
            <a
              href="mailto:info@trivaraservices.com"
              className="text-forest underline"
            >
              info@trivaraservices.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

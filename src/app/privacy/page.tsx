import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Trivara Consulting Services",
  description: "Privacy Policy for Trivara Consulting Services.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-3xl font-semibold text-forest">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-charcoal/60">
        Last updated: [Insert Date]
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal/80">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            1. Introduction
          </h2>
          <p>
            Trivara Consulting Services (&quot;Trivara&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), of 3906, 39/F, The Center, 99
            Queen&apos;s Road Central, Hong Kong, is committed to protecting
            the privacy of visitors to trivaraservices.com (the
            &quot;Website&quot;) and the individuals we interact with in the
            course of our business. This Privacy Policy explains what
            personal data we collect, how we use it, and the rights
            available to you under applicable law, including Hong
            Kong&apos;s Personal Data (Privacy) Ordinance, Cap. 486
            (&quot;PDPO&quot;) and, where applicable, the EU General Data
            Protection Regulation (&quot;GDPR&quot;).
          </p>
          <p className="mt-3">
            We handle personal data in line with the PDPO&apos;s six Data
            Protection Principles, covering the purpose and manner of
            collection, accuracy and retention, use, security, openness
            about our policies, and your rights of access and correction.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            2. Personal Data We Collect
          </h2>
          <p>
            We collect personal data that you provide directly to us,
            primarily through our Contact form. This may include:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Your name</li>
            <li>Company name</li>
            <li>Email address</li>
            <li>The service you are enquiring about</li>
            <li>The content of your message</li>
          </ul>
          <p className="mt-3">
            Providing this information is voluntary. However, if you do not
            provide your name, email address, and message, we will not be
            able to respond to your enquiry.
          </p>
          <p className="mt-3">
            We do not knowingly collect sensitive personal data (such as
            health, biometric, or financial account information) through the
            Website.
          </p>
          <p className="mt-3">
            Our hosting infrastructure may also automatically log basic
            technical information (such as IP address, browser type, and
            access times) for security and website-operation purposes. This
            is separate from the cookies described in Section 9 below.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            3. How We Use Your Personal Data
          </h2>
          <p>We use the personal data we collect to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Respond to enquiries submitted through the Contact form</li>
            <li>
              Provide, discuss, and deliver our consulting services where you
              engage us
            </li>
            <li>
              Maintain records of our business communications and
              relationships
            </li>
            <li>
              Comply with applicable legal, regulatory, and accounting
              obligations
            </li>
          </ul>
          <p className="mt-3">
            We do not sell personal data, and we do not use it for
            unsolicited marketing without your consent.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            4. Legal Basis for Processing (GDPR)
          </h2>
          <p>
            Where the GDPR applies to our processing of your personal data
            (for example, because you are located in the European Economic
            Area), we rely on the following legal bases:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <strong>Legitimate interests</strong> — responding to enquiries
              and maintaining business relationships
            </li>
            <li>
              <strong>Contractual necessity</strong> — where processing is
              required to perform a contract with you or your organisation
            </li>
            <li>
              <strong>Legal obligation</strong> — where we are required by
              law to process or retain certain information
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            5. Third-Party Service Providers
          </h2>
          <p>
            We use third-party service providers to help operate the
            Website and deliver our services, including:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <strong>Resend</strong> — an email delivery service used to
              transmit Contact form submissions to our mailbox
            </li>
          </ul>
          <p className="mt-3">
            These providers process personal data on our behalf and are
            contractually restricted from using it for any other purpose.
            Personal data submitted through the Contact form may be
            transmitted via servers located outside Hong Kong (including in
            the European Economic Area) as part of this email delivery
            process.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            6. International Data Transfers
          </h2>
          <p>
            As we operate across Hong Kong, Europe, the Middle East, and
            Asia, personal data may be transferred to, stored, or processed
            in jurisdictions other than the one in which you are located.
            Where such transfers occur, we take reasonable steps to ensure
            personal data continues to be protected to a standard consistent
            with this Privacy Policy and applicable law.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            7. Data Retention
          </h2>
          <p>
            We retain personal data only for as long as necessary to fulfil
            the purposes described in this Privacy Policy, or as required by
            applicable legal, regulatory, or accounting obligations. Enquiry
            records that do not result in an engagement are typically
            retained for a limited period before being deleted.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            8. Your Rights
          </h2>
          <p>
            <strong>Under the PDPO</strong>, you have the right to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Check whether we hold personal data about you and request
              access to it
            </li>
            <li>Request correction of inaccurate personal data</li>
            <li>
              Request that we cease using your personal data for direct
              marketing
            </li>
          </ul>
          <p className="mt-3">
            We will respond to a data access or correction request within 40
            days, as required by the PDPO. We may charge a reasonable fee
            to cover the cost of complying with a data access request. In
            certain circumstances specified under the PDPO, we may decline a
            request — where this applies, we will explain the reason.
          </p>
          <p className="mt-3">
            <strong>If the GDPR applies to you</strong>, you additionally
            have the right to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Request erasure of your personal data</li>
            <li>Request restriction of processing</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Request data portability</li>
            <li>
              Lodge a complaint with your local data protection supervisory
              authority
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us using the
            details in Section 11 below.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            9. Cookies
          </h2>
          <p>
            The Website does not currently use cookies for analytics or
            marketing purposes. If this changes in the future, this Privacy
            Policy will be updated and, where required, a cookie consent
            mechanism will be implemented before any such cookies are set.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            10. Data Security &amp; Breach Notification
          </h2>
          <p>
            We take reasonable technical and organisational measures to
            protect personal data against unauthorised access, alteration,
            disclosure, or destruction. However, no method of electronic
            transmission or storage is completely secure, and we cannot
            guarantee absolute security. In the event of a data breach
            affecting your personal data, we will take reasonable steps to
            notify affected individuals and the PCPD in line with the
            PDPO&apos;s breach notification requirements.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            11. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to
            exercise any of your rights, please contact us at:
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
          <p className="mt-3">
            You also have the right to lodge a complaint with the Hong Kong
            Office of the Privacy Commissioner for Personal Data (PCPD), or,
            if the GDPR applies to you, with your local data protection
            supervisory authority.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-forest">
            12. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last
            updated&quot; date.
          </p>
        </section>
      </div>
    </div>
  );
}

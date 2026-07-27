import { NextResponse } from "next/server";
import { Resend } from "resend";

// This route sends contact form submissions to info@trivaraservices.com
// using Resend. It requires a RESEND_API_KEY environment variable to be
// set (see README.md for setup steps).

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. See README.md for setup instructions."
    );
    return NextResponse.json(
      { error: "Email sending is not configured yet." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, company, email, service, message } = body as {
      name?: string;
      company?: string;
      email?: string;
      service?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // trivaraservices.com is verified in Resend — sending from the real domain.
      from: "Trivara Website <no-reply@trivaraservices.com>",
      to: ["info@trivaraservices.com"],
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Service of interest: ${service || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

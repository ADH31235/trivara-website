import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Trivara Consulting Services | Strategic & Operational Advisory",
  description:
    "Trivara Consulting Services provides B2B strategic consulting, regulatory implementation, and operational advisory to growing businesses across Europe, the Middle East, and Asia.",
  metadataBase: new URL("https://trivaraservices.com"),
  openGraph: {
    title: "Trivara Consulting Services",
    description:
      "Strategic consulting, regulatory implementation, and operational advisory for growing businesses across Europe, the Middle East, and Asia.",
    url: "https://trivaraservices.com",
    siteName: "Trivara Consulting Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLdSchema from "@/components/JsonLdSchema";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BusinessHub - Start, Register & Grow Your Business in India",
  description: "India's most trusted platform for company registration, GST, MSME, trademark, and all business compliance services. 100% online process with expert advisor support. 5000+ businesses registered.",
  keywords: "company registration India, GST registration, MSME registration, trademark registration, business compliance, private limited company, LLP registration, OPC, FSSAI license, ISO certification",
  authors: [{ name: "BusinessHub" }],
  metadataBase: new URL("https://businesshub.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BusinessHub - Start, Register & Grow Your Business in India",
    description: "India's most trusted platform for business registration and compliance. 5000+ happy clients. 4.9/5 rating. 100% online process.",
    type: "website",
    locale: "en_IN",
    siteName: "BusinessHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BusinessHub - Business Registration & Compliance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BusinessHub - Start, Register & Grow Your Business",
    description: "India's most trusted platform for business registration and compliance services.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#1e40af",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLdSchema />
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "InvoiceScan — AI Invoice Scanning for the Trades",
    template: "%s | InvoiceScan",
  },
  description:
    "Stop typing invoices. Start scanning them. AI-powered invoice extraction, trades-focused job costing, and QuickBooks sync.",
  metadataBase: new URL("https://invoicescan.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://invoicescan.com",
    siteName: "InvoiceScan",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-gray-950 font-sans antialiased`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

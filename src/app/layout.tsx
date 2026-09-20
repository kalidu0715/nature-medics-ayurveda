import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nature Medics Ayurveda | Ayurvedic Medical Center & Sanctuary",
  description: "Experience timeless Ayurvedic healing, rejuvenation, Panchakarma detoxification, and authentic herbal treatments at Nature Medics Ayurveda Medical Center.",
  keywords: ["Ayurveda", "Panchakarma", "Ayurvedic Treatment", "Sri Lanka Ayurveda", "Shirodhara", "Herbal Medicine", "Nature Medics Ayurveda"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#59565d]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

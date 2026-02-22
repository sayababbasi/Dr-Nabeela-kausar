import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Nabeela Kausar | Associate Professor of Artificial Intelligence",
    template: "%s | Dr. Nabeela Kausar",
  },
  description:
    "Official academic website of Dr. Nabeela Kausar, Associate Professor of Artificial Intelligence at Iqra University Islamabad. Researcher in Deep Learning, Explainable AI, Computer Vision, and Cancer Diagnosis.",
  keywords: [
    "Dr. Nabeela Kausar",
    "Artificial Intelligence",
    "Deep Learning",
    "Explainable AI",
    "Computer Vision",
    "Cancer Diagnosis",
    "Iqra University Islamabad",
    "Medical Image Processing",
  ],
  authors: [{ name: "Dr. Nabeela Kausar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dr. Nabeela Kausar – Academic Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

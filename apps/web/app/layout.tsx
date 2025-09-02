import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Landlord PDF Pro - Professional Property Inspection Reports",
    template: "%s | Landlord PDF Pro"
  },
  description: "Create professional move-in/out inspection reports with photos, signatures, and PDF exports. Trusted by thousands of landlords and property managers.",
  keywords: "landlord, property inspection, move-in report, move-out report, PDF, rental property, property management",
  authors: [{ name: "Landlord PDF Pro" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Landlord PDF Pro - Professional Property Inspection Reports",
    description: "Create professional move-in/out inspection reports with photos, signatures, and PDF exports.",
    type: "website",
    siteName: "Landlord PDF Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landlord PDF Pro - Professional Property Inspection Reports",
    description: "Create professional move-in/out inspection reports with photos, signatures, and PDF exports.",
  },
  other: {
    'google-adsense-account': 'ca-pub-3590755249240804',
  },
  verification: {
    google: 'ca-pub-3590755249240804',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-3590755249240804" />
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3590755249240804"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

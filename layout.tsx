import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nice Home Care Services | Cuidado en el Hogar con calidad y calidez para adultos mayores",
  description: "Servicios profesionales de cuidado en el hogar en Santa Clara, San Jose, Cupertino, Milpitas y Sunnyvale. 24/7, atención personalizada para adultos mayores. Licencia pendiente.",
  keywords: ["cuidado en el hogar", "home care", "Santa Clara", "San Jose", "Cupertino", "cuidados para adultos mayores", "California"],
  openGraph: {
    title: "Nice Home Care Services",
    description: "Cuidado profesional confiable y compasivo en el hogar.",
    images: [{ url: "/og-image.jpg" }],
  },
};

import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-GT4PSJZR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}

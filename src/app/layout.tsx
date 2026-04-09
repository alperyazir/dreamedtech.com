import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DreamedTech - Geleceğin Eğitim Platformu",
  description:
    "Etkileşimli dijital kitaplar, yapay zeka destekli öğrenme ve multimedya içeriklerle yeni nesil eğitim deneyimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/dreamedtech.svg" type="image/svg+xml" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BJM5MHB8V0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJM5MHB8V0');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

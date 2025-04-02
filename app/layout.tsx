import { Merriweather, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <Head>
        <title>Mi Sitio Web</title>
        <meta name="description" content="Descripción de mi sitio web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${merriweather.variable} ${cormorantGaramond.variable}`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PFP9QB9880"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PFP9QB9880');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}

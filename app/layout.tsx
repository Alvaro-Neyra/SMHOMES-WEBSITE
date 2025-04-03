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
        <title>SM HOME&apos;S Official Website</title>
        <meta name="description" content="En SM HOME&apos;S, somos una inmobiliaria familiar comprometida en ayudar a nuestros clientes a vender su propiedad de forma rápida, segura y confiable. Trabajamos con transparencia y honestidad para ofrecer un servicio cercano y personalizado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="inmobiliaria Torrevieja, propiedades en Torrevieja, vender casa Torrevieja, comprar vivienda Alicante, agentes inmobiliarios Torrevieja, inmuebles en Alicante, casas cerca del mar, apartamentos en Torrevieja, propiedades en la costa de Alicante, inmobiliarias cerca de la playa, casas en venta Torrevieja, apartamentos en alquiler Torrevieja, venta de pisos, servicios inmobiliarios Torrevieja, asesoría inmobiliaria, propiedades de lujo Torrevieja, SM HOME&apos;S, viviendas en Torrevieja" />
        
        <meta property="og:title" content="SM HOMES REAL STATE" />
        <meta property="og:description" content="En SM HOME&apos;S, somos una inmobiliaria familiar comprometida en ayudar a nuestros clientes a vender su propiedad de forma rápida, segura y confiable. Trabajamos con transparencia y honestidad para ofrecer un servicio cercano y personalizado." />
        <meta property="og:image" content="/page.png" />
        <meta property="og:url" content="https://www.smhomesrealstate.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="SM HOMES REAL STATE" />
        <meta name="twitter:description" content="En SM HOME&apos;S, somos una inmobiliaria familiar comprometida en ayudar a nuestros clientes a vender su propiedad de forma rápida, segura y confiable." />
        <meta name="twitter:image" content="page.png" />
        <meta name="twitter:url" content="https://www.smhomesrealstate.com" />
        <meta name="twitter:card" content="summary_large_image" />
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

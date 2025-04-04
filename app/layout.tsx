import { Merriweather, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SM HOME'S Official Website",
  description:
    "En SM HOME'S, somos una inmobiliaria familiar comprometida en ayudar a nuestros clientes a vender su propiedad de forma rápida, segura y confiable. Trabajamos con transparencia y honestidad para ofrecer un servicio cercano y personalizado.",
  robots: "index, follow",
  keywords:
    "inmobiliaria Torrevieja, propiedades en Torrevieja, vender casa Torrevieja, comprar vivienda Alicante, agentes inmobiliarios Torrevieja, inmuebles en Alicante, casas cerca del mar, apartamentos en Torrevieja, propiedades en la costa de Alicante, inmobiliarias cerca de la playa, casas en venta Torrevieja, apartamentos en alquiler Torrevieja, venta de pisos, servicios inmobiliarios Torrevieja, asesoría inmobiliaria, propiedades de lujo Torrevieja, SM HOME'S, viviendas en Torrevieja",
  openGraph: {
    title: "SM HOMES REAL STATE",
    description:
      "En SM HOME'S, somos una inmobiliaria familiar comprometida en ayudar a nuestros clientes a vender su propiedad de forma rápida, segura y confiable. Trabajamos con transparencia y honestidad para ofrecer un servicio cercano y personalizado.",
    images: ["/page.png"],
    url: "https://www.smhomesrealstate.com",
    type: "website",
  },
  twitter: {
    title: "SM HOMES REAL STATE",
    description:
      "En SM HOME'S, somos una inmobiliaria familiar comprometida en ayudar a nuestros clientes a vender su propiedad de forma rápida, segura y confiable.",
    images: ["/page.png"],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
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

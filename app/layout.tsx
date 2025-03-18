import { Merriweather, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import NavBar from "./components/organisms/NavBar";
import { headers } from "next/headers";
import Footer from "./components/organisms/Footer";
import FixedElements from "./components/molecules/FixedElements";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const navbarConfig = headersList.get("x-navbar-config");
  const active = navbarConfig ? JSON.parse(navbarConfig).active : false;
  const position = navbarConfig ? JSON.parse(navbarConfig).position : "static";

  return (
    <html lang="es">
      <body className={`${merriweather.variable} ${cormorantGaramond.variable}`}>
        <NavBar active={active} position={position} />
        {children}
        <Footer />
        <FixedElements />
      </body>
    </html>
  );
}
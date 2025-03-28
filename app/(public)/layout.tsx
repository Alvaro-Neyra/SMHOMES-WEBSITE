import { headers } from "next/headers";
import Footer from "../components/organisms/Footer";
import FixedElements from "../components/molecules/FixedElements";
import NavBar from "../components/organisms/NavBar";

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
    <>
      <NavBar active={active} position={position} />
      {children}
      <Footer />
      <FixedElements />
    </>
  );
}
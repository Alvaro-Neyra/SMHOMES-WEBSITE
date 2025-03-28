import Link from "next/link";
import Image from "next/image";
import LinkNav from "../atoms/Linknav";
import { NAV_LINKS } from "@/app/utils/constants";
import { FaBars } from "react-icons/fa";
import { NavbarProps } from "@/app/utils/interfaces";

export default function StaticNavbar({position, active}: Readonly<NavbarProps>) {
    return (
        <nav
            className={`z-30 py-[2vw] px-[4vw] items-center transition-all duration-300 bg-black bg-opacity-50 ${
                position === "fixed"
                    ? "fixed top-0 left-0 w-full"
                    : ""
            } ${active ? "navbar-active" : ""} ${position === "relative" ? "relative" : ""}`}
        >
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                    <Link href={"/"}>
                        <Image
                            src="https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194903/logo_et12m2.png"
                            alt="Logo"
                            width={120}
                            height={50}
                            className="w-[20vw] md:w-[12vw] lg:w-[8vw]"
                        />
                    </Link>
                </div>

                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key}>
                            <LinkNav
                                href={link.href}
                                title={link.label}
                                spanVariant="nav-link"
                            >
                                {link.label}
                            </LinkNav>
                        </li>
                    ))}
                </ul>

                <div className="lg:flexCenter hidden">
                    <LinkNav
                        href={"/contacto"}
                        title="Contáctenos"
                        spanVariant="btn-primary"
                    >
                        Contáctenos
                    </LinkNav>
                </div>

                <div
                    className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                    <FaBars className="fill-primaryColor w-[6vw] h-[6vw] md:w-[5vw] md:h-[5vw]" />
                </div>
            </div>
        </nav>
    );
}
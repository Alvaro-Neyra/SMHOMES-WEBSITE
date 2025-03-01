"use client";
import Link from "next/link";
import Image from "next/image";
import LinkNav from "../atoms/Linknav";
import { NAV_LINKS } from "@/app/utils/constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavbarProps } from "@/app/utils/interfaces";
import useScrollToggle from "@/app/hooks/useScrollToggle";

export default function DynamicNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState<NavbarProps['position']>('static');
    const [active, setActive] = useState(true);
    const navBarRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (pathname === "/") {
            setPosition("fixed");
            setActive(false);
        }
    }, [pathname]);

    const isScrollToggleEnabled = ["/"].includes(pathname);

    useScrollToggle(navBarRef, active, "navbar-active", isScrollToggleEnabled);

    return (
        <nav
            className={`z-30 py-[2vw] px-[4vw] items-center transition-all duration-300 bg-black bg-opacity-50 ${
                position === "fixed"
                    ? "fixed top-0 left-0 w-full"
                    : ""
            } ${active ? "navbar-active" : ""} ${position === "relative" ? "relative" : ""}`}
            ref={navBarRef}
        >
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                    <Link href={"/"}>
                        <Image
                            src="/logo.png"
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
                                active={pathname === link.href}
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
                        active={pathname === "/contacto"}
                    >
                        Contáctenos
                    </LinkNav>
                </div>

                <div
                    className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleMenu}
                >
                    <FaBars className="fill-primaryColor w-[6vw] h-[6vw] md:w-[5vw] md:h-[5vw]" />
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-30 cursor-pointer"
                        onClick={closeMenu}
                    ></motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ delay: 0.1, duration: 0.1 / 2 }}
                        className="fixed inset-y-0 right-0 w-1/3 bg-blackSoft flex flex-col items-start justify-start gap-8 z-40 px-[5vw] py-[15vw] transition-transform duration-300 ease-in-out lg:hidden"
                    >
                        {NAV_LINKS.map((link, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.1 / 2 * index, duration: 0.1 }}
                                className="nav-link-responsive"
                                key={link.key}
                            >
                                <LinkNav
                                    href={link.href}
                                    title={link.label}
                                    spanVariant="nav-link"
                                    full={true}
                                    active={pathname === link.href}
                                    onClick={toggleMenu}
                                >
                                    {link.label}
                                </LinkNav>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 / 2 * NAV_LINKS.length, duration: 0.1 }}
                            className="nav-link-responsive"
                            key="contact"
                        >
                            <LinkNav
                                href={"/contacto"}
                                title="Contáctenos"
                                spanVariant="nav-link"
                                full={true}
                                active={pathname === "/contacto"}
                                onClick={toggleMenu}
                            >
                                Contáctenos
                            </LinkNav>
                        </motion.div>
                        <div
                            className="lg:hidden absolute right-4 top-[10vw] md:top-[6vw] transform -translate-y-1/2 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            <FaTimes className="fill-primaryColor w-[6vw] h-[6vw] md:w-[5vw] md:h-[5vw]" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
"use client";
import { NAV_LINKS } from "@/app/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className="bg-blackSoftColor text-white py-8 md:py-10 2xl:py-16">
            <div className="px-4 md:px-6 lg:px-8 2xl:px-20 py-4 md:py-6 2xl:py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 2xl:gap-16">
                    <div className="text-center md:text-left flex flex-col gap-3">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={50}
                            className="mx-auto md:mx-0 mb-4 w-36 sm:w-40 md:w-44 lg:w-48 2xl:w-64"
                        />
                        <h6 className="font-bold text-xl sm:text-xl md:text-xl lg:text-2xl 2xl:text-4xl mb-2">
                            Síguenos
                        </h6>
                        <div className="flex justify-center md:justify-start gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 mb-4">
                            <Link href="https://www.youtube.com/" target="_blank">
                                <Image
                                    src="/youtube.svg"
                                    alt="YouTube"
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-all duration-300 hover:scale-125 hover:brightness-125"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                            <Link href="https://www.facebook.com/" target="_blank">
                                <Image
                                    src="/facebook.svg"
                                    alt="Facebook"
                                    width={50}
                                    height={50}
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-all duration-300 hover:scale-125 hover:brightness-125"
                                />
                            </Link>
                            <Link href="https://www.instagram.com/" target="_blank">
                                <Image
                                    src="/instagram.svg"
                                    alt="Instagram"
                                    width={50}
                                    height={50}
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-all duration-300 hover:scale-125 hover:brightness-125"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/" target="_blank">
                                <Image
                                    src="/linkedin.svg"
                                    alt="LinkedIn"
                                    width={50}
                                    height={50}
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-all duration-300 hover:scale-125 hover:brightness-125"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="text-center md:text-left flex flex-col gap-3">
                        <h5 className="font-bold text-xl sm:text-xl md:text-xl lg:text-2xl 2xl:text-4xl mb-2">
                            Menú
                        </h5>
                        <ul className="space-y-2 sm:space-y-3 lg:space-y-4 2xl:space-y-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href={link.href}
                                        className={`hover:text-primaryColor transition-colors ${link.href === pathname ? "font-bold text-primaryColor" : ""
                                            } text-sm sm:text-base md:text-base lg:text-lg 2xl:text-2xl`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left flex flex-col gap-3">
                        <h5 className="font-bold text-xl sm:text-xl md:text-xl lg:text-2xl 2xl:text-4xl mb-2">
                            Contacto
                        </h5>
                        <div className="space-y-3 sm:space-y-4 lg:space-y-5 2xl:space-y-8">
                            <div className="flex flex-col gap-1">
                                <h6 className="font-semibold text-sm sm:text-base md:text-base lg:text-lg 2xl:text-2xl">
                                    Móvil y WhatsApp
                                </h6>
                                <Link
                                    href="tel:+34691344647"
                                    className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300 text-sm sm:text-base md:text-base lg:text-lg 2xl:text-2xl"
                                >
                                    +34 691 344 647
                                </Link>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h6 className="font-semibold text-sm sm:text-base md:text-base lg:text-lg 2xl:text-2xl">
                                    Email
                                </h6>
                                <Link
                                    href="mailto:elenamasko@smhomesrealstate.com"
                                    className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300 text-sm sm:text-base md:text-base lg:text-lg 2xl:text-2xl"
                                >
                                    elenamasko@smhomesrealstate.com
                                </Link>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h6 className="font-semibold text-sm sm:text-base md:text-base lg:text-lg 2xl:text-2xl">
                                    Dirección
                                </h6>
                                <p className="text-sm sm:text-base md:text-base lg:text-lg 2xl:text-2xl">
                                    <FaLocationDot className="inline-block mr-2 text-primaryColor" />
                                    C. Caballero de Rodas, 120, 03182 Torrevieja, Alicante, España
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:mt-8 lg:mt-10 2xl:mt-12 text-center text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl">
                    © {new Date().getFullYear()} Todos los derechos reservados | Diseñado por{" "}
                    <Link
                        href="https://github.com/Alvaro-Neyra"
                        className="hover:text-primaryColor transition-colors"
                        target="_blank"
                    >
                        Alvaro Neyra
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
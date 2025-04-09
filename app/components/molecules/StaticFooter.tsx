import { NAV_LINKS } from "@/app/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const StaticFooter = () => {
    return (
        <footer className="bg-blackSoftColor text-white py-8 md:py-10">
            <div className="px-[4vw] py-[2vw]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="text-center md:text-left xl:flex xl:flex-col xl:gap-[2vw]">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={50}
                            className="mx-auto md:mx-0 mb-4 w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[12vw]"
                        />
                        {/* <h6 className="font-bold text-[6vw] sm:text-[6vw] md:text-lg xl:text-[2vw] mb-2">Síguenos</h6>
                        <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-4">
                            <Link href="https://www.youtube.com/" target="_blank">
                                <Image
                                    src="/youtube.svg"
                                    alt="YouTube"
                                    width={50}
                                    height={50}
                                    className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw] transition-all duration-300 hover:scale-125 hover:brightness-125"
                                />
                            </Link>
                            <Link href="https://www.facebook.com/" target="_blank">
                                <Image
                                    src="/facebook.svg"
                                    alt="Facebook"
                                    width={50}
                                    height={50}
                                    className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw] transition-all duration-300 hover:scale-125 hover:brightness-125"
                                />
                            </Link>
                            <Link href="https://www.instagram.com/" target="_blank">
                                <Image
                                    src="/instagram.svg"
                                    alt="Instagram"
                                    width={50}
                                    height={50}
                                    className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw] transition-all duration-300 hover:scale-125 hover:brightness-125"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/" target="_blank">
                                <Image
                                    src="/linkedin.svg"
                                    alt="LinkedIn"
                                    width={50}
                                    height={50}
                                    className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw] transition-all duration-300 hover:scale-125 hover:brightness-125"
                                />
                            </Link>
                        </div> */}
                    </div>

                    <div className="text-center md:text-left xl:flex xl:flex-col xl:gap-[2vw]">
                        <h5 className="font-bold text-[6vw] sm:text-[6vw] md:text-lg mb-2 xl:text-[2vw]">Menú</h5>
                        <ul className="space-y-2 sm:space-y-3 xl:space-y-[1vw]">
                            {NAV_LINKS.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href={link.href}
                                        className={`hover:text-primaryColor transition-colors text-[4vw] sm:text-[3vw] md:text-base xl:text-[1.5vw]`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left xl:flex xl:flex-col xl:gap-[2vw]">
                        <h5 className="font-bold text-[6vw] sm:text-[6vw] md:text-lg mb-2 xl:text-[2vw]">Contacto</h5>
                        <div className="space-y-2 sm:space-y-3 xl:flex xl:flex-col xl:gap-[1.5vw]">
                            <div className="xl:flex xl:flex-col xl:gap-[1vw]">
                                <h6 className="font-semibold text-[4vw] sm:text-[4vw] md:text-base xl:text-[1.5vw]">Móvil y WhatsApp</h6>
                                <Link
                                    href="tel:+34691344647"
                                    className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300 text-[4vw] sm:text-[3vw] md:text-base xl:text-[1.2vw]"
                                >
                                    +34 691 344 647
                                </Link>
                            </div>
                            <div className="xl:flex xl:flex-col xl:gap-[1vw]">
                                <h6 className="font-semibold text-[4vw] sm:text-[4vw] md:text-base xl:text-[1.5vw]">Email</h6>
                                <Link
                                    href="mailto:elenamasko@smhomesrealstate.com"
                                    className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300 text-[4vw] sm:text-[3vw] md:text-base xl:text-[1.2vw]"
                                >
                                    elenamasko@smhomesrealstate.com
                                </Link>
                            </div>
                            <div className="xl:flex xl:flex-col xl:gap-[1vw]">
                                <h6 className="font-semibold text-[4vw] sm:text-[4vw] md:text-base xl:text-[1.5vw]">Dirección</h6>
                                <p className="text-[4vw] sm:text-[3vw] md:text-base xl:text-[1.2vw]">
                                    <FaLocationDot className="inline-block mr-2 text-primaryColor" />
                                    C. Caballero de Rodas, 120, Mod. 4 - 03182 Torrevieja, Alicante, España
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 xl:mt-[5vw] md:mt-8 text-center text-[4vw] sm:text-[3vw] md:text-base xl:text-[2vw]">
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

export default StaticFooter;
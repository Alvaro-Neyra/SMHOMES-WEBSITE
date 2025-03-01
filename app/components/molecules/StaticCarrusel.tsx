import { SlidesProps } from "@/app/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function StaticCarrusel({ slides }: { readonly slides: SlidesProps[] }) {
    return (
        <section className="flex h-screen w-screen relative overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.titleSmall}
                        className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${index === 0 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={slide.imageUrl}
                            alt={slide.titleSmall}
                            className="w-full h-full object-cover"
                            width={1600}
                            height={900}
                        />
                        <article className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-start p-10 text-left xl:gap-[2vw]">
                            <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl xl:text-[6vw] ml-4 sm:ml-10">
                                {slide.titleLarge}
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-[2.5vw] xl:leading-[2.5vw] ml-4 sm:ml-10 mt-2">
                                {slide.subtitle}
                            </p>
                        </article>
                        <section className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-10 xl:bottom-[5vw]">
                            <Link
                                href={slide.buttonLink}
                                className="bg-primaryBackground text-mainColor border-transparent xl:text-[1.5vw] xl:px-[2vw] xl:py-[1vw] border-2 px-4 py-2 rounded hover:bg-mainColor hover:bg-blackSoft30 hover:border-primaryBackground transition-all duration-300"
                            >
                                {slide.buttonText}
                            </Link>
                            <Link
                                href="/contacto"
                                className="border-primaryBackground border-2 text-white px-4 py-2 xl:text-[1.5vw] xl:px-[2vw] xl:py-[1vw] rounded hover:bg-blackSoft30 transition-all duration-300"
                            >
                                Contáctenos
                            </Link>
                        </section>
                    </div>
                ))}

                <div
                    className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blackSoftColor to-transparent pointer-events-none"
                ></div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`w-2 h-2 xl:w-[1vw] xl:h-[1vw] rounded-full cursor-pointer transition-transform duration-300 ${index === 0 ? "bg-primaryBackground" : "bg-gray-300"
                                } hover:scale-125`}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}
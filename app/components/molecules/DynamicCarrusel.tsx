"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SlidesProps } from "@/app/utils/interfaces";

export default function DynamicCarrusel({ slides }: { readonly slides: SlidesProps[] }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut: NodeJS.Timeout;

    useEffect(() => {
        if (autoPlay) {
            timeOut = setTimeout(() => {
                slideRight();
            }, 2500);
        }
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        };
    }, [current, autoPlay]);

    const slideRight = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <section
            className="flex h-screen w-screen relative overflow-hidden shadow-lg"
            onMouseEnter={() => {
                setAutoPlay(false);
                if (timeOut) clearTimeout(timeOut);
            }}
            onMouseLeave={() => setAutoPlay(true)}
        >
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        className="absolute w-full h-full"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={slides[current].imageUrl}
                            alt={slides[current].titleSmall}
                            className="w-full h-full object-cover"
                            width={1600}
                            height={900}
                        />
                        <article className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-start p-10 text-left xl:gap-[2vw]">
                            <motion.h2
                                className="text-white text-4xl sm:text-5xl lg:text-7xl xl:text-[6vw] ml-4 sm:ml-10"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {slides[current].titleLarge}
                            </motion.h2>
                            <motion.p
                                className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-[2.5vw] xl:leading-[2.5vw] ml-4 sm:ml-10 mt-2"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {slides[current].subtitle}
                            </motion.p>
                        </article>
                        <section className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-10 xl:bottom-[5vw]">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Link
                                    href={slides[current].buttonLink}
                                    className="bg-primaryBackground text-mainColor border-transparent xl:text-[1.5vw] xl:px-[2vw] xl:py-[1vw] border-2 px-4 py-2 rounded hover:bg-mainColor hover:bg-blackSoft30 hover:border-primaryBackground transition-all duration-300"
                                >
                                    {slides[current].buttonText}
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Link
                                    href="/contacto"
                                    className="border-primaryBackground border-2 text-white px-4 py-2 xl:text-[1.5vw] xl:px-[2vw] xl:py-[1vw] rounded hover:bg-blackSoft30 transition-all duration-300"
                                >
                                    Contáctenos
                                </Link>
                            </motion.div>
                        </section>
                    </motion.div>
                </AnimatePresence>

                <div
                    className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blackSoftColor to-transparent pointer-events-none"
                ></div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`w-2 h-2 xl:w-[1vw] xl:h-[1vw] rounded-full cursor-pointer transition-transform duration-300 ${index === current ? "bg-primaryBackground" : "bg-gray-300"
                                } hover:scale-125`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}
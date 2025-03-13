"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSectionProps } from "@/app/utils/interfaces";
import { useRef } from "react";
import Image from "next/image";

const DynamicHeroSection = ({
    title,
    subtitle,
    imageSrc,
    altText,
    children,
    imagePosition = "right",
}: HeroSectionProps) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    }); const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const textOrder = imagePosition === "left" ? "order-1 lg:order-2" : "order-1 lg:order-1";
    const imageOrder = imagePosition === "left" ? "order-2 lg:order-1" : "order-2 lg:order-2";

    return (
        <div ref={containerRef} className="px-5 py-10 lg:p-20 bg-blackSoft30 w-full relative overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw] lg:gap-[4vw] items-center">
                <motion.div
                    className={`text-center p-[5vw] lg:p-0 lg:text-left ${textOrder}`}
                    initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {title && (
                        <h1 className="text-[8vw] sm:text-5xl lg:text-6xl xl:text-[3vw] font-bold text-primaryColor mb-4">
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <h2 className="text-[5vw] sm:text-3xl xl:text-[2vw] xl:leading-[2vw] font-semibold text-gray-300 mb-6">
                            {subtitle}
                        </h2>
                    )}
                    <div>
                        {children}
                    </div>
                </motion.div>

                <motion.div
                    className={`relative ${imageOrder}`}
                    style={{ scale: imageScale }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={imageSrc}
                        alt={altText}
                        className="w-full h-auto rounded-3xl shadow-lg"
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blackSoftColor via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default DynamicHeroSection;
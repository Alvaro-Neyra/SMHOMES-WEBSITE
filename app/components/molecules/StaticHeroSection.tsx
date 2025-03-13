import { HeroSectionProps } from "@/app/utils/interfaces";
import Image from "next/image";

const StaticHeroSection = ({
    title,
    subtitle,
    imageSrc,
    altText,
    children,
    imagePosition = "right",
}: HeroSectionProps) => {
    const textOrder = imagePosition === "left" ? "order-1 lg:order-2" : "order-1 lg:order-1";
    const imageOrder = imagePosition === "left" ? "order-2 lg:order-1" : "order-2 lg:order-2";

    return (
        <div className="px-5 py-10 lg:px-[4vw] bg-blackSoft30 w-full relative overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw] lg:gap-[4vw] items-center">
                <div
                    className={`text-center p-[5vw] lg:p-0 lg:text-left ${textOrder}`}
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
                </div>

                <div
                    className={`relative ${imageOrder}`}
                >
                    <Image
                        src={imageSrc}
                        alt={altText}
                        className="w-full h-auto rounded-3xl shadow-lg"
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blackSoftColor via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default StaticHeroSection;
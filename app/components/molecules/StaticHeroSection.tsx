import { HeroSectionProps } from "@/app/utils/interfaces";

const DynamicHeroSection = ({
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
        <div className="px-5 py-10 lg:p-20 bg-blackSoft30 w-full relative overflow-hidden">

            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-blackSoft30 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blackSoft30 via-transparent to-transparent pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw] lg:gap-[4vw] items-center">
                <div
                    className={`text-center p-[5vw] lg:p-0 lg:text-left ${textOrder}`}
                >
                    <h1 className="text-[8vw] sm:text-5xl lg:text-6xl xl:text-[3vw] font-bold text-primaryColor mb-4">
                        {title}
                    </h1>
                    <h2 className="text-[5vw] sm:text-3xl xl:text-[2vw] xl:leading-[2vw] font-semibold text-gray-300 mb-6">
                        {subtitle}
                    </h2>
                    <div>
                        {children}
                    </div>
                </div>

                <div
                    className={`relative ${imageOrder}`}
                >
                    <img
                        src={imageSrc}
                        alt={altText}
                        className="w-full h-auto rounded-3xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blackSoftColor via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default DynamicHeroSection;
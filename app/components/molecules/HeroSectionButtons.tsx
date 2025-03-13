import { HeroSectionButtonsProps } from "@/app/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC<HeroSectionButtonsProps> = ({
    title,
    subtitle,
    description,
    imgSrc,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonLink,
    secondaryButtonLink,
    stats,
    children,
}) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw] relative p-[5vw] lg:p-20 bg-blackSoft30">
                <Image src={imgSrc} alt="Torrevieja" layout="fill" objectFit="cover" className="absolute inset-0 -z-10" />
                <div className="flex flex-col justify-center xl:gap-[2vw]">
                    {subtitle && (
                        <h2 className="text-[5vw] sm:text-3xl xl:text-[2vw] xl:leading-[1vw] font-semibold text-gray-300 mb-6">
                            {subtitle}
                        </h2>
                    )}
                    <h1 className="text-[8vw] sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-primaryColor mb-4">{title}</h1>
                    {description && (
                        <p className="text-[5vw] sm:text-2xl lg:text-3xl xl:text-[1.5vw] font-bold text-gray-60 mb-4">{description}</p>
                    )}
                    <div className="flex gap-[2vw]">
                        {primaryButtonText && primaryButtonLink && (
                            <Link
                                href={primaryButtonLink}
                                className="bg-primaryBackground text-mainColor border-transparent flex justify-center text-center items-center xl:text-[1.5vw] xl:px-[1vw] xl:py-[1vw] landscape:text-[1.5vw] landscape:py-[1vw] landscape:px-[1.5vw] border-2 px-[2vw] py-[.5vw] rounded-[1vw] hover:bg-mainColor hover:bg-blackSoft30 hover:border-primaryBackground transition-all duration-300"
                            >
                                {primaryButtonText}
                            </Link>
                        )}
                        {secondaryButtonText && secondaryButtonLink && (
                            <Link
                                href={secondaryButtonLink}
                                className="border-primaryBackground flex justify-center text-center items-center border-2 text-white px-4 py-2 xl:text-[1.5vw] xl:px-[2vw] xl:py-[2vw] landscape:text-[1.5vw] landscape:py-[1vw] landscape:px-[1.5vw] rounded-[1vw] hover:bg-blackSoft30 transition-all duration-300"
                            >
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>

                    <div className="flex justify-between mt-[4vw] lg:mt-[2vw]">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <img src={stat.icon} alt={`${stat.label} icon`} className="w-[8vw] h-[8vw] sm:w-[4vw] sm:h-[4vw] lg:w-6 lg:h-6 xl:w-[2.5vw] xl:h-[2.5vw]" />
                                <div>
                                    <span className="font-bold text-[4vw] sm:text-[3vw] lg:text-[2vw]">{stat.value}</span>
                                    <p className="text-[3vw] lg:text-[1.2vw] font-bold text-gray-200">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blackSoft rounded-lg xl:rounded-[1vw] shadow-lg p-6">{children}</div>
            </div>
        </div>
    );
};

export default HeroSection;
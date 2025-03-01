import { Suspense } from "react";
import StaticHeroSection from "./StaticHeroSection";
import DynamicHeroSection from "./DynamicHeroSection";
import { HeroSectionProps } from "@/app/utils/interfaces";

const HeroSection = ({
    title,
    subtitle,
    imageSrc,
    altText,
    children,
    imagePosition = "right",
}: HeroSectionProps) => {
    return (
        <Suspense fallback={<StaticHeroSection title={title} subtitle={subtitle} imageSrc={imageSrc} altText={altText} imagePosition={imagePosition}/>}>
            <DynamicHeroSection title={title} subtitle={subtitle} imageSrc={imageSrc} altText={altText} imagePosition={imagePosition}>
                {children}
            </DynamicHeroSection>
        </Suspense>
    );
};

export default HeroSection;
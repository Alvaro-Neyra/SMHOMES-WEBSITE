import { FaArrowRight } from "react-icons/fa";
import Button from "../atoms/Button";
import { VideoSectionProps } from "@/app/utils/interfaces";
import Image from "next/image";


export default function VideoSection({
    videoSrc,
    fallbackImage,
    title,
    subtitle,
    buttonText,
    buttonLink,
}: Readonly<VideoSectionProps>) {
    return (
        <section className="relative h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover grayscale-[30%] sepia-[50%] contrast-[120%] brightness-[90%] scale-[105%]"
            >
                <source src={videoSrc} type="video/mp4" />
                <Image src={fallbackImage} alt="Fallback" className="w-full h-full object-cover" width={1920} height={1080}/>
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4 gap-6 xl:gap-[4vw]">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[6vw] font-bold mb-4 drop-shadow-md text-primaryColor">
                    {title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-[3vw] drop-shadow-sm xl:leading-[4vw]">
                    {subtitle}
                </p>
                {buttonText && buttonLink && (
                    <Button
                        type="link"
                        title={buttonText}
                        icon={<FaArrowRight />}
                        className="bg-primaryColor text-white transition-all duration-300 p-5 group"
                        full={false}
                        blobColor="var(--primary-background-color)"
                        animationDirection="right"
                        href={buttonLink}
                    />
                )}
            </div>
        </section>
    );
}
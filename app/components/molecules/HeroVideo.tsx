import { HeroVideoProps } from "@/app/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function HeroVideo({ src, fallbackImage, heading, subHeading, linkText, linkHref }: Readonly<HeroVideoProps>) {
    return (
        <div className="relative w-full h-screen overflow-hidden p-[5vw]">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={src} type="video/mp4" />
                    <Image src={fallbackImage} alt="Fallback" className="w-full h-full object-cover" width={1920} height={1080}/>
                </video>
            </div>

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="relative z-20 flex items-center justify-start h-full text-white text-center px-4 py-[10vw]">
                <div className="text-left flex flex-col items-start justify-center gap-[2vw]">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5vw] font-bold mb-4">
                        {heading}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl xl:text-[3vw] mb-8">
                        {subHeading}
                    </p>
                    <Link
                        href={linkHref}
                        className="bg-primaryBackground border-[.2vw] border-primaryBackground text-white xl:text-[2vw] px-6 py-3 rounded-lg xl:rounded-[1vw] font-semibold hover:bg-blackSoftColor transition-colors duration-300"
                    >
                        {linkText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
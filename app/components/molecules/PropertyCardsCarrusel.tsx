"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import PropertyCard from "@/app/components/molecules/PropertyCard";
import { Property } from "@/app/utils/interfaces";
import Link from "next/link";

interface PropertyCarouselProps {
    properties: Property[];
}

const PropertyCardsCarousel: React.FC<PropertyCarouselProps> = ({ properties }) => {
    return (
        <div className="p-12 bg-blackSoft30">
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-8">
                Propiedades relacionadas
            </h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {properties.map((property) => (
                    <SwiperSlide key={`${property.id}-${property.address}`}>
                        <PropertyCard property={property} scale={false}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center mt-8">
                <Link href="/propiedades" className="bg-primaryBackground text-white text-lg py-2 px-4 rounded hover:bg-secondaryBackground transition duration-300">
                    Ver todas las propiedades
                </Link>
            </div>
        </div>
    );
};

export default PropertyCardsCarousel;
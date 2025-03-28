"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface ImageViewerProps {
    images: { id: string; url: string; alt: string }[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
    const [expanded, setExpanded] = useState(false); // Estado para expandir la tabla
    const [showCarousel, setShowCarousel] = useState(false); // Estado para mostrar el carrusel
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de la imagen seleccionada

    const initialVisibleImages = 6;

    const visibleImages = expanded ? images : images.slice(0, initialVisibleImages);

    return (
        <div className="bg-blackSoft30 rounded-lg overflow-hidden p-6">
            <h3 className="text-xl font-semibold text-white mb-4 2xl:text-3xl">Imágenes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {visibleImages.map((image, index) => (
                    <div
                        key={image.id ?? `image-${index}`}
                        className="relative w-full aspect-square rounded overflow-hidden cursor-pointer"
                        onClick={() => {
                            setCurrentImageIndex(index);
                            setShowCarousel(true);
                        }}
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>

            {images.length > initialVisibleImages && !expanded && (
                <button
                    className="mt-4 bg-primaryBackground text-white py-2 px-4 rounded hover:bg-secondaryBackground transition duration-300 w-full"
                    onClick={() => setExpanded(true)}
                >
                    Ver más imágenes
                </button>
            )}

            {showCarousel && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={() => setShowCarousel(false)}
                >
                    <div
                        className="relative w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-5 right-10 text-white text-5xl z-50"
                            onClick={() => setShowCarousel(false)}
                        >
                            &times;
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            initialSlide={currentImageIndex}
                            loop={true}
                            className="w-full h-full"
                        >
                            {images.map((image) => (
                                <SwiperSlide key={image.id ?? image.url}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.url}
                                            alt={image.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageViewer;
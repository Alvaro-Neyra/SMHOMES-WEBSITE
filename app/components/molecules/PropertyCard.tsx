"use client";
import { Property } from "@/app/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ArrowLeftIcon from "../atoms/ArrowLeftIcon";
import ArrowRightIcon from "../atoms/ArrowRightIcon";
import HouseIcon from "../atoms/HouseIcon";
import BedIcon from "../atoms/BedIcon";
import SwimmingPoolIcon from "../atoms/SwimmingPoolIcon";
import BathIcon from "../atoms/BathIcon";

const PropertyCard: React.FC<{ property: Property, scale?: boolean }> = ({ property, scale = true }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayedImageIndex, setDisplayedImageIndex] = useState(0);

    useEffect(() => {
        if (currentImageIndex !== displayedImageIndex) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setDisplayedImageIndex(currentImageIndex);
                setIsAnimating(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [currentImageIndex, displayedImageIndex]);

    const nextImage = () => {
        if (!isAnimating) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = () => {
        if (!isAnimating) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className={`bg-blackSoft30 rounded-lg overflow-hidden transition-transform duration-300 ${scale ? "hover:scale-[1.01]" : ""} border border-primaryBackground border-opacity-30`}>
            <div className="relative w-full h-64 md:h-72 lg:h-80 2xl:h-96">
                <Image
                    src={property.images[displayedImageIndex].url}
                    alt={property.images[displayedImageIndex].alt}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                        isAnimating ? "opacity-0" : "opacity-100"
                    }`}
                />

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-blackSoft30 bg-opacity-70 rounded-full p-2 text-white z-10 disabled:opacity-50"
                    aria-label="Previous image"
                    disabled={isAnimating}
                >
                    <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                </button>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blackSoft30 bg-opacity-70 rounded-full p-2 text-white z-10 disabled:opacity-50"
                    aria-label="Next image"
                    disabled={isAnimating}
                >
                    <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                </button>

                <div className="absolute bottom-2 right-2 bg-blackSoft30 bg-opacity-70 px-2 py-1 rounded text-xs md:text-sm lg:text-base 2xl:text-lg text-white z-10">
                    {currentImageIndex + 1}/{property.images.length}
                </div>

                <div className="absolute top-2 left-2 bg-primaryBackground text-white text-xs md:text-sm lg:text-base 2xl:text-lg px-2 py-1 rounded z-10">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-white truncate">
                        {property.address}
                    </h3>
                </div>

                <div className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-primaryBackground mb-3">
                    {property.currency === 'USD' && '$'}
                    {property.currency === 'EUR' && '€'}
                    {property.currency === 'MXN' && '$'}
                    {property.price.toLocaleString()}
                    {property.currency === 'MXN' && ' MXN'}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center space-x-1 text-gray-200">
                        <HouseIcon className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                        <span className="text-sm md:text-base lg:text-lg 2xl:text-xl">
                            {property.constructionArea} m²
                        </span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <BedIcon className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                        <span className="text-sm md:text-base lg:text-lg 2xl:text-xl">
                            {property.bedrooms} hab.
                        </span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <BathIcon className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                        <span className="text-sm md:text-base lg:text-lg 2xl:text-xl">
                            {property.bathrooms} baños
                        </span>
                    </div>

                    {property.hasPool && (
                        <div className="flex items-center space-x-1 text-gray-200">
                            <SwimmingPoolIcon className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                            <span className="text-sm md:text-base lg:text-lg 2xl:text-2xl">Piscina</span>
                        </div>
                    )}
                </div>

                <Link
                    href={`/propiedades/${property.id}`}
                    className="block w-full bg-primaryBackground text-white 2xl:p-4 text-center py-2 rounded hover:bg-secondaryBackground transition duration-300"
                >
                    Ver detalle
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
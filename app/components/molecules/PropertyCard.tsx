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
        if (!isAnimating && property.images && property.images.length > 1) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = () => {
        if (!isAnimating && property.images && property.images.length > 1) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
            );
        }
    };

    const hasImages = property.images && property.images.length > 0;

    return (
        <div className={`bg-blackSoft30 rounded-lg overflow-hidden transition-transform duration-300 ${scale ? "hover:scale-[1.01]" : ""} border border-primaryBackground border-opacity-30`}>
            <div className="relative w-full h-64 md:h-72 lg:h-80">
                {hasImages ? (
                    <>
                        <Image
                            src={property.images[displayedImageIndex].url}
                            alt={property.images[displayedImageIndex].alt}
                            fill
                            className={`object-cover transition-opacity duration-300 ${
                                isAnimating ? "opacity-0" : "opacity-100"
                            }`}
                        />

                        {property.images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        prevImage();
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-blackSoft30 bg-opacity-70 rounded-full p-2 text-white z-10 disabled:opacity-50"
                                    aria-label="Previous image"
                                    disabled={isAnimating}
                                >
                                    <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
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
                                    <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
                                </button>

                                <div className="absolute bottom-2 right-2 bg-blackSoft30 bg-opacity-70 px-2 py-1 rounded text-xs md:text-sm lg:text-basetext-white z-10">
                                    {currentImageIndex + 1}/{property.images.length}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-blackSoft30 to-blackSoft30 p-4">
                        <HouseIcon className="w-16 h-16 md:w-20 md:h-20 mb-2" />
                        <div className="text-white text-center">
                            <p className="font-semibold text-lg md:text-xl">Propiedad exclusiva</p>
                            <p className="text-sm md:text-base opacity-80">Imágenes próximamente</p>
                        </div>
                    </div>
                )}

                <div className="absolute top-2 left-2 bg-primaryBackground text-white text-xs md:text-sm lg:text-base px-2 py-1 rounded z-10">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
            </div>

            <div className="p-4">
                <div className="flex flex-col mb-2">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white truncate">
                        {property.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 truncate">
                        {property.address}
                    </p>
                    <p className="text-sm md:text-base text-gray-300 truncate">
                        {property.city}, {property.state}
                    </p>
                </div>

                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primaryBackground mb-3">
                    {property.currency === 'USD' && '$'}
                    {property.currency === 'EUR' && '€'}
                    {property.currency === 'MXN' && '$'}
                    {property.price.toLocaleString()}
                    {property.currency === 'MXN' && ' MXN'}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center space-x-1 text-gray-200">
                        <HouseIcon className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-sm md:text-base lg:text-lg">
                            {property.constructionArea} m²
                        </span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <BedIcon className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-sm md:text-base lg:text-lg">
                            {property.bedrooms} hab.
                        </span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <BathIcon className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-sm md:text-base lg:text-lg">
                            {property.bathrooms} baños
                        </span>
                    </div>

                    {property.hasPool && (
                        <div className="flex items-center space-x-1 text-gray-200">
                            <SwimmingPoolIcon className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="text-sm md:text-base lg:text-lg">Piscina</span>
                        </div>
                    )}
                </div>

                <Link
                    href={`/propiedades/${property.id}`}
                    className="block w-full bg-primaryBackground text-white text-center py-2 rounded hover:bg-secondaryBackground transition duration-300"
                >
                    Ver detalle
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
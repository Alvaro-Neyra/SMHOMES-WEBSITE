"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PropertyImageCarouselProps } from "@/app/utils/interfaces";

const PropertyImageCarousel: React.FC<PropertyImageCarouselProps> = ({ property }) => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const timeOutRef = useRef<NodeJS.Timeout | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [scrollLeft, setScrollLeft] = useState(0);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (thumbnailsRef.current && !isDragging) {
            const container = thumbnailsRef.current;
            const thumbnail = container.children[current] as HTMLElement;

            if (thumbnail) {
                const containerWidth = container.offsetWidth;
                const thumbnailLeft = thumbnail.offsetLeft;
                const thumbnailWidth = thumbnail.offsetWidth;

                const scrollPosition = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);

                container.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [current, isDragging]);

    const slideRight = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsTransitioning(false), 300);
    }, [property.images.length, isTransitioning]);

    const slideLeft = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
        setTimeout(() => setIsTransitioning(false), 300);
    }, [property.images.length, isTransitioning]);

    useEffect(() => {
        if (autoPlay) {
            timeOutRef.current = setTimeout(() => {
                slideRight();
            }, 5000);
        }
        return () => {
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current);
            }
        };
    }, [current, autoPlay, slideRight]);

    const handleMouseEnter = () => setAutoPlay(false);
    const handleMouseLeave = () => setAutoPlay(true);

    const goToSlide = (index: number) => {
        if (isTransitioning || index === current) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!thumbnailsRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - thumbnailsRef.current.offsetLeft);
        setScrollLeft(thumbnailsRef.current.scrollLeft);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!thumbnailsRef.current) return;
        setIsDragging(true);
        setStartX(e.touches[0].pageX - thumbnailsRef.current.offsetLeft);
        setScrollLeft(thumbnailsRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !thumbnailsRef.current) return;
        e.preventDefault();
        const x = e.pageX - thumbnailsRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        thumbnailsRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !thumbnailsRef.current) return;
        const x = e.touches[0].pageX - thumbnailsRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        thumbnailsRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .hide-scrollbar::-webkit-scrollbar {
                display: none;
            }
            .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div
            className="bg-blackSoft30 rounded-lg overflow-hidden mb-8 shadow-xl mx-auto 
                    w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-10/12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[3/2] overflow-hidden bg-blackSoft30">
                    {property.images.map((image, index) => (
                        <div
                            key={image.id ?? `image-${index}`}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-4 left-4 bg-primaryBackground text-white text-base px-3 py-1 rounded z-10">
                    {property.type ? property.type.charAt(0).toUpperCase() + property.type.slice(1) : "Tipo de propiedad no disponible"}
                </div>

                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blackSoft30 border border-primaryBackground bg-opacity-50 hover:bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                    onClick={slideLeft}
                    disabled={isTransitioning}
                    aria-label="Imagen anterior"
                >
                    <ChevronLeft className="text-primaryBackground w-6 h-6" />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blackSoft30 border border-primaryBackground bg-opacity-50 hover:bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                    onClick={slideRight}
                    disabled={isTransitioning}
                    aria-label="Imagen siguiente"
                >
                    <ChevronRight className="text-primaryBackground w-6 h-6" />
                </button>

                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm z-10">
                    {current + 1} / {property.images.length}
                </div>
            </div>

            <div className="bg-blackSoft30 p-3">
                <div
                    ref={thumbnailsRef}
                    className="flex justify-start space-x-2 overflow-x-auto py-2 cursor-grab hide-scrollbar"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleDragEnd}
                >
                    {property.images.map((image, index) => (
                        <button
                            key={image.id ?? `image-${index}`}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`relative w-16 h-16 rounded-md overflow-hidden transition-all duration-300 flex-shrink-0 ${current === index
                                    ? 'ring-2 ring-primaryBackground scale-105 shadow-lg'
                                    : 'opacity-60 hover:opacity-90'
                                }`}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className={`object-cover transition-transform duration-300 ${isDragging ? '' : 'pointer-events-none'}`}
                                draggable={false}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyImageCarousel;
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
import { AreaChartIcon, BuildingIcon, LandPlotIcon, StoreIcon, Check } from "lucide-react";
import { EnterpriseIcon } from "../atoms/EnterpriseIcon";
import GarageIcon from "../atoms/GarageIcon";

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

    const getTypeIcon = () => {
        switch(property.type) {
            case 'casa':
                return <HouseIcon className="w-5 h-5 text-primaryBackground" />;
            case 'departamento':
                return <BuildingIcon className="w-5 h-5 text-primaryBackground" />;
            case 'terreno':
                return <LandPlotIcon className="w-5 h-5 text-primaryBackground" />;
            case 'local':
                return <StoreIcon className="w-5 h-5 text-primaryBackground" />;
            case 'oficina':
                return <EnterpriseIcon className="w-5 h-5 text-primaryBackground" />;
            case 'garaje':
                return <GarageIcon className="w-5 h-5 text-primaryBackground" />;
            default:
                return <HouseIcon className="w-5 h-5 text-primaryBackground" />;
        }
    };

    const getPropertyTypeText = () => {
        const firstLetter = property.type.charAt(0).toUpperCase();
        const rest = property.type.slice(1);
        return firstLetter + rest;
    };

    const getTransactionTypeText = () => {
        if (property.transactionType?.includes('venta') && property.transactionType?.includes('renta')) {
            return 'Venta y Renta';
        } else if (property.transactionType?.includes('venta')) {
            return 'Venta';
        } else if (property.transactionType?.includes('renta')) {
            return 'Renta';
        }
        return '';
    };

    const formatPrice = () => {
        const mainPrice = property.price || 0;
        if (!mainPrice) return "Consultar precio";
    
        let symbol = "";
        let suffix = "";
    
        switch (property.currency) {
            case "USD":
                symbol = "$";
                break;
            case "EUR":
                symbol = "€";
                break;
            case "MXN":
                symbol = "$";
                suffix = " MXN";
                break;
            default:
                symbol = "";
        }
    
        return (
            <>
                {symbol}
                {mainPrice.toLocaleString()}
                {suffix}
                {property.transactionType?.includes("renta") && " /mes"}
            </>
        );
    };

    // Extract featured details based on property type
    const getPropertyDetails = () => {
        const details = [];
        
        // Common details across property types
        if (property.constructionArea) {
            details.push(
                <div key="constructionArea" className="flex items-center space-x-1 text-gray-200">
                    <HouseIcon className="w-4 h-4 text-primaryBackground" />
                    <span className="text-sm whitespace-nowrap">
                        {property.constructionArea} m²
                    </span>
                </div>
            );
        } else if (property.usableArea) {
            details.push(
                <div key="usableArea" className="flex items-center space-x-1 text-gray-200">
                    <AreaChartIcon className="w-4 h-4 text-primaryBackground" />
                    <span className="text-sm whitespace-nowrap">
                        {property.usableArea} m² útiles
                    </span>
                </div>
            );
        }

        // Property-specific details
        switch(property.type) {
            case 'casa':
            case 'departamento':
                if (property.bedrooms) {
                    details.push(
                        <div key="bedrooms" className="flex items-center space-x-1 text-gray-200">
                            <BedIcon className="w-4 h-4 text-primaryBackground" />
                            <span className="text-sm whitespace-nowrap">
                                {property.bedrooms} hab.
                            </span>
                        </div>
                    );
                }
                
                if (property.bathrooms) {
                    details.push(
                        <div key="bathrooms" className="flex items-center space-x-1 text-gray-200">
                            <BathIcon className="w-4 h-4 text-primaryBackground" />
                            <span className="text-sm whitespace-nowrap">
                                {property.bathrooms} baños
                            </span>
                        </div>
                    );
                }
                
                if (property.hasPool) {
                    details.push(
                        <div key="pool" className="flex items-center space-x-1 text-gray-200">
                            <SwimmingPoolIcon className="w-4 h-4 text-primaryBackground" />
                            <span className="text-sm whitespace-nowrap">Piscina</span>
                        </div>
                    );
                }
                break;
                
            case 'terreno':
                if (property.landArea) {
                    details.push(
                        <div key="landArea" className="flex items-center space-x-1 text-gray-200">
                            <LandPlotIcon className="w-4 h-4 text-primaryBackground" />
                            <span className="text-sm whitespace-nowrap">
                                {property.landArea} m²
                            </span>
                        </div>
                    );
                }
                break;
                
            case 'local':
            case 'oficina':
            case 'garaje':
                if (property.elevator) {
                    details.push(
                        <div key="elevator" className="flex items-center space-x-1 text-gray-200">
                            <Check className="w-4 h-4 text-primaryBackground" />
                            <span className="text-sm whitespace-nowrap">Con elevador</span>
                        </div>
                    );
                }
                break;
        }
        
        // If features are available, display them when other details are missing
        if (property.features && property.features.length > 0) {
            property.features.slice(0, 3).forEach((feature, idx) => {
                details.push(
                    <div key={`feature-${idx}`} className="flex items-center space-x-1 text-gray-200">
                        <Check className="w-4 h-4 text-primaryBackground" />
                        <span className="text-sm whitespace-nowrap">{feature}</span>
                    </div>
                );
            });
        }
        
        // Add one important feature if available
        while (details.length < 4) {
            if (property.transactionType && property.transactionType.length > 0 && !details.some(d => d.key === "transactionType")) {
                details.push(
                    <div key="transactionType" className="flex items-center space-x-1 text-gray-200">
                        <Check className="w-4 h-4 text-primaryBackground" />
                        <span className="text-sm whitespace-nowrap">
                            {getTransactionTypeText()}
                        </span>
                    </div>
                );
            } else if (property.city && !details.some(d => d.key === "location")) {
                details.push(
                    <div key="location" className="flex items-center space-x-1 text-gray-200">
                        <Check className="w-4 h-4 text-primaryBackground" />
                        <span className="text-sm whitespace-nowrap">
                            {property.city}
                        </span>
                    </div>
                );
            } else {
                break; // Avoid infinite loop if we can't add more details
            }
        }
        
        return details.slice(0, 4);
    };

    return (
        <div className={`bg-blackSoft30 rounded-lg overflow-hidden transition-transform duration-300 ${scale ? "hover:scale-[1.01]" : ""} border border-primaryBackground border-opacity-30 flex flex-col h-full`}>
            <div className="relative w-full h-64">
                {hasImages ? (
                    <>
                        <Image
                            src={property.images[displayedImageIndex].url}
                            alt={property.images[displayedImageIndex].alt || `Imagen de ${property.name || 'propiedad'}`}
                            fill
                            className={`object-cover transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
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
                                    <ArrowLeftIcon className="w-5 h-5 text-primaryBackground" />
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
                                    <ArrowRightIcon className="w-5 h-5 text-primaryBackground" />
                                </button>
                                <div className="absolute bottom-2 right-2 bg-blackSoft30 bg-opacity-70 px-2 py-1 rounded text-xs text-white z-10">
                                    {currentImageIndex + 1}/{property.images.length}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-blackSoft30 to-blackSoft30 p-4">
                        {getTypeIcon()}
                        <div className="text-white text-center mt-2">
                            <p className="font-semibold text-lg">Propiedad exclusiva</p>
                            <p className="text-sm opacity-80">Imágenes próximamente</p>
                        </div>
                    </div>
                )}

                <div className="absolute top-2 left-2 bg-primaryBackground text-white text-xs px-2 py-1 rounded z-10">
                    {getPropertyTypeText()}
                </div>

                {!property.selled && property.transactionType && property.transactionType.length > 0 && (
                    <div className="absolute top-2 right-2 bg-secondaryBackground text-white text-xs px-2 py-1 rounded z-10">
                        {getTransactionTypeText()}
                    </div>
                )}

                {property.selled && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-lg px-4 py-2 rounded-full z-10 rotate-12">
                        VENDIDO
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <div className="flex flex-col mb-3 h-20">
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                        {property.name || `${getPropertyTypeText()} en ${property.city || ''}`}
                    </h3>
                    <p className="text-sm text-gray-300 truncate">
                        {property.address || ''}
                    </p>
                    <p className="text-sm text-gray-300 truncate">
                        {property.city && property.state ? `${property.city}, ${property.state}` : (property.city || property.state || '')}
                    </p>
                </div>

                <div className="text-xl font-bold text-primaryBackground mb-3 h-8 flex items-center">
                    {formatPrice()}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 h-16">
                    {getPropertyDetails()}
                </div>

                <div className="mt-auto flex flex-col space-y-2">
                    <div className="py-1 px-2 bg-blackSoft30 bg-opacity-50 text-gray-200 text-sm rounded text-center flex items-center justify-center">
                        {getTypeIcon()}
                        <span className="ml-2">{getPropertyTypeText()}</span>
                    </div>
                    
                    <Link
                        href={`/propiedades/${property.id}`}
                        className="block w-full bg-primaryBackground text-white text-center py-2 rounded hover:bg-secondaryBackground transition duration-300"
                    >
                        Ver detalle
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;

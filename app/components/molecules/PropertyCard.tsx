import { Property } from "@/app/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AreaChartIcon, BuildingIcon, LandPlotIcon, StoreIcon, Check, Lock, KeyRound, CheckCircle, Repeat2 } from "lucide-react";
import ArrowLeftIcon from "../atoms/ArrowLeftIcon";
import ArrowRightIcon from "../atoms/ArrowRightIcon";
import HouseIcon from "../atoms/HouseIcon";
import BedIcon from "../atoms/BedIcon";
import SwimmingPoolIcon from "../atoms/SwimmingPoolIcon";
import BathIcon from "../atoms/BathIcon";
import { EnterpriseIcon } from "../atoms/EnterpriseIcon";
import GarageIcon from "../atoms/GarageIcon";

const PropertyCard: React.FC<{ property: Property; scale?: boolean }> = ({
    property,
    scale = true
}) => {
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
        if (!isAnimating && property.images?.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === property.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (!isAnimating && property.images?.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? property.images.length - 1 : prev - 1
            );
        }
    };

    const getTypeIcon = () => {
        switch (property.type) {
            case "casa":
                return <HouseIcon className="w-4 h-4 text-primaryBackground" />;
            case "apartamento":
                return <BuildingIcon className="w-4 h-4 text-primaryBackground" />;
            case "terreno":
                return <LandPlotIcon className="w-4 h-4 text-primaryBackground" />;
            case "local":
                return <StoreIcon className="w-4 h-4 text-primaryBackground" />;
            case "oficina":
                return <EnterpriseIcon className="w-4 h-4 text-primaryBackground" />;
            case "garaje":
                return <GarageIcon className="w-4 h-4 text-primaryBackground" />;
            default:
                return <HouseIcon className="w-4 h-4 text-primaryBackground" />;
        }
    };

    const getStatusOverlay = () => {
        switch (property.status) {
            case "vendido":
                return (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-lg px-4 py-2 rounded-full z-10 rotate-12">
                        VENDIDO
                    </div>
                );
            case "reservado":
                return (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black text-lg px-4 py-2 rounded-full z-10 rotate-12">
                        RESERVADO
                    </div>
                );
            case "alquilado":
                return (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-lg px-4 py-2 rounded-full z-10 rotate-12">
                        ALQUILADO
                    </div>
                );
            default:
                return null;
        }
    };

    const getStatusIcon = () => {
        switch (property.status) {
            case "reservado":
                return <Lock className="w-4 h-4 mr-1" />;
            case "alquilado":
                return <KeyRound className="w-4 h-4 mr-1" />;
            case "vendido":
                return <CheckCircle className="w-4 h-4 mr-1" />;
            default:
                return <Repeat2 className="w-4 h-4 mr-1" />;
        }
    };

    const getTransactionTypeText = () => {
        if (property.transactionType?.includes("venta") && property.transactionType?.includes("renta")) {
            return "Venta y Renta";
        } else if (property.transactionType?.includes("venta")) {
            return "Venta";
        } else if (property.transactionType?.includes("renta")) {
            return "Renta";
        }
        return "";
    };

    const getPropertyDetails = () => {
        const details = [];

        if (property.constructionArea) {
            details.push(
                <div key="constructionArea" className="flex items-center space-x-1 text-gray-200">
                    <AreaChartIcon className="w-4 h-4 text-primaryBackground" />
                    <span className="text-sm whitespace-nowrap">{property.constructionArea} m²</span>
                </div>
            );
        }

        if (property.bedrooms) {
            details.push(
                <div key="bedrooms" className="flex items-center space-x-1 text-gray-200">
                    <BedIcon className="w-4 h-4 text-primaryBackground" />
                    <span className="text-sm whitespace-nowrap">{property.bedrooms} hab.</span>
                </div>
            );
        }

        if (property.bathrooms) {
            details.push(
                <div key="bathrooms" className="flex items-center space-x-1 text-gray-200">
                    <BathIcon className="w-4 h-4 text-primaryBackground" />
                    <span className="text-sm whitespace-nowrap">{property.bathrooms} baños</span>
                </div>
            );
        }

        if (property.halfBathrooms) {
            details.push(
                <div key="halfBathrooms" className="flex items-center space-x-1 text-gray-200">
                    <BathIcon className="w-4 h-4 text-primaryBackground" />
                    <span className="text-sm whitespace-nowrap">{property.halfBathrooms} medios</span>
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

        if (details.length < 4 && property.features?.length) {
            property.features.slice(0, 4 - details.length).forEach((feature, index) => {
                details.push(
                    <div key={`feature-${index}-${feature.length}`} className="flex items-center space-x-1 text-gray-200">
                        <Check className="w-4 h-4 text-primaryBackground" />
                        <span className="text-sm whitespace-nowrap">{feature}</span>
                    </div>
                );
            });
        }

        return details.slice(0, 4);
    };

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return "";
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div className={`bg-blackSoft30 rounded-lg overflow-hidden transition-transform duration-300 ${scale ? "hover:scale-[1.01]" : ""
            } border border-primaryBackground border-opacity-30 flex flex-col h-full`}>
            <div className="relative w-full h-64">
                {property.images && property.images.length > 0 ? (
                    <>
                        <Image
                            src={property.images[displayedImageIndex].url}
                            alt={property.images[displayedImageIndex].alt || "Imagen"}
                            fill
                            className={`object-cover transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                prevImage();
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
                        >
                            <ArrowLeftIcon className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                nextImage();
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
                        >
                            <ArrowRightIcon className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                            {currentImageIndex + 1}/{property.images.length}
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                        Sin imagen
                    </div>
                )}
                {getStatusOverlay()}
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded flex items-center">
                        {getStatusIcon()} {property.status ? property.status.charAt(0).toUpperCase() + property.status.slice(1) : "Sin estado"}
                    </span>
                    <span className="text-xs text-white bg-blackSoft30 px-2 py-1 rounded flex items-center border border-primaryBackground border-opacity-30">
                        {getTypeIcon()} <span className="ml-1">{getTransactionTypeText()}</span>
                    </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">
                    {truncateText(property.name, 40)}
                </h3>
                <p className="text-sm text-gray-300">{property.address}</p>
                <p className="text-sm text-gray-300 mb-2">
                    {property.city}, {property.state}
                </p>

                <div className="text-xl font-bold text-primaryBackground mb-2">
                    {property.currency === "USD" && "$"}
                    {property.currency === "EUR" && "€"}
                    {property.currency === "MXN" && "$"} {property.price.toLocaleString()}
                    {property.transactionType?.includes("renta") && " / mes"}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                    {getPropertyDetails()}
                </div>

                <div className="text-sm text-gray-300 mb-2 flex items-center space-x-1 justify-center gap-2 rounded-lg bg-blackSoft30 p-2">
                    {getTypeIcon()} {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
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

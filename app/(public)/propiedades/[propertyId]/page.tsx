import { notFound } from "next/navigation";
import {
    Home,
    Bed,
    Bath,
    Droplets,
    MapPin,
    Phone,
    Mail,
    Check,
    Building,
    Ruler,
    Maximize,
    Car,
    Flower2,
    Dumbbell,
    Network,
    Lock,
    Triangle,
    LandPlot,
    Eye,
    Wind,
    Sun,
    Store,
    Warehouse,
    MountainSnow,
    Building2,
    Palmtree,
    TreeDeciduous,
    KanbanSquare,
    ParkingSquare
} from "lucide-react";
import { fetchRandomProperties, getPropertyById } from "@/app/utils/data";
import Breadcrumbs from "@/app/components/atoms/Breadcrumbs";
import PropertyImageCarousel from "@/app/components/molecules/PropertyCarrusel";
import Link from "next/link";
import ImageViewer from "@/app/components/molecules/ImageViewer";
import PropertyInterestForm from "@/app/components/molecules/PropertyInterestForm";
import PropertyCardsCarousel from "@/app/components/molecules/PropertyCardsCarrusel";
import MapWrapper from "@/app/components/atoms/MapWrapper";
import Description from "@/app/components/atoms/Description";
import Property3DTour from "@/app/components/atoms/Property3DTour";
import { FloorPlanSection } from "@/app/components/molecules/FloorPlanSection";
import { Metadata } from "next";
import { FaElevator } from "react-icons/fa6";
import LocationIcon from "@/app/components/atoms/LocationIcon";
import HouseIcon from "@/app/components/atoms/HouseIcon";
import BedIcon from "@/app/components/atoms/BedIcon";
import SwimmingPoolIcon from "@/app/components/atoms/SwimmingPoolIcon";
import BathIcon from "@/app/components/atoms/BathIcon";
import { EnterpriseIcon } from "@/app/components/atoms/EnterpriseIcon";
import GarageIcon from "@/app/components/atoms/GarageIcon";

type Props = {
    params: Promise<{ propertyId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { propertyId } = await params;
    const property = await getPropertyById(propertyId);

    if (!property) {
        return { title: "Propiedad no encontrada" };
    }

    return {
        title: `${property.name || property.address || "Propiedad"} | SM HOME'S`,
        description: `${property.type || "Propiedad"} ${property.bedrooms ? `con ${property.bedrooms} habitaciones` : ""
            } ${property.bathrooms ? `y ${property.bathrooms} baños` : ""}. ${property.description ?? "Sin descripción disponible."
            }`,
        robots: "index, follow",
        keywords: `${property.type || "Propiedad"}, ${property.transactionType || "Venta"}, ${property.city || "Ciudad"}, ${property.state || "Estado"}, propiedades en Torrevieja, SM HOME'S, inmobiliaria, venta de propiedades, casas en Torrevieja, ventas en ${property.city || "Torrevieja"}, inmobiliaria en ${property.city || "Torrevieja"}, propiedades en ${property.city || "Torrevieja"}`,
        authors: [{ name: "SM HOME'S", url: "https://www.smhomesrealstate.com" }],
        openGraph: {
            title: `${property.name || property.address || "Propiedad"} | SM HOME'S`,
            description: `${property.type || "Propiedad"} ${property.bedrooms ? `con ${property.bedrooms} habitaciones` : ""
                } ${property.bathrooms ? `y ${property.bathrooms} baños` : ""}. ${property.description ?? "Sin descripción disponible."
                }`,
            url: `https://www.smhomesrealstate.com/propiedades/${propertyId}`,
            images: [property.images?.[0]?.url || "/propiedades.png"],
            type: "website",
        },
        twitter: {
            title: `${property.name || property.address || "Propiedad"} | SM HOME'S`,
            description: `${property.type || "Propiedad"} ${property.bedrooms ? `con ${property.bedrooms} habitaciones` : ""
                } ${property.bathrooms ? `y ${property.bathrooms} baños` : ""}. ${property.description ?? "Sin descripción disponible."
                }`,
            images: [property.images?.[0]?.url || "/propiedades.png"],
            card: "summary_large_image",
        },
    };
}

export default async function PropertyPage({
    params,
}: {
    params: Promise<{ propertyId: string }>;
}) {
    const randomProperties = await fetchRandomProperties();
    const { propertyId } = await params;
    const property = await getPropertyById(propertyId);

    if (!property) {
        notFound();
    }

    const breadcrumbItems = [
        { label: "Inicio", href: "/" },
        { label: "Propiedades", href: "/propiedades" },
        { label: property.name || property.address || "Propiedad" },
    ];

    const constructionArea = property.constructionArea ?? 0;
    const usableArea = property.usableArea ?? 0;
    const landArea = property.landArea ?? 0;
    const bedrooms = property.bedrooms ?? 0;
    const bathrooms = property.bathrooms ?? 0;
    const halfBathrooms = property.halfBathrooms ?? 0;
    const hasGarage = !!property.hasGarage;
    const hasGarden = !!property.hasGarden;
    const hasBalcony = !!property.hasBalcony;
    const hasTerrace = !!property.hasTerrace;
    const hasLaundry = !!property.hasLaundry;
    const hasStorage = !!property.hasStorage;
    const hasFireplace = !!property.hasFireplace;
    const hasAirConditioning = !!property.hasAirConditioning;
    const hasHeating = !!property.hasHeating;
    const hasSecurity = !!property.hasSecurity;
    const hasGym = !!property.hasGym;
    const hasParking = !!property.hasParking;
    const hasPlayground = !!property.hasPlayground;
    const hasTennisCourt = !!property.hasTennisCourt;
    const hasBeachAccess = !!property.hasBeachAccess;
    const hasSeaView = !!property.hasSeaView;
    const hasMountainView = !!property.hasMountainView;
    const hasCityView = !!property.hasCityView;
    const elevator = !!property.elevator;
    const distanceToBeach = property.distanceToBeach ?? 0;
    const hasPool = !!property.hasPool;
    const features = property.features || [];
    const price = property.price || 0;
    const currency = property.currency || "USD";
    const images = Array.isArray(property.images) ? property.images : [];

    const getTypeIcon = () => {
        switch (property.type) {
            case "casa":
                return <HouseIcon className="w-6 h-6 text-primaryBackground" />;
            case "apartamento":
                return <Building2 className="w-6 h-6 text-primaryBackground" />;
            case "terreno":
                return <LandPlot className="w-6 h-6 text-primaryBackground" />;
            case "local":
                return <Store className="w-6 h-6 text-primaryBackground" />;
            case "oficina":
                return <EnterpriseIcon className="w-6 h-6 text-primaryBackground" />;
            case "garaje":
                return <GarageIcon className="w-6 h-6 text-primaryBackground" />;
            case "chalet":
                return <Home className="w-6 h-6 text-primaryBackground" />;
            default:
                return <HouseIcon className="w-6 h-6 text-primaryBackground" />;
        }
    };

    return (
        <div className="px-4 py-8 text-gray-100 bg-blackSoft30 min-h-screen space-y-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="mb-6 flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between lg:items-center">
                <div className="text-center lg:text-start flex items-center gap-3">
                    <div>
                        {property.name && (
                            <h1 className="text-xl font-bold text-white mb-2">{property.name}</h1>
                        )}
                        {property.address && <p className="text-xl text-gray-300">{property.address}</p>}
                        {(property.city || property.state) && (
                            <p className="text-lg text-gray-400">
                                {[property.city, property.state].filter(Boolean).join(", ")}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap justify-center">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        {getTypeIcon()}
                        <span className="text-2xl font-bold text-amber-200">
                            {currency === "USD" ? "$" : currency === "EUR" ? "€" : "$"}
                            {price.toLocaleString()}
                            {currency === "MXN" && " MXN"}
                        </span>
                        <span className={`bg-primaryBackground text-white px-4 py-2 rounded-full text-base ${property.status === "vendido" ? 'bg-red-500' :
                            property.status === "reservado" ? 'bg-yellow-500' :
                                property.status === "alquilado" ? 'bg-blue-600' : ''
                            }`}>
                            {property.status === "disponible" ? "Disponible" :
                                property.status === "vendido" ? "Vendido" :
                                    property.status === "reservado" ? "Reservado" : "Alquilado"}
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {property.status !== "vendido" && property.status !== "alquilado" && property.transactionType?.includes("venta") && (
                            <span className="text-primaryBackground font-medium text-base">Venta</span>
                        )}
                        {property.status !== "vendido" && property.status !== "alquilado" && property.transactionType?.includes("renta") && (
                            <span className="text-primaryBackground font-medium text-base">
                                {property.transactionType?.includes("venta") ? " | " : ""}
                                Renta {price > 0 && "/mes"}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <PropertyImageCarousel property={property} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-blackSoft30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Detalles principales</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center content-center">
                            {constructionArea > 0 && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <Building className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Área Construida</span>
                                    <span className="text-white font-semibold">{constructionArea} m²</span>
                                </div>
                            )}

                            {usableArea > 0 && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <Maximize className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Área de Uso</span>
                                    <span className="text-white font-semibold">{usableArea} m²</span>
                                </div>
                            )}

                            {landArea > 0 && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <Ruler className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Área de Terreno</span>
                                    <span className="text-white font-semibold">{landArea} m²</span>
                                </div>
                            )}

                            {bedrooms > 0 && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <BedIcon className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Habitaciones</span>
                                    <span className="text-white font-semibold">{bedrooms}</span>
                                </div>
                            )}

                            {bathrooms > 0 && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <BathIcon className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Baños</span>
                                    <span className="text-white font-semibold">{bathrooms}</span>
                                </div>
                            )}

                            {halfBathrooms > 0 && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <BathIcon className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Aseos</span>
                                    <span className="text-white font-semibold">{halfBathrooms}</span>
                                </div>
                            )}

                            {hasGarden && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <Flower2 className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Jardín</span>
                                    <span className="text-white font-semibold">Sí</span>
                                </div>
                            )}

                            {hasSecurity && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <Lock className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Seguridad</span>
                                    <span className="text-white font-semibold">Sí</span>
                                    </div>
                            )}

                            {hasPool && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <SwimmingPoolIcon className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Piscina</span>
                                    <span className="text-white font-semibold">Sí</span>
                                </div>
                            )}

                            {elevator && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <FaElevator className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Ascensor</span>
                                    <span className="text-white font-semibold">Sí</span>
                                </div>
                            )}

                            {hasGarage && (
                                <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                    <GarageIcon className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                    <span className="text-gray-300 text-sm">Garaje</span>
                                    <span className="text-white font-semibold">Sí</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Property Features */}
                    <div className="bg-blackSoft30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Características</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Interior Features Section */}
                            <div className="space-y-4">
                                {(constructionArea > 0 || usableArea > 0 || bedrooms > 0 || bathrooms > 0 || halfBathrooms > 0 || hasFireplace || hasAirConditioning || hasHeating || hasLaundry || hasStorage) && (
                                    <>
                                        <h4 className="text-lg font-medium text-primaryBackground">Interior</h4>
                                        <div className="space-y-2">
                                            {constructionArea > 0 && (
                                                <div className="flex items-center space-x-2">
                                                    <Building className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Área construida: {constructionArea} m²</span>
                                                </div>
                                            )}
                                            {usableArea > 0 && (
                                                <div className="flex items-center space-x-2">
                                                    <Maximize className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Área útil: {usableArea} m²</span>
                                                </div>
                                            )}
                                            {bedrooms > 0 && (
                                                <div className="flex items-center space-x-2">
                                                    <Bed className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Habitaciones: {bedrooms}</span>
                                                </div>
                                            )}
                                            {bathrooms > 0 && (
                                                <div className="flex items-center space-x-2">
                                                    <Bath className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Baños completos: {bathrooms}</span>
                                                </div>
                                            )}
                                            {halfBathrooms > 0 && (
                                                <div className="flex items-center space-x-2">
                                                    <Bath className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Aseos: {halfBathrooms}</span>
                                                </div>
                                            )}
                                            {hasFireplace && (
                                                <div className="flex items-center space-x-2">
                                                    <Check className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Chimenea</span>
                                                </div>
                                            )}
                                            {hasAirConditioning && (
                                                <div className="flex items-center space-x-2">
                                                    <Wind className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Aire acondicionado</span>
                                                </div>
                                            )}
                                            {hasHeating && (
                                                <div className="flex items-center space-x-2">
                                                    <Sun className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Calefacción</span>
                                                </div>
                                            )}
                                            {hasLaundry && (
                                                <div className="flex items-center space-x-2">
                                                    <Check className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Lavadero</span>
                                                </div>
                                            )}
                                            {hasStorage && (
                                                <div className="flex items-center space-x-2">
                                                    <Warehouse className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Almacenamiento</span>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="space-y-4">
                                {(landArea > 0 || hasGarage || hasGarden || hasBalcony || hasTerrace || hasPool || hasParking) && (
                                    <>
                                        <h4 className="text-lg font-medium text-primaryBackground">Exterior</h4>
                                        <div className="space-y-2">
                                            {landArea > 0 && (
                                                <div className="flex items-center space-x-2">
                                                    <Ruler className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Área de terreno: {landArea} m²</span>
                                                </div>
                                            )}
                                            {hasGarage && (
                                                <div className="flex items-center space-x-2">
                                                    <Car className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Garaje</span>
                                                </div>
                                            )}
                                            {hasGarden && (
                                                <div className="flex items-center space-x-2">
                                                    <Flower2 className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Jardín</span>
                                                </div>
                                            )}
                                            {hasBalcony && (
                                                <div className="flex items-center space-x-2">
                                                    <Triangle className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Balcón</span>
                                                </div>
                                            )}
                                            {hasTerrace && (
                                                <div className="flex items-center space-x-2">
                                                    <Home className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Terraza</span>
                                                </div>
                                            )}
                                            {hasPool && (
                                                <div className="flex items-center space-x-2">
                                                    <Droplets className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Piscina</span>
                                                </div>
                                            )}
                                            {hasParking && (
                                                <div className="flex items-center space-x-2">
                                                    <ParkingSquare className="w-5 h-5 text-primaryBackground" />
                                                    <span className="text-gray-300">Estacionamiento</span>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>

                            {(hasSecurity || hasGym || hasPlayground || hasTennisCourt || hasBeachAccess || elevator || hasSeaView || hasMountainView || hasCityView || distanceToBeach > 0) && (
                                <div className="space-y-4">
                                    <h4 className="text-lg font-medium text-primaryBackground">Comodidades y Vistas</h4>
                                    <div className="space-y-2">
                                        {hasSecurity && (
                                            <div className="flex items-center space-x-2">
                                                <Lock className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Seguridad</span>
                                            </div>
                                        )}
                                        {hasGym && (
                                            <div className="flex items-center space-x-2">
                                                <Dumbbell className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Gimnasio</span>
                                            </div>
                                        )}
                                        {hasPlayground && (
                                            <div className="flex items-center space-x-2">
                                                <TreeDeciduous className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Área de juegos</span>
                                            </div>
                                        )}
                                        {hasTennisCourt && (
                                            <div className="flex items-center space-x-2">
                                                <KanbanSquare className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Cancha de tenis</span>
                                            </div>
                                        )}
                                        {hasBeachAccess && (
                                            <div className="flex items-center space-x-2">
                                                <Palmtree className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Acceso a la playa</span>
                                            </div>
                                        )}
                                        {elevator && (
                                            <div className="flex items-center space-x-2">
                                                <Network className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Ascensor</span>
                                            </div>
                                        )}
                                        {hasSeaView && (
                                            <div className="flex items-center space-x-2">
                                                <Eye className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Vista al mar</span>
                                            </div>
                                        )}
                                        {hasMountainView && (
                                            <div className="flex items-center space-x-2">
                                                <MountainSnow className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Vista a la montaña</span>
                                            </div>
                                        )}
                                        {hasCityView && (
                                            <div className="flex items-center space-x-2">
                                                <Building2 className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Vista a la ciudad</span>
                                            </div>
                                        )}
                                        {distanceToBeach > 0 && (
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="w-5 h-5 text-primaryBackground" />
                                                <span className="text-gray-300">Distancia a la playa: {distanceToBeach} metros</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {features.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-lg font-medium text-primaryBackground mb-3">Otras características</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Check className="w-5 h-5 text-primaryBackground" />
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-blackSoft30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Descripción</h3>
                        <Description description={property.description ?? "No hay descripción disponible para esta propiedad."} />
                    </div>

                    {property.floorPlan && (
                        <FloorPlanSection floorPlans={property.floorPlan} />
                    )}

                    {property.tour3dUrl && <Property3DTour matterportUrl={property.tour3dUrl} />}

                    {images.length > 0 && <ImageViewer images={images} />}
                </div>

                <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
                    <div className="p-4 text-gray-100 bg-blackSoft30 rounded">
                        <h3 className="text-xl font-semibold text-white mb-4">Ubicación</h3>
                        {property.coordinates && (property.coordinates.lat !== 0 || property.coordinates.lng !== 0) ? (
                            <div>
                                <MapWrapper coordinates={property.coordinates} address={property.address || ""} />
                                {property.googleMapsUrl && (
                                    <div className="mt-4">
                                        <a
                                            href={property.googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-primaryBackground text-white 2xl:py-4 2xl:px-6 py-2 px-4 rounded hover:bg-secondaryBackground transition duration-300"
                                        >
                                            <LocationIcon className="w-5 h-5 mr-2" />
                                            Ver en Google Maps
                                        </a>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p className="text-gray-300">Ubicación no disponible para esta propiedad.</p>
                        )}
                    </div>

                    <div className="bg-blackSoft30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">¿Interesado en esta propiedad?</h3>
                        <PropertyInterestForm
                            namePlaceholder="Nombre completo"
                            emailPlaceholder="Correo electrónico"
                            phonePlaceholder="Teléfono"
                            messagePlaceholder="Quiero más información sobre esta propiedad..."
                            propertyId={propertyId}
                            propertyAddress={property.address || "Propiedad seleccionada"}
                        />
                        <div className="mt-6 text-gray-300 space-y-4">
                            <p className="text-gray-300 font-semibold">Si tienes alguna duda o necesitas más información, no dudes en contactarnos:</p>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-2 text-primaryBackground" />
                                <Link href="tel:+34691344647" className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300">+34 691 344 647</Link>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-primaryBackground" />
                                <Link href="mailto:elenamasko@smhomesrealstate.com" className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300">elenamasko@smhomesrealstate.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {randomProperties && randomProperties.length > 0 && (
                <PropertyCardsCarousel properties={randomProperties} />
            )}
        </div>
    );
}

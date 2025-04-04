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
    const distanceToBeach = property.distanceToBeach ?? 0;
    const hasPool = !!property.hasPool;
    const features = property.features || [];
    const price = property.price || 0;
    const currency = property.currency || "USD";
    const images = Array.isArray(property.images) ? property.images : [];

    return (
        <div className="px-4 py-8 text-gray-100 bg-blackSoft30 min-h-screen space-y-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="mb-6 flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between lg:items-center">
                <div className="text-center lg:text-start">
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
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap justify-center">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        {price > 0 && (
                            <span className="text-2xl font-bold text-amber-200">
                                {currency === "USD" ? "$" : "€"}
                                {price.toLocaleString()}
                                {currency === "MXN" && " MXN"}
                            </span>
                        )}
                        {/* Mostrar "Vendido" si la propiedad ya está vendida */}
                        <span className={`bg-primaryBackground text-white px-4 py-2 rounded-full text-base ${property.selled ? 'bg-red-500' : ''}`}>
                            {property.selled ? "Vendido" : "Disponible"}
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {/* Solo mostrar la opción de "Venta" o "Renta" si no está vendida */}
                        {!property.selled && property.transactionType?.includes("venta") && (
                            <span className="text-primaryBackground font-medium text-base">Venta</span>
                        )}
                        {!property.selled && property.transactionType?.includes("renta") && (
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
                    {(constructionArea > 0 || usableArea > 0 || landArea > 0 || hasPool) && (
                        <div className="bg-blackSoft30 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Detalles principales</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

                                {hasPool && (
                                    <div className="flex flex-col items-center p-4 bg-blackSoft30 backdrop-blur-sm rounded-lg">
                                        <Droplets className="w-8 h-8 text-primaryBackground mb-2 2xl:w-12 2xl:h-12" />
                                        <span className="text-gray-300 text-sm">Piscina</span>
                                        <span className="text-white font-semibold">Sí</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {(constructionArea > 0 || landArea > 0 || usableArea > 0 || bedrooms > 0 || bathrooms > 0 || property.elevator !== undefined || distanceToBeach > 0 || features.length > 0) && (
                        <div className="bg-blackSoft30 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Características adicionales</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                                {constructionArea > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <Building className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>Área construida: {constructionArea} m²</span>
                                    </div>
                                )}

                                {landArea > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <Ruler className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>Área de terreno: {landArea} m²</span>
                                    </div>
                                )}

                                {usableArea > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <Maximize className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>Área de uso: {usableArea} m²</span>
                                    </div>
                                )}

                                {bedrooms > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <Bed className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>Habitaciones: {bedrooms}</span>
                                    </div>
                                )}

                                {bathrooms > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <Bath className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>Baños: {bathrooms}</span>
                                    </div>
                                )}

                                {property.elevator !== undefined && (
                                    <div className="flex items-center space-x-2">
                                        <Home className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>Ascensor: {property.elevator ? "Sí" : "No"}</span>
                                    </div>
                                )}

                                {distanceToBeach > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>Distancia a la playa: {distanceToBeach} metros</span>
                                    </div>
                                )}

                                {features.length > 0 && features.map((feature) => (
                                    <div key={feature} className="flex items-center space-x-2">
                                        <Check className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
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
                                <Link href="mailto:contacto@smhomesrealstate.com" className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300">contacto@smhomesrealstate.com</Link>
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

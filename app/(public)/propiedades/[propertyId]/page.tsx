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
} from "lucide-react";
import { fetchRandomProperties, getPropertyById } from "@/app/utils/data";
import Breadcrumbs from "@/app/components/atoms/Breadcrumbs";
import PropertyImageCarousel from "@/app/components/molecules/PropertyCarrusel";
import Link from "next/link";
import { PageProps } from "@/app/utils/interfaces";
import ImageViewer from "@/app/components/molecules/ImageViewer";
import PropertyInterestForm from "@/app/components/molecules/PropertyInterestForm";
import PropertyCardsCarousel from "@/app/components/molecules/PropertyCardsCarrusel";
import MapWrapper from "@/app/components/atoms/MapWrapper";
import Description from "@/app/components/atoms/Description";
import Property3DTour from "@/app/components/atoms/Property3DTour";
import Image from "next/image";

export async function generateMetadata({ params }: PageProps) {
    const { propertyId } = await params;
    const property = await getPropertyById(propertyId);
    if (!property) {
        return { title: "Propiedad no encontrada" };
    }
    return {
        title: `${property.address} | Inmobiliaria`,
        description: `${property.type} con ${property.bedrooms} habitaciones y ${property.bathrooms} baños.`,
    };
}

export default async function PropertyPage({ params }: Readonly<PageProps>) {
    const randomProperties = await fetchRandomProperties();

    const resolvedParams = await params;

    const property = await getPropertyById(resolvedParams.propertyId);

    if (!property) {
        notFound();
    }

    const breadcrumbItems = [
        { label: "Inicio", href: "/" },
        { label: "Propiedades", href: "/propiedades" },
        { label: property.name },
    ];

    return (
        <div className="px-4 py-8 text-gray-100 bg-blackSoft30 min-h-screen space-y-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="mb-6 flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between">
                <div className="text-start">
                    <h1 className="text-3xl font-bold text-white mb-2">{property.name}</h1>
                    <p className="text-xl text-gray-300">{property.address}</p>
                    <p className="text-lg text-gray-400">{property.city}, {property.state}</p>
                </div>
                <div className="flex items-center space-x-5">
                    <span className="text-2xl font-bold text-amber-200">
                        {property.currency === "USD" ? "$" : "€"}
                        {property.price.toLocaleString()}
                        {property.currency === "MXN" && " MXN"}
                    </span>
                    <span className="bg-primaryBackground text-white px-4 py-2 rounded-full text-base">
                        {property.selled ? 'Vendido' : 'En venta'}
                    </span>
                </div>
            </div>

            <PropertyImageCarousel property={property} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-blackSoft30 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Detalles principales</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                                <Home className="w-10 h-10 text-primaryBackground mb-2 2xl:w-20 2xl:h-20" />
                                <span className="text-gray-300 text-sm ">Área Construida</span>
                                <span className="text-white font-semibold ">{property.constructionArea} m²</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                                <Bed className="w-10 h-10 text-primaryBackground mb-2 2xl:w-20 2xl:h-20" />
                                <span className="text-gray-300 text-sm ">Habitaciones</span>
                                <span className="text-white font-semibold ">{property.bedrooms}</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                                <Bath className="w-10 h-10 text-primaryBackground mb-2 2xl:w-20 2xl:h-20" />
                                <span className="text-gray-300 text-sm ">Baños</span>
                                <span className="text-white font-semibold ">{property.bathrooms}</span>
                            </div>

                            {property.hasPool && (
                                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                                    <Droplets className="w-10 h-10 text-primaryBackground mb-2 2xl:w-20 2xl:h-20" />
                                    <span className="text-gray-300 text-sm ">Piscina</span>
                                    <span className="text-white font-semibold ">Sí</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-blackSoft30 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Características adicionales</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <Home className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                <span>Área construida: {property.constructionArea} m²</span>
                            </div>
                            {property.landArea && (
                                <div className="flex items-center space-x-2">
                                    <Home className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                    <span>Área de terreno: {property.landArea} m²</span>
                                </div>
                            )}
                            {property.usableArea && (
                                <div className="flex items-center space-x-2">
                                    <Home className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                    <span>Área de uso: {property.usableArea} m²</span>
                                </div>
                            )}
                            <div className="flex items-center space-x-2">
                                <Bed className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                <span>Habitaciones: {property.bedrooms}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Bath className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                <span>Baños: {property.bathrooms}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Droplets className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                <span>Piscina: {property.hasPool ? "Sí" : "No"}</span>
                            </div>
                            {property.distanceToBeach || property.distanceToBeach === 0 && (
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                    {property.distanceToBeach === 0 ? (
                                        <span>Distancia a la playa: No calculado</span>
                                    ) : (
                                        <span>Distancia a la playa: {property.distanceToBeach} metros</span>
                                    )}
                                </div>
                            )}
                            {property.elevator !== undefined && (
                                <div className="flex items-center space-x-2">
                                    <Home className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                    <span>Ascensor: {property.elevator ? "Sí" : "No"}</span>
                                </div>
                            )}
                            {property.features && property.features.length > 0 && (
                                property.features.map((feature) => (
                                    <div key={feature} className="flex items-center space-x-2">
                                        <Check className="w-5 h-5 text-primaryBackground 2xl:w-6 2xl:h-6" />
                                        <span>{feature}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="bg-blackSoft30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Descripción</h3>
                        <Description description={property.description ?? "Sin descripción disponible."} />
                    </div>
                    {property.floorPlan && (
                        <div className="bg-blackSoft30 rounded-lg p-6 mt-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Plano de la Propiedad</h3>
                            <div className="relative">
                                <Image
                                    src={property.floorPlan.url}
                                    alt={property.floorPlan.alt || "Plano de la propiedad"}
                                    className="w-full h-auto rounded-lg object-contain max-h-[600px]"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                                    Plano de la Propiedad
                                </div>
                            </div>
                        </div>
                    )}
                    <Property3DTour matterportUrl={property.tour3dUrl} />
                    <ImageViewer images={property.images} />
                </div>

                <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
                    <div className="p-4 text-gray-100 bg-blackSoft30 rounded">
                        <h3 className="text-xl font-semibold text-white mb-4">Ubicación</h3>
                        {property.coordinates && (property.coordinates.lat !== 0 || property.coordinates.lng !== 0) ? (
                            <div>
                                <MapWrapper coordinates={property.coordinates} address={property.address} />

                                <div className="mt-4">
                                    <a
                                        href={`${property.googleMapsUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-primaryBackground text-white  2xl:py-4 2xl:px-6 py-2 px-4 rounded hover:bg-secondaryBackground transition duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 mr-2"
                                        >
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        Ver en Google Maps
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-300">Sin ubicación disponible.</p>
                        )}
                    </div>
                    <div className="bg-blackSoft30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">¿Interesado en esta propiedad?</h3>
                        <PropertyInterestForm
                            namePlaceholder="Nombre completo"
                            emailPlaceholder="Correo electrónico"
                            phonePlaceholder="Teléfono"
                            messagePlaceholder="Quiero más información sobre esta propiedad..."
                            propertyId={resolvedParams.propertyId}
                            propertyAddress={property.address}
                        />
                        <div className="mt-6 text-gray-300 space-y-4">
                            <p className="text-gray-300 font-semibold">Si tienes alguna duda o necesitas más información, no dudes en contactarnos:</p>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-2 text-primaryBackground" />
                                <Link
                                    href="tel:+34691344647"
                                    className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300"
                                >
                                    +34 691 344 647
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-primaryBackground" />
                                <Link
                                    href="mailto:contacto@smhomesrealstate.com"
                                    className="hover:text-primaryColor hover:underline transition-[color,text-decoration] duration-300"
                                >
                                    contacto@smhomesrealstate.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PropertyCardsCarousel properties={randomProperties} />
        </div>
    );
}
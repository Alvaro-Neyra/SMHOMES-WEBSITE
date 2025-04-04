import { getAllProperties } from "@/app/utils/data";
import HeroImage from "../../components/molecules/HeroImage";
import PropertyPagination from "../../components/molecules/PropertyPagination";
import StickyHeroForm from "../../components/molecules/StickyFormComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Propiedades en Torrevieja - SM HOME'S",
    description:
        "Encuentra la propiedad de tus sueños en Torrevieja con SM HOME'S. Tenemos una amplia variedad de viviendas para todos los gustos y presupuestos.",
    keywords:
        "propiedades en Torrevieja, venta de propiedades, casas en Torrevieja, apartamentos Torrevieja, inmobiliaria Torrevieja, SM HOME'S",
    robots: "index, follow",
    openGraph: {
        title: "Propiedades en Torrevieja - SM HOME'S",
        description:
            "Encuentra la propiedad de tus sueños en Torrevieja con SM HOME'S. Tenemos una amplia variedad de viviendas para todos los gustos y presupuestos.",
        images: ["/propiedades.png"],
        url: "https://www.smhomesrealstate.com/propiedades",
        type: "website",
    },
    twitter: {
        title: "Propiedades en Torrevieja - SM HOME'S",
        description:
            "Encuentra la propiedad de tus sueños en Torrevieja con SM HOME'S. Tenemos una amplia variedad de viviendas para todos los gustos y presupuestos.",
        images: ["/propiedades.png"],
        card: "summary_large_image",
    },
};

export default async function PropiedadesPage() {
    const properties = await getAllProperties();

    return (
        <>
            <HeroImage
                src="/torrevieja8.jpg"
                heading="Propiedades"
                subHeading="Encuentra la propiedad de tus sueños"
                linkText="Más información sobre comprar"
                linkHref="/comprar"
            />
            <StickyHeroForm id="propiedades">
                {properties.length > 0 ? (
                    <PropertyPagination properties={properties} itemsPerPage={6} />
                ) : (
                    <p className="text-center text-gray-300">No hay propiedades disponibles.</p>
                )}
            </StickyHeroForm>
        </>
    );
}

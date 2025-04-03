import { getAllProperties } from "@/app/utils/data";
import HeroImage from "../../components/molecules/HeroImage";
import PropertyPagination from "../../components/molecules/PropertyPagination";
import StickyHeroForm from "../../components/molecules/StickyFormComponent";
import Head from "next/head";

export default async function PropiedadesPage() {
    const properties = await getAllProperties();

    return (
        <>
            <Head>
                <title>Propiedades en Torrevieja - SM HOME&apos;S</title>
                <meta
                    name="description"
                    content="Encuentra la propiedad de tus sueños en Torrevieja con SM HOME&apos;S. Tenemos una amplia variedad de viviendas para todos los gustos y presupuestos."
                />
                <meta
                    name="keywords"
                    content="propiedades en Torrevieja, venta de propiedades, casas en Torrevieja, apartamentos Torrevieja, inmobiliaria Torrevieja, SM HOME'S"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Propiedades en Torrevieja - SM HOME&apos;S" />
                <meta
                    property="og:description"
                    content="Encuentra la propiedad de tus sueños en Torrevieja con SM HOME&apos;S. Tenemos una amplia variedad de viviendas para todos los gustos y presupuestos."
                />
                <meta property="og:image" content="/propiedades.png" />
                <meta property="og:url" content="https://www.smhomesrealstate.com/propiedades" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Propiedades en Torrevieja - SM HOME&apos;S" />
                <meta
                    name="twitter:description"
                    content="Encuentra la propiedad de tus sueños en Torrevieja con SM HOME&apos;S. Tenemos una amplia variedad de viviendas para todos los gustos y presupuestos."
                />
                <meta name="twitter:image" content="/propiedades.png" />
                <meta name="twitter:url" content="https://www.smhomesrealstate.com/propiedades" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

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

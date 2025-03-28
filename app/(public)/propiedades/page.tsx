import { getAllProperties } from "@/app/utils/data";
import HeroImage from "../../components/molecules/HeroImage";
import PropertyPagination from "../../components/molecules/PropertyPagination";
import StickyHeroForm from "../../components/molecules/StickyFormComponent";

export default async function PropiedadesPage() {
    const properties = await getAllProperties();

    return (
        <>
            <HeroImage
                src="https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194910/torrevieja8_mxwgtn.jpg"
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

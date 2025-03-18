import HeroImage from "../components/molecules/HeroImage";
import PropertyPagination from "../components/molecules/PropertyPagination";
import StickyHeroForm from "../components/molecules/StickyFormComponent";
import getAllProperties from "../utils/data";

export default function PropiedadesPage() {
    const properties = getAllProperties();
    return (
        <>
            <HeroImage
                src="/torrevieja8.jpg"
                heading="Propiedades"
                subHeading="Encuentra la propiedad de tus sueños"
                linkText="Más información sobre comprar"
                linkHref="/comprar"
            />
            <StickyHeroForm
                id="propiedades"
            >
                <PropertyPagination properties={properties} itemsPerPage={6} />
            </StickyHeroForm>
        </>
    );

}
import Link from "next/link";
import HeroSection from "../molecules/HeroSection";

export default function ExploreSectionDynamic() {
    return (
        <HeroSection
            title="Despierta en el corazón del Mediterráneo"
            subtitle="Descubre la casa de tus sueños en España"
            imageSrc="/torrevieja1.jpg"
            altText="Propiedad en el Mediterráneo"
            imagePosition="left"
        >
            <ul
                className="space-y-4 flex-col justify-center items-start custom-list"
            >
                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="vertical-line xl:text-[1.5vw]">
                        <strong className="text-white">Apartamentos con vistas al mar:</strong> Despierta cada mañana con el sonido de las olas.
                    </div>
                </li>
                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Chalets con piscina privada:</strong> Crea tu propio oasis de relax y disfruta de la privacidad y la tranquilidad de tu propio hogar.
                    </div>
                </li>
                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Bungalows en urbanizaciones privadas:</strong> Disfruta de todas las comodidades y servicios que ofrecen las urbanizaciones privadas, como piscinas comunitarias, zonas verdes y espacios para el ocio.
                    </div>
                </li>
                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Adosados con jardín:</strong> Ideal para familias con niños o para aquellos que buscan un espacio exterior donde disfrutar del buen tiempo.
                    </div>
                </li>
                <div className="flex justify-center items-center md:justify-center lg:justify-start">
                    <Link
                        className="mt-6 bg-primaryColor text-white px-6 py-3 rounded-full font-bold hover:bg-secondaryColor transition-all duration-300 bg-primaryBackground xl:text-[1.5vw] xl:px-[2vw] xl:py-[1.5vw]"
                        href="/propiedades"
                    >
                        Ver Propiedades
                    </Link>
                </div>
            </ul>
        </HeroSection>
    );
}
import HeroSection from "../molecules/HeroSection";

export default function HousesSectionDynamic() {
    return (
        <HeroSection
            title="Casas en venta en Torrevieja, La Mata, Orihuela Costa"
            subtitle="Abre las puertas a un estilo de vida único en el corazón del Mediterráneo"
            imageSrc="/torrevieja2.jpg"
            altText="Propiedades en la Costa Blanca Sur"
            imagePosition="right"
        >
            <div
                className="space-y-4 xl:space-y-[1vw]"
            >
                <div
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Casas con vistas al mar:</strong> Disfruta de impresionantes vistas al Mediterráneo desde tu hogar.
                </div>

                <div
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Chalets con jardín privado:</strong> Crea tu propio oasis de relax rodeado de naturaleza.
                </div>

                <div
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Bungalows en urbanizaciones cerradas:</strong> Disfruta de seguridad y comodidades exclusivas.
                </div>

                <div
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Adosados modernos:</strong> Ideal para familias o parejas que buscan un estilo de vida contemporáneo.
                </div>

                <div className="flex justify-center items-center md:justify-center lg:justify-start">
                    <p className="text-gray-400 text-3xl xl:text-[2vw] mt-4">
                        Tenemos la casa perfecta para ti.
                    </p>
                </div>
            </div>
        </HeroSection>
    );
}
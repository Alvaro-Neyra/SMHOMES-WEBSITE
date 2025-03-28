import HeroSection from "../molecules/HeroSection";

export default function HousesSectionDynamic() {
    return (
        <HeroSection
            title="Casas en venta en Torrevieja, La Mata, Orihuela Costa"
            subtitle="Abre las puertas a un estilo de vida único en el corazón del Mediterráneo"
            imageSrc="https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja2_idsahz.jpg"
            altText="Propiedades en la Costa Blanca Sur"
            imagePosition="right"
        >
            <ul
                className="space-y-4 flex-col justify-center items-start custom-list"
            >
                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="vertical-line xl:text-[1.5vw]">
                        <strong className="text-white">Casas con vistas al mar:</strong> Disfruta de impresionantes vistas al Mediterráneo desde tu hogar.
                    </div>
                </li>

                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Chalets con jardín privado:</strong> Crea tu propio oasis de relax rodeado de naturaleza.
                    </div>
                </li>

                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Bungalows en urbanizaciones cerradas:</strong> Disfruta de seguridad y comodidades exclusivas.
                    </div>
                </li>

                <li
                    className="flex items-center justify-start gap-1.2"
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Adosados modernos:</strong> Ideal para familias o parejas que buscan un estilo de vida contemporáneo.
                    </div>
                </li>

                <div className="flex justify-center items-center md:justify-center lg:justify-start">
                    <p className="text-gray-400 text-3xl xl:text-[2vw] mt-4">
                        Tenemos la casa perfecta para ti.
                    </p>
                </div>
            </ul>
        </HeroSection>
    );
}
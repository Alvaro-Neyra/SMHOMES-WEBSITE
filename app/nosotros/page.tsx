import Link from "next/link";
import HeroImage from "../components/molecules/HeroImage";
import StaticHeroSection from "../components/molecules/StaticHeroSection";
import StaticHeroSectionImages from "../components/molecules/StaticHeroSectionImages";
import StatsSection from "../components/molecules/StatsSection";
import RealEstateServices from "../components/organisms/RealStateServices";
import MarcasCarrusel from "../components/organisms/MarcasCarrusel";
import ImageSection from "../components/molecules/ImageSection";

export default function NosotrosPage() {
    const imageData = [
        { src: "/torrevieja1.jpg", alt: "Descripción imagen 1" },
        { src: "/torrevieja2.jpg", alt: "Descripción imagen 2" },
        { src: "/torrevieja3.jpg", alt: "Descripción imagen 3" },
        { src: "/torrevieja4.jpg", alt: "Descripción imagen 4" }
    ];

    return (
        <>
            <HeroImage
                src="/torrevieja5.jpg"
                heading="SM Home&apos;s"
                subHeading="Todo lo que tienes que saber sobre nuestra empresa"
                linkText="Contacto"
                linkHref="/contacto"
            />
            <StaticHeroSectionImages
                title="Acerca de SM Home&apos;s"
                subtitle="Conoce más sobre nosotros"
                images={imageData}
                imagePosition="left"
            >
                <p className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw]">
                    <strong className="text-inherit font-bold">SM Home&apos;s</strong> es una empresa dedicada a ofrecer servicios inmobiliarios de alta calidad en la Costa Blanca Sur.
                </p>
                <p className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw]">
                    Nos especializamos en la venta y alquiler de propiedades, brindando un servicio personalizado y profesional a cada uno de nuestros clientes. Nuestro objetivo es ayudarte a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto. Contamos con un equipo de expertos que te guiarán en cada paso del proceso, asegurando una experiencia sin complicaciones y satisfactoria.
                </p>
                <Link href="#servicios" className="bg-primaryBackground border-[.2vw] border-primaryBackground text-white xl:text-[1.5vw] px-6 py-3 rounded-lg xl:rounded-[1vw] font-semibold hover:bg-blackSoftColor transition-colors duration-300">Nuestros Servicios</Link>
            </StaticHeroSectionImages>
            <StatsSection />
            <StaticHeroSection
                imageSrc="/torrevieja6.jpg"
                altText="Nosotros image 1"
            >
                <p className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw]">
                    <strong className="text-inherit font-bold">Con más de 25 años de experiencia en el sector inmobiliario, somos un referente en la Costa Blanca Sur gracias a nuestro estilo de trabajo profesional, cercano y eficiente.</strong> Nuestro equipo de expertos está altamente cualificado y se actualiza constantemente para ofrecerte las últimas novedades y el mejor asesoramiento en materia inmobiliaria.
                </p>
                <p className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw]">
                    <strong className="text-inherit font-bold">Nuestra pasión</strong>  es ayudar a nuestros clientes a encontrar su hogar ideal, ya sea para disfrutar de unas merecidas vacaciones o para establecerse de forma permanente en la Costa Blanca. Nos encargamos de todo, desde la búsqueda de tu vivienda ideal hasta la firma de la escritura y más allá, con nuestro servicio <strong className="text-inherit font-bold">postventa</strong> que te ayudará a resolver cualquier duda o necesidad que tengas después de la compra.
                </p>
            </StaticHeroSection>
            <StaticHeroSection
                imageSrc="/torrevieja7.jpg"
                altText="Nosotros image 2"
                imagePosition="left"
            >
                <ol className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw] list-decimal pl-5 space-y-4">
                    <li><strong>Reformas:</strong> Te ayudamos a reformar tu vivienda para que quede tal y como la deseas.</li>
                    <li><strong>Gestión fiscal:</strong> Te asesoramos sobre los aspectos fiscales relacionados con la compra o venta de tu vivienda.</li>
                    <li><strong>Asesoramiento jurídico:</strong> Te ofrecemos asesoramiento jurídico personalizado para que estés tranquilo en todo momento.</li>
                    <li><strong>Tramitación de documentos para no residentes:</strong> Te ayudamos a tramitar todos los documentos necesarios si eres residente extranjero.</li>
                    <li><strong>Tramitación de escrituras:</strong> Nos encargamos de la tramitación de todo tipo de escrituras, como herencias, cancelaciones de hipotecas y compraventas.</li>
                </ol>
            </StaticHeroSection>
            <RealEstateServices />
            <ImageSection
                imageSrc="/torrevieja7.jpg"
                title="Contacta con nosotros"
                subtitle="Estamos aquí para ayudarte"
                buttonText="Contacto"
                buttonLink="/contacto"
            />
            <MarcasCarrusel />
        </>
    );
}
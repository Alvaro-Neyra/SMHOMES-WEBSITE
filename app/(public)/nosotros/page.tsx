import HeroImage from '@/app/components/molecules/HeroImage';
import ImageSection from '@/app/components/molecules/ImageSection';
import StaticHeroSection from '@/app/components/molecules/StaticHeroSection';
import StaticHeroSectionImages from '@/app/components/molecules/StaticHeroSectionImages';
import StatsSection from '@/app/components/molecules/StatsSection';
import MarcasCarrusel from '@/app/components/organisms/MarcasCarrusel';
import RealEstateServices from '@/app/components/organisms/RealStateServices';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Nosotros - SM HOME'S",
    description: "En SM HOME'S somos una inmobiliaria familiar dedicada a ayudar a quienes desean vender su propiedad con confianza, seguridad y el mejor respaldo. Conoce más sobre nuestra historia y lo que hacemos.",
    keywords: "Nosotros, SM HOME'S, inmobiliaria familiar, venta de propiedades, asesoría inmobiliaria, Torrevieja, Empresa inmobiliaria, servicios inmobiliarios",
    robots: "index, follow",
    openGraph: {
        title: "Nosotros - SM HOME'S",
        description: "En SM HOME'S somos una inmobiliaria familiar dedicada a ayudar a quienes desean vender su propiedad con confianza, seguridad y el mejor respaldo.",
        images: ["/nosotros.png"],
        url: "https://www.smhomesrealstate.com/nosotros",
        type: "website",
    },
    twitter: {
        title: "Nosotros - SM HOME'S",
        description: "En SM HOME'S somos una inmobiliaria familiar dedicada a ayudar a quienes desean vender su propiedad con confianza, seguridad y el mejor respaldo.",
        images: ["/nosotros.png"],
        card: "summary_large_image",
    }
};

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
                subHeading="Hacemos de tu hogar una realidad"
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
                    <strong className="text-inherit font-bold">En SM HOME&apos;S</strong> , somos una empresa inmobiliaria de carácter familiar, dedicada a ayudar a quienes desean vender su propiedad con confianza, seguridad y el mejor respaldo.
                </p>
                <p className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw]">
                    Como negocio familiar, sabemos que un hogar es mucho más que una propiedad; es el lugar donde se construyen sueños y se viven momentos inolvidables. Por eso, nos comprometemos a brindar un servicio cercano y personalizado, entendiendo las necesidades de cada cliente y guiándolo en cada etapa del proceso de venta.
                </p>
                <Link href="#servicios" className="bg-primaryBackground border-[.2vw] border-primaryBackground text-white xl:text-[1.5vw] px-6 py-3 rounded-lg xl:rounded-[1vw] font-semibold hover:bg-blackSoftColor transition-colors duration-300">Nuestros Servicios</Link>
            </StaticHeroSectionImages>
            <StatsSection />
            <StaticHeroSection
                imageSrc="/torrevieja6.jpg"
                altText="Nosotros image 1"
            >
                <p className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw]">
                    <strong className="text-inherit font-bold">Nos especializamos en la venta de propiedades, ofreciendo asesoría integral para garantizar transacciones seguras, rápidas y exitosas.</strong> Nuestro enfoque se basa en la transparencia y la honestidad, asegurando que cada propietario obtenga las mejores condiciones en el mercado.
                </p>
                <p className="text-gray-100 text-lg sm:text-xl lg:text-xl xl:text-[1.5vw] xl:leading-[2vw] mb-[4vw] xl:mb-[2vw]">
                    En SM HOME&apos;S, trabajamos con pasión y compromiso, porque sabemos que vender un hogar es una decisión importante.<strong className="text-inherit font-bold"> Nuestro objetivo es hacer que este proceso sea sencillo, eficiente y satisfactorio, permitiendo que nuestros clientes den el siguiente paso con tranquilidad y confianza. Porque para nosotros, cada hogar es más que una propiedad: es el comienzo de una nueva historia.</strong>
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

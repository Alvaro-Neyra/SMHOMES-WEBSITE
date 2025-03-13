import FAQBuy from "../components/molecules/FAQBuy";
import FormComponent from "../components/molecules/FormComponent";
import HeroSection from "../components/molecules/HeroSectionButtons";
import HeroForm from "../components/organisms/HeroForm";
import TestimonialsCarrusel from "../components/organisms/TestimonialsCarrusel";
import { formFields } from "../utils/constants";
import Link from "next/link";

export default function BuyPage() {
    const stats = [
        {
            icon: "/home-icon.svg",
            value: "+150",
            label: "propiedades disponibles",
        },
        {
            icon: "/star.svg",
            value: "4,9",
            label: "sobre 5 en Google",
        },
    ];

    const highlights = [
        {
            number: 1,
            title: "Búsqueda personalizada de vivienda",
            description:
                "Te ayudamos a encontrar la propiedad perfecta según tus necesidades y presupuesto. Analizamos el mercado para ofrecerte las mejores opciones.",
            highlight: "¡Más del 95% de nuestros clientes encuentran su hogar ideal!",
        },
        {
            number: 2,
            title: "Asesoramiento financiero",
            description:
                "Contamos con expertos en financiación que te guiarán en todo el proceso, desde la solicitud de hipoteca hasta la firma final.",
            highlight: "Y lo mejor… ¡asesoramiento gratuito!",
        },
        {
            number: 3,
            title: "Acceso exclusivo a propiedades premium",
            description:
                "Gracias a nuestra red de colaboradores, tenemos acceso a propiedades exclusivas que no están disponibles en otros portales inmobiliarios.",
            highlight: "¡Encuentra tu hogar soñado con nosotros!",
        },
        {
            number: 4,
            title: "Confianza y tranquilidad en la compra",
            description:
                "Con SM HOME'S, puedes estar seguro de que estás trabajando con profesionales de confianza. Tenemos más de 500 reseñas positivas en “Google”.",
            highlight: "¡Nuestra valoración es de 4,9 sobre 5 en “Google”!",
        },
        {
            number: 5,
            title: "Visitas virtuales y presenciales",
            description:
                "Ofrecemos visitas virtuales y presenciales para que puedas explorar las propiedades desde la comodidad de tu hogar o en persona.",
            highlight: "¡Elige la opción que mejor se adapte a ti!",
        },
        {
            number: 6,
            title: "Gestión legal completa",
            description:
                "Nos encargamos de todo el proceso legal, desde la revisión del contrato hasta la firma final, para que no tengas que preocuparte por nada.",
            highlight: "¡Sabemos hacer las cosas bien, puede estar tranquilo!",
        },
        {
            number: 7,
            title: "Traducción",
            description:
                "Nuestros agentes inmobiliarios hablan diferentes idiomas (español, inglés, francés, sueco), lo que te asegurará que siempre estarás atendido en tu idioma.",
            highlight: "",
        },
        {
            number: 8,
            title: "Postcompra",
            description:
                "Una vez comprada la vivienda, nos encargaremos de realizar los cambios de titularidad de los suministros, titularidad catastral, y más.",
            highlight: "",
        },
    ];

    return (
        <section>
            <HeroSection
                title="¿Quieres comprar tu casa en Torrevieja o alrededores?"
                subtitle="SM HOME&apos;S"
                description="Compra tu casa rápidamente con nosotros."
                imgSrc="/torrevieja3.jpg"
                primaryButtonText="Ver todas las propiedades"
                secondaryButtonText="Más información"
                primaryButtonLink="/propiedades"
                secondaryButtonLink="#buy-reasons-section"
                stats={stats}
            >
                <FormComponent
                    namePlaceholder={formFields.namePlaceholder}
                    phonePlaceholder={formFields.phonePlaceholder}
                    emailPlaceholder={formFields.emailPlaceholder}
                    messagePlaceholder={formFields.messagePlaceholder}
                    options={formFields.options}
                />
            </HeroSection>

            <HeroForm
                id="buy-reasons-section"
                heading="En SM HOME&apos;S, eliminamos el estrés del proceso y te ofrecemos el servicio inmobiliario más completo para comprar tu propiedad de forma rápida, cómoda y al mejor precio."
                subHeading="¿Qué hacemos para comprar tu casa en tiempo record?"
                strongSubHeading="comprar tu casa en tiempo record"
                otherChildren={<FAQBuy />}
            >
                <section>
                    <div className="px-4 space-y-[2vw] xl:space-y-[3vw]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-blackSoft30 p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 xl:space-y-[1vw]"
                                >
                                    <div className="flex justify-center items-center gap-2 xl:gap-[1vw]">
                                        <span className="text-2xl font-extrabold text-primaryBackground xl:text-[2vw]">
                                            {highlight.number}.
                                        </span>
                                        <h3 className="text-xl lg:text-[1.5vw] xl:text-[1.8vw] font-bold text-white xl:leading-[2vw]">
                                            {highlight.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm lg:text-[1vw] xl:text-[1.2vw] xl:leading-[1.5vw] text-gray-300">
                                        {highlight.description}
                                    </p>
                                    <p className="text-primaryColor text-sm lg:text-[1vw] mt-2 font-bold xl:text-[1.5vw] xl:leading-[1.5vw]">
                                        {highlight.highlight}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Link
                    href="/propiedades"
                    className="border-primaryBackground flex justify-center text-center items-center border-2 text-white px-4 py-2 xl:text-[1.5vw] xl:px-[2vw] xl:py-[2vw] landscape:text-[1.5vw] landscape:py-[1vw] landscape:px-[1.5vw] rounded-[1vw] hover:bg-blackSoft30 transition-all duration-300"
                >
                    Ver todas las propiedades
                </Link>
            </HeroForm>

            <section id="testimonials">
                <h1 className="text-[8vw] sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-primaryColor text-center bg-blackSoftColor pt-[2vw]">
                    Nuestros Testimonios
                </h1>
                <TestimonialsCarrusel />
            </section>
        </section>
    );
}
import Faq from "../components/molecules/FAQ";
import FormComponent from "../components/molecules/FormComponent";
import HeroSection from "../components/molecules/HeroSectionButtons";
import HeroForm from "../components/organisms/HeroForm";
import TestimonialsCarrusel from "../components/organisms/TestimonialsCarrusel";
import { formFields } from "../utils/constants";
import Link from "next/link";

export default function SellPage() {
    const stats = [
        {
            icon: "/home-icon.svg",
            value: "+100",
            label: "casas vendidas al año",
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
            title: "Valoración gratuita de tu vivienda",
            description:
                "Ponemos a tu disposición una valoración basada en precios reales de las viviendas que se han vendido en los últimos meses en tu misma zona. Te ayudamos a definir la mejor estrategia para vender tu casa, maximizando tus posibilidades de éxito.",
            highlight: "¡El 99% de las viviendas que tienen un precio adecuado se venden!",
        },
        {
            number: 2,
            title: "Servicios “Home Staging” profesional",
            description:
                "Sabemos que la primera impresión es crucial a la hora de vender una vivienda. Por eso, te ofrecemos un servicio de Home Staging profesional para que tu propiedad cause la mejor impresión posible a los compradores potenciales, aumentando las posibilidades de venta y el precio final.",
            highlight: "Y lo mejor de todo… ¡totalmente GRATIS para usted!",
        },
        {
            number: 3,
            title: "Experiencia y resultados probados",
            description:
                "En Casas y Mar combinamos la tecnología más avanzada con un sistema de venta probado y eficaz, respaldado por más de 25 años de experiencia en el sector inmobiliario de Torrevieja y la Costa Blanca Sur. Contamos con una red de más de 400 colaboradores a nivel local, nacional e internacional.",
            highlight: "¡Vendemos más de 100 viviendas de media al año!",
        },
        {
            number: 4,
            title: "Confianza y tranquilidad en la venta",
            description:
                "Con Casas y Mar, puedes estar seguro de que tu propiedad está en buenas manos. Tenemos más de 500 reseñas sobre nosotros en “Google”, con una valoración de 4,9 sobre 5, lo que significa que el grado de satisfacción de los clientes con nuestro servicio es muy alto. Búscanos y descúbrelo por ti mismo lo que otros clientes opinan de nosotros.",
            highlight: "¡Nuestra valoración es de 4,9 sobre 5 en “Google”!",
        },
        {
            number: 5,
            title: "Máxima difusión",
            description:
                "Realizaremos un reportaje fotográfico profesional y un TOUR VIRTUAL. Publicaremos tu vivienda en los mejores y más visitados portales inmobiliarios de España y del extranjero, especializados en la zona, sin coste alguno. La iremos rotando en los mejores puestos destacados para lograr mayor impacto, igual que en nuestro escaparate a pie de calle de nuestra oficina en Torrevieja.",
            highlight: "¡Cuanta más visibilidad, más rápido se vende!",
        },
        {
            number: 6,
            title: "Servicio Notaría",
            description:
                "Este paso burocrático puede resultar un tanto complejo, por lo que nuestros agentes inmobiliarios te asesorarán en todo momento. El día de la firma de la escritura, te acompañará una persona del bufete de abogados con el que trabajamos para que revise todo el proceso y pueda resolver cualquier duda, incluso si no puedes venir ese día, nosotros podemos representarte y ocuparnos de todo con un poder notarial.",
            highlight: "¡Sabemos hacer las cosas bien, puede estar tranquilo!",
        },
        {
            number: 7,
            title: "Traducción",
            description:
                "Nuestros agentes inmobiliarios hablan diferentes idiomas (español, inglés, francés, sueco), lo que te asegurará que siempre estarás atendido en tu idioma para que puedas sentirte cómodo y tranquilo en todo el proceso de venta de su vivienda.",
            highlight: "",
        },
        {
            number: 8,
            title: "Postventa",
            description:
                "Una vez firmada la escritura de venta de la vivienda, nos encargaremos de realizar también los cambios de titularidad de los suministros, titularidad catastral, titularidad de la comunidad, solicitud de plusvalía, etc.",
            highlight: "",
        },
    ];

    return (
        <section>
            <HeroSection
                title="¿Quieres vender tu casa en Torrevieja o alrededores?"
                subtitle="SM HOME'S"
                description="Vende tu casa rápidamente con nosotros."
                imgSrc="/torrevieja3.jpg"
                primaryButtonText="Más información"
                secondaryButtonText="Conoce nuestro servicio HOME"
                primaryButtonLink="#sell-reasons-section"
                secondaryButtonLink="/servicio-home/"
                stats={stats}
            >
                <FormComponent
                    namePlaceholder={formFields.namePlaceholder}
                    phonePlaceholder={formFields.phonePlaceholder}
                    emailPlaceholder={formFields.emailPlaceholder}
                    messagePlaceholder={formFields.messagePlaceholder}
                    options={formFields.options}
                    sellSection={true}
                />
            </HeroSection>
            <HeroForm id="sell-reasons-section" heading="En SM HOME'S, eliminamos el estrés del proceso y te ofrecemos el servicio inmobiliario más completo para vender tu propiedad de forma rápida, cómoda y al mejor precio." subHeading="¿Qué hacemos para vender tu casa en tiempo record?" strongSubHeading="vender tu casa en tiempo record" otherChildren={<Faq />} sellSection={true}>
                <section>
                    <div className="px-4 space-y-[2vw] xl:space-y-[3vw]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="bg-blackSoft30 p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 xl:space-y-[1vw]">
                                    <div className="flex justify-center items-center gap-2 xl:gap-[1vw]">
                                        <span className="text-2xl font-extrabold text-primaryBackground xl:text-[2vw]">{highlight.number}.</span>
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
                    href="/servicio-home/"
                    className="border-primaryBackground flex justify-center text-center items-center border-2 text-white px-4 py-2 xl:text-[1.5vw] xl:px-[2vw] xl:py-[2vw] landscape:text-[1.5vw] landscape:py-[1vw] landscape:px-[1.5vw] rounded-[1vw] hover:bg-blackSoft30 transition-all duration-300"
                >
                    Conoce nuestro servicio HOME
                </Link>            
            </HeroForm>
            <section id="testimonials">
                <h1 className="text-[8vw] sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-primaryColor text-center bg-blackSoftColor pt-[2vw]">Nuestros Testimonios</h1>
                <TestimonialsCarrusel />
            </section>
        </section>
    );
}

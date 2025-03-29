import FormComponent from "../../components/molecules/FormComponent";
import HeroSection from "../../components/molecules/HeroSectionButtons";
import HeroForm from "../../components/organisms/HeroForm";
import TestimonialsCarrusel from "../../components/organisms/TestimonialsCarrusel";
import { formFields, highlightsServicioHome, stats } from "../../utils/constants";
import Link from "next/link";

export default function ServicioHomePage() {
    return (
        <section>
            <HeroSection
                title="Servicio Home"
                subtitle="Nuestro servicio estrella para vender tu casa en tiempo record"
                description="Conoce nuestro servicio HOME y descubre cómo podemos ayudarte!"
                imgSrc="/torrevieja8.jpg"
                primaryButtonText="Como vender?"
                secondaryButtonText="Nuestro servicio HOME"
                primaryButtonLink="/vender"
                secondaryButtonLink="#servicio-home"
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
            <HeroForm 
                id="servicio-home" 
                heading="En SM HOME&apos;S, transformamos tu propiedad en una oportunidad irresistible con nuestro exclusivo Servicio HOME." 
                subHeading="¿Cómo preparamos tu casa para que se venda más rápido y al mejor precio?" 
                strongSubHeading="al mejor precio" 
                sellSection={true}
            >
                <section>
                    <div className="px-4 space-y-[2vw] xl:space-y-[3vw]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                            {highlightsServicioHome.map((highlight, index) => (
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
                    href="/vender"
                    className="border-primaryBackground flex justify-center text-center items-center border-2 text-white px-4 py-2 xl:text-[1.5vw] xl:px-[2vw] xl:py-[2vw] landscape:text-[1.5vw] landscape:py-[1vw] landscape:px-[1.5vw] rounded-[1vw] hover:bg-blackSoft30 transition-all duration-300"
                >
                    ¡Quiero vender!
                </Link>
            </HeroForm>
            <section id="testimonials">
                <h1 className="text-[8vw] sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-primaryColor text-center bg-blackSoftColor pt-[2vw]">Nuestros Testimonios</h1>
                <TestimonialsCarrusel />
            </section>
        </section>
    );
}

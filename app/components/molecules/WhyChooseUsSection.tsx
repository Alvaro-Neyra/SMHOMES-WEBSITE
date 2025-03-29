"use client";
import Button from "../atoms/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function WhyChooseUsSection() {
    return (
        <div className="bg-blackSoft30 py-8 md:py-12 lg:py-16">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex justify-center items-center mb-8 md:mb-12 w-3/4 mx-auto">
                    <div className="text-primaryColor text-3xl md:text-4xl lg:text-5xl font-bold transform -rotate-12 mr-2 md:mr-4">¿</div>
                    <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white py-2">
                        Por qué elegir SM Home&apos;s
                    </h2>
                    <div className="text-primaryColor text-3xl md:text-4xl lg:text-5xl font-bold transform rotate-12 ml-2 md:ml-4">?</div>
                </div>
                
                <div className="mx-auto p-4 md:p-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 items-center">
                        {benefitItems.map((item, index) => (
                            <div 
                                key={`${item.title}-${index}`} 
                                className="bg-black bg-opacity-20 rounded-lg p-5 border-l-4 border-primaryColor hover:shadow-lg hover:shadow-primaryColor/20 transition-all duration-300"
                            >
                                <h3 className="text-white text-xl font-bold mb-2 flex items-center">
                                    <span className="text-primaryColor mr-2">{item.icon}</span>
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto text-center bg-black bg-opacity-30 p-6 md:p-8 rounded-xl">
                        <p className="text-gray-300 text-lg mb-4">
                            Nuestro objetivo es ayudarte a encontrar la vivienda perfecta para ti y tu familia, donde puedas crear recuerdos inolvidables.
                        </p>
                        <p className="text-gray-300 text-lg mb-8">
                            <strong className="text-white">Visítanos o llámanos hoy mismo.</strong> Estaremos encantados de atenderte y ayudarte a hacer realidad tu sueño de vivir en la Costa Blanca Sur.
                        </p>
                        
                        <div className="flex justify-center items-center">
                            <Button
                                type="link"
                                title="Contacte con nosotros"
                                icon={<FaPhoneAlt />}
                                className="bg-primaryColor text-white transition-all duration-300 p-5 group hover:scale-105"
                                full={false}
                                blobColor="var(--primary-background-color)"
                                animationDirection="right"
                                href="/contacto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const benefitItems = [
    {
        icon: "★",
        title: "Atención personalizada",
        description: "Te ofrecemos un trato cercano y personalizado, adaptándonos a tus necesidades y preferencias."
    },
    {
        icon: "✓",
        title: "Amplia experiencia",
        description: "Contamos con una amplia experiencia en el sector inmobiliario de la Costa Blanca Sur, lo que nos permite ofrecerte un asesoramiento experto y de calidad."
    },
    {
        icon: "🏠",
        title: "Gran selección de propiedades",
        description: "Disponemos de una amplia gama de propiedades para todos los gustos y presupuestos, desde apartamentos y villas hasta terrenos y locales comerciales."
    },
    {
        icon: "⚙️",
        title: "Gestión integral",
        description: "Nos encargamos de todo el proceso de compraventa, desde la búsqueda del inmueble hasta la firma de la escritura y la entrega de las llaves."
    },
    {
        icon: "👁️",
        title: "Transparencia y honestidad",
        description: "Trabajamos con transparencia y honestidad, ofreciéndote información clara y precisa en todo momento."
    },
    {
        icon: "⭐",
        title: "Valoraciones de clientes",
        description: "Más de 500 reseñas en Google con una valoración de 4,9 sobre 5, que avalan nuestro compromiso con la satisfacción de nuestros clientes."
    },
    {
        icon: "🌍",
        title: "Asesoramiento legal y financiero",
        description: "Te ofrecemos asesoramiento legal y financiero para que puedas tomar decisiones informadas y seguras."
    }
];
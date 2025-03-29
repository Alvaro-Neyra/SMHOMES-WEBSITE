"use client";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function WhyChooseUsSection() {
    return (
        <div className="home-text bg-blackSoft30 py-8 md:py-12 lg:py-16">
            <div className="px-[4vw] container">
            <h2 className="main-title text-center text-[8vw] sm:text-[6vw] lg:text-[4vw] xl:text-[3vw] font-bold text-white relative mb-8">
                    <motion.span
                        className="text-primaryColor absolute -top-[2vw] sm:-top-[2vw] left-[3vw] sm:left-[14vw] xl:left-[1vw] transform rotate-[-15deg] text-[2em] sm:text-[1.5em]"
                        initial={{ rotate: -30 }}
                        animate={{ rotate: -15 }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.5,
                            delay: 0.5,
                            repeatType: "mirror",
                        }}
                    >
                        ¿
                    </motion.span>
                    Por qué elegir SM Home&apos;s
                    <motion.span
                        className="text-primaryColor absolute -bottom-[4vw] sm:-bottom-[2vw] right-[3vw] sm:right-[14vw] xl:right-[1vw] transform rotate-[15deg] text-[2em] sm:text-[1.5em]"
                        initial={{ rotate: 30 }}
                        animate={{ rotate: 15 }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.5,
                            delay: 0.5,
                            repeatType: "mirror",
                        }}
                    >
                        ?
                    </motion.span>
                </h2>

                <div className="mx-auto p-4 md:p-8 lg:p-12">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-gray-300 mb-8">
                        <li className="flex items-start gap-2">
                            <span className="text-primaryColor text-xl flex-shrink-0">•</span>
                            <div>
                                <strong className="text-white">Atención personalizada:</strong> Te ofrecemos un trato cercano y personalizado, adaptándonos a tus necesidades y preferencias.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primaryColor text-xl flex-shrink-0">•</span>
                            <div>
                                <strong className="text-white">Amplia experiencia:</strong> Contamos con una amplia experiencia en el sector inmobiliario de la Costa Blanca Sur, lo que nos permite ofrecerte un asesoramiento experto y de calidad.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primaryColor text-xl flex-shrink-0">•</span>
                            <div>
                                <strong className="text-white">Gran selección de propiedades:</strong> Disponemos de una amplia gama de propiedades para todos los gustos y presupuestos, desde apartamentos y villas hasta terrenos y locales comerciales.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primaryColor text-xl flex-shrink-0">•</span>
                            <div>
                                <strong className="text-white">Gestión integral:</strong> Nos encargamos de todo el proceso de compraventa, desde la búsqueda del inmueble hasta la firma de la escritura y la entrega de las llaves.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primaryColor text-xl flex-shrink-0">•</span>
                            <div>
                                <strong className="text-white">Transparencia y honestidad:</strong> Trabajamos con transparencia y honestidad, ofreciéndote información clara y precisa en todo momento.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primaryColor text-xl flex-shrink-0">•</span>
                            <div>
                                <strong className="text-white">Valoraciones de clientes:</strong> Más de 500 reseñas en Google con una valoración de 4,9 sobre 5, que avalan nuestro compromiso con la satisfacción de nuestros clientes.
                            </div>
                        </li>
                    </ul>

                    <div className="max-w-3xl mx-auto text-center">
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
                                className="bg-primaryColor text-white transition-all duration-300 p-5 group"
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
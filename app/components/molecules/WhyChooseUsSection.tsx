"use client";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function WhyChooseUsSection() {
    return (
        <div className="home-text bg-blackSoft30 py-[4vw]">
            <div className="px-[4vw]">
                <h2 className="main-title text-center text-[8vw] sm:text-[6vw] lg:text-[6vw] xl:text-[5vw] font-bold text-white relative mb-8">
                    <motion.span
                        className="text-primaryColor absolute -top-[2vw] sm:-top-[2vw] left-[3vw] sm:left-[4vw] xl:left-[10vw] transform rotate-[-15deg] text-[2em] sm:text-[1.5em]"
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
                        className="text-primaryColor absolute -bottom-[4vw] sm:-bottom-[2vw] right-[3vw] sm:right-[4vw] xl:right-[10vw] transform rotate-[15deg] text-[2em] sm:text-[1.5em]"
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

                {/* Contenido */}
                <div className="row g-0 g-lg-4 px-[2vw] py-[4vw]">
                    <div className="col-12 col-lg-1 text-lg xl:text-[2vw]">
                        <ul className="space-y-[1.5vw] xl:space-y-[3vw] text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-primaryColor text-xl xl:text-[5vw]">•</span>
                                <div className="xl:leading-[2vw]">
                                    <strong className="text-white">Atención personalizada:</strong> Te ofrecemos un trato cercano y personalizado, adaptándonos a tus necesidades y preferencias.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primaryColor text-xl xl:text-[5vw]">•</span>
                                <div className="xl:leading-[2vw]">
                                    <strong className="text-white">Amplia experiencia:</strong><span>Contamos con una amplia experiencia en el sector inmobiliario de la Costa Blanca Sur, lo que nos permite ofrecerte un asesoramiento experto y de calidad.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primaryColor text-xl xl:text-[5vw]">•</span>
                                <div className="xl:leading-[2vw]">
                                    <strong className="text-white">Gran selección de propiedades:</strong> Disponemos de una amplia gama de propiedades para todos los gustos y presupuestos, desde apartamentos y villas hasta terrenos y locales comerciales.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primaryColor text-xl xl:text-[5vw]">•</span>
                                <div className="xl:leading-[2vw]">
                                    <strong className="text-white">Gestión integral:</strong> Nos encargamos de todo el proceso de compraventa, desde la búsqueda del inmueble hasta la firma de la escritura y la entrega de las llaves.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primaryColor text-xl xl:text-[5vw]">•</span>
                                <div className="xl:leading-[2vw]">
                                    <strong className="text-white">Transparencia y honestidad:</strong> Trabajamos con transparencia y honestidad, ofreciéndote información clara y precisa en todo momento.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primaryColor text-xl xl:text-[5vw]">•</span>
                                <div className="xl:leading-[2vw]">
                                    <strong className="text-white">Valoraciones de clientes:</strong> Más de 500 reseñas en Google con una valoración de 4,9 sobre 5, que avalan nuestro compromiso con la satisfacción de nuestros clientes.
                                </div>
                            </li>
                        </ul>

                        <p className="mt-6 text-gray-300 text-lg xl:text-[2vw] xl:leading-[2vw] xl:py-[1.5vw]">
                            Nuestro objetivo es ayudarte a encontrar la vivienda perfecta para ti y tu familia, donde puedas crear recuerdos inolvidables.
                        </p>
                        <p className="mt-4 text-gray-300 text-lg xl:text-[2vw] xl:leading-[2vw] xl:py-[1.5vw]">
                            <strong className="text-white">Visítanos o llámanos hoy mismo.</strong> Estaremos encantados de atenderte y ayudarte a hacer realidad tu sueño de vivir en la Costa Blanca Sur.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-8">
                    <Button
                        type="button"
                        title="Contacte con nosotros"
                        icon={<FaPhoneAlt />}
                        variant="bg-primaryColor text-white transition-all duration-300 p-5 group"
                        full={false}
                        blobColor="var(--primary-background-color)"
                        animationDirection="up"
                        href="/contacto"
                    />
                </div>
            </div>
        </div>
    );
}
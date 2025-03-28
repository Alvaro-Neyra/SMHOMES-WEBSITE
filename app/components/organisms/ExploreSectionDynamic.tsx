"use client";
import HeroSection from "../molecules/HeroSection";
import { motion } from "framer-motion";

export default function ExploreSectionDynamic() {
    return (
        <HeroSection
            title="Despierta en el corazón del Mediterráneo"
            subtitle="Descubre la casa de tus sueños en España"
            imageSrc="https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja1_aybbba.jpg"
            altText="Propiedad en el Mediterráneo"
            imagePosition="left"
        >
            <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 flex-col justify-center items-start custom-list"
            >
                <motion.li
                    className="flex items-center justify-start gap-1.2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="vertical-line xl:text-[1.5vw]">
                        <strong className="text-white">Apartamentos con vistas al mar:</strong> Despierta cada mañana con el sonido de las olas.
                    </div>
                </motion.li>
                <motion.li
                    className="flex items-center justify-start gap-1.2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Chalets con piscina privada:</strong> Crea tu propio oasis de relax y disfruta de la privacidad y la tranquilidad de tu propio hogar.
                    </div>
                </motion.li>
                <motion.li
                    className="flex items-center justify-start gap-1.2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Bungalows en urbanizaciones privadas:</strong> Disfruta de todas las comodidades y servicios que ofrecen las urbanizaciones privadas, como piscinas comunitarias, zonas verdes y espacios para el ocio.
                    </div>
                </motion.li>
                <motion.li
                    className="flex items-center justify-start gap-1.2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="text-left xl:text-[1.5vw]">
                        <strong className="text-white">Adosados con jardín:</strong> Ideal para familias con niños o para aquellos que buscan un espacio exterior donde disfrutar del buen tiempo.
                    </div>
                </motion.li>
                <div className="flex justify-center items-center md:justify-center lg:justify-start">
                    <motion.a
                        className="mt-6 bg-primaryColor text-white px-6 py-3 rounded-full font-bold hover:bg-secondaryColor transition-all duration-300 bg-primaryBackground xl:text-[1.5vw] xl:px-[2vw] xl:py-[1.5vw]"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        href="/propiedades"
                    >
                        Ver Propiedades
                    </motion.a>
                </div>
            </motion.ul>
        </HeroSection>
    );
}
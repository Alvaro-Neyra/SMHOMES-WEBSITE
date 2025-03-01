"use client";
import HeroSection from "../molecules/HeroSection";
import { motion } from "framer-motion";

export default function HousesSectionDynamic() {
    return (
        <HeroSection
            title="Casas en venta en Torrevieja, La Mata, Orihuela Costa"
            subtitle="Abre las puertas a un estilo de vida único en el corazón del Mediterráneo"
            imageSrc="/torrevieja2.jpg"
            altText="Propiedades en la Costa Blanca Sur"
            imagePosition="right"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 xl:space-y-[1vw]"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Casas con vistas al mar:</strong> Disfruta de impresionantes vistas al Mediterráneo desde tu hogar.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Chalets con jardín privado:</strong> Crea tu propio oasis de relax rodeado de naturaleza.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Bungalows en urbanizaciones cerradas:</strong> Disfruta de seguridad y comodidades exclusivas.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="xl:text-[1.5vw]"
                >
                    <strong className="text-white">Adosados modernos:</strong> Ideal para familias o parejas que buscan un estilo de vida contemporáneo.
                </motion.div>

                <div className="flex justify-center items-center md:justify-center lg:justify-start">
                    <p className="text-gray-400 text-3xl xl:text-[2vw] mt-4">
                        Tenemos la casa perfecta para ti.
                    </p>
                </div>
            </motion.div>
        </HeroSection>
    );
}
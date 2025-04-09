import { Suspense } from "react";
import StaticTestimonialCarousel from "./StaticTestimonialsCarrusel";
import DynamicTestimonialCarousel from "./DynamicTestimonialsCarrusel";
import { testimonials } from "@/app/utils/constants";

export default function TestimonialsCarrusel() {
    const testimonialsLength = testimonials.length;

    return (
        <>
            {testimonialsLength > 0 && (
                <Suspense fallback={<StaticTestimonialCarousel />}>
                    <DynamicTestimonialCarousel />
                </Suspense>
            )}
            {testimonialsLength === 0 && (
                <div className="text-center bg-blackSoft30 rounded-xl p-8 xl:p-[2vw]">
                    <p className="text-base md:text-lg xl:text-[2vw] text-primaryBackground">
                        No hay testimonios en video por el momento
                    </p>
                    <p className="text-sm md:text-base xl:text-[1.5vw] text-gray-400 mt-4">
                        Próximamente compartiremos más testimonios de nuestros clientes
                    </p>
                </div>
            )}
        </>
    );
}
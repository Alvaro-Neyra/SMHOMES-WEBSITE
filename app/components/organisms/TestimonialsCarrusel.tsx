import { Suspense } from "react";
import StaticTestimonialCarousel from "./StaticTestimonialsCarrusel";
import DynamicTestimonialCarousel from "./DynamicTestimonialsCarrusel";

export default function TestimonialsCarrusel() {
    return (
        <Suspense fallback={<StaticTestimonialCarousel/>}>
            <DynamicTestimonialCarousel/>
        </Suspense>
    );
}
import VideoSection from "../components/molecules/VideoSection";
import Carrusel from "../components/organisms/Carrusel";
import ExploreSection from "../components/organisms/ExploreSection";
import HousesSection from "../components/organisms/HousesSection";
import { slides } from "../utils/constants";
import WhyChooseUsSection from "../components/molecules/WhyChooseUsSection";
import TestimonialsCarrusel from "../components/organisms/TestimonialsCarrusel";

export default function Home() {
  return (
    <section>
      <Carrusel slides={slides} />
      <HousesSection />
      <ExploreSection />
      <WhyChooseUsSection />
      <VideoSection
        videoSrc="https://res.cloudinary.com/dbp2p2kwh/video/upload/v1743193266/torrevieja_meiusj.mp4"
        fallbackImage="https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194910/videoprueba_fallback_kkgfch.png"
        title="Encuentra tu Hogar Perfecto"
        subtitle="Descubre las mejores propiedades en venta y alquiler con nuestra inmobiliaria. ¡Tu sueño hecho realidad!"
        buttonText="Ver Propiedades"
        buttonLink="/propiedades"
      />
      <TestimonialsCarrusel />
    </section>
  );
}

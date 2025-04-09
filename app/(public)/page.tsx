import VideoSection from "../components/molecules/VideoSection";
import Carrusel from "../components/organisms/Carrusel";
import ExploreSection from "../components/organisms/ExploreSection";
import HousesSection from "../components/organisms/HousesSection";
import { slides } from "../utils/constants";
import WhyChooseUsSection from "../components/molecules/WhyChooseUsSection";

export default function Home() {
  return (
    <section>
      <Carrusel slides={slides} />
      <HousesSection />
      <ExploreSection />
      <WhyChooseUsSection />
      <VideoSection
        videoSrc="https://res.cloudinary.com/dbp2p2kwh/video/upload/v1743632450/torrevieja_mbxmyv.mp4"
        fallbackImage="/torrevieja_fallback.jpg"
        title="Encuentra tu Hogar Perfecto"
        subtitle="Descubre las mejores propiedades en venta y alquiler con nuestra inmobiliaria. ¡Tu sueño hecho realidad!"
        buttonText="Ver Propiedades"
        buttonLink="/propiedades"
      />
      {/* <TestimonialsCarrusel /> */}
    </section>
  );
}

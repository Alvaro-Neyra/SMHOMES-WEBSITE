import VideoSection from "./components/molecules/VideoSection";
import Carrusel from "./components/organisms/Carrusel";
import ExploreSection from "./components/organisms/ExploreSection";
import HousesSection from "./components/organisms/HousesSection";
import { slides } from "./utils/constants";
import WhyChooseUsSection from "./components/molecules/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <Carrusel slides={slides} />
      <HousesSection />
      <ExploreSection />
      <WhyChooseUsSection />
      <VideoSection
        videoSrc="/torrevieja.mp4"
        fallbackImage="/torrevieja_fallback.jpg"
        title="Encuentra tu Hogar Perfecto"
        subtitle="Descubre las mejores propiedades en venta y alquiler con nuestra inmobiliaria. ¡Tu sueño hecho realidad!"
        buttonText="Ver Propiedades"
        buttonLink="/propiedades"
      />
    </div>
  );
}

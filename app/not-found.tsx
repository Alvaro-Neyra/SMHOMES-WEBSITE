import PropertyCardsCarousel from "./components/molecules/PropertyCardsCarrusel";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import FixedElements from "./components/molecules/FixedElements";
import FormComponent from "./components/molecules/FormComponent";
import { formFields } from "./utils/constants";
import { fetchRandomProperties } from "./utils/data";

export default async function NotFoundPage() {
    const properties = await fetchRandomProperties();
    return (
        <>
            <NavBar active={false} position={"static"} />
            <div className="text-center p-12 bg-blackSoft30">
                <h1 className="text-4xl font-bold mb-4">¡Página no encontrada!</h1>
                <p className="text-lg mb-8">Lo sentimos, la página que estás buscando no existe.</p>
                
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">¿Necesitas ayuda? Contáctanos</h2>
                    <div className="max-w-md mx-auto px-4">
                        <FormComponent
                            namePlaceholder={formFields.namePlaceholder}
                            phonePlaceholder={formFields.phonePlaceholder}
                            emailPlaceholder={formFields.emailPlaceholder}
                            messagePlaceholder={formFields.messagePlaceholder}
                            options={formFields.options}
                        />
                    </div>
                </div>
                
            </div>
            <h2 className="text-2xl font-semibold text-center bg-blackSoft30">Tal vez te interese ver estas propiedades</h2>
            <PropertyCardsCarousel properties={properties}/>
            <Footer />
            <FixedElements />
        </>
    );
}
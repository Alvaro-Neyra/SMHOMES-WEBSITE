import { Suspense } from "react";
import StaticMarcasCarrusel from "../molecules/StaticMarcasCarrusel";
import DynamicMarcasCarrusel from "../molecules/DynamicMarcasCarrusel";

export default function MarcasCarrusel() {
    return (
        <>
            <div className="text-center">
                <h2 className="text-[8vw] sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-primaryColor text-center bg-blackSoftColor pt-[2vw]">Nuestros Colaboradores de Confianza</h2>
                <p className="text-gray-100 bg-blackSoftColor xl:text-[2vw]">Trabajamos con las mejores marcas españolas del sector inmobiliario</p>
            </div>
            <Suspense fallback={<StaticMarcasCarrusel />}>
                <DynamicMarcasCarrusel></DynamicMarcasCarrusel>
            </Suspense>
        </>
    )
}
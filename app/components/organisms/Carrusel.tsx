import { SlidesProps } from "@/app/utils/interfaces";
import { Suspense } from "react";
import StaticCarrusel from "../molecules/StaticCarrusel";
import DynamicCarrusel from "../molecules/DynamicCarrusel";

export default function Carrusel({slides}: {readonly slides: SlidesProps[]}) {
    return (
        <Suspense fallback={<StaticCarrusel slides={slides}/>}>
            <DynamicCarrusel slides={slides}/>
        </Suspense>
    );
}
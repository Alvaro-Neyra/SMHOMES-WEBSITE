import Accordion from "../atoms/Accordion";
import { AccordionProps } from "@/app/utils/interfaces";

export default function FAQ({items}: Readonly<AccordionProps>) {
    return (
        <div>
            <h1 className="text-[5.5vw]  md:text-[5vw] lg:text-[2vw] font-bold text-white text-center mb-[3vw] lg:mb-[2vw]">
                Preguntas Frecuentes
            </h1>
            <Accordion items={items} />
        </div>
    );
}
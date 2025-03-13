import { FAQItems } from "@/app/utils/constants";
import Accordion from "../atoms/Accordion";

export default function FAQ() {
    return (
        <div>
            <h1 className="text-[5.5vw]  md:text-[5vw] lg:text-[2vw] font-bold text-white text-center mb-[3vw] lg:mb-[2vw]">
                Preguntas Frecuentes
            </h1>
            <Accordion items={FAQItems} />
        </div>
    );
}
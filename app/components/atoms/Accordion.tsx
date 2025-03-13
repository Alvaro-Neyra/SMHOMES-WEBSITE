"use client";
import { AccordionProps } from "@/app/utils/interfaces";
import React, { useState } from "react";


const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden bg-blackSoft30">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left px-6 py-4 flex justify-between items-center bg-primaryBackground hover:bg-secondaryBackground transition-colors duration-300"
                    >
                        <span className="text-white font-bold text-[4vw] md:text-[2vw] lg:text-[1.5vw]">{item.title}</span>
                        <svg
                            className={`w-6 h-6 text-blackSoft transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="p-6 text-gray-300 text-sm lg:text-base xl:text-[1.2vw] xl:leading-[1.5vw]">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
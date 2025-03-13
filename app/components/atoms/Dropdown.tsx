"use client";

import React, { useState } from "react";

interface DropdownProps {
    label: string;
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-2 rounded-md xl:px-[1.5vw] xl:py-[.5vw] xl:rounded-[.5vw] xl:text-[1vw] flex justify-between items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondaryBackground bg-blackSoft30`}
            >
                <span>{selectedOption || label}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
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

            {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-blackSoft rounded-md shadow-lg overflow-hidden border-secondaryBackground border-2">
                    <ul>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(option)}
                                className={`px-4 py-2 xl:text-[1vw] text-gray-10 cursor-pointer hover:bg-secondaryBackground hover:text-white transition-colors duration-300 ${selectedOption === option ? "bg-secondaryBackground text-white" : ""
                                    }`}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
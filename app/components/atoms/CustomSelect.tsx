import React, { useState } from "react";

interface CustomSelectProps {
    options: string[];
    label: string;
    onSelect: (selectedOption: string) => void; // Callback para manejar la selección
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-10">{label}</label>

            <div className="flex flex-wrap gap-2">
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(option)}
                        className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${selectedOption === option
                                ? "bg-secondaryBackground text-white"
                                : "bg-blackSoft30 text-gray-10 hover:bg-secondaryBackground hover:text-white"
                            }`}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomSelect;
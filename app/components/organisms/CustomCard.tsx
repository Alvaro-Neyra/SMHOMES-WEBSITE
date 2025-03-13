import React from "react";

interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonLink?: string;
    stats: { icon: string; value: string; label: string }[];
    formFields: {
        namePlaceholder: string;
        phonePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        options: string[];
    };
    gdprText: string;
}

const CustomCard: React.FC<CardProps> = ({
    title,
    subtitle,
    description,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonLink,
    secondaryButtonLink,
    stats,
    formFields,
    gdprText,
}) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    {subtitle && (
                        <h2 className="text-lg font-semibold text-gray-500 mb-2">
                            {subtitle}
                        </h2>
                    )}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                    {description && (
                        <p className="text-gray-700 mb-6">{description}</p>
                    )}
                    {primaryButtonText && primaryButtonLink && (
                        <a
                            href={primaryButtonLink}
                            className="btn btn-secondary bg-blue-500 text-white py-2 px-4 rounded inline-block mb-4"
                        >
                            {primaryButtonText}
                        </a>
                    )}
                    {secondaryButtonText && secondaryButtonLink && (
                        <a
                            href={secondaryButtonLink}
                            className="btn btn-primary bg-gray-800 text-white py-2 px-4 rounded inline-block"
                        >
                            {secondaryButtonText}
                        </a>
                    )}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between mb-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <img src={stat.icon} alt={`${stat.label} icon`} className="w-6 h-6" />
                                <div>
                                    <span className="font-bold text-lg">{stat.value}</span>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="space-y-4">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder={formFields.namePlaceholder}
                                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 18c1.657 0 3-4.03 3-9s-1.343-9-3-9-3 4.03-3 9 1.343 9 3 9z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder={formFields.phonePlaceholder}
                                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M3 16l7.89-5.26a2 2 0 012.22 0L21 16"
                                />
                            </svg>
                            <input
                                type="email"
                                placeholder={formFields.emailPlaceholder}
                                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <textarea
                            placeholder={formFields.messagePlaceholder}
                            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                ¿Cuándo quieres vender?
                            </label>
                            <select className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                {formFields.options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-500"
                            />
                            <label className="text-sm text-gray-700">
                                Marque la casilla para contactarnos y acepte que su información
                                se use de acuerdo con nuestra{" "}
                                <a href="/privacidad/" className="text-blue-500">
                                    Política de privacidad
                                </a>
                                .
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Enviar
                        </button>

                        <div className="text-xs text-gray-600 mt-4">
                            <p>{gdprText}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
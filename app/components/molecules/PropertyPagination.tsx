"use client";
import { PropertyPaginationProps } from "@/app/utils/interfaces";
import PropertyCard from "./PropertyCard";
import { useState } from "react";

const PropertyPagination: React.FC<PropertyPaginationProps> = ({ properties, itemsPerPage = 6 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(properties.length / itemsPerPage);

    const indexOfLastProperty = currentPage * itemsPerPage;
    const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md 2xl:text-3xl 2xl:px-8 2xl:py-6 ${currentPage === 1
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-primaryBackground hover:bg-secondaryBackground'
                            } text-white transition-colors duration-300`}
                    >
                        Anterior
                    </button>

                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => {
                            const pageNumber = index + 1;
                            if (
                                pageNumber === 1 ||
                                pageNumber === totalPages ||
                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => paginate(pageNumber)}
                                        className={`w-10 h-10 rounded-md 2xl:text-3xl flex justify-center items-center 2xl:px-8 2xl:py-10 ${currentPage === pageNumber
                                            ? 'bg-primaryBackground text-white'
                                            : 'bg-blackSoft30 text-gray-300 hover:bg-gray-700'
                                            } transition-colors duration-300`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            }
                            if (
                                (pageNumber === currentPage - 2 && pageNumber > 2) ||
                                (pageNumber === currentPage + 2 && pageNumber < totalPages - 1)
                            ) {
                                return (
                                    <span
                                        key={pageNumber}
                                        className="w-10 h-10 flex items-center justify-center text-gray-300 2xl:text-3xl 2xl:px-8 2xl:py-6"
                                    >
                                        ...
                                    </span>
                                );
                            }
                            return null;
                        })}
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-md 2xl:text-3xl 2xl:px-8 2xl:py-6 ${currentPage === totalPages
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-primaryBackground hover:bg-secondaryBackground'
                            } text-white transition-colors duration-300`}
                    >
                        Siguiente
                    </button>
                </div>
            )}

            <div className="text-center text-gray-400 2xl:text-3xl">
                Mostrando {indexOfFirstProperty + 1}-{Math.min(indexOfLastProperty, properties.length)} de {properties.length} propiedades
            </div>
        </div>
    );
};

export default PropertyPagination;
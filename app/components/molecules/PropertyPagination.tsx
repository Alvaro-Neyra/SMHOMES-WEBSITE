"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyImage {
    id: string;
    url: string;
    alt: string;
}

interface Property {
    id: string;
    type: 'casa' | 'departamento' | 'terreno' | 'local' | 'oficina';
    address: string;
    constructionArea: number;
    landArea: number;
    bedrooms: number;
    bathrooms: number;
    hasPool: boolean;
    price: number;
    currency: 'USD' | 'EUR' | 'MXN';
    images: PropertyImage[];
}

interface PropertyPaginationProps {
    properties: Property[];
    itemsPerPage?: number;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-blackSoft30 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] border border-primaryBackground border-opacity-30">
            {/* Image Carousel */}
            <div className="relative w-full h-64">
                <Image
                    src={property.images[currentImageIndex].url}
                    alt={property.images[currentImageIndex].alt}
                    fill
                    className="object-cover"
                />

                {/* Navigation arrows */}
                <button
                    onClick={(e) => { e.preventDefault(); prevImage(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-blackSoft30 bg-opacity-70 rounded-full p-2 text-white"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>

                <button
                    onClick={(e) => { e.preventDefault(); nextImage(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blackSoft30 bg-opacity-70 rounded-full p-2 text-white"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Image counter */}
                <div className="absolute bottom-2 right-2 bg-blackSoft30 bg-opacity-70 px-2 py-1 rounded text-xs text-white">
                    {currentImageIndex + 1}/{property.images.length}
                </div>

                {/* Property type badge */}
                <div className="absolute top-2 left-2 bg-primaryBackground text-white text-xs px-2 py-1 rounded">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
            </div>

            {/* Property details */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white truncate">{property.address}</h3>
                </div>

                <div className="text-xl font-bold text-primaryBackground mb-3">
                    {property.currency === 'USD' && '$'}
                    {property.currency === 'EUR' && '€'}
                    {property.currency === 'MXN' && '$'}
                    {property.price.toLocaleString()}
                    {property.currency === 'MXN' && ' MXN'}
                </div>

                {/* Property features with icons */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center space-x-1 text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primaryBackground" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{property.constructionArea} m²</span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primaryBackground" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V2zm-1 11v6a1 1 0 001 1h10a1 1 0 001-1v-6h-2v4a1 1 0 01-1 1H7a1 1 0 01-1-1v-4H4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{property.landArea} m² terreno</span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primaryBackground" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M3 8a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{property.bedrooms} hab.</span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primaryBackground" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V2zm-1 11v6a1 1 0 001 1h10a1 1 0 001-1v-6h-2v4a1 1 0 01-1 1H7a1 1 0 01-1-1v-4H4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{property.bathrooms} baños</span>
                    </div>

                    {property.hasPool && (
                        <div className="flex items-center space-x-1 text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primaryBackground" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">Piscina</span>
                        </div>
                    )}
                </div>

                <Link href={`/propiedades/${property.id}`} className="block w-full bg-primaryBackground text-white text-center py-2 rounded hover:bg-secondaryBackground transition duration-300">
                    Ver detalle
                </Link>
            </div>
        </div>
    );
};

const PropertyPagination: React.FC<PropertyPaginationProps> = ({ properties, itemsPerPage = 6 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(properties.length / itemsPerPage);

    // Get current properties
    const indexOfLastProperty = currentPage * itemsPerPage;
    const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Go to next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Go to previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="space-y-8">
            {/* Properties grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md ${currentPage === 1
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-primaryBackground hover:bg-secondaryBackground'
                            } text-white transition-colors duration-300`}
                    >
                        Anterior
                    </button>

                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => {
                            const pageNumber = index + 1;
                            // Show limited page numbers
                            if (
                                pageNumber === 1 ||
                                pageNumber === totalPages ||
                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => paginate(pageNumber)}
                                        className={`w-10 h-10 rounded-md ${currentPage === pageNumber
                                                ? 'bg-primaryBackground text-white'
                                                : 'bg-blackSoft30 text-gray-300 hover:bg-gray-700'
                                            } transition-colors duration-300`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            }
                            // Show ellipsis
                            if (
                                (pageNumber === currentPage - 2 && pageNumber > 2) ||
                                (pageNumber === currentPage + 2 && pageNumber < totalPages - 1)
                            ) {
                                return (
                                    <span
                                        key={pageNumber}
                                        className="w-10 h-10 flex items-center justify-center text-gray-300"
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
                        className={`px-4 py-2 rounded-md ${currentPage === totalPages
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-primaryBackground hover:bg-secondaryBackground'
                            } text-white transition-colors duration-300`}
                    >
                        Siguiente
                    </button>
                </div>
            )}

            {/* Properties count */}
            <div className="text-center text-gray-400">
                Mostrando {indexOfFirstProperty + 1}-{Math.min(indexOfLastProperty, properties.length)} de {properties.length} propiedades
            </div>
        </div>
    );
};

export default PropertyPagination;
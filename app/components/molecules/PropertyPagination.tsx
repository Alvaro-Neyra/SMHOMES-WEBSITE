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
            <div className="relative w-full h-64">
                <Image
                    src={property.images[currentImageIndex].url}
                    alt={property.images[currentImageIndex].alt}
                    fill
                    className="object-cover"
                />

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

                <div className="absolute bottom-2 right-2 bg-blackSoft30 bg-opacity-70 px-2 py-1 rounded text-xs text-white">
                    {currentImageIndex + 1}/{property.images.length}
                </div>

                <div className="absolute top-2 left-2 bg-primaryBackground text-white text-xs px-2 py-1 rounded">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
            </div>

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

                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center space-x-1 text-gray-200">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 15.0001C8 15.0001 9.6 17.0001 12 17.0001C14.4 17.0001 16 15.0001 16 15.0001M3 14.6001V12.1302C3 10.9815 3 10.4071 3.14805 9.87819C3.2792 9.40966 3.49473 8.96898 3.78405 8.5778C4.11067 8.1362 4.56404 7.78358 5.47078 7.07834L8.07078 5.05612C9.47608 3.96311 10.1787 3.4166 10.9546 3.20653C11.6392 3.02116 12.3608 3.02116 13.0454 3.20653C13.8213 3.4166 14.5239 3.96311 15.9292 5.05612L18.5292 7.07834C19.436 7.78358 19.8893 8.1362 20.2159 8.5778C20.5053 8.96898 20.7208 9.40966 20.8519 9.87819C21 10.4071 21 10.9815 21 12.1302V14.6001C21 16.8403 21 17.9604 20.564 18.816C20.1805 19.5687 19.5686 20.1806 18.816 20.5641C17.9603 21.0001 16.8402 21.0001 14.6 21.0001H9.4C7.15979 21.0001 6.03969 21.0001 5.18404 20.5641C4.43139 20.1806 3.81947 19.5687 3.43597 18.816C3 17.9604 3 16.8403 3 14.6001Z" stroke="#D7BF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <span className="text-sm">{property.constructionArea} m²</span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10.9436 3.25H13.0564C14.8942 3.24998 16.3498 3.24997 17.489 3.40314C18.6614 3.56076 19.6104 3.89288 20.3588 4.64124C21.1071 5.38961 21.4392 6.33856 21.5969 7.51098C21.7482 8.63675 21.75 10.0715 21.75 11.8787C22.0939 12.1624 22.3669 12.5282 22.5407 12.9476C22.661 13.238 22.7076 13.5375 22.7292 13.8546C22.75 14.1592 22.75 14.5303 22.75 14.9747V15.0253C22.75 15.4697 22.75 15.8408 22.7292 16.1454C22.7076 16.4625 22.661 16.762 22.5407 17.0524C22.2616 17.7262 21.7262 18.2616 21.0524 18.5407C20.762 18.661 20.4625 18.7076 20.1454 18.7292C20.0242 18.7375 19.8926 18.7425 19.75 18.7455V20C19.75 20.4142 19.4142 20.75 19 20.75C18.5858 20.75 18.25 20.4142 18.25 20V18.75H5.75V20C5.75 20.4142 5.41421 20.75 5 20.75C4.58579 20.75 4.25 20.4142 4.25 20V18.7455C4.10741 18.7425 3.97577 18.7375 3.85464 18.7292C3.53754 18.7076 3.23801 18.661 2.94762 18.5407C2.27379 18.2616 1.73844 17.7262 1.45933 17.0524C1.33905 16.762 1.29241 16.4625 1.27077 16.1454C1.24999 15.8408 1.24999 15.4697 1.25 15.0253V14.9748C1.24999 14.5303 1.24999 14.1592 1.27077 13.8546C1.29241 13.5375 1.33905 13.238 1.45933 12.9476C1.63307 12.5282 1.90609 12.1624 2.25 11.8787C2.25001 10.0715 2.25178 8.63675 2.40314 7.51098C2.56076 6.33856 2.89288 5.38961 3.64124 4.64124C4.38961 3.89288 5.33856 3.56076 6.51098 3.40314C7.65019 3.24997 9.10582 3.24998 10.9436 3.25ZM3.75039 11.2789C3.78493 11.2758 3.81968 11.2732 3.85464 11.2708C4.1064 11.2536 4.40354 11.2506 4.75 11.2501L4.75 10.448C4.74997 9.54952 4.74995 8.8003 4.82991 8.20552C4.91432 7.57773 5.09999 7.01093 5.55546 6.55546C6.01093 6.09999 6.57773 5.91432 7.20552 5.82991C7.8003 5.74995 8.54952 5.74997 9.448 5.75H14.552C15.4505 5.74997 16.1997 5.74995 16.7945 5.82991C17.4223 5.91432 17.9891 6.09999 18.4445 6.55546C18.9 7.01093 19.0857 7.57773 19.1701 8.20552C19.2501 8.8003 19.25 9.54952 19.25 10.448V11.2501C19.5965 11.2506 19.8936 11.2536 20.1454 11.2708C20.1803 11.2732 20.2151 11.2758 20.2496 11.2789C20.2472 9.74405 20.2303 8.60396 20.1102 7.71085C19.975 6.70476 19.7213 6.12511 19.2981 5.7019C18.8749 5.27869 18.2952 5.02502 17.2892 4.88976C16.2615 4.75159 14.9068 4.75 13 4.75H11C9.09318 4.75 7.73851 4.75159 6.71085 4.88976C5.70476 5.02502 5.12511 5.27869 4.7019 5.7019C4.27869 6.12511 4.02502 6.70476 3.88976 7.71085C3.76968 8.60396 3.75276 9.74405 3.75039 11.2789ZM17.75 11.25V10.5C17.75 9.53599 17.7484 8.88843 17.6835 8.40539C17.6214 7.94393 17.5142 7.74643 17.3839 7.61612C17.2536 7.4858 17.0561 7.37858 16.5946 7.31654C16.1116 7.25159 15.464 7.25 14.5 7.25H12.75V11.25H17.75ZM11.25 11.25V7.25H9.5C8.53599 7.25 7.88843 7.25159 7.40539 7.31654C6.94393 7.37858 6.74643 7.4858 6.61612 7.61612C6.4858 7.74643 6.37858 7.94393 6.31654 8.40539C6.25159 8.88843 6.25 9.53599 6.25 10.5V11.25H11.25ZM3.95674 12.7673C3.71602 12.7837 3.5988 12.8132 3.52165 12.8452C3.21536 12.972 2.97202 13.2154 2.84515 13.5216C2.81319 13.5988 2.78372 13.716 2.76729 13.9567C2.75041 14.2042 2.75 14.5238 2.75 15C2.75 15.4762 2.75041 15.7958 2.76729 16.0433C2.78372 16.284 2.81319 16.4012 2.84515 16.4784C2.97202 16.7846 3.21536 17.028 3.52165 17.1549C3.5988 17.1868 3.71602 17.2163 3.95674 17.2327C4.20421 17.2496 4.5238 17.25 5 17.25H19C19.4762 17.25 19.7958 17.2496 20.0433 17.2327C20.284 17.2163 20.4012 17.1868 20.4784 17.1549C20.7846 17.028 21.028 16.7846 21.1549 16.4784C21.1868 16.4012 21.2163 16.284 21.2327 16.0433C21.2496 15.7958 21.25 15.4762 21.25 15C21.25 14.5238 21.2496 14.2042 21.2327 13.9567C21.2163 13.716 21.1868 13.5988 21.1549 13.5216C21.028 13.2154 20.7846 12.972 20.4784 12.8452C20.4012 12.8132 20.284 12.7837 20.0433 12.7673C19.7958 12.7504 19.4762 12.75 19 12.75H5C4.5238 12.75 4.20421 12.7504 3.95674 12.7673Z" fill="#D7BF66"></path> </g></svg>
                        <span className="text-sm">{property.bedrooms} hab.</span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-200">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"className='w-6'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.0827C3 13.0059 3 12.9675 3.00211 12.9351C3.0347 12.4339 3.43395 12.0347 3.93511 12.0021C3.96752 12 4.00591 12 4.08268 12H19.9173C19.9941 12 20.0325 12 20.0649 12.0021C20.5661 12.0347 20.9653 12.4339 20.9979 12.9351C21 12.9675 21 13.0059 21 13.0827C21 13.4784 21 13.6762 20.9859 13.8977C20.7773 17.1854 17.983 20.0867 14.7053 20.4186C14.4845 20.441 14.3558 20.4458 14.0982 20.4555C13.364 20.4831 12.6493 20.5 12 20.5C11.3507 20.5 10.636 20.4831 9.90183 20.4555C9.64425 20.4458 9.51545 20.441 9.29467 20.4186C6.01705 20.0867 3.22272 17.1854 3.01406 13.8977C3 13.6762 3 13.4784 3 13.0827Z" stroke="#D7BF66" strokeWidth="1.5"></path> <path d="M6 20L5 22" stroke="#D7BF66" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M18 20L19 22" stroke="#D7BF66" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M2 12H22" stroke="#D7BF66" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM7.59973 3.49934L8.29609 3.22079L8.29609 3.22079L7.59973 3.49934ZM7.97885 4.44713L8.30713 5.12147L7.97885 4.44713ZM6.36212 6.19232L7.05701 6.47451L6.36212 6.19232ZM10.577 4.37783L10.2824 5.06753L10.577 4.37783ZM6.34559 8.74156L5.6478 9.01651C5.72221 9.20535 5.86997 9.35596 6.05735 9.43396C6.24473 9.51197 6.45572 9.51069 6.64215 9.43044L6.34559 8.74156ZM12.3063 6.17548L12.6029 6.86436C12.975 6.70417 13.1526 6.27744 13.0041 5.90053L12.3063 6.17548ZM3.75 13V4.38516H2.25V13H3.75ZM5.38516 2.75C6.05379 2.75 6.65506 3.15708 6.90338 3.77788L8.29609 3.22079C7.81998 2.0305 6.66715 1.25 5.38516 1.25V2.75ZM3.75 4.38516C3.75 3.48209 4.48209 2.75 5.38516 2.75V1.25C3.65366 1.25 2.25 2.65366 2.25 4.38516H3.75ZM6.90338 3.77788L7.2825 4.72568L8.67521 4.16859L8.29609 3.22079L6.90338 3.77788ZM7.04337 8.46661C6.80167 7.85321 6.78638 7.14092 7.05701 6.47451L5.66723 5.91014C5.24692 6.94515 5.26959 8.05665 5.6478 9.01651L7.04337 8.46661ZM12.0098 5.4866L6.04903 8.05268L6.64215 9.43044L12.6029 6.86436L12.0098 5.4866ZM10.2824 5.06753C10.9039 5.33307 11.367 5.83741 11.6086 6.45043L13.0041 5.90053C12.6258 4.94029 11.887 4.12189 10.8717 3.68813L10.2824 5.06753ZM7.05701 6.47451C7.31118 5.8486 7.76827 5.3838 8.30713 5.12147L7.65058 3.77279C6.78337 4.19496 6.06253 4.93671 5.66723 5.91014L7.05701 6.47451ZM8.30713 5.12147C8.91452 4.82579 9.62506 4.78672 10.2824 5.06753L10.8717 3.68813C9.79386 3.22768 8.62874 3.29661 7.65058 3.77279L8.30713 5.12147Z" fill="#D7BF66"></path> </g></svg>
                        <span className="text-sm">{property.bathrooms} baños</span>
                    </div>

                    {property.hasPool && (
                        <div className="flex items-center space-x-1 text-gray-200">
                            <svg fill="#D7BF66" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-6'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23,18.667a4.332,4.332,0,0,1-7.667,2.766,4.328,4.328,0,0,1-6.666,0A4.332,4.332,0,0,1,1,18.667a1,1,0,0,1,2,0,2.334,2.334,0,0,0,4.667,0,1,1,0,0,1,2,0,2.333,2.333,0,1,0,4.666,0,1,1,0,1,1,2,0,2.334,2.334,0,0,0,4.667,0,1,1,0,0,1,2,0ZM16,15V13H8v2a1,1,0,0,1-2,0V6a5.006,5.006,0,0,1,5-5,1,1,0,0,1,0,2A3,3,0,0,0,8,6h8a5.006,5.006,0,0,1,5-5,1,1,0,0,1,0,2,3,3,0,0,0-3,3v9a1,1,0,0,1-2,0Zm0-4V8H8v3Z"></path></g></svg>
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

            <div className="text-center text-gray-400">
                Mostrando {indexOfFirstProperty + 1}-{Math.min(indexOfLastProperty, properties.length)} de {properties.length} propiedades
            </div>
        </div>
    );
};

export default PropertyPagination;
import React from 'react';
import { Home, DollarSign, Search, PiggyBank, Building, ShieldCheck, Users } from 'lucide-react';
import Link from 'next/link';

const RealEstateServices = () => {
    return (
        <section className="w-full py-16 bg-blackSoft30" id="servicios">
            <div className="mx-auto px-4 space-y-[2vw] xl:flex xl:flex-col xl:justify-center xl:items-center xl:space-y-8">
                <div className="text-center mb-12 space-y-[2vw]">
                    <h2 className="text-3xl md:text-4xl xl:text-[4vw] font-bold mb-4">Nuestros Servicios Inmobiliarios</h2>
                    <p className="text-primaryBackground text-lg xl:text-[2vw] xl:leading-[2vw] mx-auto">
                        Te ofrecemos soluciones completas para la compra y venta de propiedades,
                        con el respaldo de profesionales experimentados en el mercado inmobiliario.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-blackSoft30 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="bg-primaryBackground p-6 xl:p-[2vw] flex justify-between items-center">
                            <h3 className="text-2xl xl:text-[2vw] font-bold text-white">Compra de Propiedades</h3>
                            <Search className="text-white" size={32} />
                        </div>
                        <div className="p-6 flex flex-col align-center justify-start gap-[2vw]">
                            <p className="text-gray-100 mb-6 xl:text-[1.5vw]">
                                Te ayudamos a encontrar la propiedad ideal que se ajuste a tus necesidades y presupuesto.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start xl:items-center">
                                    <div className="flex-shrink-0 mr-3 mt-1">
                                        <Search size={20} className="text-primaryColor" />
                                    </div>
                                    <span className="xl:text-[1.5vw]">Búsqueda personalizada según tus criterios específicos</span>
                                </li>
                                <li className="flex items-start xl:items-center">
                                    <div className="flex-shrink-0 mr-3 mt-1">
                                        <Building size={20} className="text-primaryColor" />
                                    </div>
                                    <span className="xl:text-[1.5vw]">Amplio catálogo de propiedades verificadas</span>
                                </li>
                                <li className="flex items-start xl:items-center">
                                    <div className="flex-shrink-0 mr-3 mt-1">
                                        <PiggyBank size={20} className="text-primaryColor" />
                                    </div>
                                    <span className="xl:text-[1.5vw]">Asesoría financiera y opciones de financiamiento</span>
                                </li>
                            </ul>
                            <Link href="/propiedades" className="bg-primaryBackground text-center border-[.2vw] border-primaryBackground text-white xl:text-[1.5vw] px-6 py-3 rounded-lg xl:rounded-[1vw] font-semibold hover:bg-blackSoftColor transition-colors duration-300">
                                Buscar Propiedades
                            </Link>
                        </div>
                    </div>

                    <div className="bg-blackSoft30 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="bg-primaryBackground p-6 xl:p-[2vw] flex justify-between items-center">
                            <h3 className="text-2xl xl:text-[2vw] font-bold text-white">Venta de Propiedades</h3>
                            <DollarSign className="text-white" size={32} />
                        </div>
                        <div className="p-6 flex flex-col align-center justify-start gap-[2vw]">
                            <p className="text-gray-100 mb-6 xl:text-[1.5vw]">
                                Maximizamos el valor de tu propiedad con estrategias de marketing efectivas y negociación experta.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start xl:items-center">
                                    <div className="flex-shrink-0 mr-3 mt-1">
                                        <Home size={20} className="text-primaryColor" />
                                    </div>
                                    <span className="xl:text-[1.5vw]">Valoración profesional de tu propiedad</span>
                                </li>
                                <li className="flex items-start xl:items-center">
                                    <div className="flex-shrink-0 mr-3 mt-1">
                                        <ShieldCheck size={20} className="text-primaryColor" />
                                    </div>
                                    <span className="xl:text-[1.5vw]">Gestión completa del proceso de venta y documentación</span>
                                </li>
                                <li className="flex items-start xl:items-center">
                                    <div className="flex-shrink-0 mr-3 mt-1">
                                        <DollarSign size={20} className="text-primaryColor" />
                                    </div>
                                    <span className="xl:text-[1.5vw]">Estrategias para maximizar el valor de venta</span>
                                </li>
                            </ul>
                            <Link href="/vender" className="bg-primaryBackground border-[.2vw] text-center border-primaryBackground text-white xl:text-[1.5vw] px-6 py-3 rounded-lg xl:rounded-[1vw] font-semibold hover:bg-blackSoftColor transition-colors duration-300">
                                Vender Mi Propiedad
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center xl:py-[2vw] flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-semibold mb-8 xl:text-[4vw]">¿Por qué elegirnos?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 xl:py-[2vw]">
                        <div className="p-6 xl:p-[3vw] space-y-[2vw] bg-blackSoft30 rounded-lg shadow-md">
                            <div className="inline-block p-3 bg-blackSoft rounded-full mb-4 xl:p-[1vw]">
                                <ShieldCheck className="text-primaryColor" size={24} />
                            </div>
                            <h4 className="text-xl font-medium mb-2 xl:text-[2vw]">Confianza y Seguridad</h4>
                            <p className="text-gray-300 xl:text-[1.5vw]">Todas nuestras operaciones son transparentes y seguras</p>
                        </div>
                        <div className="p-6 xl:p-[3vw] space-y-[2vw] bg-blackSoft30 rounded-lg shadow-md">
                            <div className="inline-block p-3 bg-blackSoft rounded-full mb-4 xl:p-[1vw]">
                                <Building className="text-primaryColor" size={24} />
                            </div>
                            <h4 className="text-xl font-medium mb-2 xl:text-[2vw]">Experiencia Comprobada</h4>
                            <p className="text-gray-300 xl:text-[1.5vw]">Más de 10 años en el mercado inmobiliario</p>
                        </div>
                        <div className="p-6 xl:p-[3vw] space-y-[2vw] bg-blackSoft30 rounded-lg shadow-md">
                            <div className="inline-block p-3 bg-blackSoft rounded-full mb-4 xl:p-[1vw]">
                                <Users className="text-primaryColor" size={24} />
                            </div>
                            <h4 className="text-xl font-medium mb-2 xl:text-[2vw]">Atención Personalizada</h4>
                            <p className="text-gray-300 xl:text-[1.5vw]">Asesoramiento adaptado a tus necesidades específicas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealEstateServices;
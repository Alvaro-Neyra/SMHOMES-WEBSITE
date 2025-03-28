"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Property } from "@/app/utils/interfaces";
import { PlusCircle, Trash2, Edit } from "lucide-react";
import PropertyCard from "@/app/components/molecules/PropertyCard";

export default function Dashboard() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [propertyToDelete, setPropertyToDelete] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get<Property[]>("/api/properties", { withCredentials: true });
                setProperties(res.data);
            } catch (error) {
                console.error("Error al cargar las propiedades:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    const handleDeleteClick = (propertyId: string) => {
        setPropertyToDelete(propertyId);
        setDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!propertyToDelete) return;
        
        try {
            await axios.delete(`/api/properties/${propertyToDelete}`, { withCredentials: true });
            setProperties(properties.filter(property => property.id !== propertyToDelete));
            setDeleteModalOpen(false);
        } catch (error) {
            console.error("Error al eliminar la propiedad:", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-blackSoft30 flex items-center justify-center">
                <div className="bg-blackSoft30 p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border-t-4 border-primaryBackground border-solid rounded-full animate-spin"></div>
                        <p className="mt-4 text-white text-xl">Cargando propiedades...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">Gestión de Propiedades</h2>
                <Link 
                    href="/admin/dashboard/new-property" 
                    className="bg-primaryBackground hover:bg-secondaryBackground text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                >
                    <PlusCircle size={18} />
                    <span>Agregar Propiedad</span>
                </Link>
            </div>

            <div className="bg-blackSoft30 rounded-lg p-6 mb-8 border border-primaryBackground border-opacity-30">
                <h3 className="text-xl font-semibold text-white mb-4">Propiedades Destacadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.filter(p => p.features).slice(0, 3).map((property) => (
                        <PropertyCard key={property.id} property={property} scale={false} />
                    ))}
                </div>
            </div>

            <div className="bg-blackSoft30 rounded-lg p-6 border border-primaryBackground border-opacity-30">
                <h3 className="text-xl font-semibold text-white mb-4">Todas las Propiedades</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-primaryBackground border-opacity-30">
                                <th className="py-3 px-4 text-left text-gray-200">Dirección</th>
                                <th className="py-3 px-4 text-left text-gray-200">Tipo</th>
                                <th className="py-3 px-4 text-left text-gray-200">Precio</th>
                                <th className="py-3 px-4 text-left text-gray-200">Habitaciones</th>
                                <th className="py-3 px-4 text-left text-gray-200">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property) => (
                                <tr key={property.id} className="border-b border-primaryBackground border-opacity-10 hover:bg-blackSoft30 hover:bg-opacity-50">
                                    <td className="py-3 px-4 text-white">{property.address}</td>
                                    <td className="py-3 px-4 text-white capitalize">{property.type}</td>
                                    <td className="py-3 px-4 text-white">
                                        {property.currency === 'USD' && '$'}
                                        {property.currency === 'EUR' && '€'}
                                        {property.currency === 'MXN' && '$'}
                                        {property.price.toLocaleString()}
                                        {property.currency === 'MXN' && ' MXN'}
                                    </td>
                                    <td className="py-3 px-4 text-white">{property.bedrooms}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex space-x-3">
                                            <Link 
                                                href={`/admin/dashboard/edit-property/${property.id}`}
                                                className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            <button 
                                                onClick={() => handleDeleteClick(property.id)}
                                                className="text-red-400 hover:text-red-500 transition-colors duration-200"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {deleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-blackSoft p-6 rounded-lg border border-primaryBackground border-opacity-30 w-full max-w-md">
                        <h3 className="text-xl font-bold text-white mb-4">Confirmar Eliminación</h3>
                        <p className="text-gray-200 mb-6">¿Estás seguro de que deseas eliminar esta propiedad? Esta acción no se puede deshacer.</p>
                        <div className="flex justify-end space-x-4">
                            <button 
                                onClick={() => setDeleteModalOpen(false)}
                                className="px-4 py-2 border border-gray-300 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                            >
                                Cancelar
                            </button>
                            <button 
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </>
    );
}
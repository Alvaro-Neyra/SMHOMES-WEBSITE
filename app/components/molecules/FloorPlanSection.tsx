"use client";
import { PropertyImage } from "@/app/utils/interfaces";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface FloorPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
    floorPlan: PropertyImage | string | null;
}

interface FloorPlanSectionProps {
    floorPlan: PropertyImage | string | null;
}

const FloorPlanModal = ({ isOpen, onClose, floorPlan }: FloorPlanModalProps) => {
    if (!isOpen || !floorPlan) return null;
    
    const imageUrl = typeof floorPlan === "string" ? floorPlan : floorPlan.url;
    const imageAlt = typeof floorPlan === "object" && floorPlan.alt ? floorPlan.alt : "Plano de la propiedad";
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl max-h-screen">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-white bg-primaryBackground p-2 rounded-full hover:bg-secondaryBackground transition duration-300"
                    aria-label="Cerrar"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-center h-full">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        className="max-h-[90vh] w-auto object-contain rounded-lg"
                        width={1200}
                        height={900}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export const FloorPlanSection = ({ floorPlan }: FloorPlanSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    if (!floorPlan) return null;
    
    const imageUrl = typeof floorPlan === "string" ? floorPlan : floorPlan.url;
    const imageAlt = typeof floorPlan === "object" && floorPlan.alt ? floorPlan.alt : "Plano de la propiedad";
    
    return (
        <div className="bg-blackSoft30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Plano de la Propiedad</h3>
            <div 
                className="relative cursor-pointer group" 
                onClick={openModal}
                role="button"
                aria-label="Ver plano completo"
            >
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-auto rounded-lg object-contain max-h-[600px] transition-transform duration-300 group-hover:scale-[1.02]"
                    width={800}
                    height={600}
                />
                <div className="absolute top-4 right-4 bg-primaryBackground backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                    Plano de la Propiedad
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <span className="bg-primaryBackground text-white px-4 py-2 rounded-md">
                        Ampliar plano
                    </span>
                </div>
            </div>
            
            <FloorPlanModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                floorPlan={floorPlan} 
            />
        </div>
    );
};
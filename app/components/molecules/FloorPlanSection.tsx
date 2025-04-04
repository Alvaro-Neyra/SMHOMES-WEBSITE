"use client";
import { PropertyImage } from "@/app/utils/interfaces";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface FloorPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
    floorPlans: PropertyImage[] | string[];
    initialIndex?: number;
}

interface FloorPlanSectionProps {
    floorPlans: PropertyImage[] | string[] | null;
}

const FloorPlanModal = ({ isOpen, onClose, floorPlans, initialIndex = 0 }: FloorPlanModalProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    if (!isOpen || !floorPlans || floorPlans.length === 0) return null;

    const currentFloorPlan = floorPlans[currentIndex];
    const imageUrl = typeof currentFloorPlan === "string" ? currentFloorPlan : currentFloorPlan.url;
    const imageAlt = typeof currentFloorPlan === "object" && currentFloorPlan.alt
        ? currentFloorPlan.alt
        : `Plano de la propiedad ${currentIndex + 1}`;

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % floorPlans.length);
    };

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + floorPlans.length) % floorPlans.length);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-screen">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-primaryBackground p-2 rounded-full hover:bg-secondaryBackground transition duration-300"
                    aria-label="Cerrar"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex items-center justify-center h-full">
                    {floorPlans.length > 1 && (
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 text-white bg-primaryBackground p-1 rounded-full hover:bg-secondaryBackground transition duration-300"
                            aria-label="Plano anterior"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                    )}

                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        className="max-h-[90vh] w-auto object-contain rounded-lg"
                        width={1200}
                        height={900}
                        quality={100}
                    />

                    {floorPlans.length > 1 && (
                        <button
                            onClick={goToNext}
                            className="absolute right-4 text-white bg-primaryBackground p-1 rounded-full hover:bg-secondaryBackground transition duration-300"
                            aria-label="Plano siguiente"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {floorPlans.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {floorPlans.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full ${
                                    index === currentIndex ? "bg-primaryBackground" : "bg-gray-400"
                                }`}
                                aria-label={`Ver plano ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const FloorPlanSection = ({ floorPlans }: FloorPlanSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!floorPlans || floorPlans.length === 0) return null;

    const floorPlansArray = Array.isArray(floorPlans) ? floorPlans : [floorPlans];

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    if (floorPlansArray.length === 1) {
        const floorPlan = floorPlansArray[0];
        const imageUrl = typeof floorPlan === "string" ? floorPlan : floorPlan.url;
        const imageAlt = typeof floorPlan === "object" && floorPlan.alt ? floorPlan.alt : "Plano de la propiedad";

        return (
            <div className="bg-blackSoft30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Plano de la Propiedad</h3>
                <div
                    className="relative cursor-pointer group"
                    onClick={() => openModal(0)}
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
                    floorPlans={floorPlansArray}
                />
            </div>
        );
    }

    return (
        <div className="bg-blackSoft30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Planos de la Propiedad</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {floorPlansArray.map((floorPlan, index) => {
                    const imageUrl = typeof floorPlan === "string" ? floorPlan : floorPlan.url;
                    const imageAlt = typeof floorPlan === "object" && floorPlan.alt
                        ? floorPlan.alt
                        : `Plano de la propiedad ${index + 1}`;

                    return (
                        <div
                            key={typeof floorPlan === "object" ? floorPlan.id || index : index}
                            className="relative cursor-pointer group"
                            onClick={() => openModal(index)}
                            role="button"
                            aria-label={`Ver plano ${index + 1} completo`}
                        >
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                className="w-full h-64 rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                width={400}
                                height={300}
                            />
                            <div className="absolute top-2 right-2 bg-primaryBackground backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                                Plano {index + 1}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <span className="bg-primaryBackground text-white px-3 py-1 rounded-md text-sm">
                                    Ampliar plano
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <FloorPlanModal
                isOpen={isModalOpen}
                onClose={closeModal}
                floorPlans={floorPlansArray}
                initialIndex={selectedIndex}
            />
        </div>
    );
};

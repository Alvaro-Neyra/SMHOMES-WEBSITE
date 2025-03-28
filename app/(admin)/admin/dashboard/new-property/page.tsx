"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PropertyFormData, Property } from "@/app/utils/interfaces";
import PropertyForm from "@/app/components/molecules/PropertyForm";

export default function NewPropertyPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const initialFormData: PropertyFormData = {
        type: "casa",
        name: "",
        address: "",
        city: "",
        state: "",
        constructionArea: 0,
        landArea: 0,
        bedrooms: 1,
        bathrooms: 1,
        hasPool: false,
        price: 0,
        currency: "USD",
        images: [],
        floorPlan: undefined,
        description: "",
        features: [],
        distanceToBeach: 0,
        elevator: false,
        usableArea: 0,
        coordinates: {
            lat: 0,
            lng: 0,
        },
        googleMapsUrl: "",
        selled: false,
        createdAt: new Date(),
        tour3dUrl: "",
    };

    const handleSubmit = async (formData: PropertyFormData) => {
        setLoading(true);

        try {
            const propertyData: Property = {
                ...formData,
                id: "", // El backend generará el ID automáticamente
            };

            await axios.post("/api/properties", propertyData, { withCredentials: true });
            alert("Propiedad creada exitosamente");
            router.push("/admin/dashboard");
        } catch (error) {
            console.error("Error al crear la propiedad:", error);
            alert("Error al crear la propiedad. Por favor, intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Agregar Nueva Propiedad</h2>
            <PropertyForm
                initialData={initialFormData}
                onSubmit={handleSubmit}
                isLoading={loading}
                isEdit={false}
            />
        </div>
    );
}
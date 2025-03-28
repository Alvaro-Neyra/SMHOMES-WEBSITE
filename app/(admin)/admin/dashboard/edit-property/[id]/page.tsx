"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { Property, PropertyFormData } from "@/app/utils/interfaces";
import PropertyForm from "@/app/components/molecules/PropertyForm";

export default function EditPropertyPage() {
    const router = useRouter();
    const params = useParams();
    const propertyId = params.id as string;

    const [loading, setLoading] = useState(false);
    const [fetchingProperty, setFetchingProperty] = useState(true);
    const [propertyData, setPropertyData] = useState<PropertyFormData | null>(null);

    const toPropertyFormData = (property: Property): PropertyFormData => {
        return {
            id: property.id,
            type: property.type,
            name: property.name || "",
            address: property.address || "",
            city: property.city || "",
            state: property.state || "",
            constructionArea: property.constructionArea || 0,
            landArea: property.landArea ?? 0,
            bedrooms: property.bedrooms || 0,
            bathrooms: property.bathrooms || 0,
            hasPool: property.hasPool || false,
            price: property.price || 0,
            currency: property.currency || "USD",
            images: property.images || [],
            floorPlan: property.floorPlan || undefined,
            description: property.description ?? "",
            features: property.features || [],
            distanceToBeach: property.distanceToBeach ?? 0,
            elevator: property.elevator || false,
            usableArea: property.usableArea ?? 0,
            coordinates: property.coordinates || { lat: 0, lng: 0 },
            googleMapsUrl: property.googleMapsUrl ?? "",
            selled: property.selled || false,
            createdAt: property.createdAt || new Date(),
            tour3dUrl: property.tour3dUrl ?? "",
        };
    };

    useEffect(() => {
        if (!propertyId) return;

        const fetchProperty = async () => {
            try {
                const res = await axios.get<Property>(`/api/properties/${propertyId}`, { withCredentials: true });
                const data = res.data;
                const formData = toPropertyFormData(data);
                setPropertyData(formData);
            } catch (error) {
                console.error("Error al cargar la propiedad:", error);
                alert("Error al cargar los datos de la propiedad");
            } finally {
                setFetchingProperty(false);
            }
        };

        fetchProperty();
    }, [propertyId]);

    const handleSubmit = async (formData: PropertyFormData) => {
        setLoading(true);

        console.log("Enviado formulario:", formData);

        try {
            await axios.put(`/api/properties/${propertyId}`, formData, { withCredentials: true });
            alert("Propiedad actualizada exitosamente");
            router.push("/admin/dashboard");
        } catch (error) {
            console.error("Error al actualizar la propiedad:", error);
            alert("Error al actualizar la propiedad. Por favor, intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    if (fetchingProperty || !propertyData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Cargando datos de la propiedad...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-4">
                <Link href="/admin/dashboard" className="mr-4">
                    <ArrowLeft />
                </Link>
                <h1 className="text-2xl font-bold">Editar Propiedad</h1>
            </div>
            <PropertyForm
                initialData={propertyData}
                onSubmit={handleSubmit}
                isLoading={loading}
                isEdit={true}
            />
        </div>
    );
}
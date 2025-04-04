"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PropertyFormData, PropertyImage } from "@/app/utils/interfaces";
import PropertyForm from "@/app/components/molecules/PropertyForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
        bedrooms: 0,
        bathrooms: 0,
        hasPool: false,
        price: 0,
        currency: "USD",
        images: [],
        floorPlan: [],
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
        transactionType: ["venta"],
        createdAt: new Date(),
        tour3dUrl: "",
    };

    const handleSubmit = async (formData: PropertyFormData) => {
        try {
            setLoading(true);

            const base64Images = formData.images.filter(
                (img) => typeof img === "object" && img.url?.startsWith("data:")
            );

            const existingImages = formData.images.filter(
                (img) => typeof img === "object" && img.url && !img.url.startsWith("data:")
            );

            let uploadedImages = [];
            if (base64Images.length > 0) {
                const imagesForUpload = base64Images.map((img) =>
                    typeof img === "object" ? img.url : img
                );

                const uploadResponse = await fetch("/api/upload", {
                    method: "POST",
                    body: JSON.stringify({ images: imagesForUpload }),
                    headers: { "Content-Type": "application/json" },
                });

                const uploadData = await uploadResponse.json();
                uploadedImages = uploadData.images || [];
            }

            const formattedImages = [
                ...existingImages.map((img) => ({
                    url: img.url,
                    public_id: img.public_id ?? `existing-${Math.random().toString(36).substring(2)}`,
                    alt: img.alt ?? "",
                })),
                ...uploadedImages.map((img: PropertyImage) => ({
                    url: img.url,
                    public_id: img.public_id ?? `cloud-${Math.random().toString(36).substring(2)}`,
                    alt: img.alt ?? "",
                })),
            ];

            let formattedFloorPlans = null;
            if (formData.floorPlan && formData.floorPlan.length > 0) {
                formattedFloorPlans = [];

                // Procesar cada plano en el array
                for (const floorPlan of formData.floorPlan) {
                    if (typeof floorPlan === "object") {
                        // Si es un objeto de tipo PropertyImage
                        if (floorPlan.url.startsWith("data:")) {
                            // Si es una imagen nueva en base64
                            const uploadResponse = await fetch("/api/upload", {
                                method: "POST",
                                body: JSON.stringify({ images: [floorPlan.url] }),
                                headers: { "Content-Type": "application/json" },
                            });

                            const uploadData = await uploadResponse.json();
                            const uploadedFloorPlan = uploadData.images?.[0];

                            if (uploadedFloorPlan) {
                                formattedFloorPlans.push({
                                    url: uploadedFloorPlan.url,
                                    public_id: uploadedFloorPlan.public_id,
                                    alt: floorPlan.alt || `Plano de la propiedad ${formattedFloorPlans.length + 1}`,
                                    id: floorPlan.id || `floor-${Math.random().toString(36).substring(2)}`
                                });
                            }
                        } else {
                            // Si es una imagen existente
                            formattedFloorPlans.push({
                                url: floorPlan.url,
                                public_id: floorPlan.public_id ?? `existing-${Math.random().toString(36).substring(2)}`,
                                alt: floorPlan.alt || `Plano de la propiedad ${formattedFloorPlans.length + 1}`,
                                id: floorPlan.id || `floor-${Math.random().toString(36).substring(2)}`
                            });
                        }
                    } else if (typeof floorPlan === "string") {
                        // Si es una URL de string directa
                        if (floorPlan.startsWith("data:")) {
                            // Si es una imagen nueva en base64
                            const uploadResponse = await fetch("/api/upload", {
                                method: "POST",
                                body: JSON.stringify({ images: [floorPlan] }),
                                headers: { "Content-Type": "application/json" },
                            });

                            const uploadData = await uploadResponse.json();
                            const uploadedFloorPlan = uploadData.images?.[0];

                            if (uploadedFloorPlan) {
                                formattedFloorPlans.push({
                                    url: uploadedFloorPlan.url,
                                    public_id: uploadedFloorPlan.public_id,
                                    alt: `Plano de la propiedad ${formattedFloorPlans.length + 1}`,
                                    id: `floor-${Math.random().toString(36).substring(2)}`
                                });
                            }
                        } else {
                            // Si es una URL existente
                            formattedFloorPlans.push({
                                url: floorPlan,
                                public_id: `existing-${Math.random().toString(36).substring(2)}`,
                                alt: `Plano de la propiedad ${formattedFloorPlans.length + 1}`,
                                id: `floor-${Math.random().toString(36).substring(2)}`
                            });
                        }
                    }
                }
            }

            const hasBase64 = formattedImages.some((img) => img.url.startsWith("data:"));
            if (hasBase64) {
                throw new Error("Aún hay imágenes en base64 que no se procesaron correctamente");
            }

            const propertyDataToSend = {
                ...formData,
                images: formattedImages,
                floorPlan: formattedFloorPlans,
            };

            const response = await axios.post("/api/properties", propertyDataToSend, {
                withCredentials: true,
                timeout: 60000,
            });

            if (!response.data.success) {
                throw new Error(response.data.error || "Error al crear la propiedad");
            }

            alert("Propiedad creada exitosamente");
            router.push("/admin/dashboard");
        } catch (error) {
            console.error("Error al crear la propiedad:", error);
            alert(error instanceof Error ? error.message : "No se pudo crear la propiedad.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-4">
                <Link href="/admin/dashboard" className="mr-4">
                    <ArrowLeft />
                </Link>
                <h1 className="text-2xl font-bold">Agregar Nueva Propiedad</h1>
            </div>
            <PropertyForm
                initialData={initialFormData}
                onSubmit={handleSubmit}
                isLoading={loading}
                isEdit={false}
            />
        </div>
    );
}
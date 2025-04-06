"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { Property, PropertyFormData, PropertyImage } from "@/app/utils/interfaces";
import PropertyForm from "@/app/components/molecules/PropertyForm";
import { deleteImagesFromCloudinary } from "@/app/utils/imageService";

export default function EditPropertyPage() {
    const router = useRouter();
    const params = useParams();
    const propertyId = params.id as string;

    const [loading, setLoading] = useState(false);
    const [fetchingProperty, setFetchingProperty] = useState(true);
    const [propertyData, setPropertyData] = useState<PropertyFormData | null>(null as PropertyFormData | null);
    const [uploadProgress] = useState(0);

    const toPropertyFormData = (property: Property): PropertyFormData => {
        return {
            id: property.id,
            type: property.type,
            name: property.name || "",
            address: property.address || "",
            city: property.city || "",
            state: property.state || "",
            constructionArea: property.constructionArea ?? 0,
            landArea: property.landArea ?? 0,
            bedrooms: property.bedrooms ?? 0,
            bathrooms: property.bathrooms ?? 0,
            halfBathrooms: property.halfBathrooms ?? 0,
            hasGarage: property.hasGarage || false,
            hasGarden: property.hasGarden || false,
            hasBalcony: property.hasBalcony || false,
            hasTerrace: property.hasTerrace || false,
            hasLaundry: property.hasLaundry || false,
            hasStorage: property.hasStorage || false,
            hasFireplace: property.hasFireplace || false,
            hasAirConditioning: property.hasAirConditioning || false,
            hasHeating: property.hasHeating || false,
            hasSecurity: property.hasSecurity || false,
            hasGym: property.hasGym || false,
            hasParking: property.hasParking || false,
            hasPlayground: property.hasPlayground || false,
            hasTennisCourt: property.hasTennisCourt || false,
            hasBeachAccess: property.hasBeachAccess || false,
            hasSeaView: property.hasSeaView || false,
            hasMountainView: property.hasMountainView || false,
            hasCityView: property.hasCityView || false,
            status: property.status || "disponible",
            hasPool: property.hasPool || false,
            price: property.price || 0,
            currency: property.currency || "USD",
            images: property.images || [],
            floorPlan: property.floorPlan || [],
            description: property.description ?? "",
            features: property.features || [],
            distanceToBeach: property.distanceToBeach ?? 0,
            elevator: property.elevator || false,
            usableArea: property.usableArea ?? 0,
            coordinates: property.coordinates || { lat: 0, lng: 0 },
            googleMapsUrl: property.googleMapsUrl ?? "",
            selled: property.selled || false,
            transactionType: property.transactionType || ["venta"],
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
        try {
            setLoading(true);

            const existingImages = propertyData?.images || [];
            const updatedImages = formData.images;

            const imagesToRemove = existingImages.filter((existingImg) => {
                return !updatedImages.some(
                    (updatedImg) =>
                        typeof updatedImg === "object" &&
                        updatedImg.url === existingImg.url
                );
            });

            if (imagesToRemove.length > 0) {
                await deleteImagesFromCloudinary(imagesToRemove.filter(img => img.public_id !== undefined) as { public_id: string }[]);
            }

            const base64Images = formData.images.filter((img) =>
                typeof img === "object" && img.url?.startsWith('data:')
            );

            const existingImagesFiltered = formData.images.filter((img) =>
                typeof img === "object" && img.url && !img.url.startsWith('data:')
            );

            let uploadedImages = [];
            if (base64Images.length > 0) {
                const imagesForUpload = base64Images.map(img =>
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
                ...existingImagesFiltered.map(img => ({
                    url: img.url,
                    public_id: img.public_id ?? `existing-${Math.random().toString(36).substring(2)}`,
                    alt: img.alt ?? ""
                })),
                ...uploadedImages.map((img: { url: string; public_id?: string; alt?: string }) => ({
                    url: img.url,
                    public_id: img.public_id ?? `cloud-${Math.random().toString(36).substring(2)}`,
                    alt: img.alt ?? ""
                }))
            ];

            let formattedFloorPlans = null;

            if (formData.floorPlan && formData.floorPlan.length > 0) {
                formattedFloorPlans = [];

                const existingFloorPlans = propertyData?.floorPlan || [];

                const floorPlansToRemove = Array.isArray(existingFloorPlans)
                    ? existingFloorPlans.filter((existingPlan) => {
                        if (typeof existingPlan === "object" && "public_id" in existingPlan) {
                            return !formData.floorPlan?.some(
                                (updatedPlan) =>
                                    typeof updatedPlan === "object" &&
                                    updatedPlan.url === existingPlan.url
                            );
                        }
                        return false;
                    })
                    : [];

                if (floorPlansToRemove.length > 0) {
                    await deleteImagesFromCloudinary(
                        floorPlansToRemove.filter(plan => {
                            return (plan as PropertyImage).public_id !== undefined;
                        }) as { public_id: string }[]
                    );
                }

                for (const floorPlan of formData.floorPlan) {
                    if (typeof floorPlan === "object") {
                        if (floorPlan.url.startsWith("data:")) {
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
                                    id: floorPlan.id || `floor-${Math.random().toString(36).substring(2)}`, // Generar id único si no lo tiene
                                });
                            }
                        } else {
                            formattedFloorPlans.push({
                                url: floorPlan.url,
                                public_id: floorPlan.public_id ?? `existing-${Math.random().toString(36).substring(2)}`,
                                alt: floorPlan.alt || `Plano de la propiedad ${formattedFloorPlans.length + 1}`,
                                id: floorPlan.id || `floor-${Math.random().toString(36).substring(2)}`,
                            });
                        }
                    }
                    else if (typeof floorPlan === "string") {
                        if (floorPlan.startsWith("data:")) {
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
                                    id: `floor-${Math.random().toString(36).substring(2)}`, // Generar id único
                                });
                            }
                        } else {
                            formattedFloorPlans.push({
                                url: floorPlan,
                                public_id: `existing-${Math.random().toString(36).substring(2)}`,
                                alt: `Plano de la propiedad ${formattedFloorPlans.length + 1}`,
                                id: `floor-${Math.random().toString(36).substring(2)}`,
                            });
                        }
                    }
                }
            }


            const hasBase64 = formattedImages.some(img => img.url.startsWith('data:'));
            if (hasBase64) {
                throw new Error("Aún hay imágenes en base64 que no se procesaron correctamente");
            }

            const updatedPropertyData = {
                ...formData,
                images: formattedImages,
                floorPlan: formattedFloorPlans,
            };

            const response = await fetch(`/api/properties/${propertyId}`, {
                method: "PUT",
                body: JSON.stringify(updatedPropertyData),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Error al actualizar la propiedad");
            }

            alert("Propiedad actualizada exitosamente");
            router.push("/admin/dashboard");
        } catch (error) {
            console.error("Error:", error);
            alert(error instanceof Error ? error.message : "No se pudo actualizar la propiedad.");
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

            {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="mb-4">
                    <p>Subiendo imágenes: {uploadProgress}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <PropertyForm
                initialData={propertyData}
                onSubmit={handleSubmit}
                isLoading={loading}
                isEdit={true}
            />
        </div>
    );
}
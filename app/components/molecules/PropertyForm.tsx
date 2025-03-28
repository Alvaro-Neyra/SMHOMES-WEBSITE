"use client";
import { useState, useRef, ChangeEvent } from "react";
import Link from "next/link";
import { PlusCircle, Upload, X, Image as ImageIcon, Save } from "lucide-react";
import { PropertyFormData, PropertyImage } from "@/app/utils/interfaces";
import Dropdown from "../atoms/Dropdown";
import Image from "next/image";

interface PropertyFormProps {
    readonly initialData: PropertyFormData;
    readonly onSubmit: (formData: PropertyFormData) => Promise<void>;
    readonly isLoading: boolean;
    readonly isEdit?: boolean;
}

export default function PropertyForm({
    initialData,
    onSubmit,
    isLoading,
    isEdit = false
}: PropertyFormProps) {
    const [formData, setFormData] = useState<PropertyFormData>({
        ...initialData,
        googleMapsUrl: initialData.googleMapsUrl ?? "",
        tour3dUrl: initialData.tour3dUrl ?? "",
        selled: initialData.selled || false,
        features: initialData.features || [],
        coordinates: initialData.coordinates || { lat: 0, lng: 0 }
    });

    const [featureInput, setFeatureInput] = useState("");
    const [googleMapsUrl, setGoogleMapsUrl] = useState(initialData.googleMapsUrl ?? "");
    const [matterportUrl, setMatterportUrl] = useState(initialData.tour3dUrl ?? "");
    const [previewImages, setPreviewImages] = useState<PropertyImage[]>(initialData.images || []);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const floorPlanInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target as HTMLInputElement;

        if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked
            });
        } else if (type === "number") {
            setFormData({
                ...formData,
                [name]: parseFloat(value) || 0
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleAddFeature = () => {
        if (featureInput.trim() !== "") {
            setFormData({
                ...formData,
                features: [...(formData.features || []), featureInput.trim()]
            });
            setFeatureInput("");
        }
    };

    const handleRemoveFeature = (index: number) => {
        const updatedFeatures = [...(formData.features || [])];
        updatedFeatures.splice(index, 1);
        setFormData({
            ...formData,
            features: updatedFeatures
        });
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);

            newFiles.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target?.result) {
                        const newImage: PropertyImage = {
                            id: Math.random().toString(36).substring(2, 9),
                            url: e.target.result as string,
                            alt: file.name
                        };

                        setPreviewImages(prev => [...prev, newImage]);

                        setFormData(prev => ({
                            ...prev,
                            images: [...prev.images, newImage]
                        }));
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleRemoveImage = (index: number) => {
        setPreviewImages(prev => prev.filter((_, i) => i !== index));
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleFloorPlanUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        if (!target || !target.files || target.files.length === 0) return;

        const file = target.files[0];

        const reader = new FileReader();
        reader.onload = (event) => {
            const target = event.target;
            if (target?.result) {
                setFormData(prev => ({
                    ...prev,
                    floorPlan: {
                        id: Math.random().toString(36).substring(2, 9),
                        url: target.result as string,
                        alt: file.name
                    }
                }));
            }
        };
        reader.readAsDataURL(file);
    };

    const handleGoogleMapsSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const coordsRegex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        const coordsMatch = coordsRegex.exec(googleMapsUrl);
        if (coordsMatch) {
            const [lat, lng] = coordsMatch;
            setFormData(prev => ({
                ...prev,
                coordinates: {
                    lat: parseFloat(lat),
                    lng: parseFloat(lng)
                }
            }));
            return;
        }

        const address = googleMapsUrl.split('place/')[1]?.split('/')[0] || encodeURIComponent(googleMapsUrl);
        setFormData(prev => ({
            ...prev,
            address: address.replace(/\+/g, ' '),
            googleMapsUrl: googleMapsUrl
        }));
    };

    const handleMatterportUrlSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const cleanUrl = matterportUrl.trim();
        
        const fullUrlRegex = /https:\/\/my\.matterport\.com\/show\/\?m=([\w-]+)/;
        const fullUrlMatch = fullUrlRegex.exec(cleanUrl);
        
        const modelCodeRegex = /^[\w-]+$/;
        const modelCodeMatch = modelCodeRegex.exec(cleanUrl);
    
        let normalizedUrl;
        if (fullUrlMatch) {
            normalizedUrl = cleanUrl;
        } else if (modelCodeMatch) {
            normalizedUrl = `https://my.matterport.com/show/?m=${cleanUrl}`;
        } else {
            alert('Invalid Matterport URL or model code');
            return;
        }
    
        setFormData(prev => ({
            ...prev,
            tour3dUrl: normalizedUrl,
        }));
        setMatterportUrl(normalizedUrl);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            googleMapsUrl: googleMapsUrl || "",
        };

        console.log("Datos cargados en el formulario:", updatedFormData);

        await onSubmit(updatedFormData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-blackSoft30 rounded-lg p-6 border border-primaryBackground border-opacity-30">
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Información Básica
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-200 mb-2">Nombre de la Propiedad</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            placeholder="Ej. Casa Vista al Mar, Departamento Centro Histórico"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-gray-200 mb-2">Tipo de Propiedad</label>
                        <Dropdown
                            label="Seleccionar Tipo"
                            name="type"
                            options={["Casa", "Departamento", "Terreno", "Local Comercial", "Oficina"]}
                            defaultValue={formData.type === "casa" ? "Casa" : formData.type === "departamento" ? "Departamento" : formData.type === "terreno" ? "Terreno" : formData.type === "local" ? "Local Comercial" : "Oficina"}
                            onChange={(value) => {
                                setFormData({
                                    ...formData,
                                    type: value === "Casa" ? "casa" : value === "Departamento" ? "departamento" : value === "Terreno" ? "terreno" : value === "Local Comercial" ? "local" : "oficina"
                                });
                            }}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-gray-200 mb-2">Dirección</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-gray-200 mb-2">Ciudad</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-gray-200 mb-2">Estado</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="selled" className="block text-gray-200 mb-2">Estado de Venta</label>
                        <Dropdown
                            label="Seleccionar Estado"
                            name="selled"
                            options={["En Venta", "Vendida"]}
                            defaultValue={formData.selled ? "Vendida" : "En Venta"}
                            onChange={(value) => {
                                setFormData({
                                    ...formData,
                                    selled: value === "Vendida"
                                });
                            }}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Detalles
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="constructionArea" className="block text-gray-200 mb-2">Área Construida (m²)</label>
                        <input
                            type="number"
                            name="constructionArea"
                            value={formData.constructionArea}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                            min="0"
                        />
                    </div>

                    <div>
                        <label htmlFor="usableArea" className="block text-gray-200 mb-2">Área Utilizable (m²)</label>
                        <input
                            type="number"
                            name="usableArea"
                            value={formData.usableArea ?? ''}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            min="0"
                        />
                    </div>

                    <div>
                        <label htmlFor="landArea" className="block text-gray-200 mb-2">Área de Terreno (m²)</label>
                        <input
                            type="number"
                            name="landArea"
                            value={formData.landArea ?? ''}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            min="0"
                        />
                    </div>

                    <div>
                        <label htmlFor="bedrooms" className="block text-gray-200 mb-2">Habitaciones</label>
                        <input
                            type="number"
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleChange}
                            min="0"
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="bathrooms" className="block text-gray-200 mb-2">Baños</label>
                        <input
                            type="number"
                            name="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleChange}
                            min="0"
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="distanceToBeach" className="block text-gray-200 mb-2">Distancia a la Playa (km)</label>
                        <input
                            type="number"
                            name="distanceToBeach"
                            value={formData.distanceToBeach ?? ''}
                            onChange={handleChange}
                            min="0"
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="hasPool"
                            name="hasPool"
                            checked={formData.hasPool}
                            onChange={handleChange}
                            className="w-5 h-5 accent-primaryBackground"
                        />
                        <label htmlFor="hasPool" className="text-gray-200">Tiene Piscina</label>
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="elevator"
                            name="elevator"
                            checked={formData.elevator || false}
                            onChange={handleChange}
                            className="w-5 h-5 accent-primaryBackground"
                        />
                        <label htmlFor="elevator" className="text-gray-200">Tiene Elevador</label>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Precio
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="price" className="block text-gray-200 mb-2">Precio</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            min="0"
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="currency" className="block text-gray-200 mb-2">Moneda</label>
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        >
                            <option value="USD">USD (Dólares)</option>
                            <option value="MXN">MXN (Pesos Mexicanos)</option>
                            <option value="EUR">EUR (Euros)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Características
                </h3>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-200 mb-2">Descripción</label>
                    <textarea
                        name="description"
                        value={formData.description ?? ''}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="feature" className="block text-gray-200 mb-2">Características Adicionales</label>
                    <div className="flex">
                        <input
                            type="text"
                            name="feature"
                            value={featureInput}
                            onChange={(e) => setFeatureInput(e.target.value)}
                            className="flex-1 p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-l-lg text-white focus:border-primaryBackground focus:outline-none"
                            placeholder="Agregar característica (ej. Aire acondicionado)"
                        />
                        <button
                            type="button"
                            onClick={handleAddFeature}
                            className="bg-primaryBackground px-4 text-white rounded-r-lg flex items-center justify-center"
                        >
                            <PlusCircle size={20} />
                        </button>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {(formData.features || []).map((feature, index) => (
                            <div
                                key={`${index}-${feature}`}
                                className="bg-primaryBackground bg-opacity-20 text-white px-3 py-1 rounded-full flex items-center"
                            >
                                <span>{feature}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFeature(index)}
                                    className="ml-2 text-red-400 hover:text-red-500"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Ubicación en Mapa
                </h3>

                <div className="space-y-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={googleMapsUrl}
                            onChange={(e) => setGoogleMapsUrl(e.target.value)}
                            placeholder="Pega el enlace de Google Maps"
                            className="flex-1 p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleGoogleMapsSubmit}
                            className="bg-primaryBackground text-white px-4 py-3 rounded-lg"
                        >
                            Cargar Mapa
                        </button>
                    </div>


                    {formData.coordinates && (formData.coordinates.lat !== 0 || formData.coordinates.lng !== 0) ? (
                        <div className="w-full h-[400px] rounded-lg overflow-hidden">
                            <iframe
                                src={`https://maps.google.com/maps?q=${formData.coordinates.lat},${formData.coordinates.lng}&output=embed`}
                                title="Ubicación en Mapa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    ) : formData.address ? (
                        <div className="w-full h-[400px] rounded-lg overflow-hidden">
                            <iframe
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(formData.address)}&output=embed`}
                                title="Ubicación en Mapa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-[400px] rounded-lg bg-blackSoft30 flex items-center justify-center">
                            <p className="text-gray-400">Ingresa un enlace de Google Maps para cargar la ubicación</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="lat" className="block text-gray-200 mb-2">Latitud</label>
                            <input
                                type="number"
                                name="lat"
                                value={formData.coordinates?.lat || 0}
                                onChange={(e) => {
                                    const newLat = parseFloat(e.target.value) || 0;
                                    setFormData(prev => ({
                                        ...prev,
                                        coordinates: {
                                            lat: newLat,
                                            lng: prev.coordinates?.lng || 0
                                        }
                                    }));
                                }}
                                step="0.000001"
                                className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="lng" className="block text-gray-200 mb-2">Longitud</label>
                            <input
                                type="number"
                                name="lng"
                                value={formData.coordinates?.lng || 0}
                                onChange={(e) => {
                                    const newLng = parseFloat(e.target.value) || 0;
                                    setFormData(prev => ({
                                        ...prev,
                                        coordinates: {
                                            lat: prev.coordinates?.lat || 0,
                                            lng: newLng
                                        }
                                    }));
                                }}
                                step="0.000001"
                                className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Recorrido Virtual 3D
                </h3>

                <div className="space-y-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={matterportUrl}
                            onChange={(e) => setMatterportUrl(e.target.value)}
                            placeholder="Pega el enlace de Matterport o código de modelo"
                            className="flex-1 p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={handleMatterportUrlSubmit}
                            className="bg-primaryBackground text-white px-4 py-3 rounded-lg"
                        >
                            Cargar Recorrido
                        </button>
                    </div>

                    {formData.tour3dUrl ? (
                        <div className="w-full h-[400px] rounded-lg overflow-hidden">
                            <iframe
                                src={formData.tour3dUrl}
                                title="Recorrido Virtual 3D"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                allow="xr-spatial-tracking"
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-[400px] rounded-lg bg-blackSoft30 flex items-center justify-center">
                            <p className="text-gray-400">Ingresa un enlace de Matterport para cargar el recorrido virtual</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Imágenes
                </h3>

                <div className="mb-4">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        multiple
                        className="hidden"
                    />

                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full p-8 border-2 border-dashed border-primaryBackground border-opacity-50 rounded-lg flex flex-col items-center justify-center text-gray-200 hover:bg-primaryBackground hover:bg-opacity-10 transition-colors duration-200"
                    >
                        <Upload size={40} className="mb-2" />
                        <p>Haz clic para seleccionar imágenes o arrastra y suelta aquí</p>
                        <p className="text-sm text-gray-400 mt-2">JPG, PNG, GIF hasta 10 MB</p>
                    </button>
                </div>

                {previewImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {previewImages.map((preview, index) => (
                            <div key={`${index}-${preview.url}`} className="relative group">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                                    <Image
                                        src={preview.url}
                                        alt={preview.alt || `Preview ${index + 1}`}
                                        className="object-cover w-full h-full"
                                        width={100}
                                        height={50}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {previewImages.length === 0 && (
                    <div className="p-8 border border-primaryBackground border-opacity-30 rounded-lg flex flex-col items-center justify-center bg-blackSoft30 bg-opacity-50">
                        <ImageIcon size={40} className="text-gray-400 mb-2" />
                        <p className="text-gray-400">No hay imágenes seleccionadas</p>
                    </div>
                )}
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                    Plano de la Propiedad
                </h3>

                <input
                    type="file"
                    onChange={handleFloorPlanUpload}
                    accept="image/*"
                    className="hidden"
                    ref={floorPlanInputRef}
                />

                <button
                    type="button"
                    onClick={() => floorPlanInputRef.current?.click()}
                    className="w-full p-8 border-2 border-dashed border-primaryBackground border-opacity-50 rounded-lg flex flex-col items-center justify-center text-gray-200 hover:bg-primaryBackground hover:bg-opacity-10 transition-colors duration-200"
                >
                    <Upload size={40} className="mb-2" />
                    <p>Subir plano de la propiedad</p>
                </button>

                {formData.floorPlan && (
                    <div className="mt-4">
                        <Image
                            src={formData.floorPlan.url}
                            alt={formData.floorPlan.alt || "Plano de la propiedad"}
                            className="w-full h-auto rounded-lg border border-primaryBackground border-opacity-30"
                            width={100}
                            height={50}
                        />
                        <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, floorPlan: undefined }))}
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                            Eliminar plano
                        </button>
                    </div>
                )}
            </div>

            <div className="flex justify-end space-x-4">
                <Link
                    href="/admin/dashboard"
                    className="px-6 py-3 border border-gray-300 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                    Cancelar
                </Link>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-primaryBackground text-white rounded-lg hover:bg-secondaryBackground transition-colors duration-200 flex items-center space-x-2 disabled:opacity-70"
                >
                    {isLoading ? (
                        <>
                            <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                            <span>{isEdit ? 'Actualizando...' : 'Creando...'}</span>
                        </>
                    ) : (
                        <>
                            {isEdit ? <Save size={20} /> : <PlusCircle size={20} />}
                            <span>{isEdit ? 'Guardar Cambios' : 'Crear Propiedad'}</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
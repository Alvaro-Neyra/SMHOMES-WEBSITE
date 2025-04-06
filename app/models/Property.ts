import mongoose, { Schema, Document } from "mongoose";
import { PropertyImage } from "../utils/interfaces";

interface Coordinates {
    lat: number;
    lng: number;
}

export interface IProperty extends Document {
    type: "casa" | "Apartamento" | "terreno" | "local" | "oficina" | "garaje";
    name: string;
    address: string;
    city: string;
    state: string;
    constructionArea?: number;
    landArea?: number;
    bedrooms?: number;
    bathrooms?: number;
    halfBathrooms?: number;
    hasGarage?: boolean;
    hasGarden?: boolean;
    hasBalcony?: boolean;
    hasTerrace?: boolean;
    hasLaundry?: boolean;
    hasStorage?: boolean;
    hasFireplace?: boolean;
    hasAirConditioning?: boolean;
    hasHeating?: boolean;
    hasSecurity?: boolean;
    hasGym?: boolean;
    hasParking?: boolean;
    hasPlayground?: boolean;
    hasTennisCourt?: boolean;
    hasBeachAccess?: boolean;
    hasSeaView?: boolean;
    hasMountainView?: boolean;
    hasCityView?: boolean;
    hasPool?: boolean;
    price: number;
    currency: "USD" | "MXN" | "EUR";
    images: PropertyImage[];
    floorPlan?: PropertyImage[];
    description?: string;
    features?: string[];
    distanceToBeach?: number;
    elevator?: boolean;
    usableArea?: number;
    coordinates?: Coordinates;
    googleMapsUrl?: string;
    selled?: boolean;
    transactionType: ("venta" | "renta")[];
    tour3dUrl?: string;
    status: "disponible" | "reservado" | "vendido" | "alquilado";
    createdAt?: Date;
}

const PropertySchema = new Schema<IProperty>({
    type: { type: String, enum: ["casa", "apartamento", "terreno", "local", "oficina", "garaje", "chalet"], required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    constructionArea: { type: Number, required: false },
    landArea: { type: Number, required: false },
    bedrooms: { type: Number, required: false },
    bathrooms: { type: Number, required: false },
    halfBathrooms: { type: Number, required: false },
    hasGarage: { type: Boolean, required: false },
    hasGarden: { type: Boolean, required: false },
    hasBalcony: { type: Boolean, required: false },
    hasTerrace: { type: Boolean, required: false },
    hasLaundry: { type: Boolean, required: false },
    hasStorage: { type: Boolean, required: false },
    hasFireplace: { type: Boolean, required: false },
    hasAirConditioning: { type: Boolean, required: false },
    hasHeating: { type: Boolean, required: false },
    hasSecurity: { type: Boolean, required: false },
    hasGym: { type: Boolean, required: false },
    hasParking: { type: Boolean, required: false },
    hasPlayground: { type: Boolean, required: false },
    hasTennisCourt: { type: Boolean, required: false },
    hasBeachAccess: { type: Boolean, required: false },
    hasSeaView: { type: Boolean, required: false },
    hasMountainView: { type: Boolean, required: false },
    hasCityView: { type: Boolean, required: false },
    hasPool: { type: Boolean, required: false },
    price: { type: Number, required: true },
    currency: { type: String, enum: ["USD", "MXN", "EUR"], required: true },
    images: [
        {
            url: { type: String, required: true },
            public_id: { type: String, required: false },
            alt: { type: String }
        }
    ],
    floorPlan: [{
        url: { type: String, required: false },
        public_id: { type: String, required: false },
        alt: { type: String }
    }],
    description: { type: String, required: false },
    features: [{ type: String }],
    distanceToBeach: { type: Number, required: false },
    elevator: { type: Boolean, required: false },
    usableArea: { type: Number, required: false },
    coordinates: {
        lat: { type: Number, required: false },
        lng: { type: Number, required: false }
    },
    googleMapsUrl: { type: String, required: false },
    selled: { type: Boolean, default: false },
    transactionType: { type: [String], enum: ["venta", "renta"], default: ["venta"], required: true },
    tour3dUrl: { type: String, required: false },
    status: { type: String, enum: ["disponible", "reservado", "vendido", "alquilado"], default: "disponible", required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.Property || mongoose.model<IProperty>("Property", PropertySchema);
import mongoose, { Schema, Document } from "mongoose";
import { PropertyImage } from "../utils/interfaces";

interface Coordinates {
    lat: number;
    lng: number;
}

export interface IProperty extends Document {
    type: "casa" | "departamento" | "terreno" | "local" | "oficina" | "garaje";
    name: string;
    address: string;
    city: string;
    state: string;
    constructionArea?: number;
    landArea?: number;
    bedrooms?: number;
    bathrooms?: number;
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
    createdAt?: Date;
}

const PropertySchema = new Schema<IProperty>({
    type: { type: String, enum: ["casa", "departamento", "terreno", "local", "oficina", "garaje"], required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    constructionArea: { type: Number, required: false },
    landArea: { type: Number, required: false },
    bedrooms: { type: Number, required: false },
    bathrooms: { type: Number, required: false },
    hasPool: { type: Boolean, default: false },
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
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.Property || mongoose.model<IProperty>("Property", PropertySchema);
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
    constructionArea: number;
    landArea?: number;
    bedrooms: number;
    bathrooms: number;
    hasPool: boolean;
    price: number;
    currency: "USD" | "MXN" | "EUR";
    images: PropertyImage[];
    floorPlan?: PropertyImage;
    description?: string;
    features?: string[];
    distanceToBeach?: number;
    elevator?: boolean;
    usableArea?: number;
    coordinates?: Coordinates;
    googleMapsUrl?: string;
    selled?: boolean;
    tour3dUrl?: string;
    createdAt?: Date;
}

const PropertySchema = new Schema<IProperty>({
    type: { type: String, enum: ["casa", "departamento", "terreno", "local", "oficina", "garaje"], required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    constructionArea: { type: Number, required: true },
    landArea: { type: Number },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    hasPool: { type: Boolean, default: false },
    price: { type: Number, required: true },
    currency: { type: String, enum: ["USD", "MXN", "EUR"], required: true },
    images: [
        {
            url: { type: String, required: true },
            public_id: { type: String, required: true },
            alt: { type: String }
        }
    ],
    floorPlan: {
        url: { type: String, required: true },
        public_id: { type: String, required: true },
        alt: { type: String }
    },
    description: { type: String },
    features: [{ type: String }],
    distanceToBeach: { type: Number },
    elevator: { type: Boolean },
    usableArea: { type: Number },
    coordinates: {
        lat: { type: Number },
        lng: { type: Number }
    },
    googleMapsUrl: { type: String, required: false },
    selled: { type: Boolean, default: false },
    tour3dUrl: { type: String },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.Property || mongoose.model<IProperty>("Property", PropertySchema);

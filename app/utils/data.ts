import { Property } from "./interfaces";
import axios from "axios";

const exampleProperties = [
    {
        id: 'prop-1',
        name: 'Casa Familiar en Zona Residencial',
        type: 'casa' as const,
        address: 'Calle Principal 123, Ciudad Ejemplo',
        city: 'Ciudad Ejemplo',
        state: 'Estado Ejemplo',
        coordinates: {
            lat: 37.7749,
            lng: -122.4194,
        },
        constructionArea: 240,
        landArea: 350,
        bedrooms: 4,
        bathrooms: 3,
        hasPool: true,
        price: 450000,
        currency: 'USD' as const,
        images: [
            { id: 'img-1', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja1_aybbba.jpg', alt: 'Fachada casa', public_id: 'img-1' },
            { id: 'img-2', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja2_idsahz.jpg', alt: 'Sala de estar', public_id: 'img-2' },
            { id: 'img-3', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja3_oxg5bd.jpg', alt: 'Cocina', public_id: 'img-3' },
        ],
        description: 'Hermosa casa familiar en una zona tranquila...',
        features: [
            'Aire acondicionado',
            'Jardín privado',
            'Cocina equipada',
            'Estacionamiento para 2 coches',
            'Piscina privada',
            'Vistas al mar',
            'Área de lavado',
            'Seguridad 24/7'
        ],
        distanceToBeach: 800,
        elevator: false,
        usableArea: 200,
        floorPlan: { id: 'img-16', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194907/torrevieja4_lmgiwr.jpg', alt: 'Plano de la casa' },
        selled: false,
        createdAt: new Date()
    },
    {
        id: 'prop-2',
        name: 'Departamento Moderno en Torre Norte',
        type: 'departamento' as const,
        address: 'Av. Marina 456, Torre Norte, Piso 12',
        city: 'Ciudad Ejemplo',
        state: 'Estado Ejemplo',
        coordinates: {
            lat: 37.7749,
            lng: -122.4194,
        },
        constructionArea: 120,
        landArea: 120,
        bedrooms: 2,
        bathrooms: 2,
        hasPool: false,
        price: 280000,
        currency: 'USD' as const,
        images: [
            { id: 'img-4', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194907/torrevieja4_lmgiwr.jpg', alt: 'Vista departamento', public_id: 'img-4' },
            { id: 'img-5', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194907/torrevieja5_hksdku.jpg', alt: 'Dormitorio principal', public_id: 'img-5' },
            { id: 'img-6', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194909/torrevieja6_wcoudm.jpg', alt: 'Baño', public_id: 'img-6' },
        ],
    },
    {
        id: 'prop-3',
        name: 'Casa en Calle Secundaria con Piscina',
        type: 'casa' as const,
        address: 'Calle Secundaria 456, Ciudad Ejemplo',
        city: 'Ciudad Ejemplo',
        state: 'Estado Ejemplo',
        constructionArea: 180,
        landArea: 300,
        bedrooms: 3,
        bathrooms: 2,
        hasPool: true,
        price: 320000,
        currency: 'USD' as const,
        coordinates: {
            lat: 37.7749,
            lng: -122.4194,
        },
        images: [
            { id: 'img-7', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja1_aybbba.jpg', alt: 'Fachada casa', public_id: 'torrevieja1' },
            { id: 'img-8', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja2_idsahz.jpg', alt: 'Sala de estar', public_id: 'torrevieja2' },
            { id: 'img-9', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja3_oxg5bd.jpg', alt: 'Cocina', public_id: 'torrevieja3' },
        ],
        selled: false,
        createdAt: new Date()
    },
    {
        id: 'prop-4',
        name: 'Departamento con Vista al Mar',
        type: 'departamento' as const,
        address: 'Av. Marina 456, Torre Sur, Piso 3',
        city: 'Ciudad Ejemplo',
        state: 'Estado Ejemplo',
        constructionArea: 90,
        landArea: 90,
        bedrooms: 1,
        bathrooms: 1,
        hasPool: false,
        price: 150000,
        currency: 'USD' as const,
        coordinates: {
            lat: 37.7749,
            lng: -122.4194,
        },
        images: [
            { id: 'img-10', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194907/torrevieja4_lmgiwr.jpg', alt: 'Vista departamento', public_id: 'torrevieja4' },
            { id: 'img-11', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194907/torrevieja5_hksdku.jpg', alt: 'Dormitorio principal', public_id: 'torrevieja5' },
            { id: 'img-12', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194909/torrevieja6_wcoudm.jpg', alt: 'Baño', public_id: 'torrevieja6' },
        ],
        selled: false,
        createdAt: new Date()
    },
    {
        id: 'prop-5',
        name: 'Casa con Piscina y Jardín',
        type: 'casa' as const,
        address: 'Calle Principal 123, Ciudad Ejemplo',
        city: 'Ciudad Ejemplo',
        state: 'Estado Ejemplo',
        constructionArea: 240,
        landArea: 350,
        bedrooms: 4,
        bathrooms: 3,
        hasPool: true,
        price: 450000,
        currency: 'USD' as const,
        coordinates: {
            lat: 37.7749,
            lng: -122.4194,
        },
        images: [
            { id: 'img-13', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja1_aybbba.jpg', alt: 'Fachada casa', public_id: 'torrevieja1' },
            { id: 'img-14', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja2_idsahz.jpg', alt: 'Sala de estar', public_id: 'torrevieja2' },
            { id: 'img-15', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja3_oxg5bd.jpg', alt: 'Cocina', public_id: 'torrevieja3' },
        ],
        selled: false,
        createdAt: new Date()
    },
    {
        id: 'prop-6',
        name: 'Departamento Moderno en Torre Norte',
        type: 'departamento' as const,
        address: 'Av. Marina 456, Torre Norte, Piso 12',
        city: 'Ciudad Ejemplo',
        state: 'Estado Ejemplo',
        constructionArea: 120,
        landArea: 120,
        bedrooms: 2,
        bathrooms: 2,
        hasPool: false,
        price: 280000,
        currency: 'USD' as const,
        images: [
            { id: 'img-16', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194907/torrevieja4_lmgiwr.jpg', alt: 'Vista departamento', public_id: 'torrevieja4' },
            { id: 'img-17', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194907/torrevieja5_hksdku.jpg', alt: 'Dormitorio principal', public_id: 'torrevieja5' },
            { id: 'img-18', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194909/torrevieja6_wcoudm.jpg', alt: 'Baño', public_id: 'torrevieja6' },
        ],
        coordinates: {
            lat: 37.7749,
            lng: -122.4194,
        },
        selled: false,
        createdAt: new Date()
    },
    {
        id: 'prop-7',
        name: 'Casa en Calle Secundaria con Piscina',
        type: 'casa' as const,
        address: 'Calle Secundaria 456, Ciudad Ejemplo',
        city: 'Ciudad Ejemplo',
        state: 'Estado Ejemplo',
        constructionArea: 180,
        landArea: 300,
        bedrooms: 3,
        bathrooms: 2,
        hasPool: true,
        price: 320000,
        currency: 'USD' as const,
        coordinates: {
            lat: 37.7749,
            lng: -122.4194,
        },
        images: [
            { id: 'img-19', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja1_aybbba.jpg', alt: 'Fachada casa', public_id: 'torrevieja1' },
            { id: 'img-20', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja2_idsahz.jpg', alt: 'Sala de estar', public_id: 'torrevieja2' },
            { id: 'img-21', url: 'https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194906/torrevieja3_oxg5bd.jpg', alt: 'Cocina', public_id: 'torrevieja3' },
        ],
        selled: false,
        createdAt: new Date()
    }
];

function getBaseUrl() {
    if (typeof window !== "undefined") {
        return "";
    } else {
        return process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
    }
}

async function fetchWithRetry<T>(url: string, retries = 3, delay = 1000): Promise<T> {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await axios.get<T>(url);
            return res.data;
        } catch (error) {
            console.error(`Error en intento ${i + 1}:`, error);
            if (i < retries - 1) {
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    throw new Error(`No se pudo obtener datos de ${url} después de ${retries} intentos.`);
}


export async function getAllProperties(): Promise<Property[]> {
    try {
        return await fetchWithRetry<Property[]>(`${getBaseUrl()}/api/properties`);
    } catch (error) {
        console.error("Error obteniendo propiedades, usando datos locales:", error);
        return exampleProperties;
    }
}

export async function getPropertyById(propertyId: string): Promise<Property | undefined> {
    try {
        return await fetchWithRetry<Property>(`${getBaseUrl()}/api/properties/${propertyId}`);
    } catch (error) {
        console.error(`Error obteniendo propiedad ${propertyId}, usando datos locales:`, error);
        return undefined;
    }
}

export const fetchRandomProperties = async (): Promise<Property[]> => {
    try {
        return await fetchWithRetry<Property[]>(`${getBaseUrl()}/api/properties/random-top`);
    } catch (error) {
        console.error("Error al obtener propiedades aleatorias:", error);
        return [];
    }
};

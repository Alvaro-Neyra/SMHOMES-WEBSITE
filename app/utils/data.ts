import { Property } from "./interfaces";

const exampleProperties = [
    {
        id: 'prop-1',
        type: 'casa' as const,
        address: 'Calle Principal 123, Ciudad Ejemplo',
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
            { id: 'img-1', url: '/torrevieja1.jpg', alt: 'Fachada casa' },
            { id: 'img-2', url: '/torrevieja2.jpg', alt: 'Sala de estar' },
            { id: 'img-3', url: '/torrevieja3.jpg', alt: 'Cocina' },
        ],
        description: 'Hermosa casa familiar en una zona tranquila. Ideal para quienes buscan espacio y comodidad. Cuenta con acabados modernos, amplias habitaciones y un jardín bien cuidado.',
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
        location: 'Zona residencial',
        city: 'Ciudad Ejemplo',
        distanceToBeach: 800,
        elevator: false,
        usableArea: 200,
    },
    {
        id: 'prop-2',
        type: 'departamento' as const,
        address: 'Av. Marina 456, Torre Norte, Piso 12',
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
            { id: 'img-4', url: '/torrevieja4.jpg', alt: 'Vista departamento' },
            { id: 'img-5', url: '/torrevieja5.jpg', alt: 'Dormitorio principal' },
            { id: 'img-6', url: '/torrevieja6.jpg', alt: 'Baño' },
        ]
    },
    {
        id: 'prop-3',
        type: 'casa' as const,
        address: 'Calle Secundaria 456, Ciudad Ejemplo',
        constructionArea: 180,
        landArea: 300,
        bedrooms: 3,
        bathrooms: 2,
        hasPool: true,
        price: 320000,
        currency: 'USD' as const,
        images: [
            { id: 'img-7', url: '/torrevieja1.jpg', alt: 'Fachada casa' },
            { id: 'img-8', url: '/torrevieja2.jpg', alt: 'Sala de estar' },
            { id: 'img-9', url: '/torrevieja3.jpg', alt: 'Cocina' },
        ]
    },
    {
        id: 'prop-4',
        type: 'departamento' as const,
        address: 'Av. Marina 456, Torre Sur, Piso 3',
        constructionArea: 90,
        landArea: 90,
        bedrooms: 1,
        bathrooms: 1,
        hasPool: false,
        price: 150000,
        currency: 'USD' as const,
        images: [
            { id: 'img-10', url: '/torrevieja4.jpg', alt: 'Vista departamento' },
            { id: 'img-11', url: '/torrevieja5.jpg', alt: 'Dormitorio principal' },
            { id: 'img-12', url: '/torrevieja6.jpg', alt: 'Baño' },
        ]
    },
    {
        id: 'prop-5',
        type: 'casa' as const,
        address: 'Calle Principal 123, Ciudad Ejemplo',
        constructionArea: 240,
        landArea: 350,
        bedrooms: 4,
        bathrooms: 3,
        hasPool: true,
        price: 450000,
        currency: 'USD' as const,
        images: [
            { id: 'img-13', url: '/torrevieja1.jpg', alt: 'Fachada casa' },
            { id: 'img-14', url: '/torrevieja2.jpg', alt: 'Sala de estar' },
            { id: 'img-15', url: '/torrevieja3.jpg', alt: 'Cocina' },
        ]
    },
    {
        id: 'prop-6',
        type: 'departamento' as const,
        address: 'Av. Marina 456, Torre Norte, Piso 12',
        constructionArea: 120,
        landArea: 120,
        bedrooms: 2,
        bathrooms: 2,
        hasPool: false,
        price: 280000,
        currency: 'USD' as const,
        images: [
            { id: 'img-16', url: '/torrevieja4.jpg', alt: 'Vista departamento' },
            { id: 'img-17', url: '/torrevieja5.jpg', alt: 'Dormitorio principal' },
            { id: 'img-18', url: '/torrevieja6.jpg', alt: 'Baño' },
        ]
    },
    {
        id: 'prop-7',
        type: 'casa' as const,
        address: 'Calle Secundaria 456, Ciudad Ejemplo',
        constructionArea: 180,
        landArea: 300,
        bedrooms: 3,
        bathrooms: 2,
        hasPool: true,
        price: 320000,
        currency: 'USD' as const,
        images: [
            { id: 'img-19', url: '/torrevieja1.jpg', alt: 'Fachada casa' },
            { id: 'img-20', url: '/torrevieja2.jpg', alt: 'Sala de estar' },
            { id: 'img-21', url: '/torrevieja3.jpg', alt: 'Cocina' },
        ]
    }
];

export async function getPropertyById(propertyId: string | Promise<string>): Promise<Property | undefined> {
    const resolvedId = propertyId instanceof Promise ? await propertyId : propertyId;
    return exampleProperties.find(property => property.id === resolvedId);
}

export default function getAllProperties() {
    return exampleProperties;
}
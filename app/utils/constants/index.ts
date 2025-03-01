import { SlidesProps } from "../interfaces";

export const NAV_LINKS = [
    { href: '/', key: 'inicio', label: 'Inicio' },
    { href: '/vender', key: 'vender', label: 'Vender' },
    { href: '/comprar', key: 'comprar', label: 'Comprar' },
    { href: '/propiedades', key: 'propiedades', label: 'Propiedades' },
    { href: '/resenas', key: 'reseñas', label: 'Reseñas' },
    { href: '/nosotros', key: 'nosotros', label: 'Nosotros' },
];

export const slides: SlidesProps[] = [
    {
        imageUrl: "/slide1.jpg",
        titleSmall: "¡ENCUENTRA TU HOGAR IDEAL!",
        titleLarge: "CONFIANZA Y SEGURIDAD",
        subtitle: "Descubre propiedades exclusivas con nosotros. Tu satisfacción es nuestra prioridad.",
        buttonText: "Ver más",
        buttonLink: "/propiedades",
    },
    {
        imageUrl: "/slide2.jpg",
        titleSmall: "¡LA CASA DE TUS SUEÑOS TE ESPERA!",
        titleLarge: "EXPERIENCIA Y CALIDAD",
        subtitle: "Ofrecemos las mejores opciones del mercado. Encuentra tu hogar perfecto hoy.",
        buttonText: "Explorar",
        buttonLink: "/vender",
    },
    {
        imageUrl: "/slide3.jpg",
        titleSmall: "¡HACEMOS TUS SUEÑOS REALIDAD!",
        titleLarge: "COMPROMISO Y DEDICACIÓN",
        subtitle: "Nuestro equipo está aquí para ayudarte en cada paso del camino. Contáctanos para más información.",
        buttonText: "Contactar",
        buttonLink: "/contacto",
    },
];
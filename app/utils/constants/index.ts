import { SlidesProps, Testimonial, VideoTestimonial } from "../interfaces";

export const NAV_LINKS = [
    { href: '/', key: 'inicio', label: 'Inicio' },
    { href: '/vender', key: 'vender', label: 'Vender' },
    { href: '/comprar', key: 'comprar', label: 'Comprar' },
    { href: '/propiedades', key: 'propiedades', label: 'Propiedades' },
    { href: '/testimonios', key: 'testimonios', label: 'Testimonios' },
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

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'María Rodríguez',
        position: 'Diseñadora Gráfica',
        avatar: '/avatars/maria.jpg',
        initials: 'MR',
        rating: 5,
        content: 'Esta plataforma ha transformado por completo mi flujo de trabajo. La interfaz es intuitiva y las herramientas son exactamente lo que necesitaba para mis proyectos. ¡Altamente recomendado!',
        bgColor: 'bg-indigo-500'
    },
    {
        id: 2,
        name: 'Carlos Mendoza',
        position: 'Desarrollador Frontend',
        avatar: '/avatars/carlos.jpg',
        initials: 'CM',
        rating: 5,
        content: 'Como desarrollador, valoro mucho las soluciones bien diseñadas. Este servicio cumple perfectamente con mis expectativas y ha mejorado significativamente mi productividad.',
        bgColor: 'bg-green-500'
    },
    {
        id: 3,
        name: 'Ana Gutiérrez',
        position: 'Gerente de Marketing',
        avatar: '/avatars/ana.jpg',
        initials: 'AG',
        rating: 4,
        content: 'Hemos visto un aumento del 40% en nuestras conversiones desde que empezamos a utilizar este servicio. El soporte al cliente es excelente y siempre están dispuestos a ayudar.',
        bgColor: 'bg-purple-500'
    },
    {
        id: 4,
        name: 'Roberto Sánchez',
        position: 'Emprendedor',
        avatar: '/avatars/roberto.jpg',
        initials: 'RS',
        rating: 5,
        content: 'Esta herramienta me ha ayudado a escalar mi negocio de forma increíble. La relación calidad-precio es inmejorable y las actualizaciones constantes la hacen cada vez mejor.',
        bgColor: 'bg-yellow-500'
    },
    {
        id: 5,
        name: 'Laura Jiménez',
        position: 'Consultor SEO',
        avatar: '/avatars/laura.jpg',
        initials: 'LJ',
        rating: 4,
        content: 'He probado muchas soluciones similares, pero ninguna ofrece el nivel de detalle y personalización que encuentro aquí. Es una inversión que vale cada centavo.',
        bgColor: 'bg-red-500'
    }
];


export const formFields = {
    namePlaceholder: "Nombre *",
    phonePlaceholder: "Teléfono",
    emailPlaceholder: "Email *",
    messagePlaceholder: "Mensaje *",
    options: ["Ahora", "Dentro de 6 meses", "Dentro de 12 meses", "Solo información"],
};

export const FAQItems = [
    {
        title: "¿Qué servicios ofrecen?",
        content:
            "Ofrecemos una amplia gama de servicios inmobiliarios, incluyendo valoraciones gratuitas, Home Staging profesional, gestión de ventas y asesoramiento legal.",
    },
    {
        title: "¿Cómo puedo vender mi casa rápidamente?",
        content:
            "Para vender tu casa rápidamente, te recomendamos una estrategia combinada de valoración adecuada, Home Staging y máxima difusión en portales inmobiliarios.",
    },
    {
        title: "¿Cuánto tiempo tarda en venderse una casa?",
        content:
            "El tiempo promedio para vender una casa depende de varios factores, como el precio, la ubicación y la calidad de las fotos. En promedio, nuestras propiedades se venden en menos de 3 meses.",
    },
];

export const FAQBuyItems = [
    {
        title: "¿Qué servicios ofrecen para comprar una propiedad?",
        content:
            "Ofrecemos una amplia gama de servicios inmobiliarios, incluyendo búsqueda personalizada de vivienda, asesoramiento financiero, acceso exclusivo a propiedades premium y gestión legal completa.",
    },
    {
        title: "¿Cómo puedo encontrar mi casa ideal rápidamente?",
        content:
            "Para encontrar tu casa ideal rápidamente, te recomendamos trabajar con un equipo profesional que te ofrezca una búsqueda personalizada, análisis del mercado y visitas virtuales o presenciales según tus preferencias.",
    }
];

export const marcas = [
    {
        id: 1,
        nombre: "Idealista",
        descripcion: "El portal inmobiliario líder en España",
        logoUrl: "/idealista-logo.svg"
    },
    {
        id: 2,
        nombre: "Fotocasa",
        descripcion: "Expertos en compra y alquiler de viviendas",
        logoUrl: "/fotocasa-logo.png"
    },
    {
        id: 3,
        nombre: "BBVA Inmobiliaria",
        descripcion: "Soluciones financieras para tu hogar",
        logoUrl: "/bbva-logo.png"
    },
    {
        id: 4,
        nombre: "CaixaBank Real Estate",
        descripcion: "Seguridad en tu inversión inmobiliaria",
        logoUrl: "/caixabank-logo.png"
    },
    {
        id: 5,
        nombre: "Solvia",
        descripcion: "Especialistas en activos inmobiliarios",
        logoUrl: "/solvia-logo.png"
    },
    {
        id: 6,
        nombre: "Grupo Insur",
        descripcion: "Promotora inmobiliaria desde 1945",
        logoUrl: "/insur-logo.png"
    },
    {
        id: 7,
        nombre: "Engel & Völkers",
        descripcion: "Inmuebles de lujo en toda España",
        logoUrl: "/engels-logo.svg"
    },
    {
        id: 8,
        nombre: "Metrovacesa",
        descripcion: "Proyectos inmobiliarios de calidad",
        logoUrl: "/metrovacesa-logo.png"
    }
];

export const videoTestimonials: VideoTestimonial[] = [
    {
        id: 1,
        name: 'Elena Martínez',
        position: 'CEO, TechSolutions',
        youtubeId: 'C0DPdy98e4c'
    },
    {
        id: 2,
        name: 'Miguel Fernández',
        position: 'Director de Operaciones',
        youtubeId: 'C0DPdy98e4c'
    },
    {
        id: 3,
        name: 'Sofia López',
        position: 'Diseñadora UX/UI',
        youtubeId: 'C0DPdy98e4c'
    },
    {
        id: 4,
        name: 'Javier Torres',
        position: 'Desarrollador Full Stack',
        youtubeId: 'C0DPdy98e4c'
    }
];
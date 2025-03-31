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
    // {
    //     id: 1,
    //     name: 'Elena Martínez',
    //     position: 'CEO, TechSolutions',
    //     youtubeId: 'C0DPdy98e4c'
    // },
    // {
    //     id: 2,
    //     name: 'Miguel Fernández',
    //     position: 'Director de Operaciones',
    //     youtubeId: 'C0DPdy98e4c'
    // },
    // {
    //     id: 3,
    //     name: 'Sofia López',
    //     position: 'Diseñadora UX/UI',
    //     youtubeId: 'C0DPdy98e4c'
    // },
    // {
    //     id: 4,
    //     name: 'Javier Torres',
    //     position: 'Desarrollador Full Stack',
    //     youtubeId: 'C0DPdy98e4c'
    // }
];

export const stats = [
    {
        icon: "/home-icon.svg",
        value: "+100",
        label: "casas vendidas al año",
    },
    {
        icon: "/star.svg",
        value: "4,9",
        label: "sobre 5 en Google",
    },
];

export const highlights = [
    {
        number: 1,
        title: "Valoración gratuita de tu vivienda",
        description:
            "Ponemos a tu disposición una valoración basada en precios reales de las viviendas que se han vendido en los últimos meses en tu misma zona. Te ayudamos a definir la mejor estrategia para vender tu casa, maximizando tus posibilidades de éxito.",
        highlight: "¡El 99% de las viviendas que tienen un precio adecuado se venden!",
    },
    {
        number: 2,
        title: "Servicios “Home Staging” profesional",
        description:
            "Sabemos que la primera impresión es crucial a la hora de vender una vivienda. Por eso, te ofrecemos un servicio de Home Staging profesional para que tu propiedad cause la mejor impresión posible a los compradores potenciales, aumentando las posibilidades de venta y el precio final.",
        highlight: "Y lo mejor de todo… ¡totalmente GRATIS para usted!",
    },
    {
        number: 3,
        title: "Experiencia y resultados probados",
        description:
            "En SM HOME'S combinamos la tecnología más avanzada con un sistema de venta probado y eficaz, respaldado por más de 25 años de experiencia en el sector inmobiliario de Torrevieja y la Costa Blanca Sur. Contamos con una red de más de 400 colaboradores a nivel local, nacional e internacional.",
        highlight: "¡Vendemos más de 100 viviendas de media al año!",
    },
    {
        number: 4,
        title: "Confianza y tranquilidad en la venta",
        description:
            "Con SM HOME'S, puedes estar seguro de que tu propiedad está en buenas manos. Tenemos más de 500 reseñas sobre nosotros en “Google”, con una valoración de 4,9 sobre 5, lo que significa que el grado de satisfacción de los clientes con nuestro servicio es muy alto. Búscanos y descúbrelo por ti mismo lo que otros clientes opinan de nosotros.",
        highlight: "¡Nuestra valoración es de 4,9 sobre 5 en “Google”!",
    },
    {
        number: 5,
        title: "Máxima difusión",
        description:
            "Realizaremos un reportaje fotográfico profesional y un TOUR VIRTUAL. Publicaremos tu vivienda en los mejores y más visitados portales inmobiliarios de España y del extranjero, especializados en la zona, sin coste alguno. La iremos rotando en los mejores puestos destacados para lograr mayor impacto, igual que en nuestro escaparate a pie de calle de nuestra oficina en Torrevieja.",
        highlight: "¡Cuanta más visibilidad, más rápido se vende!",
    },
    {
        number: 6,
        title: "Servicio Notaría",
        description:
            "Este paso burocrático puede resultar un tanto complejo, por lo que nuestros agentes inmobiliarios te asesorarán en todo momento. El día de la firma de la escritura, te acompañará una persona del bufete de abogados con el que trabajamos para que revise todo el proceso y pueda resolver cualquier duda, incluso si no puedes venir ese día, nosotros podemos representarte y ocuparnos de todo con un poder notarial.",
        highlight: "¡Sabemos hacer las cosas bien, puede estar tranquilo!",
    },
    {
        number: 7,
        title: "Traducción",
        description:
            "Nuestros agentes inmobiliarios hablan diferentes idiomas (español, inglés, francés, sueco), lo que te asegurará que siempre estarás atendido en tu idioma para que puedas sentirte cómodo y tranquilo en todo el proceso de venta de su vivienda.",
        highlight: "",
    },
    {
        number: 8,
        title: "Postventa",
        description:
            "Una vez firmada la escritura de venta de la vivienda, nos encargaremos de realizar también los cambios de titularidad de los suministros, titularidad catastral, titularidad de la comunidad, solicitud de plusvalía, etc.",
        highlight: "",
    },
];

export const highlightsComprar = [
    {
        number: 1,
        title: "Búsqueda personalizada de vivienda",
        description:
            "Te ayudamos a encontrar la propiedad perfecta según tus necesidades y presupuesto. Analizamos el mercado para ofrecerte las mejores opciones.",
        highlight: "¡Más del 95% de nuestros clientes encuentran su hogar ideal!",
    },
    {
        number: 2,
        title: "Asesoramiento financiero",
        description:
            "Contamos con expertos en financiación que te guiarán en todo el proceso, desde la solicitud de hipoteca hasta la firma final.",
        highlight: "Y lo mejor… ¡asesoramiento gratuito!",
    },
    {
        number: 3,
        title: "Acceso exclusivo a propiedades premium",
        description:
            "Gracias a nuestra red de colaboradores, tenemos acceso a propiedades exclusivas que no están disponibles en otros portales inmobiliarios.",
        highlight: "¡Encuentra tu hogar soñado con nosotros!",
    },
    {
        number: 4,
        title: "Confianza y tranquilidad en la compra",
        description:
            "Con SM HOME'S, puedes estar seguro de que estás trabajando con profesionales de confianza. Tenemos más de 500 reseñas positivas en “Google”.",
        highlight: "¡Nuestra valoración es de 4,9 sobre 5 en “Google”!",
    },
    {
        number: 5,
        title: "Visitas virtuales y presenciales",
        description:
            "Ofrecemos visitas virtuales y presenciales para que puedas explorar las propiedades desde la comodidad de tu hogar o en persona.",
        highlight: "¡Elige la opción que mejor se adapte a ti!",
    },
    {
        number: 6,
        title: "Gestión legal completa",
        description:
            "Nos encargamos de todo el proceso legal, desde la revisión del contrato hasta la firma final, para que no tengas que preocuparte por nada.",
        highlight: "¡Sabemos hacer las cosas bien, puede estar tranquilo!",
    },
    {
        number: 7,
        title: "Traducción",
        description:
            "Nuestros agentes inmobiliarios hablan diferentes idiomas (español, inglés, francés, sueco), lo que te asegurará que siempre estarás atendido en tu idioma.",
        highlight: "",
    },
    {
        number: 8,
        title: "Postcompra",
        description:
            "Una vez comprada la vivienda, nos encargaremos de realizar los cambios de titularidad de los suministros, titularidad catastral, y más.",
        highlight: "",
    },
];

export const highlightsServicioHome = [
    {
        number: "1",
        title: "Preparación Profesional de Tu Vivienda",
        description:
            "Realizamos un análisis detallado de tu propiedad para maximizar su atractivo. Nuestro equipo de expertos en decoración y diseño rediseña espacios para captar la atención de los compradores.",
        highlight: "¡Tu casa lista para impresionar desde el primer vistazo!",
    },
    {
        number: "2",
        title: "Marketing Inmobiliario Estratégico",
        description:
            "Utilizamos técnicas avanzadas de marketing digital y fotografía profesional para destacar tu propiedad. Más del 90% de los compradores buscan casas online, y nosotros te aseguramos que la tuya se vea perfecta.",
        highlight: "Más visibilidad = venta más rápida.",
    },
    {
        number: "3",
        title: "Valoración Gratuita y Precisa",
        description:
            "Ofrecemos una valoración basada en datos reales del mercado local. Analizamos precios históricos y tendencias actuales para definir el precio ideal de venta.",
        highlight: "Vende al mejor precio sin compromisos.",
    },
    {
        number: "4",
        title: "Redecoración y Optimización Visual",
        description:
            "A través del Home Staging, transformamos tu casa en un espacio moderno y atractivo para los compradores. Nuestro equipo rediseña interiores para aumentar el interés del mercado.",
        highlight: "¡Cambios espectaculares que generan resultados reales!",
    },
    {
        number: "5",
        title: "Atención Personalizada",
        description:
            "Te asignamos un agente inmobiliario dedicado que te acompañará en cada paso del proceso. Desde la preparación hasta la firma final, estamos contigo.",
        highlight: "Un servicio exclusivo pensado solo para ti.",
    },
    {
        number: "6",
        title: "Gestión Integral Post-Venta",
        description:
            "Nos encargamos de todos los trámites legales y administrativos después de la venta: cambio de titularidad de suministros, comunidad, catastro, solicitud de plusvalía, etc.",
        highlight: "Sin preocupaciones después de la venta.",
    },
];
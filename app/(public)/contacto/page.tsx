import HeroVideo from '@/app/components/molecules/HeroVideo';
import MapSection from '@/app/components/molecules/MapSection';
import HeroForm from '@/app/components/organisms/HeroForm';
import TestimonialsCarrusel from '@/app/components/organisms/TestimonialsCarrusel';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Contacto - SM HOME'S",
    description: "Contáctanos para obtener asesoramiento inmobiliario personalizado. Te ayudamos a comprar o vender tu propiedad de forma rápida y segura.",
    keywords: "contacto, inmobiliaria, Torrevieja, España, asesoramiento inmobiliario, propiedades, venta de casas, compra de casas, SM HOME'S, contacto de SM HOME'S",
    robots: "index, follow",
    openGraph: {
        title: "Contacto - SM HOME'S",
        description: "Contáctanos para obtener asesoramiento inmobiliario personalizado. Te ayudamos a comprar o vender tu propiedad de forma rápida y segura.",
        images: ["/contacto.png"],
        url: "https://www.smhomesrealstate.com/contacto",
        type: "website",
    },
    twitter: {
        title: "Contacto - SM HOME'S",
        description: "Contáctanos para obtener asesoramiento inmobiliario personalizado. Te ayudamos a comprar o vender tu propiedad de forma rápida y segura.",
        images: ["/contacto.png"],
        card: "summary_large_image",
    }
};

export default function ContactPage() {
    return (
        <section>
            <HeroVideo
                src="https://res.cloudinary.com/dbp2p2kwh/video/upload/v1743632448/videoprueba_wqqizn.mp4"
                fallbackImage="/videoprueba_fallback.png"
                heading="Contacto"
                subHeading="¿Tienes alguna pregunta? ¡Contáctanos!"
                linkHref="#contacto-form"
                linkText="Contactar"
            />
            <HeroForm
                id="contacto-form"
                heading="Te ofrecemos un servicio inmobiliario integral para que compres tu casa con total seguridad y confianza. ¡Nos ocupamos de todo por ti!"
                subHeading="Descubre cómo podemos ayudarte a encontrar tu hogar ideal en menos tiempo."
                strongSubHeading="encontrar tu hogar ideal en menos tiempo"
                cols2={true}
            >
                <section>
                    <div className="px-4 space-y-[2vw] xl:space-y-[3vw]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="space-y-6">
                                <div className="bg-blackSoft30 p-6 xl:p-[1vw] rounded-lg flex flex-col items-center text-center gap-[2vw] lg:gap-[1vw] xl:gap-[2.5vw]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 lg:w-[3.5vw] xl:w-[4vw]">
                                        <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#D7BF66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <h3 className="text-xl lg:text-[1.5vw] font-bold text-white">
                                        Teléfono fijo
                                    </h3>
                                    <p className="text-primaryColor text-sm lg:text-[1vw]">
                                        +34 691 344 647
                                    </p>
                                </div>
                                <div className="bg-blackSoft30 p-6 xl:p-[1vw] rounded-lg flex flex-col items-center text-center gap-[2vw] lg:gap-[1vw] xl:gap-[2.5vw]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 lg:w-[3.5vw] xl:w-[4vw]">
                                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#D7BF66"></path>
                                    </svg>
                                    <h3 className="text-xl lg:text-[1.5vw] font-bold text-white">
                                        Móvil y WhatsApp
                                    </h3>
                                    <p className="text-primaryColor text-sm lg:text-[1vw]">
                                        +34 691 344 647
                                    </p>
                                </div>
                                <div className="bg-blackSoft30 p-6 xl:p-[1vw] rounded-lg flex flex-col items-center text-center gap-[2vw] lg:gap-[1vw] xl:gap-[2.5vw]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 lg:w-[3.5vw] xl:w-[4vw]">
                                        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#D7BF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#D7BF66" strokeWidth="2" strokeLinecap="round"></rect>
                                    </svg>
                                    <h3 className="text-xl lg:text-[1.5vw] font-bold text-white">
                                        Email
                                    </h3>
                                    <p className="text-primaryColor text-sm lg:text-[1vw]">
                                        elenamasko@smhomesrealstate.com
                                    </p>
                                </div>
                            </div>
                            <div className="bg-blackSoft30 p-6 xl:p-[1vw] rounded-lg flex flex-col items-center justify-center text-center gap-[1vw] space-y-4 lg:spacgap-[2vw] lg:e-y-[4vw]">
                                <div className="flex flex-col items-center gap-[2vw] lg:gap-[1vw]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 lg:w-[3.5vw] xl:w-[4vw]">
                                        <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#D7BF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#D7BF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <h3 className="text-xl lg:text-[1.5vw] font-bold text-white">
                                        Dirección
                                    </h3>
                                    <p className="text-primaryColor text-sm lg:text-[1vw] xl:leading-[1.5vw]">
                                        C. Caballero de Rodas, 120, 03182 Torrevieja, Alicante, España
                                    </p>
                                </div>

                                <div className="flex flex-col items-center gap-[2vw] lg:gap-[1vw]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 lg:w-[3.5vw] xl:w-[4vw]">
                                        <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#D7BF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <h3 className="text-xl lg:text-[1.5vw] font-bold text-white">
                                        Horario
                                    </h3>
                                    <p className="text-primaryColor text-sm lg:text-[1vw] xl:leading-[1.5vw]">
                                        24 horas al día, 7 días a la semana
                                    </p>
                                </div>
                                <Link
                                    href="#google-maps"
                                    className="bg-primaryBackground border-[.2vw] border-primaryBackground text-white xl:text-[1.5vw] px-6 py-3 rounded-lg xl:rounded-[1vw] font-semibold hover:bg-blackSoftColor transition-colors duration-300"
                                >
                                    Ver en Google Maps
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </HeroForm>
            <MapSection />
            <section id="testimonials">
                <h1 className="text-[8vw] sm:text-4xl lg:text-5xl xl:text-[3.5vw] font-bold text-primaryColor text-center bg-blackSoftColor pt-[2vw]">Nuestros Testimonios</h1>
                <TestimonialsCarrusel />
            </section>
        </section>
    );
}

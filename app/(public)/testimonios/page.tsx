import Link from "next/link";
import TestimoniosClientContent from "../../components/organisms/TestimoniosClientContent";
import Head from "next/head";

export default function Testimonios() {
    return (
        <>
            <Head>
                <title>Testimonios de Clientes - SM HOME&apos;S</title>
                <meta
                    name="description"
                    content="Descubre cómo SM HOME&apos;S ha transformado la experiencia inmobiliaria para nuestros clientes. Lee sus testimonios y únete a nosotros."
                />
                <meta
                    name="keywords"
                    content="testimonios clientes, experiencias SM HOME'S, testimonios inmobiliaria Torrevieja, opiniones SM HOME'S, ventas inmobiliarias Torrevieja, agentes inmobiliarios, clientes satisfechos Torrevieja"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Testimonios de Clientes - SM HOME&apos;S" />
                <meta
                    property="og:description"
                    content="Descubre cómo SM HOME&apos;S ha transformado la experiencia inmobiliaria para nuestros clientes. Lee sus testimonios y únete a nosotros."
                />
                <meta property="og:image" content="/testimonios.png" />
                <meta property="og:url" content="https://www.smhomesrealstate.com/testimonios" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Testimonios de Clientes - SM HOME&apos;S" />
                <meta
                    name="twitter:description"
                    content="Lee lo que nuestros clientes piensan sobre los servicios inmobiliarios de SM HOME&apos;S en Torrevieja. Transformamos la experiencia inmobiliaria."
                />
                <meta name="twitter:image" content="/testimonios.png" />
                <meta name="twitter:url" content="https://www.smhomesrealstate.com/testimonios" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <div className="bg-blackSoft30 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-primaryBackground sm:text-5xl sm:tracking-tight lg:text-6xl xl:text-[4vw]">
                        Lo que dicen nuestros clientes
                    </h1>
                    <p className="mt-5 mx-auto text-xl text-gray-100 xl:text-[1.5vw]">
                        Descubre cómo nuestra plataforma ha transformado el trabajo de profesionales y empresas.
                    </p>
                </div>
                <TestimoniosClientContent />
                <div className="max-w-4xl xl:max-w-[50vw] mx-auto mt-20 text-center">
                    <div className="bg-primaryBackground rounded-2xl shadow-xl px-4 sm:px-6 py-8 sm:py-12 xl:flex xl:flex-col xl:items-center xl:space-y-[2vw] xl:px-[2vw] xl:py-[3vw]">
                        <h2 className="text-2xl sm:text-3xl xl:text-[2.5vw] font-bold text-white mb-4">
                            ¿Listo para unirte a ellos?
                        </h2>
                        <p className="text-gray-100 text-base sm:text-lg xl:text-[1.5vw] mb-6 sm:mb-8">
                            Descubre cómo nuestra plataforma puede transformar tu negocio.
                        </p>
                        <Link
                            href="/contacto"
                            className="bg-white text-primaryBackground font-semibold px-6 sm:px-8 py-2 sm:py-3 xl:text-[1.5vw] xl:px-[2vw] xl:py-[1vw] xl:rounded-[1vw] rounded-lg shadow hover:bg-gray-100 transition-colors"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

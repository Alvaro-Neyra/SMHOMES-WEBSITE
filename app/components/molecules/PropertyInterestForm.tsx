import { PropertyInterestFormProps } from "@/app/utils/interfaces";
import Link from "next/link";

const PropertyInterestForm: React.FC<PropertyInterestFormProps> = ({
    namePlaceholder,
    phonePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    propertyId,
    propertyAddress,
}) => {

    return (
        <form className="space-y-4 xl:space-y-[.8vw]">

            <input type="hidden" name="propertyId" value={propertyId} />
            <input type="hidden" name="propertyAddress" value={propertyAddress} />

            <div className="relative bg-blackSoft30 border-primaryBackground">
                <label htmlFor="name" aria-label="Nombre Completo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-[3.5vw] sm:w-[2vw] lg:w-[1.5vw] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 fill-primaryBackground"
                    >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                </label>
                <input
                    type="text"
                    placeholder={namePlaceholder}
                    className="pl-10 pr-4 py-2 xl:pl-[3.5vw] xl:pr-[2vw] xl:py-[1vw] xl:text-[1vw] w-full outline-none border border-primaryBackground rounded focus:ring-secondaryBackground focus:ring-2 bg-transparent transition-all duration-300"
                />
            </div>

            <div className="relative bg-blackSoft30 border-primaryBackground">
                <label htmlFor="phone" aria-label="Teléfono">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-[3.5vw] sm:w-[2vw] md:w-[1.5vw] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 fill-primaryBackground"
                    >
                        <path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                </label>
                <input
                    type="text"
                    placeholder={phonePlaceholder}
                    className="pl-10 pr-4 py-2 xl:pl-[3.5vw] xl:pr-[2vw] xl:py-[1vw] xl:text-[1vw] w-full outline-none border border-primaryBackground rounded focus:ring-secondaryBackground focus:ring-2 bg-transparent transition-all duration-300"
                    name="phone"
                />
            </div>

            <div className="relative bg-blackSoft30 border-primaryBackground">
                <label htmlFor="email" aria-label="Correo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-[3.5vw] sm:w-[2vw] lg:w-[1.5vw] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 fill-primaryBackground"
                    >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                </label>
                <input
                    type="email"
                    placeholder={emailPlaceholder}
                    className="pl-10 pr-4 py-2 xl:pl-[3.5vw] xl:pr-[2vw] xl:py-[1vw] xl:text-[1vw] w-full outline-none border border-primaryBackground rounded focus:ring-secondaryBackground focus:ring-2 bg-transparent transition-all duration-300"
                />
            </div>

            <div className="relative bg-blackSoft30 border border-primaryBackground rounded-md">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-[3.5vw] sm:w-[2vw] lg:w-[1.5vw] fill-primaryBackground"
                    >
                        <path
                            d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                            stroke="transparent"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <textarea
                    placeholder={messagePlaceholder}
                    className="pl-10 pr-4 py-3 xl:pl-[3.5vw] xl:pr-[2vw] xl:py-[1vw] xl:text-[1vw] w-full outline-none bg-transparent text-gray-10 placeholder-gray-400 rounded-md  focus:border-transparent transition-all duration-300 resize-none min-h-[6rem]"
                ></textarea>
            </div>

            <div className="flex items-start mb-6 xl:gap-[.5vw]">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 xl:w-[1vw] xl:h-[1vw] border border-primaryBackground rounded-sm bg-gray-50 focus:ring-3 focus:ring-primaryBackground dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primaryBackground dark:ring-offset-gray-800"
                        required
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 xl:text-[1vw]"
                >
                    Acepto los{" "}
                    <Link href="/privacidad" className="text-primaryBackground hover:underline dark:text-primaryBackground">
                        términos y condiciones
                    </Link>
                    .
                </label>
            </div>

            <button type="submit" className="w-full bg-primaryBackground text-white py-2 px-4 rounded hover:bg-secondaryBackground transition duration-300 xl:text-[1.2vw]">
                Contactar agente
            </button>

            <div className="text-xs text-gray-10 mt-4 block leading-5 overflow-auto h-[15vw] lg:h-[5vw] xl:text-[1vw] xl:h-[8vw] xl:leading-[1.5vw]">
                <b>Responsable del tratamiento:</b> SM Home&apos;s Servicios Inmobiliarios, SL,
                <b>Finalidad del tratamiento:</b> Gestión y control de los servicios ofrecidos a través de la página Web de Servicios inmobiliarios, Envío de información a traves de newsletter y otros,
                <b>Legitimación:</b> Por consentimiento,
                <b>Destinatarios:</b> No se cederan los datos, salvo para elaborar contabilidad,
                <b>Derechos de las personas interesadas:</b> Acceder, rectificar y suprimir los datos, solicitar la portabilidad de los mismos, oponerse altratamiento y solicitar la limitación de éste,
                <b>Procedencia de los datos: </b> El Propio interesado,
                <b>Información Adicional: </b> Puede consultarse la información adicional y detallada sobre protección de datos{" "}
                <Link href="/privacidad/" target="_blank" className="text-primaryBackground hover:underline dark:text-primaryBackground">
                    Aquí
                </Link>
                .
            </div>
        </form>
    );
};

export default PropertyInterestForm;
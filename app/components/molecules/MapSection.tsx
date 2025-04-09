
export default function MapSection() {
    return (
        <section id="google-maps" className="bg-blackSoft30 py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primaryBackground mb-8 text-[8vw] lg:text-5xl xl:text-[3.5vw] pt-[2vw]">
                Nuestra Ubicación
            </h2>

            <div className="mx-auto bg-blackSoft30 rounded-lg xl:rounded-[1vw] shadow-lg overflow-hidden">
                <div className="p-6 xl:p-[2vw] text-center bg-blackSoft30 border-b border-gray-200">
                    <p className="text-lg sm:text-xl xl:text-[2vw] font-semibold text-primaryBackground">
                        C. Caballero de Rodas, 120, Mod. 4 - 03182 Torrevieja, Alicante, España
                    </p>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.953260518935!2d-0.6762692239702531!3d37.978220071934864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63aa00c21bc5b5%3A0x7d5ae5102cc12b49!2sC.%20Caballero%20de%20Rodas%2C%20120%2C%2003182%20Torrevieja%2C%20Alicante%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2spe!4v1743194292319!5m2!1ses-419!2spe"
                    width="100%"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="xl:h-[40vw] xl:object-cover"
                    title="Google Maps - SMHOMES'S LOCATION"
                ></iframe>
            </div>
        </section>
    );
}
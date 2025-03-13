
export default function MapSection() {
    return (
        <section id="google-maps" className="bg-blackSoft30 py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primaryBackground mb-8 text-[8vw] lg:text-5xl xl:text-[3.5vw] pt-[2vw]">
                Nuestra Ubicación
            </h2>

            <div className="mx-auto bg-blackSoft30 rounded-lg xl:rounded-[1vw] shadow-lg overflow-hidden">
                <div className="p-6 xl:p-[2vw] text-center bg-blackSoft30 border-b border-gray-200">
                    <p className="text-lg sm:text-xl xl:text-[2vw] font-semibold text-primaryBackground">
                        Avda. Habaneras X · Torrevieja (Alicante) 03182
                    </p>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.1259671674628!2d-0.670473994047816!3d37.980330689800184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63aa065c9c8431%3A0x51c4bc53c501925f!2sAv.%20de%20las%20Habaneras%2C%20Torrevieja%2C%20Alicante%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2spe!4v1741389295827!5m2!1ses-419!2spe"
                    width="100%"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps - Casas y Mar"
                    className="xl:h-[40vw] xl:object-cover"
                ></iframe>
            </div>
        </section>
    );
}
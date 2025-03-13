import { marcas } from '@/app/utils/constants';

const StaticMarcasCarrusel: React.FC = () => {
    return (
        <div
            className="testimonial-swiper bg-blackSoft30"
        >
            {marcas.map((marca, index) => (
                <div key={marca.id} className='sm:py-[2vw] py-[5vw]'>
                    <div key={index} className="swiper-slide">
                        <div className="bg-blackSoft30 rounded-lg shadow-md h-44 flex flex-col justify-center items-center p-5 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                            <div className="w-28 h-20 flex items-center justify-center mb-4">
                                <img
                                    src={marca.logoUrl || `/api/placeholder/120/80`}
                                    alt={marca.nombre}
                                    className="max-w-full max-h-full object-contain object-center"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-100 text-center">{marca.nombre}</h3>
                            <p className="text-gray-300 text-sm text-center mt-1">{marca.descripcion}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StaticMarcasCarrusel;



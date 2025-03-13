"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { marcas } from '@/app/utils/constants';

const DynamicMarcasCarrusel: React.FC = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="testimonial-swiper bg-blackSoft30"
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {marcas.map((marca, index) => (
                <SwiperSlide key={marca.id} className='sm:py-[2vw] py-[5vw]'>
                    <div key={index} className="swiper-slide">
                        <div className="bg-blackSoft30 rounded-lg shadow-md h-44 flex flex-col justify-center items-center p-5 xl:p-[6vw] xl:py-[10vw] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                            <div className="w-28 h-20 flex items-center justify-center mb-4 xl:w-[10vw] xl:h-[10vw]">
                                <img
                                    src={marca.logoUrl}
                                    alt={marca.nombre}
                                    className="max-w-full max-h-full object-contain object-center"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-100 text-center xl:text-[2vw]">{marca.nombre}</h3>
                            <p className="text-gray-300 text-sm text-center mt-1 xl:text-[1.5vw] xl:leading-[2vw]">{marca.descripcion}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DynamicMarcasCarrusel;



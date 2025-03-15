"use client";
import React, { JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '@/app/utils/constants';

export const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }).map((_, index) => (
        <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    ));
};

const DynamicTestimonialCarousel: React.FC = () => {
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
            {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="py-6 sm:py-8 md:py-10 lg:py-12">
                    <div className="bg-blackSoftColor rounded-lg shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 m-2 sm:m-3 h-full flex flex-col">
                        <div className="flex items-center mb-3 sm:mb-4">
                            <div className={`${testimonial.bgColor} rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center mr-3 sm:mr-4`}>
                                <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">{testimonial.initials}</span>
                            </div>
                            <div>
                                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-10">{testimonial.name}</h4>
                                <p className="text-sm sm:text-base md:text-lg text-white">{testimonial.position}</p>
                            </div>
                        </div>
                        <div className="flex mb-3 sm:mb-4">
                            {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-white flex-grow text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">{testimonial.content}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DynamicTestimonialCarousel;
"use client";
import React, { useState, useEffect } from 'react';
import { testimonials, videoTestimonials } from '@/app/utils/constants';
import Pagination from '../molecules/Pagination';
import { renderStars } from './DynamicTestimonialsCarrusel';

export default function TestimoniosClientContent() {
    const [currentTestimonialPage, setCurrentTestimonialPage] = useState(1);
    const [currentVideoPage, setCurrentVideoPage] = useState(1);
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);
    const [videosPerPage, setVideosPerPage] = useState(2);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

            if (window.innerWidth < 640) {
                setTestimonialsPerPage(1);
                setVideosPerPage(1);
            } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
                setTestimonialsPerPage(2);
                setVideosPerPage(1);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setTestimonialsPerPage(2);
                setVideosPerPage(2);
            } else {
                setTestimonialsPerPage(3);
                setVideosPerPage(2);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const maxTestimonialPage = Math.ceil(testimonials.length / testimonialsPerPage);
        if (currentTestimonialPage > maxTestimonialPage) {
            setCurrentTestimonialPage(maxTestimonialPage);
        }

        const maxVideoPage = Math.ceil(videoTestimonials.length / videosPerPage);
        if (currentVideoPage > maxVideoPage) {
            setCurrentVideoPage(maxVideoPage);
        }
    }, [testimonialsPerPage, videosPerPage, currentTestimonialPage, currentVideoPage]);

    const indexOfLastTestimonial = currentTestimonialPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(
        indexOfFirstTestimonial,
        indexOfLastTestimonial
    );
    const totalTestimonialPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const indexOfLastVideo = currentVideoPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videoTestimonials.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalVideoPages = Math.ceil(videoTestimonials.length / videosPerPage);

    return (
        <>
            <div className="max-w-7xl xl:max-w-full mx-auto mb-20 xl:mb-32">
                <h2 className="text-3xl font-bold text-primaryBackground mb-8 text-center xl:text-[3vw]">
                    Testimonios de clientes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {currentTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="py-2 md:py-3 lg:py-4 xl:py-[2vw]"
                        >
                            <div className="bg-blackSoftColor rounded-lg shadow-lg p-4 md:p-5 lg:p-6 xl:p-[2vw] h-full flex flex-col">
                                <div className="flex items-center mb-4">
                                    <div className={`${testimonial.bgColor} rounded-full w-10 h-10 sm:w-12 sm:h-12 xl:h-[3vw] xl:w-[3vw] flex items-center justify-center mr-4`}>
                                        <span className="text-white text-lg sm:text-xl font-bold xl:text-[1vw]">{testimonial.initials}</span>
                                    </div>
                                    <div className='space-y-[.5vw]'>
                                        <h4 className="text-base sm:text-lg xl:text-[1.5vw] font-semibold text-gray-10">{testimonial.name}</h4>
                                        <p className="text-sm sm:text-base text-white xl:text-[1vw]">{testimonial.position}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="text-white text-sm sm:text-base flex-grow xl:text-[1vw] xl:leading-[1.5vw]">"{testimonial.content}"</p>
                            </div>
                        </div>))}
                </div>

                {totalTestimonialPages > 1 && (
                    <Pagination
                        currentPage={currentTestimonialPage}
                        totalPages={totalTestimonialPages}
                        setPage={setCurrentTestimonialPage}
                    />
                )}
            </div>

            <div className="max-w-7xl xl:max-w-full mx-auto xl:space-y-[3vw]">
                <h2 className="text-3xl font-bold text-primaryBackground mb-8 text-center xl:text-[3vw]">
                    Testimonios en video
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {currentVideos.map((video) => (
                        <div key={video.id} className="bg-blackSoft30 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-52 sm:h-64 md:h-56 lg:h-64 xl:h-[20vw] object-cover"
                                    loading='lazy'
                                ></iframe>
                            </div>
                            <div className="p-4 md:p-6 xl:p-[2vw] xl:space-y-[1.5vw]">
                                <h3 className="text-base md:text-lg xl:text-[2vw] font-medium text-gray-10">{video.name}</h3>
                                <p className="text-xs md:text-sm xl:text-[1vw] text-primaryBackground">{video.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {totalVideoPages > 1 && (
                    <Pagination
                        currentPage={currentVideoPage}
                        totalPages={totalVideoPages}
                        setPage={setCurrentVideoPage}
                    />
                )}
            </div>
        </>
    );
}
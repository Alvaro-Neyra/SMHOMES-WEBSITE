"use client";
import React, { useState, useEffect } from 'react';
import { testimonials, videoTestimonials } from '@/app/utils/constants';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { renderStars } from './DynamicTestimonialsCarrusel';
import Link from 'next/link';

const TestimoniosPage = () => {
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
    }, [testimonialsPerPage, videosPerPage]);

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

    const generatePaginationButtons = (currentPage: number, totalPages: number, setPage: (page: number) => void) => {
        const maxVisibleButtons = 5;
        let buttons = [];

        buttons.push(
            <button
                key="first"
                onClick={() => setPage(1)}
                className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw] rounded-md ${currentPage === 1
                    ? 'bg-primaryBackground text-white'
                    : 'bg-gray-30 hover:bg-blackSoft30'
                    }`}
            >
                1
            </button>
        );

        if (totalPages > maxVisibleButtons) {
            let startPage, endPage;

            if (currentPage <= 3) {
                startPage = 2;
                endPage = Math.min(startPage + maxVisibleButtons - 3, totalPages - 1);

                for (let i = startPage; i <= endPage; i++) {
                    buttons.push(
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                                ? 'bg-primaryBackground text-white'
                                : 'bg-gray-30 hover:bg-blackSoft30'
                                }`}
                        >
                            {i}
                        </button>
                    );
                }

                if (endPage < totalPages - 1) {
                    buttons.push(
                        <span key="ellipsis-end" className="px-2">
                            <MoreHorizontal className="w-5 h-5 text-gray-100" />
                        </span>
                    );
                }
            } else if (currentPage >= totalPages - 2) {
                if (currentPage > 3) {
                    buttons.push(
                        <span key="ellipsis-start" className="px-2">
                            <MoreHorizontal className="w-5 h-5 text-gray-100" />
                        </span>
                    );
                }

                startPage = Math.max(totalPages - maxVisibleButtons + 2, 2);
                endPage = totalPages - 1;

                for (let i = startPage; i <= endPage; i++) {
                    buttons.push(
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                                ? 'bg-primaryBackground text-white'
                                : 'bg-gray-30 hover:bg-blackSoft30'
                                }`}
                        >
                            {i}
                        </button>
                    );
                }
            } else {
                buttons.push(
                    <span key="ellipsis-start" className="px-2">
                        <MoreHorizontal className="w-5 h-5 text-gray-100" />
                    </span>
                );

                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    buttons.push(
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                                ? 'bg-primaryBackground text-white'
                                : 'bg-gray-30 hover:bg-blackSoft30'
                                }`}
                        >
                            {i}
                        </button>
                    );
                }

                buttons.push(
                    <span key="ellipsis-end" className="px-2">
                        <MoreHorizontal className="w-5 h-5 text-gray-100" />
                    </span>
                );
            }
        } else {
            for (let i = 2; i < totalPages; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                            ? 'bg-primaryBackground text-white'
                            : 'bg-gray-30 hover:bg-blackSoft30'
                            }`}
                    >
                        {i}
                    </button>
                );
            }
        }

        if (totalPages > 1) {
            buttons.push(
                <button
                    key="last"
                    onClick={() => setPage(totalPages)}
                    className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === totalPages
                        ? 'bg-primaryBackground text-white'
                        : 'bg-gray-30 hover:bg-blackSoft30'
                        }`}
                >
                    {totalPages}
                </button>
            );
        }

        return buttons;
    };

    return (
        <div className="bg-blackSoft30 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-center mb-16">
                <h1 className="text-4xl font-extrabold text-primaryBackground sm:text-5xl sm:tracking-tight lg:text-6xl xl:text-[4vw]">
                    Lo que dicen nuestros clientes
                </h1>
                <p className="mt-5 mx-auto text-xl text-gray-100 xl:text-[1.5vw]">
                    Descubre cómo nuestra plataforma ha transformado el trabajo de profesionales y empresas.
                </p>
            </div>

            <div className="max-w-7xl xl:max-w-full mx-auto mb-20">
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
                        </div>
                    ))}
                </div>

                {totalTestimonialPages > 1 && (
                    <div className="flex justify-center mt-8 items-center">
                        <button
                            onClick={() => setCurrentTestimonialPage(Math.max(1, currentTestimonialPage - 1))}
                            disabled={currentTestimonialPage === 1}
                            className="p-2 xl:p-[1vw] rounded-md bg-gray-30 hover:bg-blackSoft30 disabled:opacity-50 disabled:cursor-not-allowed mr-2 xl:mr-[1vw]"
                            aria-label="Página anterior"
                        >
                            <ChevronLeft className="w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]" />
                        </button>

                        <div className="flex space-x-1">
                            {generatePaginationButtons(
                                currentTestimonialPage,
                                totalTestimonialPages,
                                setCurrentTestimonialPage
                            )}
                        </div>

                        <button
                            onClick={() => setCurrentTestimonialPage(Math.min(totalTestimonialPages, currentTestimonialPage + 1))}
                            disabled={currentTestimonialPage === totalTestimonialPages}
                            className="p-2 xl:p-[1vw] rounded-md bg-gray-30 hover:bg-blackSoft30 disabled:opacity-50 disabled:cursor-not-allowed ml-2 xl:ml-[1vw]"
                            aria-label="Página siguiente"
                        >
                            <ChevronRight className="w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]" />
                        </button>
                    </div>
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
                    <div className="flex justify-center mt-8 items-center">
                        <button
                            onClick={() => setCurrentVideoPage(Math.max(1, currentVideoPage - 1))}
                            disabled={currentVideoPage === 1}
                            className="p-2 xl:p-[1vw]  rounded-md bg-gray-30 hover:bg-blackSoft30 disabled:opacity-50 disabled:cursor-not-allowed mr-2"
                            aria-label="Página anterior"
                        >
                            <ChevronLeft className="w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]" />
                        </button>

                        <div className="flex space-x-1">
                            {generatePaginationButtons(
                                currentVideoPage,
                                totalVideoPages,
                                setCurrentVideoPage
                            )}
                        </div>

                        <button
                            onClick={() => setCurrentVideoPage(Math.min(totalVideoPages, currentVideoPage + 1))}
                            disabled={currentVideoPage === totalVideoPages}
                            className="p-2 xl:p-[1vw]  rounded-md bg-gray-30 hover:bg-blackSoft30 disabled:opacity-50 disabled:cursor-not-allowed ml-2"
                            aria-label="Página siguiente"
                        >
                            <ChevronRight className="w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]" />
                        </button>
                    </div>
                )}
            </div>

            <div className="max-w-4xl xl:max-w-[50vw] mx-auto mt-20 text-center">
                <div className="bg-primaryBackground rounded-2xl shadow-xl px-4 sm:px-6 py-8 sm:py-12 xl:flex xl:flex-col xl:items-center xl:space-y-[2vw]">
                    <h2 className="text-2xl sm:text-3xl xl:text-[2.5vw] font-bold text-white mb-4">
                        ¿Listo para unirte a ellos?
                    </h2>
                    <p className="text-gray-100 text-base sm:text-lg xl:text-[1.5vw] mb-6 sm:mb-8">
                        Descubre cómo nuestra plataforma puede transformar tu negocio.
                    </p>
                    <Link href="/contacto" className="bg-white text-primaryBackground font-semibold px-6 sm:px-8 py-2 sm:py-3 xl:text-[1.5vw] xl:px-[2vw] xl:py-[1vw] xl:rounded-[1vw] rounded-lg shadow hover:bg-gray-100 transition-colors">
                        Contáctanos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TestimoniosPage;
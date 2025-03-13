import { testimonials } from "@/app/utils/constants";
import { JSX } from "react";

const StaticTestimonialCarousel: React.FC = () => {
    const renderStars = (rating: number): JSX.Element[] => {
        return Array.from({ length: 5 }).map((_, index) => (
            <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 xl:h-[2vw] xl:w-[2vw] ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div
            className="testimonial-swiper bg-blackSoft30"
        >
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className='sm:py-[2vw] py-[5vw]'>
                    <div className="bg-blackSoftColor rounded-lg shadow-lg p-6 m-3 h-full flex flex-col xl:p-[2vw] xl:m-[1vw]">
                        <div className="flex items-center mb-4">
                            <div className={`${testimonial.bgColor} rounded-full w-12 h-12 flex items-center justify-center mr-4 xl:w-[5vw] xl:h-[5vw]`}>
                                <span className="text-white text-xl font-bold xl:text-[1.5vw]">{testimonial.initials}</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-10 xl:text-[2vw]">{testimonial.name}</h4>
                                <p className="text-white xl:text-[2vw]">{testimonial.position}</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-white flex-grow xl:text-[2vw]">{testimonial.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StaticTestimonialCarousel;
import { ImagesProps } from '@/app/utils/interfaces';

const Images = ({ images }: ImagesProps) => {
    return (
        <div className="relative w-full max-w-4xl aspect-square xl:max-w-6xl xl:aspect-[4/3]">
            <img
                src={images[0].src}
                alt={images[0].alt}
                className="absolute w-1/2 rounded top-[15%] right-[10%] z-0 xl:w-2/5 xl:top-[20%] xl:right-[15%] xl:shadow-lg xl:rounded-lg"
                loading="lazy"
            />

            <img
                src={images[1].src}
                alt={images[1].alt}
                className="absolute w-3/5 rounded bottom-[10%] left-[10%] z-10 xl:w-1/2 xl:bottom-[15%] xl:left-[12%] xl:shadow-lg xl:rounded-lg"
                loading="lazy"
            />

            <img
                src={images[2].src}
                alt={images[2].alt}
                className="absolute w-1/2 rounded left-[6%] top-[10%] -z-10 xl:w-2/5 xl:left-[8%] xl:top-[5%] xl:shadow-lg xl:rounded-lg"
                loading="lazy"
            />

            <img
                src={images[3].src}
                alt={images[3].alt}
                className="absolute w-2/5 rounded right-[3%] bottom-[20%] z-10 xl:w-1/3 xl:right-[5%] xl:bottom-[25%] xl:shadow-lg xl:rounded-lg"
                loading="lazy"
            />
        </div>
    );
};

export default Images;
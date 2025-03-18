import { ReactNode } from "react";

export interface ButtonProps {
    type?: "button" | "submit" | "link";
    title: string;
    icon?: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
    full?: boolean;
    blobColor?: string;
    animationDirection?: "right" | "left";
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}


export interface LinkNavProps {
    readonly href: string;
    readonly title: string;
    readonly children?: React.ReactNode;
    readonly icon?: string;
    readonly variant?: string;
    readonly spanVariant?: string;
    readonly full?: boolean;
    onClick?: () => void;
    readonly active?: boolean;
}

export interface HeadingProps {
    readonly level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    readonly children: React.ReactNode;
    readonly font?: "cormorant-garamond" | "merriweather";
}

export interface NavbarProps {
    readonly active: boolean;
    readonly position: string;
}

export interface SlidesProps {
    readonly imageUrl: string;
    readonly titleSmall: string;
    readonly titleLarge: string;
    readonly subtitle: string;
    readonly buttonText: string;
    readonly buttonLink: string;
}

export interface VideoSectionProps {
    videoSrc: string;
    fallbackImage: string;
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonLink?: string;
}

export interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    imageSrc: string;
    altText: string;
    children?: React.ReactNode;
    imagePosition?: "left" | "right";
}

export interface TestimonialsBannerProps {
    title1: string;
    subtitle1: string;
    description1: string;
    buttonLabel1: string;
    buttonLink1: string;

    title2: string;
    subtitle2: string;
    description2: string;
    buttonLabel2Mobile: string;
    buttonLabel2Desktop: string;
    buttonLink2: string;
}

export interface Testimonial {
    id: number;
    name: string;
    position: string;
    avatar?: string;
    initials: string;
    rating: number;
    content: string;
    bgColor: string;
}

export interface HeroSectionButtonsProps {
    title: string;
    subtitle?: string;
    description?: string;
    imgSrc: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonLink?: string;
    stats: { icon: string; value: string; label: string }[];
    children?: React.ReactNode;
}

export interface FormProps {
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    options: string[];
    sellSection?: boolean;
}

export interface HeroFormProps {
    id?: string;
    heading: string;
    subHeading: string;
    strongSubHeading: string;
    children?: React.ReactNode;
    otherChildren?: React.ReactNode;
    sellSection?: boolean;
    cols2?: boolean;
}

export interface AccordionProps {
    items: {
        title: string;
        content: string;
    }[];
}

export interface HeroImageProps {
    src: string;
    heading: string;
    subHeading: string;
    linkText: string;
    linkHref: string;
}

export interface HeroVideoProps {
    src: string;
    fallbackImage: string;
    heading: string;
    subHeading: string;
    linkText: string;
    linkHref: string;
}

interface ImageProps {
    src: string;
    alt: string;
}

export interface ImagesProps {
    images: ImageProps[];
}

export interface StaticHeroSectionImagesProps {
    title?: string;
    subtitle?: string;
    images: ImageProps[];
    children?: React.ReactNode;
    imagePosition?: "left" | "right";
}

export interface StatItemProps {
    icon: React.ReactNode;
    value: number;
    title: string;
    duration?: number;
}

export interface StatsProps {
    stats: StatItemProps[];
}

export interface ImageSectionProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonLink?: string;
}

export interface VideoTestimonial {
    id: number;
    name: string;
    position: string;
    youtubeId: string;
}

export interface StickyFormSectionProps {
    id?: string;
    children?: React.ReactNode;
    sellSection?: boolean;
    cols2?: boolean;
}

export interface PropertyImage {
    id: string;
    url: string;
    alt: string;
}

interface Coordinates {
    lat: number;
    lng: number;
}

export interface PropertyMapProps {
    coordinates?: Coordinates;
    address?: string;
}

export interface Property {
    id: string;
    type: "casa" | "departamento" | "terreno" | "local" | "oficina";
    address: string;
    constructionArea: number;
    landArea?: number;
    bedrooms: number;
    bathrooms: number;
    hasPool: boolean;
    price: number;
    currency: "USD" | "MXN" | "EUR";
    images: PropertyImage[];
    description?: string;
    features?: string[];
    location?: string;
    city?: string;
    distanceToBeach?: number;
    elevator?: boolean;
    usableArea?: number;
    coordinates?: Coordinates;
}

export interface PropertyPaginationProps {
    properties: Property[];
    itemsPerPage?: number;
}

interface Breadcrumb {
    label: string;
    href?: string;
}

export interface BreadcrumbsProps {
    items: Breadcrumb[];
}

export interface PropertyImageCarouselProps {
    property: Property;
}

export interface PropertyInterestFormProps {
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    propertyId: string;
    propertyAddress: string;
}

export interface PageProps {
    params: Promise<{ propertyId: string }>;
}
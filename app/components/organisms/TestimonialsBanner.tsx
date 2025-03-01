import { TestimonialsBannerProps } from "@/app/utils/interfaces";


export default function TestimonialsBanner({
    title1,
    subtitle1,
    description1,
    buttonLabel1,
    buttonLink1,

    title2,
    subtitle2,
    description2,
    buttonLabel2Mobile,
    buttonLabel2Desktop,
    buttonLink2,
}: TestimonialsBannerProps) {
    return (
        <div className="banners" id="banners-section">
            <div className="row g-0">
                <div className="col-12 col-lg-6">
                    <div className="super-banner-home reviews">
                        <div className="sb-label">
                            <h6>{title1}</h6>
                            <h4>{subtitle1}</h4>
                            <h5>{description1}</h5>
                            <a href={buttonLink1} className="btn btn-primary w-100">
                                {buttonLabel1}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="super-banner-home reviews-google">
                        <div className="sb-label">
                            <h6>{title2}</h6>
                            <h4>{subtitle2}</h4>
                            <h5>{description2}</h5>
                            <a
                                href={buttonLink2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary w-100 d-block d-lg-none"
                            >
                                {buttonLabel2Mobile}
                            </a>
                            <a
                                href={buttonLink2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary w-100 d-none d-lg-block"
                            >
                                {buttonLabel2Desktop}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
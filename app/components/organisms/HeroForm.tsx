import { formFields } from "@/app/utils/constants";
import FormComponent from "../molecules/FormComponent";
import { HeroFormProps } from "@/app/utils/interfaces";

export default function HeroForm({ id, heading, subHeading, strongSubHeading, children, otherChildren, sellSection, cols2 = false }: Readonly<HeroFormProps>) {
    const renderSubHeading = () => {
        if (!strongSubHeading) {
            return <p className="text-lg lg:text-2xl text-gray-300 text-center mb-8">{subHeading}</p>;
        }

        const parts = subHeading.split(strongSubHeading);

        return (
            <p className="text-lg lg:text-[2.5vw] text-gray-300 text-center mb-8">
                {parts[0]}
                <span className="font-bold text-primaryColor">{strongSubHeading}</span>
                {parts[1]}
            </p>
        );
    };

    return (
        <section className="py-[5vw] lg:py-[4vw] bg-blackSoftColor" id={id}>
            <div className="px-4 space-y-[2vw]">
                <h2 className="text-xl lg:text-[3vw] lg:leading-[3vw] font-bold text-white text-center">{heading}</h2>

                {renderSubHeading()}

                <div className={`grid grid-cols-1 ${cols2 ? "lg:grid-cols-2" : "lg:grid-cols-[4fr_2fr]"} gap-8 lg:gap-4`}>
                    <div className="space-y-8">
                        {children}
                    </div>

                    <div className="bg-blackSoft30 rounded-lg p-6 lg:p-8 flex flex-col justify-start space-y-8">
                        <FormComponent
                            namePlaceholder={formFields.namePlaceholder}
                            phonePlaceholder={formFields.phonePlaceholder}
                            emailPlaceholder={formFields.emailPlaceholder}
                            messagePlaceholder={formFields.messagePlaceholder}
                            options={formFields.options}
                            sellSection={sellSection}
                        />
                        <div className="w-[100%] h-[0.1vw] bg-primaryBackground opacity-85"></div>
                        {otherChildren}
                    </div>
                </div>
            </div>
        </section>
    );
}
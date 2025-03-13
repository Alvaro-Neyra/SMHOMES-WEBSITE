import { formFields } from "@/app/utils/constants";
import FormComponent from "../molecules/FormComponent";
import { StickyFormSectionProps } from "@/app/utils/interfaces";

export default function StickyForm({ id, children, sellSection = false }: Readonly<StickyFormSectionProps>) {
    return (
        <section className="py-[5vw] lg:py-[4vw] bg-blackSoftColor" id={id}>
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8 lg:gap-4 min-h-[80vh] lg:min-h-[100vh] px-[2vw]">
                <div className="space-y-[2vw]">
                    {children}
                </div>

                <div className="relative">
                    <div className="sticky top-[1vh]">
                        <div className="bg-blackSoft30 rounded-lg p-6 lg:p-8">
                            <FormComponent
                                namePlaceholder={formFields.namePlaceholder}
                                phonePlaceholder={formFields.phonePlaceholder}
                                emailPlaceholder={formFields.emailPlaceholder}
                                messagePlaceholder={formFields.messagePlaceholder}
                                options={formFields.options}
                                sellSection={sellSection}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

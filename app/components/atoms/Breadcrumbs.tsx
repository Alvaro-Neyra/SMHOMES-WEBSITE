import { BreadcrumbsProps } from "@/app/utils/interfaces";
import Link from "next/link";
import React from "react";


const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <div className="mb-6 flex items-center text-gray-300">
            {items.map((item, index) => (
                <React.Fragment key={index + item.label}>
                    {item.href ? (
                        <Link href={item.href} className="hover:text-primaryColor transition duration-300">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-primaryBackground">{item.label}</span>
                    )}
                    {index < items.length - 1 && <span className="mx-2">/</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
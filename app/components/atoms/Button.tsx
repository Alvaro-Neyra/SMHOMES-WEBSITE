import { ButtonProps } from "@/app/utils/interfaces";
import Link from "next/link";
import React from "react";


const Button = ({
    type,
    title,
    icon,
    variant,
    full,
    blobColor = "rgba(255, 255, 255, 0.5)",
    animationDirection = "right",
    href = "/",
}: ButtonProps) => {
    return (
        <Link href={href}
            className={`relative overflow-hidden flex items-center justify-center gap-3 rounded-full border sm:text-lg lg:text-xl xl:text-[1.5vw] xl:gap-[2vw] xl:p-[2vw] ${variant} ${full && 'w-full'} transition-all duration-300 group active:scale-95`}
            type={type}
        >
            <span
                className="absolute inset-0 w-full h-full bg-primaryColor opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle, ${blobColor} 10%, transparent 100%)`,
                }}
            ></span>

            {icon && (
                <span
                    className={`transition-transform duration-300 xl:text-[3vw] ${
                        animationDirection === "right"
                            ? "animate-moveRight"
                            : animationDirection === "left"
                            ? "animate-moveLeft"
                            : animationDirection === "up"
                            ? "animate-moveUp"
                            : "animate-moveDown"
                    }`}
                >
                    {icon}
                </span>
            )}
            <label className="bold-16 whitespace-nowrap cursor-pointer z-10 sm:text-lg lg:text-xl xl:text-[3vw]">{title}</label>
        </Link>
    );
};

export default Button;
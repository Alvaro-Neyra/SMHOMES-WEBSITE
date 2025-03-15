import { ButtonProps } from "@/app/utils/interfaces";
import Link from "next/link";

const Button = ({
    type = "button",
    title,
    icon,
    variant = "primary",
    full = false,
    blobColor = "rgba(255, 255, 255, 0.5)",
    animationDirection = "right",
    href = "/",
    onClick,
    disabled = false,
    className = "",
}: ButtonProps) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "primary":
                return "bg-primaryBackground text-white hover:bg-secondaryBackground";
            case "secondary":
                return "bg-secondaryBackground text-white hover:bg-primaryBackground";
            case "outline":
                return "bg-transparent border border-primaryBackground text-primaryBackground hover:bg-primaryBackground hover:text-white";
            case "ghost":
                return "bg-transparent text-primaryBackground hover:bg-gray-100 dark:hover:bg-blackSoft30";
            case "dark":
                return "bg-blackSoft30 text-white hover:bg-gray-800";
            default:
                return "bg-primaryBackground text-white hover:bg-secondaryBackground";
        }
    };

    const baseClasses = `
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-lg
    font-medium
    transition-all
    duration-300
    overflow-hidden
    ${full ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${getVariantClasses()}
    ${className}
`;

    const sizeClasses = "text-sm sm:text-base 2xl:text-3xl 2lx:px-6 2xl:py-8 px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3";

    const renderBlob = () => {
        if (variant === "ghost" || variant === "outline") return null;

        const blobClasses = `
        absolute
        w-24
        h-24
        rounded-full
        blur-xl
        opacity-70
        transition-all
        duration-500
        ${animationDirection === "right" ? "-left-10" : "-right-10"}
        ${animationDirection === "right" ? "group-hover:left-32" : "group-hover:right-32"}
        -z-10
    `;

        return <div className={blobClasses} style={{ background: blobColor }}></div>;
    };

    const renderButton = () => {
        if (type === "link") {
            return (
                <Link href={href} className={`group ${baseClasses} ${sizeClasses}`}>
                    {renderBlob()}
                    {icon && (
                        <span className="transition-transform duration-300 group-hover:scale-110">
                            {icon}
                        </span>
                    )}
                    <span>{title}</span>
                </Link>
            );
        }

        return (
            <button
                type={type === "submit" ? "submit" : "button"}
                onClick={onClick}
                disabled={disabled}
                className={`group ${baseClasses} ${sizeClasses}`}
            >
                {renderBlob()}
                {icon && (
                    <span className="transition-transform duration-300 group-hover:scale-110">
                        {icon}
                    </span>
                )}
                <span>{title}</span>
            </button>
        );
    };

    return renderButton();
};

export default Button;
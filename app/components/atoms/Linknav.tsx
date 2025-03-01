import { LinkNavProps } from "@/app/utils/interfaces";
import Link from "next/link";


const LinkNav = ({ href, title, children, icon, variant, spanVariant, full, active }: LinkNavProps) => {
    return (
        <Link
            className={`flex items-center gap-2 ${full && 'w-full'} transition-all duration-300 ease-in-out`}
            href={href}
            title={title}
        >
            {icon && <img src={icon} alt={`${title} icon`} width={20} height={20} />}
            <span className={`font-merriweather text-[12px] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] ${spanVariant} ${active && 'active'} cursor-pointer`}>
                {children || title}
            </span>
        </Link>
    );
};

export default LinkNav;
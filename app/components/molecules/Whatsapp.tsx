import Link from "next/link";
import WhatsAppIcon from "../atoms/WhatsappIcon";

export default function Whatsapp() {
    return (
        <Link href="https://wa.me/+34691344647" target="_blank"
            className="flex justify-center items-center p-4 bg-blackSoft30 rounded-full shadow-lg hover:bg-gray-50 transition duration-300"
        >
            <WhatsAppIcon className="w-10 lg:w-12"/>
        </Link>
    );
}
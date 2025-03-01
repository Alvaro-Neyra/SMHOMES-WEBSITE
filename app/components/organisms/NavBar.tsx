import { Suspense } from "react";
import DynamicNavbar from "../molecules/DynamicNavbar";
import StaticNavbar from "../molecules/StaticNavbar";
import { NavbarProps } from "@/app/utils/interfaces";

export default function NavBar({active, position}: Readonly<NavbarProps>) {
    return (
        <Suspense fallback={<StaticNavbar active={active} position={position}/>}>
            <DynamicNavbar/>
        </Suspense>
    );
}

import { Suspense } from "react";
import DynamicFooter from "../molecules/DynamicFooter";
import StaticFooter from "../molecules/StaticFooter";

export default function Footer() {
    return (
        <Suspense fallback={<StaticFooter />}>
            <DynamicFooter />
        </Suspense>
    );
}